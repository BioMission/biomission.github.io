import{_ as P}from"./Asset_2.286d657d.js";import{_ as V}from"./lodash.085d3991.js";import{T as $}from"./Timer.3543f05f.js";import{i,j as R,c as l,b as e,a as d,w as u,F as v,g as j,k as D,u as p,n as q,t as o,m as G,r as O,o as s,h as E,f as w,l as W}from"./index.c4b8737f.js";import{f as H,N as I,o as A,V as J,U as K}from"./transition.7a01cd7a.js";const X={class:"min-h-screen"},Y={class:"text-center py-5"},Z=e("img",{src:P,alt:"",class:"mb-3 h-10 mx-auto"},null,-1),ee=e("h1",{class:"text-center text-3xl text-white"},"Cycle",-1),te={key:0,class:"container py-5 mx-auto"},se={key:0,class:"max-w-2xl mx-auto space-y-3 mb-5"},ae={class:"text-xl font-bold text-gray-800"},le={class:"text-xl font-bold text-gray-800"},oe={key:0,class:"text-lg font-bold text-gray-800"},ne={class:"font-semibold text-gray-600"},ie={class:"font-semibold text-gray-600"},re={class:"font-semibold text-gray-600"},ce={class:"py-3"},de={key:0,class:"flex flex-col justify-center space-x-2"},ue=e("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),me={key:1,class:"flex flex-col justify-center space-x-2"},xe=e("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),_e={key:2,class:"flex flex-col justify-center space-x-2"},pe=e("p",{class:"text-sm font-semibold text-center"}," Class Time Remaining",-1),fe={class:"space-x-4 space-y-2 sm:space-y-0"},ge=["onClick"],he=w(" Solve "),be=w(" Leaderboard "),ye={class:"text-center font-semibold border-b py-2 text-white"},ve={class:"space-y-2"},we=["onClick"],ke={key:2,class:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5"},Ce={class:"text-xl font-bold text-gray-800"},je={class:"text-lg font-bold text-gray-800"},De={class:"font-semibold text-gray-600"},Ee={class:"font-semibold text-gray-600"},Te=e("p",{class:"font-semibold text-gray-700"},"Class",-1),$e={class:"font-semibold text-gray-600"},Se=e("p",{class:"font-semibold text-gray-700"},"Exam",-1),Me={class:"font-semibold text-gray-600 pb-3"},Qe={class:"flex flex-wrap items-center justify-center gap-3"},Ne=["onClick"],Le=w("MCQ Solve "),Ve=w(" MCQ Leaderboard "),Re={key:1,class:"py-10 text-center"},qe=e("button",{class:"btn btn-circle loading btn-xl"},null,-1),Ae=e("p",{class:"dark:text-white"},"Please wait...",-1),Be=[qe,Ae],Fe={key:2},Ue=e("div",{class:"flex flex-col items-center justify-center"},[e("div",{class:"text-center"},[e("h1",{class:"text-3xl text-gray-500"},"No Class"),e("p",{class:"text-gray-500"},"No Class is available for this course")])],-1),ze=[Ue],Pe={class:"fixed inset-0 z-10 overflow-y-auto"},Ge={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},Oe=e("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),We={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},He={class:"mt-2"},Ie={class:"text-sm text-gray-500"},Je={key:0,class:"lg:sticky bottom-0 md:px-20 px-5 py-2 gap-4 items-center bg-gray-700/70 backdrop-blur-sm text-gray-50 shadow border-t border-gray-600 flex flex-col md:flex-row justify-center md:justify-between"},Ke=["href"],at={__name:"Exams",setup(Xe){const S=W(),f=G();i(!1);const h=i([]),B=i([]),M=i(f.query.subject),Q=i(f.query.chapter);i("");const F=i({}),b=i({show:!1,title:"",message:""}),N=n=>{S.push(`/exam/${n}`)};function g(n){b.value={show:!0,title:`${n} will be available soon`,message:`We are working on ${n}. Please check back later.`}}function L(){b.value={show:!1,title:"",message:""}}const c=i([]),y=i([]),k=i([]),T=i(!0),C=i(null);R("tagline").then(n=>{C.value=n.routines[0]}),R("allexams").then(n=>{c.value=n.routines.filter(a=>a.chapter),f.params.batch&&f.params.batch!=="All"&&(c.value=c.value.filter(a=>a.batch===f.params.batch)),y.value.length<3&&c.value.forEach(a=>{new Date(a.upore_thakbo).getTime()>=Date.now()&&y.value.length<2&&y.value.push({...a,date:new Date(a.date_time).getTime()})}),c.value.reverse(),h.value=[...new Set(c.value.map(a=>a.subject))],h.value=h.value.map(a=>({name:a,chapters:[...new Set(c.value.filter(r=>r.subject===a).map(r=>r.chapter))]})),U(),T.value=!1});const U=()=>{k.value=V.filter(c.value,V.conforms(F.value)),B.value=new Set(k.value.map(n=>n.chapter))},z=(n,a)=>{M.value=n,Q.value=a,S.push({query:{subject:n,chapter:a}}),k.value=c.value.filter(r=>r.subject===M.value&&r.chapter===Q.value)},m=i(Date.now());return(n,a)=>{const r=O("router-link");return s(),l(v,null,[e("div",X,[e("div",Y,[d(r,{to:"/",class:"text-center text-3xl text-white"},{default:u(()=>[Z]),_:1}),ee]),c.value.length>0&&!T.value?(s(),l("div",te,[y.value.length>0?(s(),l("div",se,[(s(!0),l(v,null,j(y.value,(t,_)=>(s(),l("div",{class:"p-5 space-y-1 text-center border border-dashed shadow dark:bg-white rounded-xl bg-gray-50",key:_},[e("h1",{class:q(["text-2xl font-semibold text-center",{"text-red-500 animate-pulse":t.live_class,"text-green-500":!t.live_class}])},o(t.live_class?"On going...":"Upcoming Class"),3),e("h2",ae,o(t.subject),1),e("h2",le,o(t.chapter),1),t.topic?(s(),l("h2",oe,o(t.topic),1)):D("",!0),e("p",ne,"Class Start: "+o(t.date_time),1),e("p",ie,"Exam Start: "+o(t.start_time),1),e("p",re,o(t.instructor),1),e("div",ce,[new Date(t.start_time).getTime()>m.value?(s(),l("div",de,[ue,d($,{end:new Date(t.start_time)},null,8,["end"])])):new Date(t.end_time)>new Date(m.value)?(s(),l("div",me,[xe,d($,{end:new Date(t.end_time)},null,8,["end"])])):new Date(t.date_time)>new Date(m.value)?(s(),l("div",_e,[pe,d($,{end:new Date(t.date_time)},null,8,["end"])])):D("",!0)]),e("div",fe,[new Date(t.start_time).getTime()<m.value?(s(),l("button",{key:0,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800",onClick:x=>N(t.id)}," Exam ",8,ge)):(s(),l("button",{key:1,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800",onClick:a[0]||(a[0]=x=>g("MCQ Exam"))}," Exam ")),new Date(t.end_time).getTime()<m.value?(s(),E(r,{key:2,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800",to:`/solution/${t.id}`},{default:u(()=>[he]),_:2},1032,["to"])):(s(),l("button",{key:3,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800",onClick:a[1]||(a[1]=x=>g("MCQ Solve"))}," Solve ")),new Date(t.start_time).getTime()<m.value?(s(),E(r,{key:4,class:"mx-2 inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800",to:`/ranking/${t.id}`},{default:u(()=>[be]),_:2},1032,["to"])):(s(),l("button",{key:5,class:"mx-2 inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800",onClick:a[2]||(a[2]=x=>g("Leaderboard"))}," Leaderboard "))])]))),128))])):D("",!0),p(f).query.chapter?(s(),l("div",ke,[(s(!0),l(v,null,j(k.value,(t,_)=>(s(),l("div",{class:"p-5 space-y-1 text-center border border-dotted dark:bg-white rounded-2xl bg-blue-50",key:_},[e("h2",Ce,o(t.subject),1),e("h2",je,o(t.chapter),1),e("p",De,o(t.topic),1),e("p",Ee,o(t.instructor),1),Te,e("p",$e,o(t.date_time),1),Se,e("p",Me,o(t.start_time),1),e("div",Qe,[new Date(t.start_time).getTime()<m.value?(s(),l("button",{key:0,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800 text-xs",onClick:x=>N(t.id)}," MCQ Exam ",8,Ne)):(s(),l("button",{key:1,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800 text-xs",onClick:a[3]||(a[3]=x=>g("MCQ Exam"))}," MCQ Exam ")),new Date(t.end_time).getTime()<m.value?(s(),E(r,{key:2,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800 text-xs",to:`/solution/${t.id}`},{default:u(()=>[Le]),_:2},1032,["to"])):(s(),l("button",{key:3,class:"inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800 text-xs",onClick:a[4]||(a[4]=x=>g("MCQ Solve"))}," MCQ Solve ")),new Date(t.start_time).getTime()<m.value?(s(),E(r,{key:4,class:"mx-2 inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800 text-xs",to:`/ranking/${t.id}`},{default:u(()=>[Ve]),_:2},1032,["to"])):(s(),l("button",{key:5,class:"mx-2 inline-flex items-center justify-center gap-1 p-2 text-white rounded-full bg-gray-800 text-xs",onClick:a[5]||(a[5]=x=>g("Leaderboard"))}," MCQ Leaderboard "))])]))),128))])):(s(),l("div",{key:1,class:q(["gap-4 max-w-xl mx-auto grid grid-cols-1",{" md:grid-cols-2":h.value.length>1}])},[(s(!0),l(v,null,j(h.value,t=>(s(),l("div",{class:"space-y-2 border p-2",key:t.name},[e("p",ye,o(t.name),1),e("div",ve,[(s(!0),l(v,null,j(t.chapters,_=>(s(),l("div",{key:_,onClick:x=>z(t.name,_),class:"text-center py-2 border rounded-lg border-white text-white bg-gray-900 cursor-pointer hover:bg-white hover:text-black"},o(_),9,we))),128))])]))),128))],2))])):T.value?(s(),l("div",Re,Be)):(s(),l("div",Fe,ze)),d(p(H),{appear:"",show:b.value.show,as:"template"},{default:u(()=>[d(p(I),{as:"div",onClose:L},{default:u(()=>[e("div",Pe,[e("div",Ge,[d(p(A),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[d(p(J),{class:"fixed inset-0"})]),_:1}),Oe,d(p(A),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[e("div",We,[d(p(K),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:u(()=>[w(o(b.value.title),1)]),_:1}),e("div",He,[e("p",Ie,o(b.value.message),1)]),e("div",{class:"mt-4"},[e("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:L}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])]),C.value?(s(),l("div",Je,[e("p",null,o(C.value.title),1),e("a",{href:C.value.link,target:"_blank",class:"bg-blue-500 p-2 rounded-md"}," \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u098F\u0996\u09BE\u09A8\u09C7 ",8,Ke)])):D("",!0)],64)}}};export{at as default};
