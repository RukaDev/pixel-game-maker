"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[237],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i=void 0,o={unversionedId:"Classes/Player",id:"Classes/Player",title:"Player",description:"Methods",source:"@site/docs-api/Classes/Player.md",sourceDirName:"Classes",slug:"/Classes/Player",permalink:"/pixel-game-maker/docs-api/Classes/Player",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lever",permalink:"/pixel-game-maker/docs-api/Classes/Lever"},next:{title:"Sprite",permalink:"/pixel-game-maker/docs-api/Classes/Sprite"}},p={},s=[{value:"<code>Methods</code>",id:"methods",level:2},{value:"animate()",id:"animate",level:3},{value:"stop()",id:"stop",level:3},{value:"canAttack()",id:"canattack",level:3},{value:"calculatePosition()",id:"calculateposition",level:3},{value:"canMove()",id:"canmove",level:3},{value:"attack()",id:"attack",level:3},{value:"attackFinished()",id:"attackfinished",level:3},{value:"<code>Properties</code>",id:"properties",level:2},{value:"playerSprite",id:"playersprite",level:3},{value:"attackSprite",id:"attacksprite",level:3},{value:"zone",id:"zone",level:3},{value:"position",id:"position",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"methods"},(0,r.kt)("inlineCode",{parentName:"h2"},"Methods")),(0,r.kt)("h3",{id:"animate"},"animate()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:animate(key: int) -> none\n")),(0,r.kt)("p",null,"Sets the spritesheet to the new key value"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stop"},"stop()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:stop() -> none\n")),(0,r.kt)("p",null,"Stops the player "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canattack"},"canAttack()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:canAttack() -> boolean\n")),(0,r.kt)("p",null,"Returns true if the player can attack"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"calculateposition"},"calculatePosition()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:calculatePosition(lastKey: string) -> array\n")),(0,r.kt)("p",null,"Calculates the next x, y position of the player"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canmove"},"canMove()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:canMove() -> boolean\n")),(0,r.kt)("p",null,"Returns true if the player can move"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"attack"},"attack()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:attack(enemies) -> none\n")),(0,r.kt)("p",null,"Plays attack animation and runs hit detection on the passed enemies"),(0,r.kt)("h3",{id:"attackfinished"},"attackFinished()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player:attackFinished() -> none\n")),(0,r.kt)("p",null,"Finishes a player attack"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},(0,r.kt)("inlineCode",{parentName:"h2"},"Properties")),(0,r.kt)("h3",{id:"playersprite"},"playerSprite"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Type: sprite instance\nDef:  Sprite to represent the player\n")),(0,r.kt)("h3",{id:"attacksprite"},"attackSprite"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Type: sprite instance\nDef:  Sprite to represent player attacks\n")),(0,r.kt)("h3",{id:"zone"},"zone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Type: zone\nDef:  A zone instance\n")),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Type: table\nDef:  Position of the sprite on the canvas\n")))}u.isMDXComponent=!0}}]);