
(function(){
"use strict";
var root=document.documentElement;
var themeButton=document.getElementById("themeToggle");
var motionButton=document.getElementById("motionToggle");
var motionQuery=window.matchMedia("(prefers-reduced-motion: reduce)");
var motionEnabled=!motionQuery.matches;
var theme="night";
try{theme=localStorage.getItem("wilson-personal-v2-theme")||"night";var saved=localStorage.getItem("wilson-personal-v2-motion");if(saved!==null)motionEnabled=saved==="on"}catch(e){}
function renderTheme(){root.dataset.theme=theme;themeButton.textContent=theme==="night"?"日间":"夜读";themeButton.setAttribute("aria-label",theme==="night"?"切换到日间模式":"切换到夜读模式");themeButton.removeAttribute("aria-pressed")}
function renderMotion(){root.dataset.motion=motionEnabled?"on":"off";motionButton.textContent=motionEnabled?"动效 开":"动效 关";motionButton.setAttribute("aria-pressed",String(motionEnabled));if(!motionEnabled){photo.style.removeProperty("--rx");photo.style.removeProperty("--ry")}syncLoop()}
themeButton.addEventListener("click",function(){theme=theme==="night"?"day":"night";try{localStorage.setItem("wilson-personal-v2-theme",theme)}catch(e){}renderTheme();draw()});
motionButton.addEventListener("click",function(){motionEnabled=!motionEnabled;try{localStorage.setItem("wilson-personal-v2-motion",motionEnabled?"on":"off")}catch(e){}renderMotion()});
motionQuery.addEventListener("change",function(e){var saved=null;try{saved=localStorage.getItem("wilson-personal-v2-motion")}catch(err){}if(saved===null){motionEnabled=!e.matches;renderMotion()}});
var resume=document.getElementById("resumeDialog"),lastResumeTrigger=null;
document.querySelectorAll("[data-open-resume]").forEach(function(button){button.addEventListener("click",function(){lastResumeTrigger=button;resume.showModal();document.body.classList.add("dialog-open");document.getElementById("closeResume").focus()})});
function closeResume(){resume.close()}
document.getElementById("closeResume").addEventListener("click",closeResume);
document.getElementById("printResume").addEventListener("click",function(){document.body.classList.add("printing-resume");window.print();setTimeout(function(){document.body.classList.remove("printing-resume")},1000)});
window.addEventListener("afterprint",function(){document.body.classList.remove("printing-resume")});
resume.addEventListener("click",function(e){if(e.target===resume)closeResume()});
resume.addEventListener("close",function(){document.body.classList.remove("dialog-open");if(lastResumeTrigger)lastResumeTrigger.focus({preventScroll:true})});
var lightbox=document.getElementById("lightbox"),lightboxImage=document.getElementById("lightboxImage"),lightboxCaption=document.getElementById("lightboxCaption"),lastArchive=null;
document.querySelectorAll(".archive-card").forEach(function(card){card.addEventListener("click",function(){lastArchive=card;lightboxImage.src=card.dataset.full;lightboxImage.alt=card.dataset.caption;lightboxCaption.textContent=card.dataset.caption;lightbox.showModal();document.body.classList.add("dialog-open");document.getElementById("closeLightbox").focus()})});
document.getElementById("closeLightbox").addEventListener("click",function(){lightbox.close()});
lightbox.addEventListener("click",function(e){if(e.target===lightbox)lightbox.close()});
lightbox.addEventListener("close",function(){document.body.classList.remove("dialog-open");if(lastArchive)lastArchive.focus({preventScroll:true})});
var cities={
 canada:{year:"BEFORE UNIVERSITY · CANADA",title:"在加拿大读中学，开始海外生活。",story:"初中毕业后来到加拿大，就读 Columbia International College（哥伦比亚国际学院）。这是一段更早的独立生活经历，也为之后的多伦多、墨尔本和跨文化工作打下了基础。",detail:"「先适应新的环境，再慢慢找到自己的节奏。」",image:"assets/img/cic-maple.jpg",alt:"Columbia International College 的 Maple Building 校园",credit:"Wikimedia Commons · CC BY-SA 4.0",creditUrl:"https://commons.wikimedia.org/wiki/File:Maple_Building,_Columbia_International_College.jpg",initial:"C"},
 toronto:{year:"2017 — 2021 · CANADA",title:"在多伦多，学会生活。",story:"本科期间，我同时就读于多伦多大学和 Sheridan College，同时学习信息技术、计算机科学、电影学和 New Media（新媒体）四个专业方向。那几年，我也持续参与社团、摄影和视频制作，并在陌生的城市里慢慢建立自己的节奏。",detail:"「代码和电影，从那时开始一起成为我理解世界的方式。」",image:"assets/img/p10.jpg",alt:"本科时期拍摄的多伦多街景",initial:"T"},
 melbourne:{year:"2021 — 2023 · AUSTRALIA",title:"在墨尔本，把兴趣变成方向。",story:"在墨尔本大学攻读信息技术硕士（人工智能方向）。那段经历让我更系统地理解模型与技术，也让我开始思考：怎样把论文里的能力，变成真正能帮助人的工具。",detail:"「不只是学会一种技术，更是找到愿意长期投入的问题。」",image:"assets/img/melbourne-main-entrance.jpg",alt:"墨尔本大学主入口与学校徽章",credit:"Wikimedia Commons · CC BY-SA 4.0",creditUrl:"https://commons.wikimedia.org/wiki/File:Unimelb_main_entrance.jpg",initial:"M"},
 nanjing:{year:"2023 — NOW · CHINA",title:"回到南京，把想法送进真实世界。",story:"从消息中间件 SRE 到 Agent 平台，我开始面对更复杂的生产环境，也更在意一个系统能不能被真实的人持续使用。工作之外，开源让我保留自己动手和持续分享的空间。",detail:"「从能运行，到有人愿意每天使用，中间还有很长一段路。」",image:"assets/img/nanjing-xinjiekou-sun-yat-sen.jpg",alt:"南京新街口孙中山像与德基广场",credit:"Wikimedia Commons · CC BY-SA 4.0",creditUrl:"https://commons.wikimedia.org/wiki/File:Statue_of_Sun_Yat-sen_in_Xinjiekou,_Nanjing,_Jan_27_2023.jpg",initial:"N"}
};
var tabs=Array.prototype.slice.call(document.querySelectorAll(".city-tab"));
var cityImageRequest=0;
function selectCity(button,focus){var data=cities[button.dataset.city];tabs.forEach(function(tab){var active=tab===button;tab.setAttribute("aria-selected",String(active));tab.tabIndex=active?0:-1});document.getElementById("cityPanel").setAttribute("aria-labelledby",button.id);document.getElementById("cityYear").textContent=data.year;document.getElementById("cityTitle").textContent=data.title;document.getElementById("cityStory").textContent=data.story;document.getElementById("cityDetail").textContent=data.detail;var img=document.getElementById("cityImage"),placeholder=document.getElementById("cityPlaceholder"),request=++cityImageRequest;
if(data.image){
  img.hidden=true;placeholder.hidden=false;document.getElementById("cityInitial").textContent=data.initial;
  var preloader=new Image();
  preloader.onload=function(){if(request!==cityImageRequest)return;img.src=data.image;img.alt=data.alt;img.hidden=false;placeholder.hidden=true};
  preloader.onerror=function(){if(request!==cityImageRequest)return;img.hidden=true;placeholder.hidden=false};
  preloader.src=data.image;
}else{img.hidden=true;placeholder.hidden=false;document.getElementById("cityInitial").textContent=data.initial}var credit=document.getElementById("cityCredit");if(data.credit){credit.textContent=data.credit;credit.href=data.creditUrl;credit.hidden=false}else{credit.hidden=true}if(focus)button.focus()}
tabs.forEach(function(button,index){button.addEventListener("click",function(){selectCity(button,false)});button.addEventListener("keydown",function(e){var next=null;if(e.key==="ArrowRight")next=(index+1)%tabs.length;if(e.key==="ArrowLeft")next=(index+tabs.length-1)%tabs.length;if(next!==null){e.preventDefault();selectCity(tabs[next],true)}})});
var photo=document.getElementById("archivePhoto"),visual=document.getElementById("heroVisual");
visual.addEventListener("pointermove",function(e){if(!motionEnabled||e.pointerType==="touch")return;var r=visual.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;photo.style.setProperty("--rx",(x*4).toFixed(2)+"deg");photo.style.setProperty("--ry",(-y*4).toFixed(2)+"deg")});
visual.addEventListener("pointerleave",function(){photo.style.removeProperty("--rx");photo.style.removeProperty("--ry")});
var canvas=document.getElementById("field"),ctx=canvas.getContext("2d"),points=[],width=0,height=0,frame=0,pointer={x:-9999,y:-9999};
var heroSignal=document.querySelector(".hero");
heroSignal.addEventListener("pointermove",function(e){var r=canvas.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top});
heroSignal.addEventListener("pointerleave",function(){pointer.x=-9999;pointer.y=-9999});
function resize(){var ratio=Math.min(window.devicePixelRatio||1,2);width=canvas.clientWidth;height=canvas.clientHeight;canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);points=[];var count=Math.max(28,Math.floor(width/28));for(var i=0;i<count;i++)points.push({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.14,vy:(Math.random()-.5)*.14,r:Math.random()*1.5+.5});draw()}
function draw(){
ctx.clearRect(0,0,width,height);
var night=theme==="night";
points.forEach(function(p){if(motionEnabled){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>width)p.vx*=-1;if(p.y<0||p.y>height)p.vy*=-1}});
ctx.lineWidth=.55;
for(var i=0;i<points.length;i++){
  var p=points[i];
  for(var j=i+1;j<points.length;j++){
    var q=points[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<105){ctx.strokeStyle=night?"rgba(181,255,99,"+((1-dist/105)*.14)+")":"rgba(37,122,80,"+((1-dist/105)*.12)+")";ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}
  }
  if(motionEnabled){var px=p.x-pointer.x,py=p.y-pointer.y,pd=Math.sqrt(px*px+py*py);if(pd<180){ctx.strokeStyle=night?"rgba(181,255,99,"+((1-pd/180)*.55)+")":"rgba(37,122,80,"+((1-pd/180)*.4)+")";ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(pointer.x,pointer.y);ctx.stroke()}}
  ctx.fillStyle=night?"rgba(181,255,99,.72)":"rgba(37,122,80,.42)";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()
}}
function loop(){draw();frame=requestAnimationFrame(loop)}
function syncLoop(){if(frame){cancelAnimationFrame(frame);frame=0}if(motionEnabled&&!document.hidden){loop()}else{draw()}}
document.addEventListener("visibilitychange",syncLoop);
window.addEventListener("resize",resize);renderTheme();resize();renderMotion();syncLoop();
})();
