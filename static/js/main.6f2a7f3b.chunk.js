(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{272:function(e,t,n){e.exports=n(483)},277:function(e,t,n){},483:function(e,t,n){"use strict";n.r(t);var o=n(27),a=n(28),i=n(32),r=n(29),l=n(31),s=n(0),c=n.n(s),u=n(20),h=n.n(u),m=(n(277),n(38)),d=n(494),p=n(262),f=n(492),v=n(498),g=n(493),y=n(495),E=n(500),S=n(484),b=n(153),C=n.n(b),k=n(239),O=n.n(k),I=n(240),L=n.n(I),w=(n(329),n(330),n(497)),j=n(261);function T(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleAdd=function(){return n.setState((function(e){return{items:n.props.listoptionIds.slice(0,e.items.length+1)}}))},n.handleRemove=function(){return n.setState((function(e){return{items:e.items.slice(0,-1)}}))},n.state={items:n.props.listoptionIds.slice(0,n.props.optionListSelected.length),option:{description:"",option_id:1,price:0,quantity:1},listoptionIds:[],optionListSelected:[]},["handleAdd","handleRemove"].forEach((function(e){return n[e]=n[e].bind(Object(m.a)(n))})),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.optionListSelected,t=[];e.map((function(e){t.push(e.option_id)}));var n=t.concat(this.props.listoptionIds),o=n.filter((function(e,t){return n.indexOf(e)===t}));this.setState({items:o.slice(0,this.props.optionListSelected.length)});var a={},i=[];this.props.listoption.map((function(e){(a={}).key=e.optionId,a.text=e.description,a.value=e.optionId,i.push(a)})),this.setState({listoptionIds:i}),this.setState({optionListSelected:this.props.optionListSelected})}},{key:"render",value:function(){var e=this,t=this.state.items,n=(this.props.listoptionIds,0);return c.a.createElement("div",null,c.a.createElement(S.a.Group,null,c.a.createElement(S.a,{disabled:0===t.length,icon:"minus square",onClick:this.handleRemove}),c.a.createElement(S.a,{disabled:t.length===this.props.listoptionIds.length,icon:"plus square",onClick:this.handleAdd})),c.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,style:{width:"100%"}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map((function(t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.state.optionListSelected&&e.state.optionListSelected[n]?c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("b",null,"Lo\u1ea1i SP:")),c.a.createElement("br",null),c.a.createElement(w.a,{key:t,onChange:e.handleChange,options:e.state.listoptionIds,placeholder:"Choose an option",value:e.state.optionListSelected[n].option_id,selection:!0}),c.a.createElement("hr",null),c.a.createElement("label",null,c.a.createElement("b",null,"S\u1ed1 l\u01b0\u1ee3ng:")),c.a.createElement("br",null),c.a.createElement(f.a,{type:"number",value:e.state.optionListSelected[n].quantity}),c.a.createElement("hr",null),c.a.createElement("p",null,"S\u1ed1 ti\u1ec1n/1 sp: ",c.a.createElement("b",null,T(e.state.optionListSelected[n].price)," VND")),c.a.createElement("div",{hidden:!0},n+=1),c.a.createElement("hr",null)):c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("b",null,"Lo\u1ea1i SP:")),c.a.createElement("br",null),c.a.createElement(w.a,{key:t,onChange:e.handleChange,options:e.state.listoptionIds,placeholder:"Choose an option",selection:!0}),c.a.createElement("hr",null),c.a.createElement("label",null,c.a.createElement("b",null,"S\u1ed1 l\u01b0\u1ee3ng:")),c.a.createElement("br",null),c.a.createElement(f.a,{type:"number",value:1}),c.a.createElement("hr",null),c.a.createElement("p",null,"S\u1ed1 ti\u1ec1n/1 sp: ",c.a.createElement("b",null,T(0)," VND")),c.a.createElement("div",{hidden:!0},n+=1),c.a.createElement("hr",null))))})))))}}]),t}(c.a.Component);n(109);C.a.locale("vn"),O()();var N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={open:!1,CheckinTimeSelected:n.props.roominfo.fromTime?new Date(n.props.roominfo.fromTime):new Date,roomCurrentClass:n.props.roominfo.roomCurrentClass?n.props.roominfo.roomCurrentClass:"",optionListSelected:n.props.roominfo.moreOptionId?JSON.parse(n.props.roominfo.moreOptionId):""},["redirectLink","getStatusDes","onChangePickedTime","handleChangeTypeIDSelect"].forEach((function(e){return n[e]=n[e].bind(Object(m.a)(n))})),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"redirectLink",value:function(){var e=window.location.href;window.location.href=e}},{key:"getStatusDes",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.statusList,n=0;n<t.length;n++)if(t[n].key==e)return t[n].text}},{key:"onChangePickedTime",value:function(e){this.setState({CheckinTimeSelected:e})}},{key:"handleChangeTypeIDSelect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=t&&this.setState({roomCurrentClass:t.value})}},{key:"render",value:function(){var e=this.props,t=e.roominfo,n=e.roomTypeOther,o=t.roomid?"images/room"+t.roomid+".png":"images/room101.png";return c.a.createElement(y.a,{style:{width:"100%"},closeIcon:!0,trigger:c.a.createElement("a",{className:"image fit"},c.a.createElement("img",{style:{boxShadow:"10px 10px 5px #ccc"},src:"images/hotelico.jpeg",alt:"Hotel"}))},c.a.createElement(y.a.Header,null,"Room Detail"),c.a.createElement(y.a.Content,{image:!0,scrolling:!0,style:{height:"450%"}},c.a.createElement(p.a,{size:"medium",src:o,wrapped:!0}),c.a.createElement(y.a.Description,{style:{width:"100%"}},c.a.createElement(E.a,null,t.roomDescription),c.a.createElement("p",null,"Status: ",this.getStatusDes(t.status)),c.a.createElement("hr",null),c.a.createElement("label",null,c.a.createElement("b",null,"Checkin:")),c.a.createElement("div",null,c.a.createElement(L.a,{value:this.state.CheckinTimeSelected,onChange:this.onChangePickedTime})),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement(d.a.Select,{fluid:!0,icon:"",label:"Room Type:",value:this.state.roomCurrentClass,options:n,onChange:this.handleChangeTypeIDSelect,placeholder:"Type"})),c.a.createElement("hr",null),c.a.createElement("p",null,"Add Options:"),c.a.createElement(D,{listoptionIds:this.props.listoptionIds,listoption:this.props.listoption,optionListSelected:this.state.optionListSelected}))),c.a.createElement(y.a.Actions,null,c.a.createElement(S.a,{primary:!0,onClick:this.redirectLink},"Proceed")))}}]),t}(c.a.Component),R=(s.Component,function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={open:!1},["renderRow","refreshPage"].forEach((function(e){return n[e]=n[e].bind(Object(m.a)(n))})),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"refreshPage",value:function(){}},{key:"renderDetail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return c.a.createElement(N,{roominfo:e,statusList:this.props.statusList,roomTypeOther:this.props.roomTypeOther,listoptionIds:this.props.listoptionIds,listoption:this.props.listoption})}},{key:"renderRow",value:function(){var e=this,t=this.props.roomsInfo;return Array.prototype.map.call(t,(function(t){return c.a.createElement("div",{className:"col-3 col-12-mobile",key:t.roomid},c.a.createElement("article",{className:"item"},c.a.createElement("div",{className:"image fitfull"},e.renderDetail(t)),c.a.createElement("header",null,1==t.status?c.a.createElement("h2",{style:{backgroundColor:"#e1eaea"}},"Room ",t.roomid):c.a.createElement("h2",{style:{backgroundColor:"#ffd633"}},"Room ",t.roomid))))}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},this.renderRow())}}]),t}(c.a.Component));R.defaultProps={roomsInfo:[]};var x=n(499),A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={isLoaded:!1,rooms:[],roomIds:[],status:[],statusIds:[],roomTypeOther:[],roomTypeOtherIds:[],listoption:[],listoptionIds:[],roomidselected:"",statusSelected:""},["getListRoomDetails","setListRoom","handleChangeRoomIDSelect","handleChangeStatusIDSelect","getListStatus","renderSearchForm","renderListRooms","getroomTypeOther","getlistoption"].forEach((function(e){return n[e]=n[e].bind(Object(m.a)(n))})),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"getListRoomDetails",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listRoomsDetail").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i={},r=0;r<t.length;r++)a=JSON.parse(t[r]),n.push(a),(i={}).key=a.roomid,i.text=a.roomDescription,i.value=a.roomid,o.push(i);e.setState({isLoaded:!0,rooms:n,roomIds:o})}),(function(t){e.setState({isLoaded:!1})}))}},{key:"getListStatus",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listStatus").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i={},r=0;r<t.length;r++)a=JSON.parse(t[r]),n.push(a),(i={}).key=a.statusId,i.text=a.description,i.value=a.statusId,o.push(i);e.setState({status:n,statusIds:o})}),(function(t){e.setState({isLoaded:!1})}))}},{key:"getlistoption",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listoption").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i=0;i<t.length;i++)a=JSON.parse(t[i]),n.push(a),o.push(a.optionId);e.setState({listoption:n,listoptionIds:o})}),(function(t){e.setState({isLoaded:!1})}))}},{key:"getroomTypeOther",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=PricebyOther").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i={},r=0;r<t.length;r++)a=JSON.parse(t[r]),n.push(a),(i={}).key=a.roomType,i.text=a.description,i.value=a.roomType,o.push(i);e.setState({roomTypeOther:n,roomTypeOtherIds:o})}),(function(t){e.setState({isLoaded:!1})}))}},{key:"setListRoom",value:function(){fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec",{method:"POST",body:"Name=1&Phone=2&Company=3&Company_Address=4&isICMCenter=5&RangeIncome=6&Product=7",headers:{"Content-type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e.json())})).then((function(e){console.log(e)}))}},{key:"renderSearchForm",value:function(){var e=this.state.roomIds,t=this.state.statusIds;return c.a.createElement("div",null,c.a.createElement(f.a,{fluid:!0,icon:"search plus",action:"Search",placeholder:"Search..."}),c.a.createElement("br",null),c.a.createElement(d.a.Group,{widths:"equal"},c.a.createElement(d.a.Select,{fluid:!0,icon:"",label:"RoomID",onChange:this.handleChangeRoomIDSelect,options:e,placeholder:"RoomIDs"}),c.a.createElement(d.a.Select,{fluid:!0,icon:"",label:"Status",options:t,onChange:this.handleChangeStatusIDSelect,placeholder:"Status"})))}},{key:"renderListRooms",value:function(){return c.a.createElement(R,{roomsInfo:this.state.rooms,statusList:this.state.statusIds,roomTypeOther:this.state.roomTypeOtherIds,listoptionIds:this.state.listoptionIds,listoption:this.state.listoption})}},{key:"handleChangeRoomIDSelect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=t&&this.setState({roomidselected:t.value})}},{key:"handleChangeStatusIDSelect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=t&&this.setState({statusSelected:t.value})}},{key:"componentDidMount",value:function(){this.getListRoomDetails(),this.getListStatus(),this.getroomTypeOther(),this.getlistoption()}},{key:"render",value:function(){return 0==this.state.isLoaded?c.a.createElement(v.a,null,c.a.createElement(x.a,{active:!0,inverted:!0},c.a.createElement(g.a,{size:"large"},"Loading")),c.a.createElement(p.a,{src:"images/loader.png"})):c.a.createElement("div",null,c.a.createElement(d.a,null,this.renderSearchForm(),this.renderListRooms()),c.a.createElement("br",null),c.a.createElement("br",null))}}]),t}(c.a.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(482);var P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement(A,null)}}]),t}(c.a.Component);h.a.render(c.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hotel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hotel","/service-worker.js");X?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[272,1,2]]]);
//# sourceMappingURL=main.6f2a7f3b.chunk.js.map