const e=document.querySelector("[data-start"),t=document.querySelector("[data-stop");let d=null;e.addEventListener("click",(function(e){e.target.disabled=!0,t.disabled&&(t.disabled=!1),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(t){t.target.disabled=!0,e.disabled&&(e.disabled=!1),clearInterval(d)})),console.log("smth");
//# sourceMappingURL=01-color-switcher.92baa61e.js.map