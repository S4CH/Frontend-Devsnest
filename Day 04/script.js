var today = new Date();

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

hours = (hours % 12) || 12;

document.querySelector(".hours").style.transform = "rotate(" + (hours*30 - 90) +  "deg)";
document.querySelector(".minutes").style.transform = "rotate(" + (minutes*6 - 90) +  "deg)";
document.querySelector(".seconds").style.transform = "rotate(" + (seconds*6 - 90) +  "deg)";
