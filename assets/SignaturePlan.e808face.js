import{_ as b}from"./Asset_2.286d657d.js";import{T as m}from"./Timer.23ff2429.js";import{h as f}from"./moment.9709ab41.js";import{_ as u,h as p,c as r,b as e,F as h,r as g,j as x,o as n,t as s,a as v,p as y,e as k}from"./index.12efce6f.js";const c=d=>(y("data-v-db0c106d"),d=d(),k(),d),w={class:"pb-10"},j={class:"container mx-auto px-2"},S=c(()=>e("div",{class:"text-center py-2"},[e("img",{src:b,alt:"",class:"mb-2 h-10 md:h-14 mx-auto"}),e("h1",{class:"text-2xl font-bold md:mb-5"}," Signarute Study Plan ")],-1)),D={class:"max-w-2xl bg-spin rounded-3xl p-[2px] mx-auto"},C={class:"space-y-3 bg-slate-50/90 text-black backdrop-blur-lg text-center p-5 rounded-3xl"},I={class:"font-semibold text-xl"},M={class:"font-semibold text-2xl"},T={class:"font-semibold"},P={class:"font-semibold"},A=c(()=>e("p",null,"End Time Remaining...",-1)),B={class:"py-4"},E={class:"py-2 flex gap-3 justify-center"},K=["href"],Y=["href"],F={class:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 md:grid-cols-3"},N={class:"flex flex-col justify-between bg-white text-black backdrop-blur-md border border-blue-400 min-h-[280px] text-center p-5 rounded-3xl"},Q={class:"font-semibold"},V={class:"font-semibold text-lg"},X={class:"font-semibold"},G={class:"font-semibold"},q={class:"py-2 flex gap-3 justify-center"},z=["href"],L=["href"],R={key:0},H=c(()=>e("div",{class:"flex justify-center items-center h-screen"},[e("div",{class:"loader animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"})],-1)),J=[H],O={__name:"SignaturePlan",setup(d){const l=p([]),_=p([]);(()=>{let o=[];fetch("https://script.google.com/macros/s/AKfycbzsnr4xdmifMGpA0Myxf0r-IdG622piLuvTXt2VkI1K0Xf2uTpQQ0tQj4612BxKRfpwXA/exec?type=signatureplan&sheet_id=1h1_k3qaqNjdKpduzHIxgMGKjD4BYr8y84uQgjx2Xdu8").then(a=>a.json()).then(a=>{l.value=a.routines,l.value.forEach(t=>{new Date(t.end).getTime()>=Date.now()&&o.length<1&&o.push(t)}),_.value=o}).catch(a=>{console.error(a)})})();const i=o=>f(o).format("DD MMMM YYYY");return(o,a)=>(n(),r("div",w,[e("div",j,[S,(n(!0),r(h,null,g(_.value,t=>(n(),r("div",{key:t.id},[e("div",D,[e("div",C,[e("h5",I,s(t.subject),1),e("h6",M,s(t.chapter),1),e("p",T," Starting at "+s(i(t.start)),1),e("p",P," Ending at "+s(i(t.end)),1),e("div",null,[A,v(m,{end:new Date(t.end).getTime()},null,8,["end"])]),e("div",B,[e("div",E,[e("a",{href:t.paid_class,target:"_blank",class:"px-4 rounded py-3 font-semibold bg-clip-border text-white bg-gradient-to-r hover:bg-gradient-to-l from-green-500 to-green-600"}," Paid Class ",8,K),e("a",{href:t.free_class,target:"_blank",class:"px-4 rounded py-3 font-semibold bg-clip-border text-white bg-gradient-to-r hover:bg-gradient-to-l from-green-500 to-green-600"},"Free Class",8,Y)])])])])]))),128)),e("div",F,[(n(!0),r(h,null,g(l.value,t=>(n(),r("div",{key:t.id},[e("div",N,[e("h5",Q,s(t.subject),1),e("h6",V,s(t.chapter),1),e("p",X," Start: "+s(i(t.start)),1),e("p",G," End: "+s(i(t.end)),1),e("div",q,[e("a",{href:t.paid_class,target:"_blank",class:"px-4 rounded py-3 font-semibold bg-clip-border text-white bg-gradient-to-r hover:bg-gradient-to-l from-green-500 to-green-600"}," Paid Class ",8,z),e("a",{href:t.free_class,target:"_blank",class:"px-4 rounded py-3 font-semibold bg-clip-border text-white bg-gradient-to-r hover:bg-gradient-to-l from-green-500 to-green-600"},"Free Class",8,L)])])]))),128))]),l.value.length<=3?(n(),r("div",R,J)):x("",!0)])]))}},te=u(O,[["__scopeId","data-v-db0c106d"]]);export{te as default};
