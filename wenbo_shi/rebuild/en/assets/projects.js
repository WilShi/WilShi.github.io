(function(){
  "use strict";
  var projects=window.WILSON_PROJECTS||[];
  var list=document.getElementById("projectList");
  var empty=document.getElementById("projectEmpty");
  var count=document.getElementById("resultCount");
  var search=document.getElementById("projectSearch");

  function esc(value){
    return String(value).replace(/[&<>"']/g,function(character){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character];
    });
  }

  function stateFromUrl(){
    var params=new URLSearchParams(location.search);
    var category=params.get("category")||"all";
    return {category:["all","enterprise","open"].includes(category)?category:"all",q:params.get("q")||""};
  }

  var state=stateFromUrl();
  var filter=state.category;
  search.value=state.q;

  function syncButtons(){
    document.querySelectorAll("[data-filter]").forEach(function(button){
      button.setAttribute("aria-pressed",String(button.dataset.filter===filter));
    });
  }

  function render(updateUrl){
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
      return '<article class="catalog-row"><span class="catalog-number">'+esc(project.number)+'</span><div><h2><a href="'+href+'">'+esc(project.title)+'</a></h2><span class="catalog-kind">'+esc(project.categoryLabel)+' · '+esc(project.role)+'</span></div><div><p class="catalog-summary">'+esc(project.summary)+'</p><ul class="catalog-tags">'+project.tags.slice(0,3).map(function(tag){return '<li>'+esc(tag)+'</li>'}).join("")+'</ul></div><a class="catalog-link" href="'+href+'">View project ↗</a></article>';
    }).join("");
    if(updateUrl){
      var url=new URL(location.href);
      if(filter==="all")url.searchParams.delete("category");
      else url.searchParams.set("category",filter);
      if(query)url.searchParams.set("q",search.value.trim());
      else url.searchParams.delete("q");
      history.replaceState({category:filter,q:search.value.trim()},"",url);
    }
  }

  document.querySelectorAll("[data-filter]").forEach(function(button){
    button.addEventListener("click",function(){
      filter=button.dataset.filter;
      syncButtons();
      render(true);
    });
  });
  search.addEventListener("input",function(){render(true)});
  window.addEventListener("popstate",function(){
    var next=stateFromUrl();
    filter=next.category;
    search.value=next.q;
    syncButtons();
    render(false);
  });
  syncButtons();
  render(false);
})();
