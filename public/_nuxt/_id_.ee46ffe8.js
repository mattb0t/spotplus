import{_ as w}from"./nuxt-link.8ef527b5.js";import b from"./Icon.ea438a13.js";import{f as k,g as v,h as j,o as t,c as s,i as c,b as a,w as _,d as i,a as e,t as C,F as S,r as T}from"./entry.0819dfc5.js";import{u as B}from"./fetch.e9598783.js";import{u as A}from"./store.138f40b4.js";import"./config.4f48d583.js";import"./_plugin-vue_export-helper.c27b6911.js";const N=""+globalThis.__publicAssetsURL("cbase.svg"),$={class:"flex w-full flex-col h-full gap-2 items-center justify-center"},L={key:0},O={key:1,class:"flex md:w-3/6 flex-col gap-2 items-center justify-center"},z={key:0,class:"flex w-full flex-col gap-2"},F=e("h1",{class:"text-2xl font-bold"}," Checkout ",-1),I={class:"text-gray-400 text-lg"},P=e("h2",{class:"flex gap-2 items-center text-xl font-bold"},[e("img",{src:N,class:"w-10 h-10"}),i(" Pay with Coinbase ")],-1),V=[P],E={class:"space-y-2"},H=e("h3",{class:"text-lg text-gray-400"}," Supported Coins ",-1),J={class:"flex gap-2"},R=["src"],U={key:1,class:"w-full flex justify-center"},D={class:"flex flex-col gap-2 items-center justify-center"},G=e("h1",{class:"font-bold text-3xl text-center"}," This payment has already been paid. Go grab your key from ",-1),K={key:2,class:"w-full flex justify-center"},X={class:"flex flex-col gap-2 items-center justify-center"},q=e("h1",{class:"font-bold text-3xl text-center"}," This payment has been failed or cancelled. Buy another key from ",-1),oe=k({__name:"[id]",async setup(M){let n,h;const p=v(),u=A(),{data:l,pending:x}=([n,h]=j(()=>B("https://supgrade-api.site/api/v1/payments/valid",{method:"POST",body:JSON.stringify({checkoutId:p.params.id}),headers:{Authorization:`Bearer ${u.jwt}`}},"$9KzXyUxCsi")),n=await n,h(),n);async function y(){try{const o=await fetch("https://supgrade-api.site/api/v1/payments/checkout",{method:"POST",body:JSON.stringify({gateway:"cryptocurrency",id:p.params.id}),headers:{Authorization:`Bearer ${u.jwt}`,"Content-Type":"application/json"}});if(!o.ok){console.error("Error: The server responded with an error",o.status);return}const r=await o.json();r&&r.link?window.location.href=r.link:console.error("Invalid response format or missing link property")}catch(o){console.error("An error occurred during payment:",o)}}const g=["btc","eth","ltc","usdt","usc"];return(o,r)=>{const d=w,f=b;return t(),s("div",$,[c(x)?(t(),s("div",L," Loading... ")):(t(),s("div",O,[c(l).status==="unpaid"?(t(),s("div",z,[a(d,{to:"/",class:"text-green-500 font*bold text-lg hover:text-green-400 transition-all"},{default:_(()=>[i(" ← Back to home ")]),_:1}),F,e("h2",I,C(c(l).email),1),e("button",{class:"flex flex-col w-full md:flex-row md:justify-between items-center gap-2 bg-[#181818] p-4 rounded-lg",onClick:y},V),e("div",E,[H,e("div",J,[(t(),s(S,null,T(g,m=>e("img",{key:m,src:`/${m}.svg`,class:"w-10 h-10"},null,8,R)),64))])])])):c(l).status==="success"?(t(),s("div",U,[e("div",D,[G,a(d,{to:"/upgrade",class:"text-xl text-green-500 font-bold hover:text-green-400 transition-all"},{default:_(()=>[i(" Here "),a(f,{name:"tabler:arrow-right",class:"w-6 h-6"})]),_:1})])])):(t(),s("div",K,[e("div",X,[q,a(d,{to:"/dashboard",class:"text-xl text-green-500 font-bold hover:text-green-400 transition-all"},{default:_(()=>[i(" Here "),a(f,{name:"tabler:arrow-right",class:"w-6 h-6"})]),_:1})])]))]))])}}});export{oe as default};