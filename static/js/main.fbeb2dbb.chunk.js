(this["webpackJsonppokemon-website"]=this["webpackJsonppokemon-website"]||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),i=n(20),o=n(21),u=n(24),l=n(23),j=n(6),b=n(9),d=(n(29),n(0));var p=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],r=function(){return a(!0)};return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsxs)(b.b,{to:"/",className:"navbar-logo",children:[Object(d.jsx)("i",{className:"fab fa-skyatlas"})," POXY"]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return a(!n)},children:Object(d.jsx)("i",{className:n?"fas fa-times-circle":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-list",children:Object(d.jsx)(b.b,{to:"/",className:"nav-links",onClick:r,children:"Home"})}),Object(d.jsx)("li",{className:"nav-list",children:Object(d.jsx)(b.b,{to:"/PokemonList",className:"nav-links",onClick:r,children:"Pokemon List"})}),Object(d.jsx)("li",{className:"nav-list",children:Object(d.jsx)(b.b,{to:"/PokemonDetail",className:"nav-links",onClick:r,children:"Pokemon Detail"})}),Object(d.jsx)("li",{className:"nav-list",children:Object(d.jsx)(b.b,{to:"/MyPokemonList",className:"nav-links",onClick:r,children:"My Pokemon List"})})]})]})})},O=n(3),f=(n(13),n(39),n.p+"static/media/galaxy1.3846930f.jpg");var x=function(){return Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)("img",{src:f,className:"galaxy-logo",alt:"galaxy"}),Object(d.jsx)("h1",{children:"POKEMON GALAXY"}),Object(d.jsx)("p",{children:"Catch & Collect your pokemon now!"})]})};var h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(x,{})})},m=n(2),v=n.n(m),k=n(4),N=(n(41),{bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"});var y=function(e){var t=e.pokemon;return Object(d.jsxs)("div",{className:"Card",children:[Object(d.jsx)("div",{className:"Card__img",children:Object(d.jsx)("img",{src:t.sprites.front_default,alt:""})}),Object(d.jsx)("div",{className:"Card__name",children:t.name}),Object(d.jsx)("div",{className:"Card__types",children:t.types.map((function(e){return Object(d.jsx)("div",{className:"Card__type",style:{backgroundColor:N[e.type.name]},children:e.type.name})}))}),Object(d.jsxs)("div",{className:"Card__info",children:[Object(d.jsxs)("div",{className:"Card__data Card__data--weight",children:[Object(d.jsx)("p",{className:"title",children:"Weight"}),Object(d.jsx)("p",{children:t.weight})]}),Object(d.jsxs)("div",{className:"Card__data Card__data--weight",children:[Object(d.jsx)("p",{className:"title",children:"Height"}),Object(d.jsx)("p",{children:t.height})]}),Object(d.jsxs)("div",{className:"Card__data Card__data--ability",children:[Object(d.jsx)("p",{className:"title",children:"Ability"}),Object(d.jsx)("p",{children:t.abilities[0].ability.name})]})]})]})};function g(e){var t=e.url;return new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))}function w(e){return _.apply(this,arguments)}function _(){return(_=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)(""),l=Object(j.a)(u,2),b=l[0],p=l[1],O=Object(c.useState)(!0),f=Object(j.a)(O,2),x=f[0],h=f[1],m="https://pokeapi.co/api/v2/pokemon";Object(c.useEffect)((function(){function e(){return(e=Object(k.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(m);case 2:return t=e.sent,o(t.next),p(t.previous),e.next=7,C(t.results);case 7:h(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var N=function(){var e=Object(k.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,w(i);case 3:return t=e.sent,e.next=6,C(t.results);case 6:o(t.next),p(t.previous),h(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(k.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,w(b);case 5:return t=e.sent,e.next=8,C(t.results);case 8:o(t.next),p(t.previous),h(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"pl-container",children:x?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("button",{onClick:_,children:"Prev"}),Object(d.jsx)("button",{onClick:N,children:"Next"})]}),Object(d.jsx)("div",{className:"grid-container",children:n.map((function(e,t){return Object(d.jsx)(y,{pokemon:e},t)}))}),Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("button",{onClick:_,children:"Prev"}),Object(d.jsx)("button",{onClick:N,children:"Next"})]})]})})};n(18);var P=function(e){var t=e.pokemon;return Object(d.jsx)("div",{className:"Card--pl",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"Card__img",children:Object(d.jsx)("img",{src:t.sprites.front_default,alt:""})})}),Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"Card__name",children:t.name})}),Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"Card__moreinfo",children:Object(d.jsx)(b.b,{to:"/PokemonDetail",children:"More Detail"})})})]})})};var S=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),i=(s[0],s[1]),o=Object(c.useState)(""),u=Object(j.a)(o,2),l=(u[0],u[1]),b=Object(c.useState)(!0),p=Object(j.a)(b,2),O=p[0],f=p[1],x="https://pokeapi.co/api/v2/pokemon";Object(c.useEffect)((function(){function e(){return(e=Object(k.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(x);case 2:return t=e.sent,i(t.next),l(t.previous),e.next=7,h(t.results);case 7:f(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"pl-container",children:O?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"view-container",children:n.map((function(e,t){return Object(d.jsx)(P,{pokemon:e},t)}))})})})};var L=function(e){var t=e.pokemon;return Object(d.jsx)("div",{className:"Card--pl",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"Card__img",children:Object(d.jsx)("img",{src:t.sprites.front_default,alt:""})})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"Card__name",children:[Object(d.jsxs)("p",{children:["Default Pokemon's Name: ",t.name]}),Object(d.jsxs)("p",{children:["Owner Pokemon's Name: ",t.name]})]})}),Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"Card__moreinfo",children:Object(d.jsx)(b.b,{to:"/PokemonDetail",children:"More Detail"})})})]})})};var D=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),i=(s[0],s[1]),o=Object(c.useState)(""),u=Object(j.a)(o,2),l=(u[0],u[1]),b=Object(c.useState)(!0),p=Object(j.a)(b,2),O=p[0],f=p[1],x="https://pokeapi.co/api/v2/pokemon";Object(c.useEffect)((function(){function e(){return(e=Object(k.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(x);case 2:return t=e.sent,i(t.next),l(t.previous),e.next=7,h(t.results);case 7:f(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"pl-container",children:O?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"view-container",children:n.map((function(e,t){return Object(d.jsx)(L,{pokemon:e},t)}))})})})},A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(b.a,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(O.a,{path:"/PokemonList",exact:!0,component:S}),Object(d.jsx)(O.a,{path:"/PokemonDetail",exact:!0,component:C}),Object(d.jsx)(O.a,{path:"/MyPokemonList",exact:!0,component:D})]})]})}}]),n}(a.a.Component);s.a.render(Object(d.jsx)(A,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fbeb2dbb.chunk.js.map