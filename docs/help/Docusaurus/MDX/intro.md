---
sidebar_position: 1
tags: [MDX]
title: MDX 
description: MDX 介绍
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ProgressBar from '@site/src/components/ProgressBar/ProgressBar';

# MDX
## 修正使用
### 自定义进度条
> 使用 GPT 帮助自己实现了 MDX 进度条


<Tabs>
    <TabItem value="eg" label="示例" default>
        <ProgressBar completed={60} color="blue" />
    </TabItem>
  <TabItem value="ProgressBar.js" label="ProgressBar.js">
    ```js title="src/components/ProgressBar/ProgressBar.js"
    import React, { useEffect, useState } from 'react';
    import './ProgressBar.css';

    const ProgressBar = ({ completed, color = 'green' }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        let animationFrame;
        const animate = () => {
        setWidth((prevWidth) => {
            if (prevWidth < completed) {
            animationFrame = requestAnimationFrame(animate);
            return prevWidth + 1; // 每次增加 1%
            } else {
            cancelAnimationFrame(animationFrame);
            return completed;
            }
        });
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [completed]);

    const containerStyles = {
        height: '20px',
        width: '300px',
        backgroundColor: '#e0e0df',
        borderRadius: '50px',
        overflow: 'hidden', // 确保内容不溢出
        margin: '50px 0'
    };

    const fillerStyles = {
        height: '100%',
        width: `${width}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.2s ease-in-out' // 添加平滑过渡效果
    };

    const labelStyles = {
        padding: '5px',
        color: 'white',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyles}>
        <div style={fillerStyles}>
            <span style={labelStyles}>{`${width}%`}</span>
        </div>
        </div>
    );
    };

    export default ProgressBar;
    ```
    </TabItem>
    <TabItem value="ProgressBar.css" label="ProgressBar.css">
    ```CSS title="src/components/ProgressBar/ProgressBar.css"
    .progress-bar {
        height: 20px;
        width: 300px; /* 限制进度条长度为 100 px */
        background-color: #e0e0df;
        border-radius: 50px;
        overflow: hidden; /* 确保内容不溢出 */
        margin: 50px 0;
    }
    
    .progress-bar__filler {
        height: 100%;
        border-radius: inherit;
        text-align: right;
        transition: width 0.2s ease-in-out; /* 添加平滑过渡效果 */
    }
    
    .progress-bar__label {
        padding: 5px;
        color: white;
        font-weight: bold;
    }  
    ```
    </TabItem>
</Tabs>
## 参考链接
- [让 Markdown 步入组件时代](https://www.mdxjs.cn/)
- [MDx 主题文档](https://doc.flyhigher.top/mdx/zh-CN/)