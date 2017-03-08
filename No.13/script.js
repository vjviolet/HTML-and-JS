// window.onload = initAll;

// function initAll() {
//     oDiv = document.getElementById("div");
//     css(oDiv, "background", "green");   //注意此处一定要写引号
//     alert(css(oDiv, "height"));
// }

// function css() {
//     if(arguments.length == 2) {
//         return arguments[0].style[arguments[1]];
//     } else {
//         arguments[0].style[arguments[1]] = arguments[2];
//     }
// }

window.onload = initAll;

function initAll() {
    oDiv = document.getElementById("div");
    if(oDiv.currentStyle) {
        alert(oDiv.currentStyle.width);
    }
    else {
        alert(getComputedStyle(oDiv, false).width);
    }
}
