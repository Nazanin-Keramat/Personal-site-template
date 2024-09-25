let color = "0123456789abcdef";
function myFunc() {
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    let c = Math.floor(Math.random() * 16);
    colors += color[c];
  }
  let div = document.getElementsByTagName("div")[0];
  let num = Math.random() * 5;
  div.style.transform = "scale(" + num + ")";
  div.style.backgroundColor = colors;
}
//start button
document.getElementsByTagName("button")[0].addEventListener("click", startFunc);
function startFunc() {
  interval = setInterval(myFunc, 1000);
}
//end button
document.getElementsByTagName("button")[1].addEventListener("click", endFunc);
function endFunc() {
  clearInterval(interval);
}
let interval;
