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
    root.innerHTML='<section class="page-hero"><div class="page"><p class="eyebrow">PROJECT NOT FOUND</p><h1>Project not found.</h1><div class="page-actions"><a class="button" href="projects.html">Back to all projects →</a></div></div></section>';
    return;
  }

  var project=projects[index];
  var previous=index>0?projects[index-1]:null;
  var next=index<projects.length-1?projects[index+1]:null;
  document.title=project.title+" · Wilson Shi";
  var description=document.querySelector('meta[name="description"]');
  if(description)description.content=project.summary;

  function list(items){
    return '<ul>'+items.map(function(item){return '<li>'+esc(item)+'</li>'}).join("")+'</ul>';
  }

  function capabilities(groups){
    return groups.map(function(group){
      return '<section class="detail-block capability-group"><h2>'+esc(group.title)+'</h2>'+list(group.items)+'</section>';
    }).join("");
  }

  var capabilityHTML=project.capabilities?capabilities(project.capabilities):"";
  root.innerHTML='<section class="detail-hero"><div class="page"><a class="detail-back" href="projects.html">← Back to all projects</a><div class="detail-title-grid"><div class="detail-title"><p class="eyebrow">'+esc(project.categoryLabel)+' / PROJECT FILE '+esc(project.number)+'</p><h1>'+esc(project.title)+'</h1><p>'+esc(project.summary)+'</p><div class="detail-meta"><span>ROLE · '+esc(project.role)+'</span><span>FILE · '+esc(project.number)+' / '+projects.length+'</span></div></div><div class="detail-mark"><strong>'+esc(project.number)+'</strong><span>'+esc(project.short)+'</span></div></div></div></section><nav class="detail-quick" aria-label="On this page"><div class="page detail-quick-inner"><span class="detail-quick-label">ON THIS PAGE</span><a href="#overview">Overview</a>'+(capabilityHTML?'<a href="#capabilities">Capabilities</a>':"")+'<a href="#contribution">Contributions</a><a href="#outcomes">Outcomes &amp; status</a><button class="detail-copy" id="copyProjectLink" type="button">Copy page link</button><span class="copy-status" id="copyLinkStatus" role="status" aria-live="polite"></span></div></nav><div class="page"><div class="detail-body"><div id="overview"><p class="detail-lead">'+esc(project.description)+'</p><div class="detail-challenge"><strong>Why build this?</strong><br>'+esc(project.challenge)+'</div>'+(project.link?'<div class="page-actions"><a class="button" href="'+esc(project.link)+'" target="_blank" rel="noopener noreferrer">'+esc(project.linkLabel)+' ↗</a></div>':"")+'</div><div>'+(capabilityHTML?'<div id="capabilities">'+capabilityHTML+'</div>':"")+'<section class="detail-block" id="contribution"><h2>Contributions</h2>'+list(project.contributions)+'</section><section class="detail-block" id="outcomes"><h2>Outcomes &amp; current status</h2>'+list(project.outcomes)+'</section><section class="detail-block" id="related"><h2>Related topics</h2><div class="detail-tags">'+project.tags.map(function(tag){return '<span>'+esc(tag)+'</span>'}).join("")+'</div></section></div></div><nav class="detail-nav" aria-label="Previous and next projects">'+(previous?'<a href="project.html?id='+encodeURIComponent(previous.id)+'"><small>← PREVIOUS</small>'+esc(previous.title)+'</a>':'<a href="projects.html"><small>← BACK</small>Back to project list</a>')+(next?'<a href="project.html?id='+encodeURIComponent(next.id)+'"><small>NEXT →</small>'+esc(next.title)+'</a>':'<a href="projects.html"><small>ALL PROJECTS →</small>Back to project list</a>')+'</nav></div>';

  var copyButton=document.getElementById("copyProjectLink");
  var status=document.getElementById("copyLinkStatus");

  function fallbackCopy(text){
    var area=document.createElement("textarea");
    area.value=text;
    area.setAttribute("readonly","");
    area.style.position="fixed";
    area.style.opacity="0";
    document.body.appendChild(area);
    area.select();
    var ok=false;
    try{ok=document.execCommand("copy")}catch(error){}
    area.remove();
    return ok;
  }

  copyButton.addEventListener("click",function(){
    var text=location.href;
    function done(ok){
      status.textContent=ok?"Link copied ✓":"Copy failed—please copy the URL from the address bar.";
      copyButton.textContent=ok?"Copied":"Copy page link";
      setTimeout(function(){
        status.textContent="";
        copyButton.textContent="Copy page link";
      },2200);
    }
    if(navigator.clipboard&&window.isSecureContext){
      navigator.clipboard.writeText(text).then(function(){done(true)}).catch(function(){done(fallbackCopy(text))});
    }else{
      done(fallbackCopy(text));
    }
  });
})();
