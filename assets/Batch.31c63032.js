import{_ as l}from"./Asset_2.286d657d.js";import{i,c as e,b as t,a as r,w as n,F as d,g as _,r as h,o as s,t as x}from"./index.88b53a1e.js";const m={class:"min-h-screen"},u={class:"text-center py-5"},p=t("img",{src:l,alt:"",class:"mb-3 h-10 mx-auto"},null,-1),g=t("h1",{class:"text-center text-3xl text-white"},"Select Batch",-1),v={key:0,class:"grid md:grid-cols-2 max-w-2xl mx-auto gap-4"},B={class:"card border-0 shadow-sm"},f={class:"card-body text-center"},w={class:"text-3xl"},k={key:1,class:"text-center text-2xl font-semibold mt-5"},N={__name:"Batch",setup(y){const o=i(["Batch 24","Batch 25"]);return(b,C)=>{const c=h("router-link");return s(),e("div",m,[t("div",u,[r(c,{to:"/",class:"text-center text-3xl text-white"},{default:n(()=>[p]),_:1}),g]),o.value.length>0?(s(),e("div",v,[(s(!0),e(d,null,_(o.value,a=>(s(),e("div",{class:"p-6 border rounded-lg bg-gray-800/20 text-white",key:a},[r(c,{to:`/exams/${a}`,class:"text-decoration-none"},{default:n(()=>[t("div",B,[t("div",f,[t("h5",w," HSC "+x(a.replace("Batch ",""))+" Batch ",1)])])]),_:2},1032,["to"])]))),128))])):(s(),e("div",k," Please wait... "))])}}};export{N as default};
