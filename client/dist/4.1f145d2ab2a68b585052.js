(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{107:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=()=>"https://portfolio-mick-server.herokuapp.com"},108:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return s}));var o=n(107);const a=Object(o.a)();const l=async t=>(console.log(JSON.stringify(t)),await fetch(a+"/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>(localStorage.setItem("authToken",t.token),t))),i=async t=>{console.log(t);let e=await fetch(a+"/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>(localStorage.setItem("authToken",t.token),t));return console.log(e),e},c=async()=>{if(localStorage.getItem("authToken")){return await fetch(a+"/auth/verify",{method:"get",headers:(t={"Content-Type":"application/json"},localStorage.authToken?{...t,Authorization:`Bearer ${localStorage.authToken}`}:t)}).then(t=>t.json()).then(t=>t)}var t;return!1},s=async()=>(localStorage.removeItem("authToken"),{"Content-Type":"application/json"},"logged out")},130:function(t,e,n){var o=n(1),a=n(131);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var l={insert:"head",singleton:!1},i=(o(a,l),a.locals?a.locals:{});t.exports=i},131:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e),n.d(e,"Signup",(function(){return l}));var o=n(108),a=n(0);n(130);const l=async()=>{let t=Object(a.e)(".main-content-scrollable");for(;t.childNodes.length>1;)t.removeChild(t.lastChild);let e={};const n=Object(a.c)("div","sign-up"),l=Object(a.c)("form","login-form");["username","email","password"].map(t=>{let n=l.appendChild(Object(a.c)("label","login-label"));n.setAttribute("for",t),n.innerText=t;let o=l.appendChild(Object(a.c)("input",`login-${t}`));o.setAttribute("id",t),o.setAttribute("name",t),o.addEventListener("keyup",t=>{e[t.target.name]=t.target.value,console.log(t.target.value,e)})});let i=await Object(o.d)();console.log(i),i.errors&&(console.log("logout due to error"),Object(o.b)());const c=Object(a.c)("button","submit-login");c.innerText="signUp",l.appendChild(c),l.addEventListener("submit",async t=>{t.preventDefault(),console.log("body",e);let n=await Object(o.c)(e);console.log(n)});const s=Object(a.c)("button","login");s.classList.add("login-btn"),s.innerText=i?"logout":"login",s.addEventListener("click",async()=>{if(console.log(i),i||0===Object.keys(e).length||localStorage.authToken){let t=await Object(o.b)();console.log(t),"logged out"===t&&(s.innerText="login")}else{e={auth:{...e}};await Object(o.a)(e);i=await Object(o.d)(),console.log(i),s.innerText=i&&"logout"}}),n.appendChild(l),n.appendChild(s),t.appendChild(n)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXJ2aWNlcy9CYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0FwaUF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9naW4vc2lnbnVwLnNjc3M/ZTU4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2dpbi9TaWduVXAuanMiXSwibmFtZXMiOlsiQmFzZVVybCIsImJhc2VVcmwiLCJzaWduVXAiLCJhc3luYyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJqc29uIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImxvZ2luIiwicmVzIiwidmVyaWZ5IiwiZ2V0SXRlbSIsImF1dGhUb2tlbiIsIkF1dGhvcml6YXRpb24iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiYXBpIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibW9kdWxlIiwiaSIsIm9wdGlvbnMiLCJleHBvcnRlZCIsImxvY2FscyIsImV4cG9ydHMiLCJTaWdudXAiLCJtYWluQ29udGVudCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInNpZ25VcERpdiIsImZvcm0iLCJtYXAiLCJlbCIsImxhYmVsIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFVzZXIiLCJlcnJvcnMiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25VcFJlcyIsImxvZ2luQnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsInJlc0xvZ291dCIsImF1dGgi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QWMsWUFBSyxTQUFVLFNBQ25DQSxFQUFZQyxVQUFVQyxJQUFJLGFBQzFCRixFQUFZWixVQUFZTyxFQUFjLFNBQVcsUUFFakRLLEVBQVlWLGlCQUFpQixRQUFTaEQsVUFFcEMsR0FEQUUsUUFBUUMsSUFBSWtELEdBQ1BBLEdBQTRDLElBQTdCUSxPQUFPQyxLQUFLN0QsR0FBTW1DLFFBQWlCeEIsYUFBYU8sVUFTN0QsQ0FDTCxJQUFJNEMsUUFBa0IsY0FDdEI3RCxRQUFRQyxJQUFJNEQsR0FHTSxlQUFkQSxJQUNGTCxFQUFZWixVQUFZLGFBZm1ELENBQzdFN0MsRUFBTyxDQUFFK0QsS0FBTSxJQUFLL0QsVUFFSCxZQUFNQSxHQUV2Qm9ELFFBQW9CLGNBQ3BCbkQsUUFBUUMsSUFBSWtELEdBRVpLLEVBQVlaLFVBQVlPLEdBQWUsWUFhM0NkLEVBQVVLLFlBQVlKLEdBQ3RCRCxFQUFVSyxZQUFZYyxHQUN0QnhCLEVBQVlVLFlBQVlMIiwiZmlsZSI6IjQuMWYxNDVkMmFiMmE2OGI1ODUwNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBCYXNlVXJsID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnaHR0cHM6Ly9wb3J0Zm9saW8tbWljay1zZXJ2ZXIuaGVyb2t1YXBwLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xuXG59IiwiaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuL0Jhc2VVcmwuanNcIlxuY29uc3QgYmFzZVVybCA9IEJhc2VVcmwoKVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SGVhZGVycyhoZWFkZXJzKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuYXV0aFRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmhlYWRlcnMsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmF1dGhUb2tlbn1gLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjbGVhckhlYWRlcnMgPSAoaGVhZGVycykgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmhlYWRlcnMsXG4gICAgQXV0aG9yaXphdGlvbjogbnVsbCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2lnblVwID0gYXN5bmMgKGJvZHkpID0+IHtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYm9keSkpXG5cbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyBcIi91c2Vyc1wiLCB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gIH0pXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgZGF0YS50b2tlbilcblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGNvbnNvbGUubG9nKGJvZHkpXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChiYXNlVXJsICsgXCIvYXV0aC9sb2dpblwiLCB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gIH0pXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLmpzb24oKVxuXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIGRhdGEudG9rZW4pXG5cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGNvbnN0IHZlcmlmeSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKVxuICAvLyBjb25zb2xlLmxvZyh0b2tlbilcbiAgaWYgKHRva2VuKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIFwiL2F1dGgvdmVyaWZ5XCIsIHtcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgIGhlYWRlcnM6IHNldEhlYWRlcnMoe1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcblxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaGVyZVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSlcbiAgICBsZXQgdXNlciA9IGF3YWl0IHZlcmlmeSgpXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICBpZiAoIXVzZXIuZXJyb3JzKSB7XG4gICAgICAvLyBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ291dFwiXG4gICAgICAvLyBsb2dnZWRJbiA9IHRydWVcbiAgICAgIHJldHVybiB1c2VyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGxvZ2luQnV0dG9uLmlubmVyVGV4dCA9IFwibG9naW5cIlxuXG4gICAgLy8gbG9nZ2VkSW4gPSBmYWxzZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKVxuICBjbGVhckhlYWRlcnMoe1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9KVxuICByZXR1cm4gXCJsb2dnZWQgb3V0XCJcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZ251cC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7XG4gIHNpZ25VcCxcbiAgbG9naW4sXG4gIHZlcmlmeSxcbiAgbG9nb3V0LFxufSBmcm9tIFwiLi4vU2VydmljZXMvQXBpQXV0aC5qc1wiXG5pbXBvcnQgeyBjZWNsLCBxcyB9IGZyb20gXCIuLi9IZWxwZXJzL2RvbUhlbHBlci5qc1wiXG5pbXBvcnQgXCIuL3NpZ251cC5zY3NzXCJcblxuXG5leHBvcnQgY29uc3QgU2lnbnVwID0gYXN5bmMgKCkgPT4ge1xuXG4gIGxldCBtYWluQ29udGVudCA9IHFzKFwiLm1haW4tY29udGVudC1zY3JvbGxhYmxlXCIpXG4gIHdoaWxlIChtYWluQ29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0Q2hpbGQpXG4gIH1cbiAgXG4gIC8qKioqKioqKioqKioqXG4gICAgIE1BS0UgRk9STVxuICAgKioqKioqKioqKioqL1xuICBjb25zdCBpbnB1dHMgPSBbXCJ1c2VybmFtZVwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIl1cbiAgbGV0IGJvZHkgPSB7fVxuICBjb25zdCBzaWduVXBEaXYgPSBjZWNsKFwiZGl2XCIsIFwic2lnbi11cFwiKVxuICBjb25zdCBmb3JtID0gY2VjbChcImZvcm1cIiwgXCJsb2dpbi1mb3JtXCIpXG5cbiAgaW5wdXRzLm1hcCgoZWwpID0+IHtcbiAgICBsZXQgbGFiZWwgPSBmb3JtLmFwcGVuZENoaWxkKGNlY2woYGxhYmVsYCwgYGxvZ2luLWxhYmVsYCkpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKGBmb3JgLCBlbClcbiAgICBsYWJlbC5pbm5lclRleHQgPSBlbFxuICAgIGxldCBpbnB1dCA9IGZvcm0uYXBwZW5kQ2hpbGQoY2VjbChcImlucHV0XCIsIGBsb2dpbi0ke2VsfWApKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgaWRgLCBlbClcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYG5hbWVgLCBlbClcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcblxuICAgICAgYm9keVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSwgYm9keSlcbiAgICB9KVxuXG4gIH0pXG5cbiAvKioqKioqKioqKioqKioqKipcbiAgICBHRVQgQ1VSUiBVU0VSXG4gICoqKioqKioqKioqKioqKiovXG4gIGxldCBjdXJyZW50VXNlciA9IGF3YWl0IHZlcmlmeSgpXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICBpZiAoY3VycmVudFVzZXIuZXJyb3JzKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ291dCBkdWUgdG8gZXJyb3InKVxuICAgIGxvZ291dCgpXG4gIH1cblxuICAvKioqKioqKioqKioqKlxuICAgIFNJR04gVVAgQlROXG4gICAqKioqKioqKioqKiovXG4gIGNvbnN0IGJ1dHRvbiA9IGNlY2woXCJidXR0b25cIiwgXCJzdWJtaXQtbG9naW5cIilcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwic2lnblVwXCJcbiAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKFwiYm9keVwiLCBib2R5KVxuICAgIGxldCBzaWduVXBSZXMgPSBhd2FpdCBzaWduVXAoYm9keSlcbiAgICBjb25zb2xlLmxvZyhzaWduVXBSZXMpXG4gIH0pXG5cbiAgLyoqKioqKioqKioqKipcbiAgICAgTE9HSU4gQlROXG4gICAqKioqKioqKioqKiovXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gY2VjbChcImJ1dHRvblwiLCBcImxvZ2luXCIpXG4gIGxvZ2luQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWJ0bicpXG4gIGxvZ2luQnV0dG9uLmlubmVyVGV4dCA9IGN1cnJlbnRVc2VyID8gJ2xvZ291dCcgOiAnbG9naW4nXG5cbiAgbG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcbiAgICBpZiAoIWN1cnJlbnRVc2VyICYmIE9iamVjdC5rZXlzKGJvZHkpLmxlbmd0aCAhPT0gMCAmJiAhbG9jYWxTdG9yYWdlLmF1dGhUb2tlbikge1xuICAgICAgYm9keSA9IHsgYXV0aDogeyAuLi5ib2R5IH0gfVxuICAgICAgLy8gY29uc29sZS5sb2coYm9keSlcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgbG9naW4oYm9keSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICBjdXJyZW50VXNlciA9IGF3YWl0IHZlcmlmeSgpXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcblxuICAgICAgbG9naW5CdXR0b24uaW5uZXJUZXh0ID0gY3VycmVudFVzZXIgJiYgJ2xvZ291dCdcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlc0xvZ291dCA9IGF3YWl0IGxvZ291dCgpXG4gICAgICBjb25zb2xlLmxvZyhyZXNMb2dvdXQpXG5cblxuICAgICAgaWYgKHJlc0xvZ291dCA9PT0gJ2xvZ2dlZCBvdXQnKSB7XG4gICAgICAgIGxvZ2luQnV0dG9uLmlubmVyVGV4dCA9IFwibG9naW5cIlxuXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHNpZ25VcERpdi5hcHBlbmRDaGlsZChmb3JtKVxuICBzaWduVXBEaXYuYXBwZW5kQ2hpbGQobG9naW5CdXR0b24pXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNpZ25VcERpdilcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9