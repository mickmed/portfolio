(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(t,e,n){var o=n(1),a=n(122);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var l={insert:"head",singleton:!1},i=(o(a,l),a.locals?a.locals:{});t.exports=i},122:function(t,e,n){},129:function(t,e,n){"use strict";n.r(e),n.d(e,"Signup",(function(){return l}));var o=n(99),a=n(0);n(121);const l=async()=>{let t=Object(a.e)(".main-content-scrollable");for(;t.childNodes.length>1;)t.removeChild(t.lastChild);let e={};const n=Object(a.c)("div","sign-up"),l=Object(a.c)("form","login-form");["username","email","password"].map(t=>{let n=l.appendChild(Object(a.c)("label","login-label"));n.setAttribute("for",t),n.innerText=t;let o=l.appendChild(Object(a.c)("input",`login-${t}`));o.setAttribute("id",t),o.setAttribute("name",t),o.addEventListener("keyup",t=>{e[t.target.name]=t.target.value,console.log(t.target.value,e)})});let i=await Object(o.d)();console.log(i),i.errors&&(console.log("logout due to error"),Object(o.b)());const c=Object(a.c)("button","submit-login");c.innerText="signUp",l.appendChild(c),l.addEventListener("submit",async t=>{t.preventDefault(),console.log("body",e);let n=await Object(o.c)(e);console.log(n)});const s=Object(a.c)("button","login");s.classList.add("login-btn"),s.innerText=i?"logout":"login",s.addEventListener("click",async()=>{if(console.log(i),i||0===Object.keys(e).length||localStorage.authToken){let t=await Object(o.b)();console.log(t),"logged out"===t&&(s.innerText="login")}else{e={auth:{...e}};await Object(o.a)(e);i=await Object(o.d)(),console.log(i),s.innerText=i&&"logout"}}),n.appendChild(l),n.appendChild(s),t.appendChild(n)}},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=()=>"https://portfolio-mick-server.herokuapp.com"},99:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return s}));var o=n(98);const a=Object(o.a)();const l=async t=>(console.log(JSON.stringify(t)),await fetch(a+"/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>(localStorage.setItem("authToken",t.token),t))),i=async t=>{console.log(t);let e=await fetch(a+"/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>(localStorage.setItem("authToken",t.token),t));return console.log(e),e},c=async()=>{if(localStorage.getItem("authToken")){return await fetch(a+"/auth/verify",{method:"get",headers:(t={"Content-Type":"application/json"},localStorage.authToken?{...t,Authorization:`Bearer ${localStorage.authToken}`}:t)}).then(t=>t.json()).then(t=>t)}var t;return!1},s=async()=>(localStorage.removeItem("authToken"),{"Content-Type":"application/json"},"logged out")}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2dpbi9zaWdudXAuc2Nzcz9lNThmIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0xvZ2luL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXJ2aWNlcy9CYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0FwaUF1dGguanMiXSwibmFtZXMiOlsiYXBpIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibW9kdWxlIiwiaSIsIm9wdGlvbnMiLCJleHBvcnRlZCIsImxvY2FscyIsImV4cG9ydHMiLCJTaWdudXAiLCJhc3luYyIsIm1haW5Db250ZW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYm9keSIsInNpZ25VcERpdiIsImZvcm0iLCJtYXAiLCJlbCIsImxhYmVsIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyIiwiZXJyb3JzIiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJzaWduVXBSZXMiLCJsb2dpbkJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsIk9iamVjdCIsImtleXMiLCJsb2NhbFN0b3JhZ2UiLCJhdXRoVG9rZW4iLCJyZXNMb2dvdXQiLCJhdXRoIiwiQmFzZVVybCIsImJhc2VVcmwiLCJzaWduVXAiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsImpzb24iLCJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwibG9naW4iLCJyZXMiLCJ2ZXJpZnkiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiIsImxvZ291dCIsInJlbW92ZUl0ZW0i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QUFLQyxVQUFVbkMsS0FFcEJ1QyxLQUFNQyxHQUNFQSxFQUFLQSxRQUdiRCxLQUFNRSxJQUVMZCxhQUFhZSxRQUFRLFlBQWFELEVBQUtFLE9BR2hDRixJQUdYLE9BREExQixRQUFRQyxJQUFJNkIsR0FDTEEsR0FHSUMsRUFBU3BELFVBR3BCLEdBRmNpQyxhQUFhb0IsUUFBUSxhQUV4QixDQWNULGFBYmtCWCxNQUFNSixFQUFVLGVBQWdCLENBQ2hESyxPQUFRLE1BQ1JDLFNBbEVxQkEsRUFrRUQsQ0FDbEIsZUFBZ0Isb0JBbEVsQlgsYUFBYUMsVUFDUixJQUNGVSxFQUNIVSxjQUFlLFVBQVVyQixhQUFhQyxhQUdqQ1UsS0ErREpDLEtBQU1DLEdBQ0VBLEVBQUtBLFFBRWJELEtBQU1FLEdBQ0VBLEdBMUVSLElBQW9CSCxFQWdGekIsT0FBTyxHQXNCSVcsRUFBU3ZELFVBQ3BCaUMsYUFBYXVCLFdBQVcsYUFDWCxDQUNYLGVBQWdCLG9CQUVYIiwiZmlsZSI6IjQuZDlkNTFhNWQxOGMwNTFkYTg1YzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWdudXAuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQge1xuICBzaWduVXAsXG4gIGxvZ2luLFxuICB2ZXJpZnksXG4gIGxvZ291dCxcbn0gZnJvbSBcIi4uL1NlcnZpY2VzL0FwaUF1dGguanNcIlxuaW1wb3J0IHsgY2VjbCwgcXMgfSBmcm9tIFwiLi4vSGVscGVycy9kb21IZWxwZXIuanNcIlxuaW1wb3J0IFwiLi9zaWdudXAuc2Nzc1wiXG5cblxuZXhwb3J0IGNvbnN0IFNpZ251cCA9IGFzeW5jICgpID0+IHtcblxuICBsZXQgbWFpbkNvbnRlbnQgPSBxcyhcIi5tYWluLWNvbnRlbnQtc2Nyb2xsYWJsZVwiKVxuICB3aGlsZSAobWFpbkNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKVxuICB9XG4gIFxuICAvKioqKioqKioqKioqKlxuICAgICBNQUtFIEZPUk1cbiAgICoqKioqKioqKioqKi9cbiAgY29uc3QgaW5wdXRzID0gW1widXNlcm5hbWVcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCJdXG4gIGxldCBib2R5ID0ge31cbiAgY29uc3Qgc2lnblVwRGl2ID0gY2VjbChcImRpdlwiLCBcInNpZ24tdXBcIilcbiAgY29uc3QgZm9ybSA9IGNlY2woXCJmb3JtXCIsIFwibG9naW4tZm9ybVwiKVxuXG4gIGlucHV0cy5tYXAoKGVsKSA9PiB7XG4gICAgbGV0IGxhYmVsID0gZm9ybS5hcHBlbmRDaGlsZChjZWNsKGBsYWJlbGAsIGBsb2dpbi1sYWJlbGApKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShgZm9yYCwgZWwpXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gZWxcbiAgICBsZXQgaW5wdXQgPSBmb3JtLmFwcGVuZENoaWxkKGNlY2woXCJpbnB1dFwiLCBgbG9naW4tJHtlbH1gKSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgZWwpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBuYW1lYCwgZWwpXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG5cbiAgICAgIGJvZHlbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUsIGJvZHkpXG4gICAgfSlcblxuICB9KVxuXG4gLyoqKioqKioqKioqKioqKioqXG4gICAgR0VUIENVUlIgVVNFUlxuICAqKioqKioqKioqKioqKioqL1xuICBsZXQgY3VycmVudFVzZXIgPSBhd2FpdCB2ZXJpZnkoKVxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcbiAgaWYgKGN1cnJlbnRVc2VyLmVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQgZHVlIHRvIGVycm9yJylcbiAgICBsb2dvdXQoKVxuICB9XG5cbiAgLyoqKioqKioqKioqKipcbiAgICBTSUdOIFVQIEJUTlxuICAgKioqKioqKioqKioqL1xuICBjb25zdCBidXR0b24gPSBjZWNsKFwiYnV0dG9uXCIsIFwic3VibWl0LWxvZ2luXCIpXG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcInNpZ25VcFwiXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyhcImJvZHlcIiwgYm9keSlcbiAgICBsZXQgc2lnblVwUmVzID0gYXdhaXQgc2lnblVwKGJvZHkpXG4gICAgY29uc29sZS5sb2coc2lnblVwUmVzKVxuICB9KVxuXG4gIC8qKioqKioqKioqKioqXG4gICAgIExPR0lOIEJUTlxuICAgKioqKioqKioqKioqL1xuICBjb25zdCBsb2dpbkJ1dHRvbiA9IGNlY2woXCJidXR0b25cIiwgXCJsb2dpblwiKVxuICBsb2dpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb2dpbi1idG4nKVxuICBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBjdXJyZW50VXNlciA/ICdsb2dvdXQnIDogJ2xvZ2luJ1xuXG4gIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXG4gICAgaWYgKCFjdXJyZW50VXNlciAmJiBPYmplY3Qua2V5cyhib2R5KS5sZW5ndGggIT09IDAgJiYgIWxvY2FsU3RvcmFnZS5hdXRoVG9rZW4pIHtcbiAgICAgIGJvZHkgPSB7IGF1dGg6IHsgLi4uYm9keSB9IH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgICBsZXQgdXNlciA9IGF3YWl0IGxvZ2luKGJvZHkpXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgY3VycmVudFVzZXIgPSBhd2FpdCB2ZXJpZnkoKVxuICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXG5cbiAgICAgIGxvZ2luQnV0dG9uLmlubmVyVGV4dCA9IGN1cnJlbnRVc2VyICYmICdsb2dvdXQnXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXNMb2dvdXQgPSBhd2FpdCBsb2dvdXQoKVxuICAgICAgY29uc29sZS5sb2cocmVzTG9nb3V0KVxuXG5cbiAgICAgIGlmIChyZXNMb2dvdXQgPT09ICdsb2dnZWQgb3V0Jykge1xuICAgICAgICBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCJcblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBzaWduVXBEaXYuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgc2lnblVwRGl2LmFwcGVuZENoaWxkKGxvZ2luQnV0dG9uKVxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzaWduVXBEaXYpXG5cblxufVxuIiwiXG5leHBvcnQgY29uc3QgQmFzZVVybCA9ICgpID0+IHtcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vcG9ydGZvbGlvLW1pY2stc2VydmVyLmhlcm9rdWFwcC5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcblxufSIsImltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi9CYXNlVXJsLmpzXCJcbmNvbnN0IGJhc2VVcmwgPSBCYXNlVXJsKClcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhlYWRlcnMoaGVhZGVycykge1xuICBpZiAobG9jYWxTdG9yYWdlLmF1dGhUb2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5hdXRoVG9rZW59YCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJIZWFkZXJzID0gKGhlYWRlcnMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5oZWFkZXJzLFxuICAgIEF1dGhvcml6YXRpb246IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChiYXNlVXJsICsgXCIvdXNlcnNcIiwge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIGRhdGEudG9rZW4pXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoYm9keSkgPT4ge1xuICBjb25zb2xlLmxvZyhib2R5KVxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIFwiL2F1dGgvbG9naW5cIiwge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5qc29uKClcblxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCBkYXRhLnRva2VuKVxuXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgY29uc29sZS5sb2cocmVzKVxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIilcbiAgLy8gY29uc29sZS5sb2codG9rZW4pXG4gIGlmICh0b2tlbikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyBcIi9hdXRoL3ZlcmlmeVwiLCB7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzOiBzZXRIZWFkZXJzKHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhlcmVcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB2ZXJpZnkoKVxuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgaWYgKCF1c2VyLmVycm9ycykge1xuICAgICAgLy8gbG9naW5CdXR0b24uaW5uZXJUZXh0ID0gXCJsb2dvdXRcIlxuICAgICAgLy8gbG9nZ2VkSW4gPSB0cnVlXG4gICAgICByZXR1cm4gdXNlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCJcblxuICAgIC8vIGxvZ2dlZEluID0gZmFsc2VcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zb2xlLmxvZyhsb2dnZWRJbilcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIilcbiAgY2xlYXJIZWFkZXJzKHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSlcbiAgcmV0dXJuIFwibG9nZ2VkIG91dFwiXG59XG4iXSwic291cmNlUm9vdCI6IiJ9