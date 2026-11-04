(function(){
"use strict";
var form=document.getElementById("contactForm"),status=document.getElementById("formStatus"),copyMessage=document.getElementById("copyMessage"),copyEmail=document.getElementById("copyEmail"),latest={subject:"",body:""};
function fallbackCopy(text){var area=document.createElement("textarea");area.value=text;area.setAttribute("readonly","");area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();var ok=false;try{ok=document.execCommand("copy")}catch(e){}area.remove();return ok}
function copyText(text){if(navigator.clipboard&&window.isSecureContext){return navigator.clipboard.writeText(text).then(function(){return true}).catch(function(){return fallbackCopy(text)})}return Promise.resolve(fallbackCopy(text))}
copyEmail.addEventListener("click",function(){copyText("1638083992@qq.com").then(function(ok){copyEmail.textContent=ok?"邮箱已复制 ✓":"复制失败，请手动复制";setTimeout(function(){copyEmail.textContent="复制邮箱地址"},2200)})});
copyMessage.addEventListener("click",function(){copyText("主题："+latest.subject+"\n\n"+latest.body).then(function(ok){status.textContent=ok?"邮件主题与内容已复制，可以粘贴到任意邮件应用。":"复制失败，请使用左侧邮箱地址手动发送。"})});
["senderName","message"].forEach(function(id){document.getElementById(id).addEventListener("input",function(e){e.target.setCustomValidity("")})});
form.addEventListener("submit",function(e){
  e.preventDefault();
  if(!form.reportValidity())return;
  var name=document.getElementById("senderName").value.trim(),reply=document.getElementById("replyEmail").value.trim(),topic=document.getElementById("topic").value,message=document.getElementById("message").value.trim();
  if(!name){var nameInput=document.getElementById("senderName");nameInput.setCustomValidity("请输入你的称呼，不能只包含空格。");nameInput.reportValidity();return}
  if(!message){var messageInput=document.getElementById("message");messageInput.setCustomValidity("请输入想说的话，不能只包含空格。");messageInput.reportValidity();return}
  latest.subject="[个人网站] "+topic+" · "+name;
  latest.body="Wilson，你好：\n\n"+message+"\n\n—— "+name+(reply?"\n回复邮箱："+reply:"");
  var url="mailto:1638083992@qq.com?subject="+encodeURIComponent(latest.subject)+"&body="+encodeURIComponent(latest.body);
  window.__lastMailto=url;window.__lastEmailContent=latest;
  copyMessage.hidden=false;
  status.textContent="已整理好内容，正在尝试打开邮件应用；如果没有打开，可以改用「复制邮件内容」。";
  window.location.href=url;
});
})();