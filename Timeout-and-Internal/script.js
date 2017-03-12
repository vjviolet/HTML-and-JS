window.onload = initAll;

function initAll() {
    var oDiv1 = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");
    var timer = null;

    oDiv1.onmouseover = function() {
        clearTimeout(timer);   //这里得将最后设置的提示框关闭
        oDiv2.style.display = "block";
    }

    oDiv1.onmouseout = function() {   //这里要设置延时
        timer = setTimeout(function() {
                    oDiv2.style.display = "none";
                }, 500);
    }

    oDiv2.onmouseover = function() {
        clearTimeout(timer);
        oDiv2.style.display = "block";
    }

    oDiv2.onmouseout = function() {   //这里还要设置延时器，不然会出现从提示框移入头像框时的闪现问题
        timer = setTimeout(function() {
            oDiv2.style.display = "none";
        }, 500);
       
    }
}