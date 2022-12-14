import{_ as h}from"./lodash.1779dd2a.js";import{_ as p,O as g,c as l,b as t,a as x,w as f,I as b,J as y,F as v,g as w,r as R,o as n,n as k,t as i,p as L,e as S}from"./index.07f69871.js";import{_ as C}from"./Asset_2.286d657d.js";const M={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){this.url="https://script.google.com/macros/s/AKfycbxHZMx1M1oGvp-wPb7mHwQrfkDBpkS3BG0WtciUJ_HHJTswLgJ2Ba4f8XBLNHOkjYEERQ/exec?sheet="+this.$route.query.q,fetch(this.url).then(e=>e.json()).then(e=>{let o=e;this.testResults=h.sortBy(o.map(r=>({...r,attempt:r.attempt||1})),[r=>-r.score,"duration"]).map((r,u)=>({position:u+1,...r})),this.allresult=this.testResults})},millisToMinutesAndSeconds(e){var o=Math.floor(e/6e4),r=(e%6e4/1e3).toFixed(0);return o+":"+(r<10?"0":"")+r},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let o={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return o[e]?o[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return g.state.user}}},c=e=>(L("data-v-7a66831d"),e=e(),S(),e),B={class:"leaderboard"},H={class:"py-10"},I={class:"text-center"},T=c(()=>t("img",{src:C,alt:"",class:"mb-3 h-10 mx-auto"},null,-1)),j=c(()=>t("h1",{class:"my-4 text-3xl font-bold text-center text-gray-900 dark:text-white"},"MCQ Leaderboard-101",-1)),D={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},J={class:"form-control"},N={class:"mt-4"},A={key:0},E=["id"],F={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},Q={class:"flex-1 ml-2 text-gray-900 md:ml-4"},V={class:"text-lg font-semibold"},q={class:"text-sm text-gray-500"},G={class:"p-2 text-gray-900 border-2 border-blue-400"},K={key:1,class:"text-center"},O=c(()=>t("button",{class:"btn loader btn-primary"},"Loading...",-1)),U=[O];function z(e,o,r,u,a,d){const _=R("router-link");return n(),l("div",B,[t("div",H,[t("div",I,[x(_,{to:"/",class:"text-center text-3xl text-white"},{default:f(()=>[T]),_:1})]),j,t("div",D,[t("div",J,[b(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>a.search=s),placeholder:"Search by Name/College",onKeyup:o[1]||(o[1]=(...s)=>d.searchResult&&d.searchResult(...s)),class:"input input-primary input-bordered"},null,544),[[y,a.search]])]),t("div",N,[a.allresult.length>0?(n(),l("div",A,[(n(!0),l(v,null,w(a.testResults,(s,m)=>(n(),l("div",{key:m,id:s.reg,class:k(`${d.getborderStyle(s.position)} flex justify-between items-center p-5   rounded  shadow-md ${s.reg=="9089"?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[t("span",F,i(s.position),1),t("div",Q,[t("h2",V,i(s.name),1),t("p",null,i(s.college),1),t("p",q," Duration: "+i(d.millisToMinutesAndSeconds(s.duration))+" minutes ",1)]),t("div",G,i(s.score),1)],10,E))),128))])):(n(),l("div",K,U))])])])])}const Y=p(M,[["render",z],["__scopeId","data-v-7a66831d"]]);export{Y as default};
