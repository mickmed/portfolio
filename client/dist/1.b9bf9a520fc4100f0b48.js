(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"EditProject",(function(){return l}));var o=n(3),a=n(95),c=n(96),i=n(99),s=n(0);const l=async(e,t,n)=>{if(console.log("add",n),"addProject"===n)for(let e in t)t[e]="";let l={},d=e=>{console.log(e.target.name,e.target.value),l[e.target.name]=e.target.value,console.log("cmon",l)},r=Object(o.c)("edit-project-form"),p=Object(s.c)("div","edit-form-inputs");r.appendChild(p),Object.keys(t).forEach(e=>{if("id"!==e&&"technologies"!==e&&"created_at"!==e&&"updated_at"!==e){l[e]=t[e];const a=Object(o.d)({className:"edit-form-input",name:e,type:"text",value:"addProject"===n?"":l[e],placeholder:e,handleChange:d});p.appendChild(a)}});const h=Object(s.c)("div","edit-form-checkboxes");r.appendChild(h),(await Object(a.a)()).map(e=>{let a;void 0===n&&t.technologies.forEach(t=>{e.name===t.name&&(console.log(e.name,t.name),a="checked")});let c=Object(o.b)({className:"edit-project-chkbox",name:e.name,id:e.name,value:e.id,checked:"addProject"===n?"":a});h.appendChild(c),h.appendChild(Object(o.e)("tech-box-label",e.name,"tech-box"))}),r.appendChild(Object(o.a)("edit-project-button","submit","addProject"===n?"add new project":"submit")),Object(s.b)(e,r),r.addEventListener("submit",async e=>{e.preventDefault(),console.log("add",n);const o=document.querySelectorAll("input[type=checkbox]:checked");console.log(o,l),l.technologies=[],o.forEach(e=>{l.technologies.push(e.value)}),console.log("add",l),"addProject"===n?await Object(c.a)(l):await Object(c.d)(l,t.id),await Object(i.Projects)()})}},103:function(e,t,n){var o=n(1),a=n(104);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1},i=(o(a,c),a.locals?a.locals:{});e.exports=i},104:function(e,t,n){},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=()=>"https://portfolio-mick-server.herokuapp.com"},93:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));var o=n(92);const a=Object(o.a)();const c=async e=>(console.log(JSON.stringify(e)),await fetch(a+"/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>(localStorage.setItem("authToken",e.token),e))),i=async e=>{console.log(e);let t=await fetch(a+"/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>(localStorage.setItem("authToken",e.token),e));return console.log(t),t},s=async()=>{if(localStorage.getItem("authToken")){return await fetch(a+"/auth/verify",{method:"get",headers:(e={"Content-Type":"application/json"},localStorage.authToken?{...e,Authorization:`Bearer ${localStorage.authToken}`}:e)}).then(e=>e.json()).then(e=>e)}var e;return!1},l=async()=>(localStorage.removeItem("authToken"),{"Content-Type":"application/json"},"logged out")},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var o=n(92);const a=Object(o.a)();let c=async()=>await fetch(`${a}/technologies`).then(e=>e.json()).then(e=>e);const i=async(e,t)=>{await fetch(`${a}/technologies/${t}`,{method:"put",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e)}},96:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));var o=n(92);const a=Object(o.a)();let c=async()=>await fetch(`${a}/projects`).then(e=>e.json()).then(e=>e);const i=async e=>{const t=await fetch(`${a}/projects`,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e);console.log(t)},s=async(e,t)=>{await fetch(`${a}/projects/${t}`,{method:"put",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e)},l=async e=>{const t=await fetch(`${a}/projects/${e}`,{method:"delete",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e);console.log(t)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"Projects",(function(){return p}));var o=n(0),a=n(93),c=n(94),i=n(4),s=n(96),l=n(3),d=n(102);n(103);const r=e=>{for(;e.childNodes.length;)e.removeChild(e.lastChild)};async function p(){const e=Object(o.e)(".scrollable-content");r(e),e.appendChild(Object(o.c)("div","loading")).innerHTML="loading...";const t=await Object(a.d)(),n=await Object(s.c)();r(e);const h=e.clientWidth;if(n.forEach(async(n,a)=>{const i=e.appendChild(Object(o.c)("div","project-wrap")),r=i.appendChild(Object(c.a)(`src/img/${n.img_url}`,n.name,!0,n.site_url,n.build_date));let u="false",j=Object(o.c)("div","link-modal"),b=Object(o.f)(".img-wrapper"),f=Object(o.f)(".inner-img-wrap"),m=Object(o.c)("div","tech-icons");n.technologies.forEach(e=>{m.appendChild(Object(o.c)("img","tech-icon")).src=`src/img/${e.icon_url}`});let g=Object(o.c)("div","description");if(g.innerHTML=n.description,h<900?(j.appendChild(m),j.appendChild(g)):(j.appendChild(g),j.appendChild(m)),j.appendChild(Object(o.c)("div","link-modal-icons")).innerHTML=`<div><a href=${n.site_url} target='_blank'><i class="fas fa-home fa-fw"></i></a>\n    <p class='home-tool-tip'>website</p></div>\n\n    <div><a href=${n.github_url} target='_blank'><i class="fab fa-github"></i></a>\n    <p class='github-tool-tip'>github</p></div>`,b[a].addEventListener("click",async()=>{if("true"===u)u="false",f[a].classList.add("close-curtain"),f[a].classList.remove("open-curtain"),b[a].lastChild.remove(),b[a].style.width="80%",b[a].style.padding="6%",b[a].style.margin="0",i.style.margin="0 10% 3% 10%",f[a].style.width="100%",i.classList.remove("project-wrap-click"),r.lastChild.remove();else if("false"===u){console.log(u),u="true",f[a].classList.add("open-curtain"),f[a].classList.remove("close-curtain"),b[a].appendChild(j),h<900?(b[a].style.flexDirection="column",j.style.width="90%",m.style.width="80%",j.style.marginTop="5%",j.style.background="rgb(240, 253, 253)"):(b[a].style.width="90%",b[a].style.padding="2%",b[a].style.margin="0 auto",i.style.margin="0 1%",f[a].style.width="99%",f[a].style.height="99%"),h<900?(console.log("900-"),r.appendChild(m)):(console.log("900+"),f[a].appendChild(m)),console.log(r),b[a].style.setProperty("--animation","animate-img-wrapper 1.5s linear forwards"),i.classList.add("project-wrap-click")}}),t&&t.isAdmin){const e=Object(o.c)("div","edit-project-wrapper"),t=Object(l.a)("show-edit-button","submit","update");t.addEventListener("click",()=>{console.log(i.lastChild.className),"edit-project-form"!==i.lastChild.className?Object(d.EditProject)(i,n):i.lastChild.remove()}),e.appendChild(t);const a=Object(l.a)("delete-project","submit","delete");a.addEventListener("click",async()=>{let e=confirm(`Are you sure you want to delete ${n.name}?`);e&&await Object(s.b)(n.id),e&&await p()}),e.appendChild(a),i.appendChild(e)}}),t&&t.isAdmin){let t=Object(l.a)("show-add-form","submit","add project");t.addEventListener("click",()=>{console.log(e.lastChild.previousSibling.className),"show-add-form"===e.lastChild.previousSibling.className?Object(d.EditProject)(e,n[0],"addProject"):e.lastChild.remove()}),Object(o.b)(e,t)}e.appendChild(Object(i.a)())}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0cy9FZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Qcm9qZWN0cy9wcm9qZWN0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2VydmljZXMvQXBpQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXJ2aWNlcy9BcGlUZWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0FwaVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiRWRpdFByb2plY3QiLCJhc3luYyIsInByb2plY3RXcmFwIiwicHJvamVjdCIsImFkZFByb2plY3QiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsIm5ld1Byb2plY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZm9ybSIsImlucHV0cyIsImFwcGVuZENoaWxkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbnB1dCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNoZWNrcyIsIm1hcCIsInRlY2hub2xvZ3kiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwidGVjaG5vbG9naWVzIiwicHJvamVjdFRlY2hub2xvZ3kiLCJieCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tib3hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJveCIsInB1c2giLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydGVkIiwibG9jYWxzIiwiZXhwb3J0cyIsIkJhc2VVcmwiLCJiYXNlVXJsIiwic2lnblVwIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJsb2dpbiIsInJlcyIsInZlcmlmeSIsImdldEl0ZW0iLCJhdXRoVG9rZW4iLCJBdXRob3JpemF0aW9uIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImdldFRlY2hub2xvZ2llcyIsImFucyIsInVwZGF0ZVRlY2hub2xvZ3kiLCJnZXRQcm9qZWN0cyIsInVwZGF0ZVByb2plY3QiLCJkZWxldGVQcm9qZWN0IiwiY2xlYXJQYWdlIiwiZWxlbWVudCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsIlByb2plY3RzIiwibWFpbkNvbnRlbnQiLCJpbm5lckhUTUwiLCJ1c2VyIiwicmVzcCIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJpbmRleCIsImltYWdlIiwiaW1nX3VybCIsInNpdGVfdXJsIiwiYnVpbGRfZGF0ZSIsImJvb2wiLCJsaW5rTW9kYWwiLCJpbWdXcmFwcGVyIiwiaW5uZXJJbWdXcmFwIiwidGVjaEljb25zIiwiaWNvbiIsInNyYyIsImljb25fdXJsIiwiZGVzY3JpcHRpb24iLCJnaXRodWJfdXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZCIsImhlaWdodCIsInNldFByb3BlcnR5IiwiaXNBZG1pbiIsImVkaXRQcm9qZWN0V3JhcHBlciIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iLCJhbnN3ZXIiLCJjb25maXJtIiwiYWRkQnRuIiwicHJldmlvdXNTaWJsaW5nIl0sIm1hcHBpbmdzIjoiMEZBQUEsNkZBWU8sTUFB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QixZQUFjMUgsRUFBUThCLElBQ3RDNEYsU0FBZ0J0QyxNQUVsQm1DLEVBQW1CMUcsWUFBWTRHLEdBQy9CMUgsRUFBWWMsWUFBWTBHLE1BT3hCaEMsR0FBUUEsRUFBSytCLFFBQVMsQ0FFeEIsSUFBSU0sRUFBUyxZQUFPLGdCQUFpQixTQUFVLGVBQy9DQSxFQUFPN0YsaUJBQWlCLFFBQVMsS0FDL0I3QixRQUFRQyxJQUFJa0YsRUFBWUYsVUFBVTBDLGdCQUFnQjFHLFdBQ00sa0JBQXBEa0UsRUFBWUYsVUFBVTBDLGdCQUFnQjFHLFVBQ3hDLHNCQUFZa0UsRUFBYUcsRUFBSyxHQUFJLGNBRWxDSCxFQUFZRixVQUFVeUIsV0FJMUIsWUFBR3ZCLEVBQWF1QyxHQUdsQnZDLEVBQVl4RSxZQUFZIiwiZmlsZSI6IjEuYjliZjlhNTIwZmM0MTAwZjBiNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCwgTGFiZWwgfSBmcm9tIFwiLi4vU2hhcmVkL0Zvcm0uanNcIlxuaW1wb3J0IHsgZ2V0VGVjaG5vbG9naWVzIH0gZnJvbSBcIi4uL1NlcnZpY2VzL0FwaVRlY2guanNcIlxuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdCxcbiAgYWRkUHJvamVjdCBhcyBhZGROZXdQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0VGVjaG5vbG9naWVzLFxufSBmcm9tIFwiLi4vU2VydmljZXMvQXBpUHJvamVjdC5qc1wiXG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL1Byb2plY3RzLmpzXCJcbmltcG9ydCB7IGFjLCBjZWNsIH0gZnJvbSBcIi4uL0hlbHBlcnMvZG9tSGVscGVyLmpzXCJcblxuZXhwb3J0IGNvbnN0IEVkaXRQcm9qZWN0ID0gYXN5bmMgKHByb2plY3RXcmFwLCBwcm9qZWN0LCBhZGRQcm9qZWN0KSA9PiB7XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKipcbiAgTUFLRSBBTkQgU0VUIEZPUk0gIElOUFVUU1xuICAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBjb25zb2xlLmxvZyhcImFkZFwiLCBhZGRQcm9qZWN0KVxuICBpZiAoYWRkUHJvamVjdCA9PT0gXCJhZGRQcm9qZWN0XCIpIHtcbiAgICBmb3IgKGxldCBpdGVtIGluIHByb2plY3QpIHtcbiAgICAgIHByb2plY3RbaXRlbV0gPSBcIlwiXG4gICAgfVxuICB9XG4gIGxldCBuZXdQcm9qZWN0ID0ge31cblxuICBsZXQgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgICBuZXdQcm9qZWN0W2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWVcbiAgICBjb25zb2xlLmxvZygnY21vbicsIG5ld1Byb2plY3QpXG4gIH1cblxuICBsZXQgZm9ybSA9IEZvcm0oXCJlZGl0LXByb2plY3QtZm9ybVwiKVxuICBsZXQgaW5wdXRzID0gY2VjbCgnZGl2JywgJ2VkaXQtZm9ybS1pbnB1dHMnKVxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0cylcbiAgT2JqZWN0LmtleXMocHJvamVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKFxuICAgICAga2V5ICE9PSBcImlkXCIgJiZcbiAgICAgIGtleSAhPT0gXCJ0ZWNobm9sb2dpZXNcIiAmJlxuICAgICAga2V5ICE9PSBcImNyZWF0ZWRfYXRcIiAmJlxuICAgICAga2V5ICE9PSBcInVwZGF0ZWRfYXRcIlxuICAgICkge1xuICAgICAgbmV3UHJvamVjdFtrZXldID0gcHJvamVjdFtrZXldXG4gICAgICBjb25zdCBpbnB1dCA9IElucHV0KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImVkaXQtZm9ybS1pbnB1dFwiLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogYWRkUHJvamVjdCA9PT0gXCJhZGRQcm9qZWN0XCIgPyBcIlwiIDogbmV3UHJvamVjdFtrZXldLFxuICAgICAgICBwbGFjZWhvbGRlcjoga2V5LFxuICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIH0pXG4gICAgICBpbnB1dHMuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgfVxuICB9KVxuXG4gIC8qKioqKioqKioqKioqKlxuICAgU0VUIENIRUNLQk9YRVNcbiAgKioqKioqKioqKioqKioqL1xuICBjb25zdCBjaGVja3MgPSBjZWNsKCdkaXYnLCAnZWRpdC1mb3JtLWNoZWNrYm94ZXMnKVxuICBmb3JtLmFwcGVuZENoaWxkKGNoZWNrcylcbiAgbGV0IHRlY2hub2xvZ2llcyA9IGF3YWl0IGdldFRlY2hub2xvZ2llcygpXG4gIHRlY2hub2xvZ2llcy5tYXAoKHRlY2hub2xvZ3kpID0+IHtcblxuICAgIGxldCBjaGVja2VkXG4gICAgYWRkUHJvamVjdCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBwcm9qZWN0LnRlY2hub2xvZ2llcy5mb3JFYWNoKChwcm9qZWN0VGVjaG5vbG9neSkgPT4ge1xuICAgICAgICBpZiAodGVjaG5vbG9neS5uYW1lID09PSBwcm9qZWN0VGVjaG5vbG9neS5uYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2codGVjaG5vbG9neS5uYW1lLCBwcm9qZWN0VGVjaG5vbG9neS5uYW1lKVxuICAgICAgICAgIGNoZWNrZWQgPSBcImNoZWNrZWRcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIGxldCBieCA9IENoZWNrYm94KHtcbiAgICAgIGNsYXNzTmFtZTogXCJlZGl0LXByb2plY3QtY2hrYm94XCIsXG4gICAgICBuYW1lOiB0ZWNobm9sb2d5Lm5hbWUsXG4gICAgICBpZDogdGVjaG5vbG9neS5uYW1lLFxuICAgICAgdmFsdWU6IHRlY2hub2xvZ3kuaWQsXG4gICAgICBjaGVja2VkOiBhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIiA/IFwiXCIgOiBjaGVja2VkLFxuXG4gICAgfSlcbiAgICBjaGVja3MuYXBwZW5kQ2hpbGQoYngpXG4gICAgY2hlY2tzLmFwcGVuZENoaWxkKExhYmVsKFwidGVjaC1ib3gtbGFiZWxcIiwgdGVjaG5vbG9neS5uYW1lLCBcInRlY2gtYm94XCIpKVxuXG4gIH0pXG4gIGZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgQnV0dG9uKFxuICAgICAgXCJlZGl0LXByb2plY3QtYnV0dG9uXCIsXG4gICAgICBcInN1Ym1pdFwiLFxuICAgICAgYWRkUHJvamVjdCA9PT0gXCJhZGRQcm9qZWN0XCIgPyBcImFkZCBuZXcgcHJvamVjdFwiIDogXCJzdWJtaXRcIlxuICAgIClcbiAgKVxuXG5cbiAgYWMocHJvamVjdFdyYXAsIGZvcm0pXG5cblxuICAvKioqKioqKioqKlxuICAgU1VCTUlUIEZPUk1cbiAgKioqKioqKioqKiovXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyhcImFkZFwiLCBhZGRQcm9qZWN0KVxuXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkXCIpXG4gICAgY29uc29sZS5sb2coY2hlY2tib3hlcywgbmV3UHJvamVjdClcbiAgICBuZXdQcm9qZWN0LnRlY2hub2xvZ2llcyA9IFtdXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIG5ld1Byb2plY3QudGVjaG5vbG9naWVzLnB1c2goYm94LnZhbHVlKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJhZGRcIiwgbmV3UHJvamVjdClcbiAgICBhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIlxuICAgICAgPyBhd2FpdCBhZGROZXdQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgICA6IGF3YWl0IHVwZGF0ZVByb2plY3QobmV3UHJvamVjdCwgcHJvamVjdC5pZClcblxuICAgIGF3YWl0IFByb2plY3RzKClcbiAgfSlcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiXG5leHBvcnQgY29uc3QgQmFzZVVybCA9ICgpID0+IHtcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vcG9ydGZvbGlvLW1pY2stc2VydmVyLmhlcm9rdWFwcC5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcblxufSIsImltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi9CYXNlVXJsLmpzXCJcbmNvbnN0IGJhc2VVcmwgPSBCYXNlVXJsKClcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhlYWRlcnMoaGVhZGVycykge1xuICBpZiAobG9jYWxTdG9yYWdlLmF1dGhUb2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5hdXRoVG9rZW59YCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJIZWFkZXJzID0gKGhlYWRlcnMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5oZWFkZXJzLFxuICAgIEF1dGhvcml6YXRpb246IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChiYXNlVXJsICsgXCIvdXNlcnNcIiwge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIGRhdGEudG9rZW4pXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoYm9keSkgPT4ge1xuICBjb25zb2xlLmxvZyhib2R5KVxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIFwiL2F1dGgvbG9naW5cIiwge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5qc29uKClcblxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCBkYXRhLnRva2VuKVxuXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgY29uc29sZS5sb2cocmVzKVxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIilcbiAgLy8gY29uc29sZS5sb2codG9rZW4pXG4gIGlmICh0b2tlbikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyBcIi9hdXRoL3ZlcmlmeVwiLCB7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzOiBzZXRIZWFkZXJzKHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhlcmVcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB2ZXJpZnkoKVxuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgaWYgKCF1c2VyLmVycm9ycykge1xuICAgICAgLy8gbG9naW5CdXR0b24uaW5uZXJUZXh0ID0gXCJsb2dvdXRcIlxuICAgICAgLy8gbG9nZ2VkSW4gPSB0cnVlXG4gICAgICByZXR1cm4gdXNlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCJcblxuICAgIC8vIGxvZ2dlZEluID0gZmFsc2VcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zb2xlLmxvZyhsb2dnZWRJbilcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIilcbiAgY2xlYXJIZWFkZXJzKHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSlcbiAgcmV0dXJuIFwibG9nZ2VkIG91dFwiXG59XG4iLCJpbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi9CYXNlVXJsLmpzJ1xuY29uc3QgYmFzZVVybCA9IEJhc2VVcmwoKVxuXG5cblxuXG5leHBvcnQgbGV0IGdldFRlY2hub2xvZ2llcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS90ZWNobm9sb2dpZXNgKVxuICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUZWNobm9sb2d5ID0gYXN5bmMgKGJvZHksIGlkKSA9PiB7XG4gIFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS90ZWNobm9sb2dpZXMvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBgcHV0YCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuXG59XG5cbiIsImltcG9ydCB7IEJhc2VVcmwgfSBmcm9tICcuL0Jhc2VVcmwuanMnXG5jb25zdCBiYXNlVXJsID0gQmFzZVVybCgpXG5cblxuZXhwb3J0IGxldCBnZXRQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0c2ApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGFucykgPT4ge1xuICAgICAgcmV0dXJuIGFuc1xuICAgIH0pXG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuZXhwb3J0IGxldCBnZXRQcm9qZWN0ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0cy8ke2lkfWApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGFucykgPT4ge1xuICAgICAgcmV0dXJuIGFuc1xuICAgIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoYm9keSkgPT4ge1xuIFxuIFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0c2AsIHtcbiAgICBtZXRob2Q6IGBwb3N0YCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3QgPSBhc3luYyAoYm9keSwgaWQpID0+IHtcbiAgXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogYHB1dGAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIH0pXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcblxufVxuLy9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXN5bmMgKGlkKSA9PiB7XG5cblxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogYGRlbGV0ZWAsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3RUZWNobm9sb2dpZXMgPSBhc3luYyAocHJvamVjdF9pZCwgaWQpID0+IHtcbiAgY29uc29sZS5sb2coJ3VwdCcpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7cHJvamVjdF9pZH0vdGVjaG5vbG9naWVzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogYHB1dGAsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG5cbn0iLCIvLyBpbXBvcnQgXCIuLi9TaGFyZWQvSW1hZ2VcIlxuaW1wb3J0IHsgcXMsIHFzYSwgY2VjbCwgYWMsIGJ0biB9IGZyb20gXCIuLi9IZWxwZXJzL2RvbUhlbHBlclwiXG5pbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwiLi4vU2VydmljZXMvQXBpQXV0aC5qc1wiXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCIuLi9TaGFyZWQvSW1hZ2UuanNcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXIuanNcIlxuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdHMsXG4gIGRlbGV0ZVByb2plY3QsXG5cbn0gZnJvbSBcIi4uL1NlcnZpY2VzL0FwaVByb2plY3QuanNcIlxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3gsIExhYmVsIH0gZnJvbSBcIi4uL1NoYXJlZC9Gb3JtLmpzXCJcbmltcG9ydCB7IEVkaXRQcm9qZWN0IH0gZnJvbSBcIi4vRWRpdFByb2plY3RcIlxuaW1wb3J0IFwiLi9wcm9qZWN0cy5zY3NzXCJcblxuLyoqKioqKioqKipcbiBDTEVBUiBQQUdFXG4qKioqKioqKioqKi9cbmNvbnN0IGNsZWFyUGFnZSA9IChlbGVtZW50KSA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZClcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBxcygnLnNjcm9sbGFibGUtY29udGVudCcpXG4gIGNsZWFyUGFnZShtYWluQ29udGVudClcbiAgbGV0IGxvYWRpbmcgPSBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjZWNsKFwiZGl2XCIsIFwibG9hZGluZ1wiKSlcbiAgbG9hZGluZy5pbm5lckhUTUwgPSBcImxvYWRpbmcuLi5cIlxuICBjb25zdCB1c2VyID0gYXdhaXQgdmVyaWZ5KClcblxuXG4gIC8qKioqKioqKioqKioqKlxuICBSRU5ERVIgUFJPSkVDVFNcbiAgKioqKioqKioqKioqKioqL1xuICBjb25zdCByZXNwID0gYXdhaXQgZ2V0UHJvamVjdHMoKVxuICBjbGVhclBhZ2UobWFpbkNvbnRlbnQpXG5cbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBtYWluQ29udGVudC5jbGllbnRXaWR0aFxuICByZXNwLmZvckVhY2goYXN5bmMgKHByb2plY3QsIGluZGV4KSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0V3JhcCA9IG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNlY2woXCJkaXZcIiwgXCJwcm9qZWN0LXdyYXBcIikpXG4gICAgY29uc3QgaW1hZ2UgPSBwcm9qZWN0V3JhcC5hcHBlbmRDaGlsZChcbiAgICAgIEltYWdlKGBzcmMvaW1nLyR7cHJvamVjdC5pbWdfdXJsfWAsIHByb2plY3QubmFtZSwgdHJ1ZSwgcHJvamVjdC5zaXRlX3VybCwgcHJvamVjdC5idWlsZF9kYXRlKVxuICAgIClcbiAgIFxuICAgIGxldCBib29sID0gXCJmYWxzZVwiXG4gICAgbGV0IGxpbmtNb2RhbCA9IGNlY2woXCJkaXZcIiwgXCJsaW5rLW1vZGFsXCIpXG4gICAgbGV0IGltZ1dyYXBwZXIgPSBxc2EoXCIuaW1nLXdyYXBwZXJcIilcbiAgICBsZXQgaW5uZXJJbWdXcmFwID0gcXNhKFwiLmlubmVyLWltZy13cmFwXCIpXG4gICAgbGV0IHRlY2hJY29ucyA9IGNlY2woXCJkaXZcIiwgXCJ0ZWNoLWljb25zXCIpXG4gICAgcHJvamVjdC50ZWNobm9sb2dpZXMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgbGV0IHRlY2hJY29uID0gdGVjaEljb25zLmFwcGVuZENoaWxkKGNlY2woXCJpbWdcIiwgXCJ0ZWNoLWljb25cIikpXG4gICAgICB0ZWNoSWNvbi5zcmMgPSBgc3JjL2ltZy8ke2ljb24uaWNvbl91cmx9YFxuICAgIH0pXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gY2VjbCgnZGl2JywgJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXG5cbiAgICBpZiAoY29udGFpbmVyV2lkdGggPCA5MDApIHtcbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZCh0ZWNoSWNvbnMpXG4gICAgICBsaW5rTW9kYWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZCh0ZWNoSWNvbnMpXG4gICAgfVxuXG4gICAgY29uc3QgbGlua01vZGFsSWNvbnMgPSBsaW5rTW9kYWwuYXBwZW5kQ2hpbGQoY2VjbCgnZGl2JywgJ2xpbmstbW9kYWwtaWNvbnMnKSlcblxuICAgIGxpbmtNb2RhbEljb25zLmlubmVySFRNTCA9XG4gICAgICBgPGRpdj48YSBocmVmPSR7cHJvamVjdC5zaXRlX3VybH0gdGFyZ2V0PSdfYmxhbmsnPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWUgZmEtZndcIj48L2k+PC9hPlxuICAgIDxwIGNsYXNzPSdob21lLXRvb2wtdGlwJz53ZWJzaXRlPC9wPjwvZGl2PlxuXG4gICAgPGRpdj48YSBocmVmPSR7cHJvamVjdC5naXRodWJfdXJsfSB0YXJnZXQ9J19ibGFuayc+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICA8cCBjbGFzcz0nZ2l0aHViLXRvb2wtdGlwJz5naXRodWI8L3A+PC9kaXY+YFxuXG5cbiAgICAvKioqKioqKioqKioqKipcbiAgICBBREQgTElOSyBNT0RBTFxuICAgICoqKioqKioqKioqKioqKi9cbiAgICBpbWdXcmFwcGVyW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGJvb2wgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGJvb2wgPSBcImZhbHNlXCJcbiAgICAgICAgaW5uZXJJbWdXcmFwW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtY3VydGFpblwiKVxuICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWN1cnRhaW5cIilcbiAgICAgICAgaW1nV3JhcHBlcltpbmRleF0ubGFzdENoaWxkLnJlbW92ZSgpXG5cblxuICAgICAgICBpbWdXcmFwcGVyW2luZGV4XS5zdHlsZS53aWR0aCA9ICc4MCUnXG4gICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLnBhZGRpbmcgPSAnNiUnXG4gICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLm1hcmdpbiA9ICcwJ1xuXG4gICAgICAgIHByb2plY3RXcmFwLnN0eWxlLm1hcmdpbiA9ICcwIDEwJSAzJSAxMCUnXG4gICAgICAgIGlubmVySW1nV3JhcFtpbmRleF0uc3R5bGUud2lkdGggPSAnMTAwJSdcblxuICAgICAgICBwcm9qZWN0V3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC13cmFwLWNsaWNrXCIpXG5cbiAgICAgICAgaW1hZ2UubGFzdENoaWxkLnJlbW92ZSgpXG5cbiAgICAgICAgLy8gaW5uZXJJbWdXcmFwW2luZGV4XS5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcblxuICAgICAgfSBlbHNlIGlmIChib29sID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYm9vbClcbiAgICAgICAgYm9vbCA9IFwidHJ1ZVwiXG4gICAgICAgIGlubmVySW1nV3JhcFtpbmRleF0uY2xhc3NMaXN0LmFkZChcIm9wZW4tY3VydGFpblwiKVxuICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZS1jdXJ0YWluXCIpXG4gICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLmFwcGVuZENoaWxkKGxpbmtNb2RhbClcblxuXG4gICAgICAgIGlmIChjb250YWluZXJXaWR0aCA8IDkwMCkge1xuICAgICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xuICAgICAgICAgIGxpbmtNb2RhbC5zdHlsZS53aWR0aCA9ICc5MCUnXG4gICAgICAgICAgdGVjaEljb25zLnN0eWxlLndpZHRoID0gJzgwJSdcbiAgICAgICAgICBsaW5rTW9kYWwuc3R5bGUubWFyZ2luVG9wID0gJzUlJ1xuICAgICAgICAgIGxpbmtNb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyNDAsIDI1MywgMjUzKSdcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLndpZHRoID0gJzkwJSdcbiAgICAgICAgICBpbWdXcmFwcGVyW2luZGV4XS5zdHlsZS5wYWRkaW5nID0gJzIlJ1xuICAgICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nXG4gICAgICAgICAgcHJvamVjdFdyYXAuc3R5bGUubWFyZ2luID0gJzAgMSUnXG5cbiAgICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLnN0eWxlLndpZHRoID0gJzk5JSdcbiAgICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLnN0eWxlLmhlaWdodCA9ICc5OSUnXG4gICAgICAgICAgLy8gXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChjb250YWluZXJXaWR0aCA8IDkwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc5MDAtJylcbiAgICAgICAgICBpbWFnZS5hcHBlbmRDaGlsZCh0ZWNoSWNvbnMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJzkwMCsnKVxuICAgICAgICAgIGlubmVySW1nV3JhcFtpbmRleF0uYXBwZW5kQ2hpbGQodGVjaEljb25zKVxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG5cbiAgICAgICAgbGV0IGl3ID0gaW1nV3JhcHBlcltpbmRleF0uc3R5bGVcbiAgICAgICAgaXcuc2V0UHJvcGVydHkoXG4gICAgICAgICAgXCItLWFuaW1hdGlvblwiLFxuICAgICAgICAgIFwiYW5pbWF0ZS1pbWctd3JhcHBlciAxLjVzIGxpbmVhciBmb3J3YXJkc1wiXG4gICAgICAgIClcbiAgICAgICAgcHJvamVjdFdyYXAuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtd3JhcC1jbGlja1wiKVxuXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8qKioqKioqKioqKioqKioqKioqXG4gICAgIEVESVQgUFJPSkVDVCBCVVRUT05cbiAgICAqKioqKioqKioqKioqKioqKioqKi9cbiAgIFxuICAgIGlmICh1c2VyICYmIHVzZXIuaXNBZG1pbikge1xuXG4gICAgICBjb25zdCBlZGl0UHJvamVjdFdyYXBwZXIgPSBjZWNsKFwiZGl2XCIsIFwiZWRpdC1wcm9qZWN0LXdyYXBwZXJcIilcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBCdXR0b24oXCJzaG93LWVkaXQtYnV0dG9uXCIsIFwic3VibWl0XCIsIFwidXBkYXRlXCIpXG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RXcmFwLmxhc3RDaGlsZC5jbGFzc05hbWUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9qZWN0V3JhcC5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9PSBcImVkaXQtcHJvamVjdC1mb3JtXCJcbiAgICAgICAgKVxuICAgICAgICAgIEVkaXRQcm9qZWN0KHByb2plY3RXcmFwLCBwcm9qZWN0KVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0V3JhcC5sYXN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGVkaXRQcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgREVMRVRFIFBST0pFQ1QgQlVUVE9OXG4gICAgICAqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBCdXR0b24oXCJkZWxldGUtcHJvamVjdFwiLCBcInN1Ym1pdFwiLCBcImRlbGV0ZVwiKVxuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7cHJvamVjdC5uYW1lfT9gKVxuICAgICAgICBhbnN3ZXIgJiYgYXdhaXQgZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKVxuICAgICAgICBhbnN3ZXIgJiYgYXdhaXQgUHJvamVjdHMoKVxuICAgICAgfSlcbiAgICAgIGVkaXRQcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gICAgICBwcm9qZWN0V3JhcC5hcHBlbmRDaGlsZChlZGl0UHJvamVjdFdyYXBwZXIpXG4gICAgfVxuICB9KVxuXG4gIC8qKioqKioqKioqKlxuICBBREQgUFJPSkVDVCBcbiAgKioqKioqKioqKioqL1xuICBpZiAodXNlciAmJiB1c2VyLmlzQWRtaW4pIHtcblxuICAgIGxldCBhZGRCdG4gPSBCdXR0b24oXCJzaG93LWFkZC1mb3JtXCIsIFwic3VibWl0XCIsIFwiYWRkIHByb2plY3RcIilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1haW5Db250ZW50Lmxhc3RDaGlsZC5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKVxuICAgICAgaWYgKG1haW5Db250ZW50Lmxhc3RDaGlsZC5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lID09PSBcInNob3ctYWRkLWZvcm1cIilcbiAgICAgICAgRWRpdFByb2plY3QobWFpbkNvbnRlbnQsIHJlc3BbMF0sIFwiYWRkUHJvamVjdFwiKVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1haW5Db250ZW50Lmxhc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhYyhtYWluQ29udGVudCwgYWRkQnRuKVxuICB9XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==