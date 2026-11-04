(function(){
  "use strict";
  var projects=window.WILSON_PROJECTS||[];
  var params=new URLSearchParams(location.search);
  var id=params.get("id")||"agent-platform";
  var index=projects.findIndex(function(project){return project.id===id});
  var root=document.getElementById("projectDetail");

  function esc(value){
    return String(value).replace(/[&<>"']/g,function(character){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character];
    });
  }

  if(index<0){
    root.innerHTML='<section class="page-hero"><div class="page"><p class="eyebrow">PROJECT NOT FOUND</p><h1>Project file not found.</h1><div class="page-actions"><a class="button" href="projects.html">Back to all projects →</a></div></div></section>';
    return;
  }

  var project=projects[index];
  document.title=project.title+" · Wilson Shi";

  function list(items){
    return '<ul>'+items.map(function(item){return '<li>'+esc(item)+'</li>'}).join("")+'</ul>';
  }

  var previous=index>0?projects[index-1]:null;
  var next=index<projects.length-1?projects[index+1]:null;
  root.innerHTML='<section class="detail-hero"><div class="page"><a class="detail-back" href="projects.html">← Back to all projects</a><div class="detail-title-grid"><div class="detail-title"><p class="eyebrow">'+esc(project.categoryLabel)+' / PROJECT FILE '+esc(project.number)+'</p><h1>'+esc(project.title)+'</h1><p>'+esc(project.summary)+'</p><div class="detail-meta"><span>ROLE · '+esc(project.role)+'</span><span>FILE · '+esc(project.number)+' / 14</span></div></div><div class="detail-mark"><strong>'+esc(project.number)+'</strong><span>'+esc(project.short)+'</span></div></div></div></section><div class="page"><div class="detail-body"><div><p class="detail-lead">'+esc(project.description)+'</p><div class="detail-challenge"><strong>Why build this?</strong><br>'+esc(project.challenge)+'</div>'+(project.link?'<div class="page-actions"><a class="button" href="'+esc(project.link)+'" target="_blank" rel="noopener noreferrer">'+esc(project.linkLabel)+' ↗</a></div>':"")+'</div><div><section class="detail-block"><h2>My contributions</h2>'+list(project.contributions)+'</section><section class="detail-block"><h2>Outcomes / Current status</h2>'+list(project.outcomes)+'</section><section class="detail-block"><h2>Related topics</h2><div class="detail-tags">'+project.tags.map(function(tag){return '<span>'+esc(tag)+'</span>'}).join("")+'</div></section></div></div><nav class="detail-nav" aria-label="Previous and next projects">'+(previous?'<a href="project.html?id='+encodeURIComponent(previous.id)+'"><small>← PREVIOUS</small>'+esc(previous.title)+'</a>':'<a href="projects.html"><small>← BACK</small>Back to project list</a>')+(next?'<a href="project.html?id='+encodeURIComponent(next.id)+'"><small>NEXT →</small>'+esc(next.title)+'</a>':'<a href="projects.html"><small>ALL PROJECTS →</small>Back to project list</a>')+'</nav></div>';
})();
