// window.onload = initAll;

// function initAll() {
//     var otxt1 = document.getElementById("txt1");
//     var otxt2 = document.getElementById("txt2");
//     document.getElementById("btn").onclick = click1;
// }

// function click1() {
//     var otxt1 = document.getElementById("txt1");
//     var otxt2 = document.getElementById("txt2");
//     if(isNaN(parseInt(otxt1.value))) {
//         alert("您输入的第一个数字有误！");
//     } else if(isNaN(parseInt(otxt2.value))) {
//         alert("您输入的第二个数字有误！");
//     } else {
//         alert(parseInt(otxt1.value)+parseInt(otxt2.value));  //此处一定要记得是otxt1.value.
//     }
// }


window.onload = initAll;

function initAll() {
    var a = "sss";
    var b = "5";
    alert(a-b);  //如果是非数字两个相减，会弹出NaN;
}