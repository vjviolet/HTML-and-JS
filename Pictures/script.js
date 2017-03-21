window.onload = initAll;
var timer = null;
var alpha = 30;    //这里全局变量，不能将这个写在startMove函数里面，不然第二次运行会被初始化.

function initAll() {
    var oDiv = document.getElementById("div1");
    oDiv.onmouseover = function() {
        startMove(100);
    }
    oDiv.onmouseout = function() {
        startMove(30);
    }
}

function startMove(iTarget) {
    var oDiv = document.getElementById("div1");

    clearInterval(timer);
    timer = setInterval(function(){
        speed = 0;
        if(alpha<iTarget) {
            speed = 10;
        } else {
            speed = -10;
        }
        if(alpha==iTarget) {
            clearInterval(timer);
        } else {
            alpha += speed;
            oDiv.style.filter = "alpha(opacity:"+alpha+")";
            oDiv.style.opacity = alpha/100;
        }
    }, 30);
}