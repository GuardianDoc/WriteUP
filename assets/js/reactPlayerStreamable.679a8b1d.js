(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[7627],{9643:(e,t,r)=>{var s,a=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))p.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(s=l(t,a))||s.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(s=d,u(o({},"__esModule",{value:!0}),s));var c=((e,t,r)=>(r=null!=e?a(n(e)):{},u(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(96540)),y=r(75635),m=r(50327);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",y.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,y.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t})),this.player.on("buffered",(({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)})),this.props.muted&&this.player.mute())}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(m.MATCH_URL_STREAMABLE)[1];return c.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}h(f,"displayName","Streamable"),h(f,"canPlay",m.canPlay.streamable)}}]);