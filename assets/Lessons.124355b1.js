import{_ as w}from"./Asset_2.286d657d.js";import{i as d,j as $,c as r,b as e,a,w as l,t as u,u as i,k as g,F as C,g as j,l as N,r as E,o as c,f as L}from"./index.1a919530.js";import{s as S,a as V}from"./subjects.c16a4798.js";import{f as B,N as F,o as k,_ as M,U as R}from"./transition.7be68261.js";const U={class:"container mx-auto py-5 px-3 space-y-5"},q={class:"py-3 text-white"},z=e("img",{src:w,alt:"",class:"mb-3 h-10 mx-auto"},null,-1),D={class:"text-center text-3xl"},G={key:0,class:"text-white"},I={class:"text-center text-3xl"},O={key:1},P=e("h1",{class:"text-2xl font-semibold text-white text-center"},"Exam",-1),T={class:"grid mb-5 md:grid-cols-3 gap-4 my-4 md:w-1/2 mx-auto"},A=e("img",{class:"h-10 mx-2",src:"https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-exam-online-learning-photo3ideastudio-flat-photo3ideastudio-1.png"},null,-1),H=e("h1",{class:"text-xl font-semibold"}," Start Exam ",-1),J=[A,H],K=e("img",{class:"h-10 mx-2",src:"https://img.icons8.com/color/48/000000/idea.png"},null,-1),Q=e("h1",{class:"text-xl font-semibold"}," Solution ",-1),W=[K,Q],X=e("img",{class:"h-10 mx-2",src:"https://img.icons8.com/external-chloe-kerismaker/64/000000/external-Rank-business-management-chloe-kerismaker.png"},null,-1),Y=e("h1",{class:"text-xl font-semibold"}," Leaderboard ",-1),Z=[X,Y],ee={class:"pt-10"},te=e("h1",{class:"text-2xl font-semibold text-white text-center"},"Classes",-1),se={class:"grid sm:grid-cols-2 md:grid-cols-3 gap-3"},oe={class:"overflow-hidden rounded-2xl border"},ae=["src","alt"],le={key:0,class:"text-gray-900 pt-3 text-center"},ie={class:"text-2xl font-bold text-white"},ne=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),re={class:"fixed inset-0 overflow-y-auto"},ce={class:"flex min-h-full items-center justify-center p-4 text-center"},de={class:"mt-2"},ue={class:"text-sm text-gray-500"},fe={__name:"Lessons",setup(me){const n=d([]),p=N(),h=d(null),v=d(parseInt(p.params.chapter));$("biomission"+p.params.m).then(s=>{n.value=s.routines.filter(t=>t.chapter==p.params.chapter).map(t=>{let o=`https://img.youtube.com/vi/${t.video.replace("https://youtu.be/","")}/0.jpg`;return{title:t.title,thumbnail:o,exam:t.question,id:t.id,paper:t.paper}}),console.log(n.value),h.value=n.value[0].paper});const _=d(!1),m=d({type:"",messsage:""});function b(){_.value=!1}function x(s){m.value.type=s,m.value.messsage=`${s} will be available soon`,_.value=!0}return(s,t)=>{const f=E("router-link");return c(),r("div",U,[e("div",q,[a(f,{to:"/",class:"text-center text-3xl text-white"},{default:l(()=>[z]),_:1}),e("h1",D,u(s.$route.params.m)+".0 ",1)]),h.value?(c(),r("div",G,[e("h1",I,u(h.value==1?i(S)[v.value-1]:i(V)[v.value-1]),1)])):g("",!0),n.value.length>0?(c(),r("div",O,[P,e("div",T,[e("div",{onClick:t[0]||(t[0]=o=>x("Exam")),class:"text-gray-800 bg-gray-50 rounded-xl font-bold p-1 flex items-center gap-3"},J),e("div",{onClick:t[1]||(t[1]=o=>x("Solution")),class:"text-gray-800 bg-gray-50 rounded-xl font-bold p-1 flex items-center gap-3"},W),e("div",{onClick:t[2]||(t[2]=o=>x("Leaderboard")),class:"text-gray-800 bg-gray-50 rounded-xl font-bold p-1 flex items-center gap-3"},Z)])])):g("",!0),e("div",ee,[te,e("div",se,[(c(!0),r(C,null,j(n.value,(o,y)=>(c(),r("div",{key:y,class:"mt-4 glass rounded-2xl p-3"},[a(f,{to:`/mission/${s.$route.params.m}/${s.$route.params.chapter}/${o.id}`},{default:l(()=>[e("div",oe,[e("img",{class:"-mt-10 -mb-10 min-h-36",src:o.thumbnail,alt:o.title},null,8,ae)]),n.value.length>1?(c(),r("div",le,[e("h1",ie,"Part "+u(y+1),1)])):g("",!0)]),_:2},1032,["to"])]))),128))])]),a(i(B),{appear:"",show:_.value,as:"template"},{default:l(()=>[a(i(F),{as:"div",onClose:b,class:"relative z-10"},{default:l(()=>[a(i(k),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[ne]),_:1}),e("div",re,[e("div",ce,[a(i(k),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[a(i(M),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:l(()=>[a(i(R),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:l(()=>[L(u(m.value.type),1)]),_:1}),e("div",de,[e("p",ue,u(m.value.messsage),1)]),e("div",{class:"mt-4"},[e("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:b}," Got it, thanks! ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}};export{fe as default};
