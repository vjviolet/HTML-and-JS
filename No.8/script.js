// function toRed() {
//     var div = document.getElementById("div");
//     div.className = "boxx";
// }

// function toGreen() {
//     var div = document.getElementById("div");
//     div.className = "box";
// }

// window.onload = initAll;
// function initAll() {
//     document.getElementById("btn").onclick = alertt;
// }
// function alertt() {
//     alert("a");
// }


window.onload = initAll;

function initAll() {
    var div = document.getElementsByTagName("div");
    var i = 0;
    for(i=0;i<div.length;i++) {
        div[i].style.backgroundColor="red";
    }
}