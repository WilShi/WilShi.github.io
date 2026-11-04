(function(){
  "use strict";
  var projects=window.WILSON_PROJECTS||[];
  var list=document.getElementById("projectList");
  var empty=document.getElementById("projectEmpty");
  var count=document.getElementById("resultCount");
  var search=document.getElementById("projectSearch");
  var filter="all";

  function esc(value){
    return String(value).replace(/[&<>"']/g,function(character){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character];
    });
  }

  function render(){
    var query=search.value.trim().toLowerCase();
    var items=projects.filter(function(project){
      var category=filter==="all"||project.category===filter;
      var text=[project.title,project.short,project.summary,project.role,project.categoryLabel].concat(project.tags).join(" ").toLowerCase();
      return category&&(!query||text.includes(query));
    });
    count.textContent=items.length+(items.length===1?" PROJECT":" PROJECTS");
    empty.hidden=items.length>0;
    list.innerHTML=items.map(function(project){
      var href="project.html?id="+encodeURIComponent(project.id);
      return '<article class="catalog-row"><span class="catalog-number">'+esc(project.number)+'</span><div><h2><a href="'+href+'">'+esc(project.title)+'</a></h2><span class="catalog-kind">'+esc(project.categoryLabel)+' · '+esc(project.role)+'</span></div><div><p class="catalog-summary">'+esc(project.summary)+'</p><ul class="catalog-tags">'+project.tags.slice(0,3).map(function(tag){return '<li>'+esc(tag)+'</li>'}).join("")+'</ul></div><a class="catalog-link" href="'+href+'">Open project file ↗</a></article>';
    }).join("");
  }

  document.querySelectorAll("[data-filter]").forEach(function(button){
    button.addEventListener("click",function(){
      filter=button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(function(candidate){
        candidate.setAttribute("aria-pressed",String(candidate===button));
      });
      render();
    });
  });
  search.addEventListener("input",render);
  render();
})();
