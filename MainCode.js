var toolBtn = document.createElement("button");
toolBtn.innerHTML = "Tools";
toolBtn.style.position='fixed';
toolBtn.style.backgroundColor='Azure';
toolBtn.style.height = "50px";
toolBtn.style.width = "100px";
toolBtn.style.left='1%';
toolBtn.style.top='3%';
document.body.appendChild(toolBtn);
toolBtn.onmouseover = function()
          {this.style.backgroundColor = 'LightCyan';};
toolBtn.onmouseout = function()
          {this.style.backgroundColor = 'Azure';};
toolBtn.onclick = function () {

for (let i = 0; i < 3; i++) {
var Btn = document.createElement("button");
if (i == 0){
          Btn.innerHTML = "Food";
          Btn.style.top='10%';}
if (i == 0){
          Btn.innerHTML = "Food";
          Btn.style.top='15%';}
if (i == 0){
          Btn.innerHTML = "Food";
          Btn.style.top='20%';}
if (i == 0){
          Btn.innerHTML = "Food";
          Btn.style.top='25%';}
Btn.style.position='fixed';
Btn.style.backgroundColor='Azure';
Btn.style.height = "37px";
Btn.style.width = "75px";
Btn.style.left='1%';
document.body.appendChild(Btn);
Btn.onmouseover = function()
          {this.style.backgroundColor = 'LightCyan';};
Btn.onmouseout = function()
          {this.style.backgroundColor = 'Azure';};
}
};
  
