var toolBtn = document.createElement("button");
toolBtn.innerHTML = "Tools";
toolBtn.style.position='fixed';
toolBtn.style.backgroundColor='Azure';
toolBtn.style.height = "50px";
toolBtn.style.width = "100px";
toolBtn.style.left='1%';
toolBtn.style.top='3%';
document.body.appendChild(toolBtn);
var inelBtn;
var autoclBtn;
var xrayBtn;
var wrtxtBtn;
var txtedBtn;
toolBtn.onmouseover = function()
          {this.style.backgroundColor = 'Lavender';};
toolBtn.onmouseout = function()
          {this.style.backgroundColor = 'Azure';};
var showClick = false;
toolBtn.onclick = function () {
if (showClick==false){
showClick = true;
inelBtn = document.createElement("button");
autoclBtn= document.createElement("button");
xrayBtn= document.createElement("button");
wrtxtBtn = document.createElement("button");
txtedBtn = document.createElement("button");
[inelBtn.innerHTML,autoclBtn.innerHTML,xrayBtn.innerHTML,wrtxtBtn.innerHTML,txtedBtn.innerHTML] = ["Inspect Element","Autoclicker","Webpage X-Ray","Text Writer","Text Editor",];
[inelBtn.style.top,autoclBtn.style.top,xrayBtn.style.top,wrtxtBtn.style.top,txtedBtn.style.top] = ['10%','16%','22%','28%','34%'];
inelBtn.style.position=autoclBtn.style.position=xrayBtn.style.position=wrtxtBtn.style.position=txtedBtn.style.position = 'fixed';
inelBtn.style.backgroundColor=autoclBtn.style.backgroundColor=xrayBtn.style.backgroundColor=wrtxtBtn.style.backgroundColor=txtedBtn.style.backgroundColor = 'Azure';
inelBtn.style.height=autoclBtn.style.height=xrayBtn.style.height=wrtxtBtn.style.height=txtedBtn.style.height = "40px";
inelBtn.style.width=autoclBtn.style.width=xrayBtn.style.width=wrtxtBtn.style.width=txtedBtn.style.width = "90px";
inelBtn.style.left=autoclBtn.style.left=xrayBtn.style.left=wrtxtBtn.style.left=txtedBtn.style.left = '1.25%';
document.body.appendChild(inelBtn);document.body.appendChild(autoclBtn);document.body.appendChild(xrayBtn);document.body.appendChild(wrtxtBtn);document.body.appendChild(txtedBtn);
inelBtn.style.visiblility=autoclBtn.style.visibility=xrayBtn.style.visibility=wrtxtBtn.style.visibility=txtedBtn.style.visibility = 'visible';
inelBtn.onmouseover=autoclBtn.onmouseover=xrayBtn.onmouseover=wrtxtBtn.onmouseover=txtedBtn.onmouseover = function()
{this.style.backgroundColor = 'LightCyan';};
inelBtn.onmouseout=autoclBtn.onmouseout=xrayBtn.onmouseout=wrtxtBtn.onmouseout=txtedBtn.onmouseout = function()
{this.style.backgroundColor = 'Azure';};
} 
else{
inelBtn.style.visibility=autoclBtn.style.visibility=xrayBtn.style.visibility=wrtxtBtn.style.visibility=txtedBtn.style.visibility = 'hidden';
showClick = false;}};

var settingsBtn = document.createElement("button");
settingsBtn.innerHTML = "⚙️";
settingsBtn.style.position='fixed';
settingsBtn.style.backgroundColor='Azure';
settingsBtn.style.height = "35px";
settingsBtn.style.width = "35px";
settingsBtn.style.left='8%';
settingsBtn.style.top='4.5%';
settingsBtn.style.borderRadius= '12px';
document.body.appendChild(settingsBtn);
settingsBtn.onmouseover = function()
          {this.style.backgroundColor = 'Lavender';};
settingsBtn.onmouseout = function()
          {this.style.backgroundColor = 'Azure';};
settingsBtn.onclick = function () { alert(1)};
