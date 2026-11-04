(function(){
"use strict";
var root=document.documentElement;
var themeButton=document.getElementById("themeToggle");
var motionButton=document.getElementById("motionToggle");
var motionQuery=window.matchMedia("(prefers-reduced-motion: reduce)");
var motionEnabled=!motionQuery.matches;
var theme="night";
try{theme=localStorage.getItem("wilson-personal-v2-theme")||"night";var saved=localStorage.getItem("wilson-personal-v2-motion");if(saved!==null)motionEnabled=saved==="on"}catch(e){}
function renderTheme(){root.dataset.theme=theme;themeButton.textContent=theme==="night"?"Day":"Night";themeButton.setAttribute("aria-label",theme==="night"?"Switch to day mode":"Switch to night mode");themeButton.removeAttribute("aria-pressed")}
function renderMotion(){root.dataset.motion=motionEnabled?"on":"off";motionButton.textContent=motionEnabled?"Motion On":"Motion Off";motionButton.setAttribute("aria-pressed",String(motionEnabled));if(!motionEnabled){photo.style.removeProperty("--rx");photo.style.removeProperty("--ry")}syncLoop()}
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
 canada:{year:"BEFORE UNIVERSITY · CANADA",title:"High school at Columbia International College.",story:"After graduating from junior high school, I attended Columbia International College in Canada. It was an earlier experience of living independently and laid the foundation for Toronto, Melbourne, and cross-cultural work later on.",detail:"“First adapt to a new environment, then gradually find your own rhythm.”",image:"../assets/img/cic-maple.jpg",alt:"The Maple Building at Columbia International College",credit:"Wikimedia Commons · CC BY-SA 4.0",creditUrl:"https://commons.wikimedia.org/wiki/File:Maple_Building,_Columbia_International_College.jpg",initial:"C"},
 toronto:{year:"2017 — 2021 · CANADA",title:"Learning to live in Toronto.",story:"As an undergraduate, I studied at both the University of Toronto and Sheridan College, pursuing four areas in parallel: Information Technology, Computer Science, Film Studies, and New Media. During those years, I was also involved in student organizations, photography, and video production, gradually finding my own rhythm in an unfamiliar city.",detail:"“Code and film began to shape how I understand the world.”",image:"../assets/img/p10.jpg",alt:"A Toronto street photographed during my undergraduate years",initial:"T"},
 melbourne:{year:"2021 — 2023 · AUSTRALIA",title:"Turning an interest into a direction in Melbourne.",story:"At the University of Melbourne, I pursued a master's in Information Technology, focusing on Artificial Intelligence. That experience gave me a more systematic understanding of models and technology, and led me to ask how capabilities described in papers could become tools that genuinely help people.",detail:"“It was not just about learning a technology, but finding a problem worth committing to for the long term.”",image:"../assets/img/melbourne-main-entrance.jpg",alt:"The University of Melbourne main entrance with the university crest",credit:"Wikimedia Commons · CC BY-SA 4.0",creditUrl:"https://commons.wikimedia.org/wiki/File:Unimelb_main_entrance.jpg",initial:"M"},
 nanjing:{year:"2023 — NOW · CHINA",title:"Back in Nanjing, bringing ideas into the real world.",story:"From messaging middleware SRE to Agent platforms, I began working with more complex production environments and caring more about whether real people would keep using a system. Outside work, open source gives me room to keep building and sharing.",detail:"“There is a long road between getting something to run and making it something people want to use every day.”",image:"../assets/img/nanjing-confucius-night.jpg",alt:"Confucius Temple and Qinhuai River at night in Nanjing",credit:"Wikimedia Commons · CC BY-SA 2.0",creditUrl:"https://commons.wikimedia.org/wiki/File:Confucius_Temple_and_Qinhuai_River,_Nanjing_Night.jpg",initial:"N"}
};
var tabs=Array.prototype.slice.call(document.querySelectorAll(".city-tab"));
function selectCity(button,focus){var data=cities[button.dataset.city];tabs.forEach(function(tab){var active=tab===button;tab.setAttribute("aria-selected",String(active));tab.tabIndex=active?0:-1});document.getElementById("cityPanel").setAttribute("aria-labelledby",button.id);document.getElementById("cityYear").textContent=data.year;document.getElementById("cityTitle").textContent=data.title;document.getElementById("cityStory").textContent=data.story;document.getElementById("cityDetail").textContent=data.detail;var img=document.getElementById("cityImage"),placeholder=document.getElementById("cityPlaceholder");if(data.image){img.src=data.image;img.alt=data.alt;img.hidden=false;placeholder.hidden=true}else{img.hidden=true;placeholder.hidden=false;document.getElementById("cityInitial").textContent=data.initial}var credit=document.getElementById("cityCredit");if(data.credit){credit.textContent=data.credit;credit.href=data.creditUrl;credit.hidden=false}else{credit.hidden=true}if(focus)button.focus()}
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
