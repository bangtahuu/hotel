(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{153:function(e,a,t){e.exports=t(282)},158:function(e,a,t){},282:function(e,a,t){"use strict";t.r(a);var l=t(60),n=t(61),o=t(65),c=t(62),i=t(66),r=t(0),m=t.n(r),s=t(26),u=t.n(s),d=(t(158),t(42)),E=t(293),g=t(291),f=t(128),h=t(294),v=t(292),p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={isLoaded:!1,room:{Name:"",Company:"",Phone:"",Product:"",Company_Address:"",RangeIncome:"",isICMCenter:""},rooms:[]},t.getListRoom=t.getListRoom.bind(Object(d.a)(t)),t.setListRoom=t.setListRoom.bind(Object(d.a)(t)),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"getListRoom",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listRooms").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,rooms:a}),console.log(a[0])}),(function(a){e.setState({isLoaded:!0})}))}},{key:"setListRoom",value:function(){fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec",{method:"POST",body:"Name=1&Phone=2&Company=3&Company_Address=4&isICMCenter=5&RangeIncome=6&Product=7",headers:{"Content-type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e.json())})).then((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(E.a,null,m.a.createElement(g.a,null,m.a.createElement(f.a,null,m.a.createElement(E.a.Group,{controlId:"formBasicEmail"},m.a.createElement(E.a.Label,null,"Email address"))),m.a.createElement(f.a,null,m.a.createElement(E.a.Group,{controlId:"formBasicPassword"},m.a.createElement(v.a,{placeholder:"Select Friend",fluid:!0,selection:!0,options:[{key:"Jenny Hess",text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{key:"Elliot Fu",text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{key:"Stevie Feliciano",text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}}]})))),m.a.createElement(g.a,null,m.a.createElement(f.a,null,m.a.createElement(E.a.Control,{type:"email",placeholder:"Enter email"})),m.a.createElement(f.a,null,m.a.createElement(E.a.Control,{type:"password",placeholder:"Password"}))),m.a.createElement(g.a,null,m.a.createElement(f.a,null,m.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit")),m.a.createElement(f.a,null))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101")))),m.a.createElement("div",{className:"col-3 col-12-mobile"},m.a.createElement("article",{className:"item"},m.a.createElement("div",{className:"image fitfull"},m.a.createElement("a",{className:"image fit"},m.a.createElement("img",{src:"images/hotelico.jpeg",alt:"Hotel"}))),m.a.createElement("header",null,m.a.createElement("h3",null,"Room 101"))))))}}]),a}(m.a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(280),t(281);var y=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement(p,null)}}]),a}(m.a.Component);u.a.render(m.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hotel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/hotel","/service-worker.js");N?(!function(e,a){fetch(e).then((function(t){var l=t.headers.get("content-type");404===t.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(a,e)}))}}()}},[[153,1,2]]]);
//# sourceMappingURL=main.e8857653.chunk.js.map