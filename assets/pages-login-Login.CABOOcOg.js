import{j as e,Y as a,o as l,c as t,w as o,a as n,g as s,t as r,C as u,a3 as i,i as c,a4 as d,m as p,p as v,F as f}from"./index-CYi5K3jv.js";import{_ as m}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{C as _,f as y}from"./index.wwVzPHwo.js";const h=m({},[["render",function(e,a){return" 邮箱登录 "}]]);const g=m({},[["render",function(e,a){return" Qr登录 "}]]),k=m(e({__name:"Phone",setup(e){const p=a(),v=a("");let f;const m=a("获取验证码"),h=a(10),g=a(!1),k=async()=>{if(p.value){if(11!==p.value.toString().length)return u({title:"手机号格式错误",icon:"error"});f=setInterval((()=>{if(h.value--,m.value=h.value,g.value=!0,0===h.value)return clearInterval(f),h.value=10,m.value="获取验证码",void(g.value=!1)}),1e3);200===(await _(p.value)).code?u({title:"获取验证码成功",icon:"success"}):u({title:"获取验证码失败",icon:"none"})}else u({title:"请输入手机号",icon:"none"})},x=async()=>{if(p.value&&v.value){const e=await y(p.value,v.value);console.log(e),200===e.code?u({title:"登录成功",icon:"error"}):u({title:e.message,icon:"error"})}else u({title:"请输入手机号或者验证码",icon:"error"})};return(e,a)=>{const u=i,f=c,_=d;return l(),t(f,{class:"form"},{default:o((()=>[n(f,{class:"row"},{default:o((()=>[n(u,{type:"tel",placeholder:"请输入手机号",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),modelModifiers:{trim:!0}},null,8,["modelValue"])])),_:1}),n(f,{class:"row captcha"},{default:o((()=>[n(u,{type:"text",placeholder:"请输入验证码",modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e)},null,8,["modelValue"]),n(_,{type:"primary",onClick:k,disabled:g.value},{default:o((()=>[s(r(m.value),1)])),_:1},8,["disabled"])])),_:1}),n(f,{class:"row"},{default:o((()=>[n(_,{type:"primary",onClick:x},{default:o((()=>[s("登录")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-3b6da2b6"]]),x=m(e({__name:"Login",setup(e){const u=a("phone"),i=[{text:"手机号登录",type:"phone"},{text:"邮箱登录",type:"email"},{text:"二维码登录",type:"qr"}];return(e,a)=>{const d=c;return l(),t(d,{class:"login"},{default:o((()=>["phone"===u.value?(l(),t(k,{key:0})):"email"===u.value?(l(),t(h,{key:1})):(l(),t(g,{key:2})),n(d,{class:"change-type"},{default:o((()=>[(l(),p(f,null,v(i,(e=>n(d,{key:e.type,class:"link",onClick:a=>u.value=e.type},{default:o((()=>[s(r(e.text),1)])),_:2},1032,["onClick"]))),64))])),_:1})])),_:1})}}}),[["__scopeId","data-v-f596df43"]]);export{x as default};