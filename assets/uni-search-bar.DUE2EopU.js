import{a2 as e,a3 as a,k as l,l as t,o as c,c as s,w as r,a as o,b as n,d as i,g as h,t as u,f as d,i as p,a4 as m,h as f}from"./index-8E7-gHrl.js";import{_ as y}from"./uni-icons.DGjAAeZp.js";import{_ as b}from"./plugin-vueexport-helper.BCo6x5W8.js";const x={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:_}=e(x);const g=b({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#000000"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||_("uni-search-bar.cancel")},placeholderText(){return this.placeholder||_("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.searchVal="",this.$nextTick((()=>{this.$emit("clear",{value:""})}))},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,a())},confirm(){a(),this.$emit("confirm",{value:this.searchVal})},blur(){a(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,a,b,x,_,g){const V=l(t("uni-icons"),y),w=p,k=m,S=f;return c(),s(w,{class:"uni-searchbar"},{default:r((()=>[o(w,{style:n({borderRadius:b.radius+"px",backgroundColor:b.bgColor}),class:"uni-searchbar__box",onClick:g.searchClick},{default:r((()=>[o(w,{class:"uni-searchbar__box-icon-search"},{default:r((()=>[i(e.$slots,"searchIcon",{},(()=>[o(V,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),_.show||_.searchVal?(c(),s(k,{key:0,focus:_.showSync,disabled:b.readonly,placeholder:g.placeholderText,maxlength:b.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:_.searchVal,"onUpdate:modelValue":a[0]||(a[0]=e=>_.searchVal=e),style:n({color:b.textColor}),onConfirm:g.confirm,onBlur:g.blur,onFocus:g.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","style","onConfirm","onBlur","onFocus"])):(c(),s(S,{key:1,class:"uni-searchbar__text-placeholder"},{default:r((()=>[h(u(b.placeholder),1)])),_:1})),_.show&&("always"===b.clearButton||"auto"===b.clearButton&&""!==_.searchVal)&&!b.readonly?(c(),s(w,{key:2,class:"uni-searchbar__box-icon-clear",onClick:g.clear},{default:r((()=>[i(e.$slots,"clearIcon",{},(()=>[o(V,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):d("",!0)])),_:3},8,["style","onClick"]),"always"===b.cancelButton||_.show&&"auto"===b.cancelButton?(c(),s(S,{key:0,onClick:g.cancel,class:"uni-searchbar__cancel"},{default:r((()=>[h(u(g.cancelTextI18n),1)])),_:1},8,["onClick"])):d("",!0)])),_:3})}],["__scopeId","data-v-206a2f37"]]);export{g as _};
