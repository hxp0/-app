import{j as a,Y as s,o as l,c as e,w as t,b as c,i as u,a as r,g as n,n as o,$ as d,s as p}from"./index-l0KxtmT8.js";import{p as i,b as f}from"./index.CMpXFxYc.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const _=v(a({__name:"player",setup(a){const v=s(),_=s(),g=s(!1),y=s(!1);let h=null;(async()=>{try{let a=await i("2146688401");v.value=a.songs[0].al.picUrl}catch(a){console.log(a)}})();(async()=>{try{let a=await f("2146688401");_.value=a.data[0].url}catch(a){console.log(a)}})();const m=()=>{g.value=!g.value,y.value=!y.value,h||(h=d(),h.src=_.value),g.value?h.play():h.pause(),h.onEnded((()=>{g.value=!g.value,y.value=!y.value}))};return(a,s)=>{const d=u,i=p;return l(),e(d,{class:"player",ref:"player",style:c("background:url("+v.value+") no-repeat center/1000% 1000%")},{default:t((()=>[r(d,{class:"position"},{default:t((()=>[r(d,{class:"header"},{default:t((()=>[r(d,{class:"left"},{default:t((()=>[n("lef")])),_:1}),r(d,{class:"center"},{default:t((()=>[n("私人漫游 默认模式")])),_:1}),r(d,{class:"right"},{default:t((()=>[n("right")])),_:1})])),_:1}),r(d,{class:"play",onClick:m},{default:t((()=>[r(d,{class:o(["playImg",{paused:!y.value}])},{default:t((()=>[r(i,{mode:"heightFix",src:"/assets/white_circle-BqNO7vO7.png"})])),_:1},8,["class"]),r(d,{class:"bl_circle"},{default:t((()=>[r(i,{mode:"heightFix",src:"/assets/black_circle-BpXxhfCl.png"})])),_:1}),r(d,{class:o(["songPic",{paused:!y.value}])},{default:t((()=>[r(i,{src:v.value},null,8,["src"])])),_:1},8,["class"]),r(d,{class:"stylus"},{default:t((()=>[r(i,{src:"/assets/stylus-rkdmo8lr.png"})])),_:1}),r(d,{class:o({songPlay:g.value,songPause:!g.value})},null,8,["class"])])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-bf164cf9"]]);export{_ as default};
