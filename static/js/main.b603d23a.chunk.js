(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{141:function(e,t,n){},287:function(e,t,n){e.exports=n(501)},292:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);var o=n(28),a=n(29),i=n(32),r=n(30),s=n(31),l=n(0),c=n.n(l),u=n(18),h=n.n(u),p=(n(292),n(127)),d=n(44),m=n.n(d),f=n(76),g=n(41),v=n(520),y=n(521),b=n(511),S=n(276),E=n(91),O=n(512),k=n(513),C=n(518),w=n(502),L=n(167),I=n.n(L),j=n(251),R=n.n(j),D=n(252),T=n.n(D),x=(n(345),n(519)),P=n(515),N=n(509),A=n(510),J=n(517),X=n(275),U=n(38);n(140),n(141);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var G=function(e){function t(e){var n;return Object(o.a)(this,t),console.log("constructor"),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={items:n.props.listoptionIds.slice(0,n.props.optionListSelected.length),option:{description:"",optionid:null,price:0,quantity:0,total:0},listoptionIds:[],optionListSelected:[],totalOptions:0},["handleChangeDropdown","handleChangeQuantity","handleAddRow","handleRemoveRow"].forEach((function(e){return n[e]=n[e].bind(Object(g.a)(n))})),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var e=this.props.optionListSelected,t=[];e&&e.map((function(e){t.push(e.optionid)}));var n=t.concat(this.props.listoptionIds),o=n.filter((function(e,t){return n.indexOf(e)===t}));this.setState({items:o.slice(0,this.props.optionListSelected.length)});var a={},i=[];this.props.listoption.map((function(e){(a={}).key=e.optionId,a.text=e.description,a.value=e.optionId,i.push(a)})),this.setState({listoptionIds:i}),this.setState({optionListSelected:this.props.optionListSelected})}},{key:"handleAddRow",value:function(){console.log("handleAddRow");for(var e=V({},this.state.option),t=this.state.optionListSelected,n=!0,o=0;o<t.length;o++)if(t[o].optionid==e.optionid){t[o].quantity=parseInt(e.quantity)+parseInt(t[o].quantity),t[o].total=parseInt(t[o].quantity)*parseInt(t[o].price),n=!1;break}n&&t.push(e),this.setState({optionListSelected:t}),this.props.onChangeOption(t)}},{key:"handleRemoveRow",value:function(){console.log("handleRemoveRow");var e=this.state.optionListSelected;e.pop(),this.setState({optionListSelected:e}),this.props.onChangeOption(e)}},{key:"handleChangeQuantity",value:function(e,t){if(console.log("handleChangeQuantity"),t&&!isNaN(t.value))if(parseInt(t.value)<0||parseInt(t.value)>100)U.b.info("S\u1ed1 l\u01b0\u1ee3ng ph\u1ea3i t\u1eeb 0 - 100");else{var n=V({},this.state.option);n.quantity=parseInt(t.value),n.total=parseInt(t.value)*parseInt(n.price),this.setState({option:n})}}},{key:"handleChangeDropdown",value:function(e,t){console.log("handleChangeDropdown");for(var n=this.props.listoption,o=[],a=0;a<n.length;a++)if(n[a].optionId==t.value){o=[],(o=n[a]).optionid=n[a].optionId,o.quantity=1,o.total=o.price;break}this.setState({option:o})}},{key:"render",value:function(){console.log("render");this.state.optionListSelected;var e=0,t=0;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(v.a,{placeholder:!0,textAlign:"center"},c.a.createElement(x.a,{columns:1,relaxed:"very",stackable:!0},c.a.createElement(x.a.Column,null,c.a.createElement(O.a,null,c.a.createElement(E.a,null,"Lo\u1ea1i SP:"),c.a.createElement(P.a,{options:this.state.listoptionIds,value:this.state.option.optionid,placeholder:"Choose an option",selection:!0,onChange:this.handleChangeDropdown}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(E.a,null,"S\u1ed1 l\u01b0\u1ee3ng:"),c.a.createElement(N.a,{disabled:0==this.state.option.optionid||null==this.state.option.optionid,placeholder:"...",type:"number",max:"100",min:"0",value:this.state.option.quantity,onChange:this.handleChangeQuantity}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(E.a,null," S\u1ed1 ti\u1ec1n/1 sp: ",c.a.createElement("b",null,q(this.state.option.price)," VND")),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(A.a,{horizontal:!0},"Total"),c.a.createElement(J.a,{horizontal:!0,size:"tiny"},c.a.createElement(J.a.Value,null,q(this.state.option.total)),c.a.createElement(J.a.Label,null,"vnd")),c.a.createElement(w.a,{content:"Add",icon:"plus square",size:"big",color:"grey",onClick:this.handleAddRow,disabled:0==this.state.option.optionid||null==this.state.option.optionid||0==this.state.option.quantity}))))),c.a.createElement(w.a.Group,null),this.state.optionListSelected?c.a.createElement(X.a,{size:"sm",striped:!0,bordered:!0,hover:!0,style:{width:"100%"}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,c.a.createElement(w.a,{label:"Remove",disabled:0===this.state.optionListSelected.length,icon:"minus square",onClick:this.handleRemoveRow,floated:"right"})))),c.a.createElement("tbody",null,this.state.optionListSelected.map((function(n){return c.a.createElement("tr",{key:Math.random()},n&&[c.a.createElement("td",{key:Math.random()},c.a.createElement("b",null,n.quantity," - ",n.description)),c.a.createElement("td",{key:Math.random()},c.a.createElement("b",{style:{float:"right"}},c.a.createElement(E.a,{as:"a",color:"olive",tag:!0,size:"large"},q(n.total)," VND")),c.a.createElement("p",{hidden:!0},t+=1," ",e+=n.total))])}))),c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement("b",{style:{float:"right"}},c.a.createElement(E.a,{as:"a",color:"yellow",tag:!0,size:"large"},q(e)," VND")))))):c.a.createElement("div",null))}}]),t}(c.a.Component);n(120);I.a.locale("vn"),R()();var z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={open:!1,CheckinTimeSelected:n.props.roominfo.fromTime?new Date(n.props.roominfo.fromTime.replace(/[A-Za-z]/g," ")):new Date,roomCurrentClass:n.props.roominfo.roomCurrentClass?n.props.roominfo.roomCurrentClass:"",optionListSelected:n.props.roominfo.moreOptionId?JSON.parse(n.props.roominfo.moreOptionId):"",roomDetailOpen:!1,isSubmiting:!1},["checkinRoomSubmit","getStatusDes","onChangePickedTime","handleChangeTypeIDSelect","handleChangeOption","handleShowModal","handleHideModal"].forEach((function(e){return n[e]=n[e].bind(Object(g.a)(n))})),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"checkinRoomSubmit",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,n,o,a,i,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({isSubmiting:!0});case 2:for("checkin",t=this.props.roominfo.roomid,n=this.props.roominfo.id,o=this.state.CheckinTimeSelected,a=this.state.roomCurrentClass,i=JSON.stringify(this.state.optionListSelected),r=0,s=0;s<this.state.optionListSelected.length;s++)r+=this.state.optionListSelected[s].total;if(o){e.next=13;break}return U.b.error("B\u1ea1n ch\u01b0a ch\u1ecdn gi\u1edd v\xe0o!"),e.abrupt("return");case 13:if(a){e.next=16;break}return U.b.error("B\u1ea1n ch\u01b0a ch\u1ecdn lo\u1ea1i ph\xf2ng!"),e.abrupt("return");case 16:return e.next=18,this.props.UpdateCheckInRoom(n,o,a,i,r,t);case 18:return e.next=20,this.setState({roomDetailOpen:!1,isSubmiting:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStatusDes",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.statusList,n=0;n<t.length;n++)if(t[n].key==e)return t[n].text}},{key:"onChangePickedTime",value:function(e){this.setState({CheckinTimeSelected:e})}},{key:"handleChangeTypeIDSelect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=t&&this.setState({roomCurrentClass:t.value})}},{key:"handleChangeOption",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];console.log(JSON.stringify(e)),this.setState({optionListSelected:e})}},{key:"handleShowModal",value:function(){this.setState({roomDetailOpen:!0})}},{key:"handleHideModal",value:function(){this.setState({roomDetailOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.roominfo,o=t.roomTypeOther,a=n.roomid?"images/room"+n.roomid+".png":"images/room101.png";return console.log(this.state.CheckinTimeSelected),console.log(this.props.roominfo),c.a.createElement(k.a,{style:{width:"100%"},open:this.state.roomDetailOpen,closeIcon:!0,onClose:function(){e.setState({roomDetailOpen:!1})},trigger:c.a.createElement("a",{className:"image fit"},c.a.createElement("img",{style:{boxShadow:"10px 10px 5px #ccc"},onClick:this.handleShowModal,src:"images/hotelico.jpeg",alt:"Hotel"}))},c.a.createElement(k.a.Header,null,"Room Detail"),c.a.createElement(k.a.Content,{image:!0,scrolling:!0,style:{height:"450%"}},c.a.createElement(S.a,{size:"medium",src:a,wrapped:!0}),c.a.createElement(k.a.Description,{style:{width:"100%"}},c.a.createElement(C.a,null,n.roomDescription),c.a.createElement("b",null,"Status: ",this.getStatusDes(n.status)),c.a.createElement("hr",null),c.a.createElement("label",null,c.a.createElement("b",null,"Checkin:")),c.a.createElement("div",null,c.a.createElement(T.a,{value:this.state.CheckinTimeSelected,onChange:this.onChangePickedTime})),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("b",null,"Room Type:")),c.a.createElement(O.a.Select,{fluid:!0,icon:"",value:this.state.roomCurrentClass,options:o,onChange:this.handleChangeTypeIDSelect,placeholder:"Type"})),c.a.createElement("hr",null),c.a.createElement(E.a,{as:"a",color:"teal",ribbon:!0},"Th\xeam S\u1ea3n Ph\u1ea9m:"),c.a.createElement(G,{listoptionIds:this.props.listoptionIds,listoption:this.props.listoption,onChangeOption:this.handleChangeOption,optionListSelected:this.state.optionListSelected?this.state.optionListSelected:[]}))),c.a.createElement(k.a.Actions,null,c.a.createElement(w.a,{primary:!0,onClick:this.checkinRoomSubmit,disabled:this.state.isSubmiting},"CheckIn"),c.a.createElement(w.a,{primary:!0,onClick:this.handleHideModal,disabled:this.state.isSubmiting},"Close")))}}]),t}(c.a.Component),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={open:!1},["renderRow","refreshPage"].forEach((function(e){return n[e]=n[e].bind(Object(g.a)(n))})),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"refreshPage",value:function(){}},{key:"renderDetail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return c.a.createElement(z,{roominfo:e,statusList:this.props.statusList,roomTypeOther:this.props.roomTypeOther,listoptionIds:this.props.listoptionIds,listoption:this.props.listoption,UpdateCheckInRoom:this.props.UpdateCheckInRoom})}},{key:"renderRow",value:function(){var e=this,t=this.props.roomsInfo;return Array.prototype.map.call(t,(function(t){return c.a.createElement("div",{className:"col-3 col-12-mobile",key:t.roomid},c.a.createElement("article",{className:"item"},c.a.createElement("div",{className:"image fitfull"},e.renderDetail(t)),c.a.createElement("header",null,1==t.status?c.a.createElement("h2",{style:{backgroundColor:"#e1eaea"}},"Room ",t.roomid):c.a.createElement("h2",{style:{backgroundColor:"#ffd633"}},"Room ",t.roomid))))}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},this.renderRow())}}]),t}(c.a.Component);H.defaultProps={roomsInfo:[]};var W=n(132),K=n.n(W),B=n(516);c.a.createElement(E.a,{content:[{title:"bangth"},{title:"bangth2"},{title:"bangth2"}]}),l.Component;function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var Q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={isLoadedRooms:!1,isLoadedParam:!1,roomDetailOpen:!1,rooms:[],roomIds:[],status:[],statusIds:[],roomTypeOther:[],roomTypeOtherIds:[],listoption:[],listoptionIds:[],roomidselected:"",statusSelected:""},["getListRoomDetails","UpdateCheckInRoom","handleChangeRoomIDSelect","handleChangeStatusIDSelect","getListStatus","renderSearchForm","renderListRooms","getroomTypeOther","getlistoption","handleClearSearching"].forEach((function(e){return n[e]=n[e].bind(Object(g.a)(n))})),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"getListRoomDetails",value:function(){var e=Object(f.a)(m.a.mark((function e(t){var n=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getListRoomDetails"),console.log(t),this.setState({isLoadedRooms:!1}),e.next=5,fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listRoomsDetail").then((function(e){return e.json()})).then((function(e){for(var o=[],a=[],i=[],r={},s=0;s<e.length;s++)i=JSON.parse(e[s]),o.push(i),(r={}).key=i.roomid,r.text=i.roomDescription,r.value=i.roomid,a.push(r);if(t){var l=o.filter((function(e){return e[t.id]==t.value}));n.setState({isLoadedRooms:!0,rooms:l,roomIds:a})}else n.setState({isLoadedRooms:!0,rooms:o,roomIds:a})}),(function(e){n.setState({isLoadedRooms:!1})}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getListStatus",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listStatus").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i={},r=0;r<t.length;r++)a=JSON.parse(t[r]),n.push(a),(i={}).key=a.statusId,i.text=a.description,i.value=a.statusId,o.push(i);e.setState({isLoadedParam:!0,status:n,statusIds:o})}),(function(t){e.setState({isLoadedParam:!1})}))}},{key:"getlistoption",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=listoption").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i=0;i<t.length;i++)a=JSON.parse(t[i]),n.push(a),o.push(a.optionId);e.setState({isLoadedParam:!0,listoption:n,listoptionIds:o})}),(function(t){e.setState({isLoadedParam:!1})}))}},{key:"getroomTypeOther",value:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=PricebyOther").then((function(e){return e.json()})).then((function(t){for(var n=[],o=[],a=[],i={},r=0;r<t.length;r++)a=JSON.parse(t[r]),n.push(a),(i={}).key=a.roomType,i.text=a.description,i.value=a.roomType,o.push(i);e.setState({isLoadedParam:!0,roomTypeOther:n,roomTypeOtherIds:o})}),(function(t){e.setState({isLoadedParam:!1})}))}},{key:"UpdateCheckInRoom",value:function(){var e=Object(f.a)(m.a.mark((function e(t,n,o,a,i,r){var s,l,c,u=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=(s=n).getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),c="checkinTime="+l+"&roomClass="+o+"&options="+a+"&totalOptionPrice="+i,e.next=5,fetch("https://script.google.com/macros/s/AKfycby1NCjArXNvliviV9Su8imyfVXsNTUL2memG4bxJhX4JTcyoXGr/exec?func=checkin&id="+t,{method:"POST",body:c,headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",!1,e.next=4,t.json().then((function(e){console.log(e),"error"==e.result?n=JSON.stringify(e.error.message):!0}));case 4:200==t.status?n?U.b.error("Error:"+JSON.stringify(n)):U.b.success("\u0110\u1eb7t ph\xf2ng "+r+" th\xe0nh c\xf4ng!",{position:U.b.POSITION.TOP_RIGHT}):U.b.error("Something is wrong, please check log for detail!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){u.handleClearSearching()}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,o,a,i,r){return e.apply(this,arguments)}}()},{key:"handleClearSearching",value:function(){this.setState({roomidselected:"",statusSelected:""}),this.getListRoomDetails()}},{key:"handleChangeRoomIDSelect",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=n&&this.setState({roomidselected:n.value,statusSelected:""},(function(){var e={id:"roomid",value:n.value};t.getListRoomDetails(e)}))}},{key:"handleChangeStatusIDSelect",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=n&&this.setState({statusSelected:n.value,roomidselected:""},(function(){var e={id:"status",value:n.value};t.getListRoomDetails(e)}))}},{key:"renderSearchForm",value:function(){if(0==this.state.isLoadedParam)return c.a.createElement(v.a,null,c.a.createElement(y.a,{active:!0,inverted:!0},c.a.createElement(b.a,{size:"large"},"Loading")),c.a.createElement(S.a,{src:"images/loader.png"}));var e=this.state.roomIds,t=this.state.statusIds,n={pointerEvents:""};this.state.isLoadedRooms&&this.state.isLoadedParam||(n={pointerEvents:"none"});return e.length>0&&e.map((function(e){e.key,e.text;e.title=e.key,e.description=e.text})),c.a.createElement(v.a,{padded:!0,style:n},c.a.createElement(E.a,{attached:"top left",onClick:this.handleClearSearching},"Refresh"),c.a.createElement("br",null),c.a.createElement(O.a.Group,{widths:"equal"},c.a.createElement(O.a.Select,{fluid:!0,icon:"",label:"L\u1ecdc theo Ph\xf2ng",value:this.state.roomidselected,onChange:this.handleChangeRoomIDSelect,options:e,placeholder:"RoomIDs"}),c.a.createElement(O.a.Select,{fluid:!0,icon:"",label:"L\u1ecdc theo tr\u1ea1ng th\xe1i",value:this.state.statusSelected,options:t,onChange:this.handleChangeStatusIDSelect,placeholder:"Status"})))}},{key:"renderListRooms",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state),t=e.rooms,n=e.statusIds,o=e.roomTypeOtherIds,a=e.listoptionIds,i=e.listoption;return 0==this.state.isLoadedRooms?c.a.createElement(v.a,null,c.a.createElement(y.a,{active:!0,inverted:!0},c.a.createElement(b.a,{size:"large"},"Loading")),c.a.createElement(S.a,{src:"images/loader.png"})):c.a.createElement(v.a,{padded:!0},c.a.createElement(E.a,{attached:"top"},"Room List"),c.a.createElement(H,{roomsInfo:t,statusList:n,roomTypeOther:o,listoptionIds:a,listoption:i,UpdateCheckInRoom:this.UpdateCheckInRoom}))}},{key:"componentDidMount",value:function(){this.getListRoomDetails(),this.getListStatus(),this.getroomTypeOther(),this.getlistoption()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(U.a,{style:{fontSize:"20px",textAlign:"center"}}),c.a.createElement(O.a,null,this.renderSearchForm(),this.renderListRooms()),c.a.createElement("br",null),c.a.createElement("br",null))}}]),t}(c.a.Component),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(500);var Z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement(Q,null)}}]),t}(c.a.Component);h.a.render(c.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hotel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hotel","/service-worker.js");$?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()}},[[287,1,2]]]);
//# sourceMappingURL=main.b603d23a.chunk.js.map