(function(){
"use strict";
var filter="all";
document.querySelectorAll("[data-archive-filter]").forEach(function(button){button.addEventListener("click",function(){filter=button.dataset.archiveFilter;document.querySelectorAll("[data-archive-filter]").forEach(function(b){b.setAttribute("aria-pressed",String(b===button))});document.querySelectorAll("[data-category]").forEach(function(item){item.hidden=filter!=="all"&&item.dataset.category!==filter})})});
var lightbox=document.getElementById("lightbox"),image=document.getElementById("lightboxImage"),caption=document.getElementById("lightboxCaption"),last=null;
document.querySelectorAll(".archive-full-card").forEach(function(card){card.addEventListener("click",function(){last=card;image.src=card.dataset.full;image.alt=card.dataset.caption;caption.textContent=card.dataset.caption;lightbox.showModal();document.body.classList.add("dialog-open");document.getElementById("closeLightbox").focus()})});
document.getElementById("closeLightbox").addEventListener("click",function(){lightbox.close()});lightbox.addEventListener("click",function(e){if(e.target===lightbox)lightbox.close()});lightbox.addEventListener("close",function(){document.body.classList.remove("dialog-open");if(last)last.focus({preventScroll:true})});
})();