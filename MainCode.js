var toolBtn = document.createElement("button");
toolBtn.innerHTML = "Tools";
toolBtn.style.position='fixed';
toolBtn.style.backgroundColor='AliceBlue';
toolBtn.style.height = "50px";
toolBtn.style.width = "100px";
toolBtn.style.left='1%';
toolBtn.style.top='3%';
toolBtn.style.zIndex = "9999";
document.body.appendChild(toolBtn);


var top_z = 10;

function bringToTop(element)
{
    toolBtn.style.zIndex = ++top_z;
}

var inelBtn;
var autoclBtn;
var xrayBtn;
var wrtxtBtn;
var txtedBtn;
toolBtn.onmouseover = function()
          {this.style.backgroundColor = 'Lavender';};
toolBtn.onmouseout = function()
          {this.style.backgroundColor = 'AliceBlue';};
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
inelBtn.style.zIndex=autoclBtn.style.zIndex=xrayBtn.style.zIndex=wrtxtBtn.style.zIndex=txtedBtn.style.zIndex = "9999";
document.body.appendChild(inelBtn);document.body.appendChild(autoclBtn);document.body.appendChild(xrayBtn);document.body.appendChild(wrtxtBtn);document.body.appendChild(txtedBtn);
inelBtn.style.visiblility=autoclBtn.style.visibility=xrayBtn.style.visibility=wrtxtBtn.style.visibility=txtedBtn.style.visibility = 'visible';
inelBtn.onmouseover=autoclBtn.onmouseover=xrayBtn.onmouseover=wrtxtBtn.onmouseover=txtedBtn.onmouseover = function()
{this.style.backgroundColor = 'LightCyan';};
inelBtn.onmouseout=autoclBtn.onmouseout=xrayBtn.onmouseout=wrtxtBtn.onmouseout=txtedBtn.onmouseout = function()
{this.style.backgroundColor = 'Azure';
 inelBtn.onclick = function () {
(function () { var script = document.createElement('script'); 
script.src="//cdn.jsdelivr.net/npm/eruda"; 
document.body.appendChild(script); 
script.onload = function () { eruda.init() } })();
 };
 autoclBtn.onclick = function () {
var DELAY = 1;var autoClickerStyleElement = document.createElement("style");
autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";
document.body.appendChild(autoClickerStyleElement);
function addClicker(e) {if(!e.isTrusted) {return;}
if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");}
else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);
document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) 
{if(element.classList.contains("auto-clicker-target")) {element.click();
setTimeout(function(){ autoClick(element); }, DELAY);}}
document.body.addEventListener("click", addClicker, 0);
 };
 xrayBtn.onclick = function () {
(function () {var script=document.createElement('script');
script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';
script.setAttribute('data-lang','en-US');
script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');
document.body.appendChild(script);}())
 };
 wrtxtBtn.onclick = function () {
(function(){(function(){var enteredText = prompt("Please Enter Text");
var TEXT = enteredText;
Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el)
{el.onkeypress=function(evt){var charCode = typeof evt.which == 'number' ? evt.which : evt.keyCode;
if (charCode && charCode > 31) {var start = this.selectionStart, end = this.selectionEnd;
this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);
this.selectionStart = this.selectionEnd = start + 1;}return false;}});}());}())
 };
var txtedClicked = false;
txtedBtn.onclick = function () {
if (txtedClicked == false){
txtedClicked = true;
document.body.contentEditable = 'true'; document.designMode='on'; void 0}
else if (txtedClicked == true){
txtedClicked = false;
document.body.contentEditable = 'false'; document.designMode='off'; void 0}
 };
}}
else{
inelBtn.style.visibility=autoclBtn.style.visibility=xrayBtn.style.visibility=wrtxtBtn.style.visibility=txtedBtn.style.visibility = 'hidden';
showClick = false;}};

var settingsBtn = document.createElement("button");
settingsBtn.innerHTML = "⚙️";
settingsBtn.style.position='fixed';
settingsBtn.style.backgroundColor='WhiteSmoke';
settingsBtn.style.height = "35px";
settingsBtn.style.width = "35px";
settingsBtn.style.left='8%';
settingsBtn.style.top='4.35%';
settingsBtn.style.zIndex = "9999";
settingsBtn.style.borderRadius= '12px';
document.body.appendChild(settingsBtn);
settingsBtn.onmouseover = function()
          {this.style.backgroundColor = 'Gainsboro';};
settingsBtn.onmouseout = function()
          {this.style.backgroundColor = 'WhiteSmoke';};
var settshowClick = false;
var hideSett;
var rightSett;
var bottomSett;
var helpSett;
settingsBtn.onclick = function () {
    
if (settshowClick==false){
settshowClick = true;
hideSett = document.createElement("button");
rightSett = document.createElement("button");
bottomSett = document.createElement("button");
helpSett = document.createElement("button");
[hideSett.innerHTML,rightSett.innerHTML,bottomSett.innerHTML,helpSett.innerHTML] = ["Hide","Right","Bottom","Help"];
[hideSett.style.left,rightSett.style.left,bottomSett.style.left,helpSett.style.left] = ['11%','17%','23%','29%'];
hideSett.style.position=rightSett.style.position=bottomSett.style.position=helpSett.style.position = 'fixed';
hideSett.style.backgroundColor=rightSett.style.backgroundColor=bottomSett.style.backgroundColor=helpSett.style.backgroundColor = 'WhiteSmoke';
hideSett.style.height=rightSett.style.height=bottomSett.style.height=helpSett.style.height = "30px";
hideSett.style.width=rightSett.style.width=bottomSett.style.width=helpSett.style.width = "65px";
hideSett.style.top=rightSett.style.top=bottomSett.style.top=helpSett.style.top = '4.5%';
hideSett.style.zIndex=rightSett.style.zIndex=bottomSett.style.zIndex=helpSett.style.zIndex = "9999";
hideSett.style.visiblility=rightSett.style.visibility=bottomSett.style.visibility=helpSett.style.visibility = 'visible';
document.body.appendChild(hideSett);document.body.appendChild(rightSett);document.body.appendChild(bottomSett);document.body.appendChild(helpSett);
hideSett.onmouseover = rightSett.onmouseover = bottomSett.onmouseover = helpSett.onmouseover = function()
{this.style.backgroundColor = 'Gainsboro';};
hideSett.onmouseout=rightSett.onmouseout=bottomSett.onmouseout=helpSett.onmouseout = function()
{this.style.backgroundColor = 'WhiteSmoke';}
}}
