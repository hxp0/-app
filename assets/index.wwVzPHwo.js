import{H as a}from"./index-CYi5K3jv.js";var s=(a=>(a.HOMEPAGE_SLIDE_PLAYLIST="HOMEPAGE_SLIDE_PLAYLIST",a.HOMEPAGE_SLIDE_SONGLIST_ALIGN="HOMEPAGE_SLIDE_SONGLIST_ALIGN",a))(s||{});const t=()=>l({url:"https://zyxcl.xyz/music/api/dj/banner"}),c=()=>l({url:"https://zyxcl.xyz/music/api/homepage/block/page"}),l=({url:s,data:t})=>new Promise(((c,l)=>{a({url:s,data:t,success:a=>{c(a.data)},fail:l})})),p=()=>l({url:"https://zyxcl.xyz/music/api/search/hot/detail"}),i=a=>l({url:"https://zyxcl.xyz/music/api/search/suggest",data:{keywords:a,type:"mobile"}}),e=a=>l({url:"https://zyxcl.xyz/music/api/search",data:{keywords:a}}),u=a=>l({url:"https://zyxcl.xyz/music/api/song/url",data:{id:a}}),r=a=>l({url:"https://zyxcl.xyz/music/api/song/detail",data:{ids:a}}),y=()=>l({url:"https://zyxcl.xyz/music/api/search/default"}),x=a=>l({url:"https://zyxcl.xyz/music/api/captcha/sent",data:{phone:a}}),h=(a,s)=>l({url:"https://zyxcl.xyz/music/api/login/cellphone",data:{phone:a,captcha:s}});export{x as C,s as S,c as a,u as b,y as c,i as d,e,h as f,t as g,r as p,p as s};