(this["webpackJsonpfabelio-furniture-finder"]=this["webpackJsonpfabelio-furniture-finder"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),s=a(4),o=a.n(s),i=a(7),u=a(1),d=[{label:"1 Week",value:"7"},{label:"2 Weeks",value:"14"},{label:"1 Month",value:"30"},{label:"More",value:"-1"}],m=function(e){var t,a=e.name,n=e.description,c=e.furniture_style,l=e.delivery_time,s=e.price;return r.a.createElement("div",{className:"product-card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-name"},a),r.a.createElement("div",{className:"card-price"},function(e){return"Rp ".concat(e.toLocaleString("id-ID"))}(s))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-description"},(t=n).length>114?"".concat(t.substring(0,114),"..."):t),r.a.createElement("div",{className:"card-styles"},c.map((function(e,t){return r.a.createElement("span",{key:t},e,t!==c.length-1?", ":" ")})))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"card-delivery-time"},l," days")))},v=function(e){var t=e.products;return r.a.createElement("div",{className:"product-list"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"product-col"},r.a.createElement(m,e))})))))},p=a(8),f=function(e){var t=e.options,a=e.value,c=e.onDropdownChange,l=e.placeholder,s=Object(n.useState)(!1),o=Object(u.a)(s,2),i=o[0],d=o[1],m=function(){d(!i)};return r.a.createElement("div",{className:"dropdown"},(a.length&&(l=a.map((function(e){return e.label})).join(", ")),r.a.createElement("button",{className:"dropdown-toggle",onClick:m},l)),i&&r.a.createElement("div",{className:"dropdown-menu"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"dropdown-option"},r.a.createElement("label",{htmlFor:e.value,className:"dropdown-label"},e.label),r.a.createElement("div",{className:"dropdown-checkbox"},r.a.createElement("input",{id:e.value,name:e.value,type:"checkbox",checked:!!a.find((function(t){return t===e})),onChange:function(t){var n=t.target.checked?[].concat(Object(p.a)(a),[e]):a.filter((function(t){return t!==e}));c(n)}})))}))))},E=function(e){var t=e.furnitureStyles,a=e.deliveryTimes,n=e.searchTerm,c=e.selectedStyles,l=e.selectedDeliveryTimes,s=e.onSearchTerm,o=e.onSelectedStyles,i=e.onSelectedDeliveryTimes;return r.a.createElement("div",{className:"filter-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"product-col"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text",value:n,onChange:s,placeholder:"Search Furniture"}))),r.a.createElement("div",{className:"product-col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"product-col"},r.a.createElement(f,{options:t,value:c,onDropdownChange:o,placeholder:"Furniture Style"})),r.a.createElement("div",{className:"product-col"},r.a.createElement(f,{options:a,value:l,onDropdownChange:i,placeholder:"Delivery Time"})))))},b=function(e){var t=e.products,a=e.furnitureStyles,c=e.deliveryTimes,l=Object(n.useState)(""),s=Object(u.a)(l,2),o=s[0],i=s[1],d=Object(n.useState)([]),m=Object(u.a)(d,2),p=m[0],f=m[1],b=Object(n.useState)([]),h=Object(u.a)(b,2),y=h[0],N=h[1],S=t.filter((function(e){var t=e.name.toLowerCase().includes(o.toLowerCase()),a=!p.length||p.some((function(t){return-1!==e.furniture_style.indexOf(t.value)})),n=!y.length||y.some((function(t){return parseInt(e.delivery_time)<=parseInt(t.value)}));return t&&a&&n}));return r.a.createElement("div",null,r.a.createElement(E,{furnitureStyles:a,deliveryTimes:c,searchTerm:o,selectedStyles:p,selectedDeliveryTimes:y,onSearchTerm:function(e){i(e.target.value)},onSelectedStyles:function(e){f(e)},onSelectedDeliveryTimes:function(e){N(e)}}),r.a.createElement(v,{products:S}))},h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),m=s[0],v=s[1],p=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.mocky.io/v2/5c9105cb330000112b649af8");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.products),v(a.furniture_styles.map((function(e){return{label:e,value:e}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),r.a.createElement("div",null,r.a.createElement(b,{products:a,furnitureStyles:m,deliveryTimes:d}))};a(15);l.a.render(r.a.createElement(h,null),document.querySelector("#root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.015adc0d.chunk.js.map