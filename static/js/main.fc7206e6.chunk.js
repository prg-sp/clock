(this.webpackJsonpuzd_5_time_ob=this.webpackJsonpuzd_5_time_ob||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(8),r=s.n(a),c=s(7),o=s(2),l=s(3),d=s(5),h=s(4),u=(s(13),s(0)),m=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:this.props.id,children:[Object(u.jsxs)("p",{children:[" ",this.props.name," "]}),Object(u.jsx)("div",{className:"my",id:this.props.inc,onClick:this.props.handleIncrease,children:"\u25b2"}),Object(u.jsx)("div",{className:"my",id:this.props.id2,children:this.props.count}),Object(u.jsx)("div",{className:"my",id:this.props.dec,onClick:this.props.handleDecrease,children:"\u25bc"})]})})}}]),s}(i.a.Component),j=document.getElementsByTagName("audio")[0],b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={},n.handlePlayPause=function(){n.state.isPlaying?(n.setState({isPlaying:!1}),clearInterval(n.inter)):(n.setState({isPlaying:!0}),n.inter=setInterval((function(){var e=n.state,t=e.timer,s=e.currentTimer,i=e.sessionCount,a=e.breakCount;0===t?(j.play(),n.setState({currentTimer:"Session"===s?"Break":"Session",timer:"Session"===s?60*a:60*i})):n.setState({timer:t-1})}),1e3))},n.handleRefresh=function(){n.setState({breakCount:5,sessionCount:25,timer:1500,isPlaying:!1,currentTimer:"Session"}),clearInterval(n.inter),j.pause(),j.currentTime=0,console.log("refresed")},n.clocky=function(){var e=n.state.timer,t=Math.floor(e/60),s=e%60;return s=s<10?"0"+s:s,"".concat(t=t<10?"0"+t:t,":").concat(s)},n.handleBreakeDecrease=function(){var e=n.state,t=e.breakCount,s=e.isPlaying,i=e.currentTimer;s||(n.setState({breakCount:t<=1?1:t-1}),s||"Break"!==i||n.setState({timer:t<=1?60:60*(t-1)}))},n.handleBreakeIncrease=function(){var e=n.state,t=e.breakCount,s=e.isPlaying,i=e.currentTimer;s||(n.setState({breakCount:t>=60?60:t+1}),console.log(i),s||"Break"!==i||n.setState({timer:t>=60?60*t:60*(t+1)}))},n.handleSessionIncrease=function(){var e=n.state,t=e.sessionCount,s=e.isPlaying,i=e.currentTimer;s||(n.setState({sessionCount:t>=60?60:t+1}),s||"Session"!==i||n.setState({timer:t>=60?60*t:60*(t+1)}))},n.handleSessionDecrease=function(){var e=n.state,t=e.sessionCount,s=e.isPlaying,i=e.currentTimer;s||(n.setState({sessionCount:t<=1?1:t-1}),s||"Session"!==i||n.setState({timer:t<=1?60:60*(t-1)}))},n.state={breakCount:5,sessionCount:25,timer:1500,currentTimer:"Session",isPlaying:!1},n.inter=void 0,n}return Object(l.a)(s,[{key:"componentWillUnmount",value:function(){clearInterval(this.inter)}},{key:"render",value:function(){var e=this.state,t=e.isPlaying,s=e.timer,n=e.breakCount,i=e.sessionCount,a={color:"red"},r={color:"white"},o={id:"break-label",id2:"break-length",name:"Break Length",inc:"break-increment",dec:"break-decrement",count:n,handleDecrease:this.handleBreakeDecrease,handleIncrease:this.handleBreakeIncrease},l={id:"session-label",id2:"session-length",name:"Session Length",inc:"session-increment",dec:"session-decrement",count:i,handleDecrease:this.handleSessionDecrease,handleIncrease:this.handleSessionIncrease};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"apsas",children:[Object(u.jsx)("h1",{children:"Super cool clock"}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{className:"lengths",children:[Object(u.jsx)(m,Object(c.a)({},o)),Object(u.jsx)(m,Object(c.a)({},l))]}),Object(u.jsxs)("div",{className:"clock",children:[Object(u.jsx)("div",{id:"timer-label",style:s<60?a:r,children:this.state.currentTimer}),Object(u.jsx)("div",{id:"time-left",style:s<60?a:r,children:this.clocky()})]}),Object(u.jsxs)("div",{className:"panel",children:[Object(u.jsx)("div",{id:"start_stop",onClick:this.handlePlayPause,children:"P".concat(t?"ause":"lay")}),Object(u.jsx)("div",{id:"reset",onClick:this.handleRefresh,children:"Refresh"})]})]})]})})}}]),s}(i.a.Component);r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fc7206e6.chunk.js.map