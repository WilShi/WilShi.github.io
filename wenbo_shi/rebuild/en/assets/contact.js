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

var form=document.getElementById("contactForm"),status=document.getElementById("formStatus"),copyMessage=document.getElementById("copyMessage"),copyEmail=document.getElementById("copyEmail"),latest={subject:"",body:""};
function fallbackCopy(text){
  var area=document.createElement("textarea");
  area.value=text;
  area.setAttribute("readonly","");
  area.style.position="fixed";
  area.style.opacity="0";
  document.body.appendChild(area);
  area.select();
  var ok=false;
  try{ok=document.execCommand("copy")}catch(e){}
  area.remove();
  return ok;
}
function copyText(text){
  if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text).then(function(){return true}).catch(function(){return fallbackCopy(text)});
  return Promise.resolve(fallbackCopy(text));
}
copyEmail.addEventListener("click",function(){
  copyText("1638083992@qq.com").then(function(ok){
    copyEmail.textContent=ok?"Email address copied ✓":"Copy failed. Please copy the address manually.";
    setTimeout(function(){copyEmail.textContent="Copy email address"},2200);
  });
});
copyMessage.addEventListener("click",function(){
  copyText("Subject: "+latest.subject+"\n\n"+latest.body).then(function(ok){
    status.textContent=ok?"Email subject and content copied. You can paste them into any email app.":"Copy failed. Please copy the email address above and send your message manually.";
  });
});
["senderName","message"].forEach(function(id){document.getElementById(id).addEventListener("input",function(e){e.target.setCustomValidity("")})});
form.addEventListener("submit",function(e){
  e.preventDefault();
  if(!form.reportValidity())return;
  var name=document.getElementById("senderName").value.trim(),reply=document.getElementById("replyEmail").value.trim(),topic=document.getElementById("topic").value,message=document.getElementById("message").value.trim();
  if(!name){
    var nameInput=document.getElementById("senderName");
    nameInput.setCustomValidity("Please enter your name; spaces alone are not enough.");
    nameInput.reportValidity();
    return;
  }
  if(!message){
    var messageInput=document.getElementById("message");
    messageInput.setCustomValidity("Please enter a message; spaces alone are not enough.");
    messageInput.reportValidity();
    return;
  }
  latest.subject="[Personal website] "+topic+" · "+name;
  latest.body="Hi Wilson,\n\n"+message+"\n\n— "+name+(reply?"\nReply email: "+reply:"");
  var url="mailto:1638083992@qq.com?subject="+encodeURIComponent(latest.subject)+"&body="+encodeURIComponent(latest.body);
  window.__lastMailto=url;
  window.__lastEmailContent=latest;
  copyMessage.hidden=false;
  status.textContent="Your message is ready. We'll try to open your email app now. If it doesn't open, use Copy email content instead.";
  window.location.href=url;
});
})();
