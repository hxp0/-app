import{J as a,G as s}from"./index-LaPygNFG.js";var t=(a=>(a.HOMEPAGE_SLIDE_PLAYLIST="HOMEPAGE_SLIDE_PLAYLIST",a.HOMEPAGE_SLIDE_SONGLIST_ALIGN="HOMEPAGE_SLIDE_SONGLIST_ALIGN",a))(t||{});const i=()=>u({url:"https://zyxcl.xyz/music/api/dj/banner"}),l=()=>u({url:"https://zyxcl.xyz/music/api/homepage/block/page"}),c=a=>u({url:"https://zyxcl.xyz/music/api/playlist/detail",data:{id:a}}),p=a=>u({url:"https://zyxcl.xyz/music/api/comment/playlist",data:{id:a}}),u=({url:t,data:i})=>{const l=a("curCookie")||"",c=l?{cookie:l}:{};return new Promise(((a,l)=>{s({url:t,data:{...i,...c},withCredentials:!0,success:s=>{a(s.data)},fail:l})}))},y=()=>u({url:"https://zyxcl.xyz/music/api/search/hot/detail"}),r=a=>u({url:"https://zyxcl.xyz/music/api/search/suggest",data:{keywords:a,type:"mobile"}}),e=a=>u({url:"https://zyxcl.xyz/music/api/search",data:{keywords:a}}),x=a=>u({url:"https://zyxcl.xyz/music/api/song/url",data:{id:a}}),z=a=>u({url:"https://zyxcl.xyz/music/api/song/detail",data:{ids:a}}),d=()=>u({url:"https://zyxcl.xyz/music/api/search/default"}),h=a=>u({url:"https://zyxcl.xyz/music/api/captcha/sent",data:{phone:a}}),o=(a,s)=>u({url:"https://zyxcl.xyz/music/api/captcha/verify",data:{phone:a,captcha:s}}),m=(a,s)=>u({url:"https://zyxcl.xyz/music/api/login/cellphone",data:{phone:a,captcha:s}}),n=()=>u({url:"https://zyxcl.xyz/music/api/login/qr/key"}),g=a=>u({url:"https://zyxcl.xyz/music/api/login/qr/create",data:{key:a,qrimg:!0}}),E=a=>u({url:"https://zyxcl.xyz/music/api//login/qr/check",data:{key:a}}),L=(a,s)=>u({url:"https://zyxcl.xyz/music/api//login",data:{email:a,password:s,md5_password:"md5"}}),S=()=>u({url:"https://zyxcl.xyz/music/api/login/status"}),_=a=>u({url:"https://zyxcl.xyz/music/api/user/detail",data:{uid:a}}),k=a=>u({url:"https://zyxcl.xyz/music/api/user/playlist",data:{uid:a}}),I=()=>u({url:"https://zyxcl.xyz/music/api/logout"});export{h as C,t as S,l as a,x as b,p as c,c as d,d as e,r as f,i as g,e as h,L as i,g as j,E as k,S as l,o as m,m as n,I as o,z as p,n as q,k as r,y as s,_ as u};
