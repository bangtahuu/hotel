(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{170:function(e,t,n){e.exports=n(299)},175:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var o=n(67),a=n(68),r=n(75),c=n(69),i=n(74),l=n(0),s=n.n(l),u=n(29),m=n.n(u),d=(n(175),n(49)),h=n(309),f=n(311),p=n(159),g=n(300),v=n(308),b=[{key:"m",text:"Male",value:"male"},{key:"f",text:"Female",value:"female"},{key:"o",text:"Other",value:"other"}],y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={isLoaded:!1,room:{Name:"",Company:"",Phone:"",Product:"",Company_Address:"",RangeIncome:"",isICMCenter:""},rooms:[]},n.getListRoom=n.getListRoom.bind(Object(d.a)(n)),n.setListRoom=n.setListRoom.bind(Object(d.a)(n)),n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"getListRoom",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listRooms").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,rooms:t}),console.log(t[0])}),(function(t){e.setState({isLoaded:!0})}))}},{key:"setListRoom",value:function(){fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec",{method:"POST",body:"Name=1&Phone=2&Company=3&Company_Address=4&isICMCenter=5&RangeIncome=6&Product=7",headers:{"Content-type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e.json())})).then((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement(v.a,{fluid:!0,icon:"search",action:"Search",placeholder:"Search..."}),s.a.createElement("br",null),s.a.createElement(h.a.Group,{widths:"equal"},s.a.createElement(h.a.Select,{fluid:!0,label:"RoomID",options:b,placeholder:"Gender"}),s.a.createElement(h.a.Select,{fluid:!0,label:"Status",options:b,placeholder:"Gender"}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(f.a.Group,null,s.a.createElement(f.a,null,s.a.createElement(f.a.Content,null,s.a.createElement(p.a,{floated:"right",size:"mini",src:"/images/hotelico.jpeg"}),s.a.createElement(f.a.Header,null,"Room 101"),s.a.createElement(f.a.Meta,null,"Tang 1"),s.a.createElement(f.a.Description,null,"Steve wants to add you to the group ",s.a.createElement("strong",null,"best friends"))),s.a.createElement(f.a.Content,{extra:!0},s.a.createElement("div",{className:"ui one buttons"},s.a.createElement(g.a,{basic:!0,color:"green"},"CheckIn"))))))}}]),t}(s.a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(297),n(298);var j=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement(y,null)}}]),t}(s.a.Component);m.a.render(s.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hotel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hotel","/service-worker.js");w?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[170,1,2]]]);
//# sourceMappingURL=main.cff1614a.chunk.js.map