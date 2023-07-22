import{_ as y}from"./nuxt-link.8ef527b5.js";import{f as m,B as f,o as l,c as i,a as s,s as g,C as n,D as u,i as o,G as _,F as v,r as w,b as h,w as x,d as k,m as S,t as b,p as V,e as I}from"./entry.0819dfc5.js";import{a as L}from"./utils.f07451bf.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";const p=r=>(V("data-v-10dd6711"),r=r(),I(),r),U={class:"flex md:flex-row flex-col-reverse w-full md:gap-8 gap-3 h-full justify-center items-center"},q={class:"flex gap-2 flex-col w-full md:w-96 items-start justify-center"},B=p(()=>s("h1",{class:"text-2xl font-bold"}," Upgrade your account ",-1)),D=["value"],E=p(()=>s("button",{type:"submit",class:"bg-green-900 mt-2 text-white rounded-lg py-2 px-4"}," Upgrade ",-1)),C=S('<div class="md:w-2/6 space-y-1" data-v-10dd6711><h3 class="title" data-v-10dd6711> Is my data safe with Supgrade? </h3><p class="" data-v-10dd6711> Yes, of course. We do not save your Spotify login. Our bot will only login to your account for upgrading/renewing your account. </p><h3 class="title" data-v-10dd6711> What happens if I get kicked? </h3><p data-v-10dd6711> Nothing! You can renew your account automatically anytime with our automated system. There&#39;s no hassle for you working with us. </p><h3 class="title" data-v-10dd6711> How does the upgrade works? </h3><p data-v-10dd6711> First, we login to your Spotify account. Secondly, we check if your country is in stock and key is valid. Lastly, our bot proceeds to upgrade your account automatically. </p></div>',1),F=m({__name:"upgrade",setup(r){const a=f({key:"",email:"",password:"",county:"select-a-country"});return(d,t)=>{const c=y;return l(),i("div",U,[s("div",q,[B,s("form",{class:"flex flex-col gap-2 w-full",onSubmit:t[4]||(t[4]=g((...e)=>d.login&&d.login(...e),["prevent"]))},[n(s("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o(a).key=e),type:"text",placeholder:"Enter your upgrade key",class:"input",required:""},null,512),[[u,o(a).key]]),n(s("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o(a).email=e),type:"email",placeholder:"Enter Spotify account email",class:"input",required:""},null,512),[[u,o(a).email]]),n(s("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o(a).password=e),type:"password",placeholder:"Enter Spotify account password",class:"input",required:""},null,512),[[u,o(a).password]]),n(s("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>o(a).county=e),name:"countries",class:"input",required:"",placeholder:"Select a country"},[(l(!0),i(v,null,w("countryList"in d?d.countryList:o(L),e=>(l(),i("option",{key:e,value:e.value},b(e.name),9,D))),128))],512),[[_,o(a).county]]),E],32),h(c,{to:"/#pricing",class:"text-green-500 hover:text-green-400 transition-all"},{default:x(()=>[k(" I don't have an upgrade key ")]),_:1})]),C])}}});const Y=N(F,[["__scopeId","data-v-10dd6711"]]);export{Y as default};