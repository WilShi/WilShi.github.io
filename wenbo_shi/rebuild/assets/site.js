(function(){
"use strict";
var root=document.documentElement,themeButton=document.getElementById("themeToggle"),motionButton=document.getElementById("motionToggle"),motionQuery=matchMedia("(prefers-reduced-motion: reduce)");
var theme="night",motionEnabled=!motionQuery.matches;
try{theme=localStorage.getItem("wilson-personal-v2-theme")||"night";var saved=localStorage.getItem("wilson-personal-v2-motion");if(saved!==null)motionEnabled=saved==="on"}catch(e){}
function renderTheme(){root.dataset.theme=theme;if(themeButton){themeButton.textContent=theme==="night"?"日间":"夜读";themeButton.setAttribute("aria-label",theme==="night"?"切换到日间模式":"切换到夜读模式");themeButton.removeAttribute("aria-pressed")}}
function renderMotion(){root.dataset.motion=motionEnabled?"on":"off";if(motionButton){motionButton.textContent=motionEnabled?"动效 开":"动效 关";motionButton.setAttribute("aria-pressed",String(motionEnabled))}}
if(themeButton)themeButton.addEventListener("click",function(){theme=theme==="night"?"day":"night";try{localStorage.setItem("wilson-personal-v2-theme",theme)}catch(e){}renderTheme()});
if(motionButton)motionButton.addEventListener("click",function(){motionEnabled=!motionEnabled;try{localStorage.setItem("wilson-personal-v2-motion",motionEnabled?"on":"off")}catch(e){}renderMotion()});
renderTheme();renderMotion();
var page=document.body.dataset.page;document.querySelectorAll("[data-nav]").forEach(function(a){if(a.dataset.nav===page)a.setAttribute("aria-current","page")});
document.querySelectorAll("[data-language-switch]").forEach(function(link){if(!location.pathname.endsWith("/project.html"))return;if(link.dataset.languageSwitch==="en")link.href="en/project.html"+location.search;if(link.dataset.languageSwitch==="zh")link.href="../project.html"+location.search});
document.querySelectorAll("[data-print]").forEach(function(button){button.addEventListener("click",function(){window.print()})});
var dialog=document.getElementById("commandDialog"),open=document.getElementById("commandOpen");
if(!dialog||!open)return;
var search=document.getElementById("commandSearch"),list=document.getElementById("commandList"),lastTrigger=null;
var commands=[
 {label:"首页 / Home",href:"index.html",keys:"首页 home wilson"},
 {label:"项目 / Projects",href:"projects.html",keys:"项目 projects work code"},
 {label:"创作档案 / Archive",href:"archive.html",keys:"档案 摄影 绘画 影像 archive photo"},
 {label:"完整简历 / Resume",href:"resume.html",keys:"简历 resume cv print"},
 {label:"联系 / Contact",href:"contact.html",keys:"联系 邮件 contact email"},
 {label:"切换日夜 / Theme",action:function(){if(themeButton)themeButton.click()},keys:"日夜 主题 theme dark light"},
 {label:"切换动效 / Motion",action:function(){motionEnabled=!motionEnabled;try{localStorage.setItem("wilson-personal-v2-motion",motionEnabled?"on":"off")}catch(e){}renderMotion()},keys:"动效 动画 motion reduce"}
];
if(Array.isArray(window.WILSON_PROJECTS))window.WILSON_PROJECTS.forEach(function(p){commands.push({label:p.title+" / "+p.short,href:"project.html?id="+encodeURIComponent(p.id),keys:p.title+" "+p.short+" "+p.tags.join(" ")})});
var currentMatches=[],activeIndex=0;
function setActive(index){if(!currentMatches.length)return;activeIndex=(index+currentMatches.length)%currentMatches.length;var options=list.querySelectorAll(".command-option");options.forEach(function(option,i){option.classList.toggle("is-active",i===activeIndex);option.setAttribute("aria-selected",String(i===activeIndex));option.tabIndex=i===activeIndex?0:-1});var active=options[activeIndex];search.setAttribute("aria-activedescendant",active.id);var top=active.offsetTop,bottom=top+active.offsetHeight;if(bottom>list.scrollTop+list.clientHeight)list.scrollTop=bottom-list.clientHeight;if(top<list.scrollTop)list.scrollTop=top}
function renderCommands(){list.setAttribute("aria-live","polite");var q=search.value.trim().toLowerCase();currentMatches=commands.filter(function(c){return (c.label+" "+c.keys).toLowerCase().includes(q)});activeIndex=0;list.replaceChildren();list.setAttribute("role","listbox");currentMatches.forEach(function(c,index){var li=document.createElement("li"),a=document.createElement("a");a.className="command-option";a.id="command-option-"+index;a.setAttribute("role","option");a.setAttribute("aria-selected",String(index===0));a.tabIndex=index===0?0:-1;a.href=c.href||"#";a.textContent=c.label;if(!c.href)a.addEventListener("click",function(e){e.preventDefault();dialog.close();c.action()});else a.addEventListener("click",function(){dialog.close()});li.appendChild(a);list.appendChild(li)});if(!currentMatches.length){var empty=document.createElement("li");empty.className="command-empty";empty.textContent="没有匹配结果。试试「项目」「摄影」或「简历」。";list.appendChild(empty);search.removeAttribute("aria-activedescendant")}else setActive(0)}
function openCommands(){lastTrigger=document.activeElement;search.value="";search.setAttribute("role","combobox");search.setAttribute("aria-autocomplete","list");search.setAttribute("aria-expanded","true");search.setAttribute("aria-controls","commandList");renderCommands();dialog.showModal();search.focus()}
open.addEventListener("click",openCommands);search.addEventListener("input",renderCommands);
search.addEventListener("keydown",function(e){if(e.key==="Escape"){e.preventDefault();e.stopPropagation();dialog.close();return}if(e.key==="ArrowDown"){e.preventDefault();setActive(activeIndex+1)}if(e.key==="ArrowUp"){e.preventDefault();setActive(activeIndex-1)}if(e.key==="Home"&&currentMatches.length){e.preventDefault();setActive(0)}if(e.key==="End"&&currentMatches.length){e.preventDefault();setActive(currentMatches.length-1)}if(e.key==="Enter"&&currentMatches.length){e.preventDefault();var active=list.querySelectorAll(".command-option")[activeIndex];if(active)active.click()}});
document.getElementById("commandClose").addEventListener("click",function(){dialog.close()});
dialog.addEventListener("click",function(e){if(e.target===dialog)dialog.close()});
dialog.addEventListener("close",function(){search.setAttribute("aria-expanded","false");if(lastTrigger)lastTrigger.focus({preventScroll:true})});
document.addEventListener("keydown",function(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();if(dialog.open)dialog.close();else openCommands()}});
})();