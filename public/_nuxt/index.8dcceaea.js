import _ from"./Icon.ea438a13.js";import{_ as h}from"./nuxt-link.8ef527b5.js";import{_ as b,u as d}from"./buy.2fe559e6.js";import{u as y}from"./store.138f40b4.js";import{f as k,j as L,o as t,c as a,a as i,i as l,b as u,w as c,k as C,d as m,l as $,T as w,F as x,m as r}from"./entry.0819dfc5.js";import"./config.4f48d583.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./fetch.e9598783.js";const B={class:"pricing-area ptb-80 bg-f9f6f6",id:"products"},A={class:"container"},N={class:"row"},P={class:"col-lg-4 col-md-6"},S={class:"pricing-table"},U=r('<div class="pricing-header"><h3>Single</h3></div><div class="price"><span><sup>$</sup>4.99<span>/Lifetime</span></span></div><div class="pricing-features"><ul><li class="active">1x Upgrade Key</li><li class="active">Automated Upgrade</li><li class="active">Lifetime Warranty</li><li class="active">Adless Listening</li><li class="active">Offline Listening</li></ul></div>',3),F={class:"col-lg-4 col-md-6"},V={class:"pricing-table active-plan"},I=r('<div class="pricing-header"><h3>Family </h3></div><div class="price"><span><sup>$</sup>17.99 <span>/Lifetime</span></span></div><div class="pricing-features"><ul><li class="active">5x Upgrade Key</li><li class="active">Automated Upgrade</li><li class="active">Lifetime Warranty</li><li class="active">Adless Listening</li><li class="active">Offline Listening</li></ul></div>',3),J={class:"col-lg-4 col-md-6 offset-lg-0 offset-md-3"},K={class:"pricing-table"},O=r('<div class="pricing-header"><h3>Duo</h3></div><div class="price"><span><sup></sup>$8.99 <span>/Lifetime</span></span></div><div class="pricing-features"><ul><li class="active">2x Upgrade Key</li><li class="active">Automated Upgrade</li><li class="active">Lifetime Warranty</li><li class="active">Adless Listening</li><li class="active">N/A</li></ul></div>',3),T=r('<div class="shape8 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div><div class="shape2 rotateme"><img src="https://i.imgur.com/56kIl0p.png" alt="shape"></div><div class="shape7"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div><div class="shape4"><img src="https://i.imgur.com/Xxh8QFH.png" alt="shape"></div>',4),W=i("p",null," You need to be logged in first to upgrade your account. ",-1),Y=k({__name:"index",setup(j){const p=y(),o=L(!1);return(s,e)=>{const v=_,g=h,f=b;return t(),a(x,null,[i("section",B,[i("div",A,[i("div",N,[i("div",P,[i("div",S,[U,l(p).checkJwt()?(t(),a("button",{key:1,onClick:e[1]||(e[1]=n=>("useBuy"in s?s.useBuy:l(d))(s.tier.title.toLowerCase(),s.tier.price.toString())),name:"product",value:"subscription",class:"btn btn-primary"},"Purchase")):(t(),a("button",{key:0,onClick:e[0]||(e[0]=n=>o.value=!0),name:"product",value:"subscription",class:"btn btn-primary"},"Purchase"))])]),i("div",F,[i("div",V,[I,l(p).checkJwt()?(t(),a("button",{key:1,onClick:e[3]||(e[3]=n=>s.handlePurchase(s.Single,4.99)),name:"product",value:"subscription",class:"btn btn-primary"},"Purchase")):(t(),a("button",{key:0,onClick:e[2]||(e[2]=n=>o.value=!0),name:"product",value:"subscription",class:"btn btn-primary"},"Purchase"))])]),i("div",J,[i("div",K,[O,l(p).checkJwt()?(t(),a("button",{key:1,onClick:e[5]||(e[5]=n=>("useBuy"in s?s.useBuy:l(d))(s.tier.title.toLowerCase(),s.tier.price.toString())),name:"product",value:"subscription",class:"btn btn-primary"},"Purchase")):(t(),a("button",{key:0,onClick:e[4]||(e[4]=n=>o.value=!0),name:"product",value:"subscription",class:"btn btn-primary"},"Purchase"))])])])]),T]),u(w,{name:"fade",mode:"out-in"},{default:c(()=>[l(o)?(t(),C(f,{key:0,onClose:e[6]||(e[6]=n=>o.value=!1)},{title:c(()=>[m(" Login Required ")]),default:c(()=>[W,u(g,{to:"/login",class:"py-2 px-3 flex items-center justify-center text-xl gap-2 font-bold rounded-md w-full bg-green-900"},{default:c(()=>[u(v,{name:"tabler:user-bolt",class:"w-6 h-6"}),m(" Login ")]),_:1})]),_:1})):$("",!0)]),_:1})],64)}}});export{Y as default};