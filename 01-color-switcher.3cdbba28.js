const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.body;let c;function o(){e.removeEventListener("click",o),c=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}e.addEventListener("click",o),t.addEventListener("click",(function(){clearInterval(c),e.addEventListener("click",o)}));
//# sourceMappingURL=01-color-switcher.3cdbba28.js.map
