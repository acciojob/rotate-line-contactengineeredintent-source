//your JS code here. If required.
let n = 45;
function rotate(){
  let line = document.querySelector("#line");
  line.style.transform = `rotate(${n}deg)`;
  n += 2;
}
setInterval(rotate, 20);