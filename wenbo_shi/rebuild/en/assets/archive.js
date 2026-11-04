(function(){
"use strict";
function translateSharedUI(){
  var themeControl=document.getElementById("themeToggle");
  if(themeControl){
    var night=document.documentElement.dataset.theme!=="day";
    themeControl.textContent=night?"Day":"Night";
    themeControl.setAttribute("aria-label",night?"Switch to day mode":"Switch to night mode");
  }
  var labels={"首页 / Home":"Home","项目 / Projects":"Projects","创作档案 / Archive":"Archive","完整简历 / Resume":"Resume","联系 / Contact":"Contact","切换日夜 / Theme":"Toggle theme","切换动效 / Motion":"Toggle motion"};
  if(Array.isArray(window.WILSON_PROJECTS))window.WILSON_PROJECTS.forEach(function(project){labels[project.title+" / "+project.short]=project.short});
  document.querySelectorAll(".command-option").forEach(function(option){if(labels[option.textContent])option.textContent=labels[option.textContent]});
  var empty=document.querySelector(".command-empty");
  if(empty&&empty.textContent.indexOf("没有匹配结果。")===0)empty.textContent="No matches. Try projects, photography, or resume.";
}
translateSharedUI();
var themeControl=document.getElementById("themeToggle");
if(themeControl)themeControl.addEventListener("click",translateSharedUI);
var commandOpen=document.getElementById("commandOpen");
if(commandOpen)commandOpen.addEventListener("click",translateSharedUI);
var commandList=document.getElementById("commandList");
if(commandList&&window.MutationObserver)new MutationObserver(translateSharedUI).observe(commandList,{childList:true,subtree:true});

var filter="all";
document.querySelectorAll("[data-archive-filter]").forEach(function(button){
  button.addEventListener("click",function(){
    filter=button.dataset.archiveFilter;
    document.querySelectorAll("[data-archive-filter]").forEach(function(b){b.setAttribute("aria-pressed",String(b===button))});
    document.querySelectorAll("[data-category]").forEach(function(item){item.hidden=filter!=="all"&&item.dataset.category!==filter});
  });
});
var lightbox=document.getElementById("lightbox"),image=document.getElementById("lightboxImage"),caption=document.getElementById("lightboxCaption"),last=null;
document.querySelectorAll(".archive-full-card").forEach(function(card){
  card.addEventListener("click",function(){
    last=card;
    image.src=card.dataset.full;
    image.alt=card.dataset.caption;
    caption.textContent=card.dataset.caption;
    lightbox.showModal();
    document.body.classList.add("dialog-open");
    document.getElementById("closeLightbox").focus();
  });
});
document.getElementById("closeLightbox").addEventListener("click",function(){lightbox.close()});
lightbox.addEventListener("click",function(e){if(e.target===lightbox)lightbox.close()});
lightbox.addEventListener("close",function(){document.body.classList.remove("dialog-open");if(last)last.focus({preventScroll:true})});
})();
