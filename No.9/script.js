// window.onload = initAll;

// function initAll() {
//     document.getElementById("btn1").onclick = btn1;
//     document.getElementById("btn2").onclick = btn2;
//     document.getElementById("btn3").onclick = btn3;
// }

// function btn1() {
//     var div = document.getElementById("div");
//     var input = div.getElementsByTagName("input");
//     for(var i = 0; i<input.length; i++) {
//         input[i].checked = true;
//     }
// }

// function btn2() {
//     var div = document.getElementById("div");
//     var input = div.getElementsByTagName("input");
//     for(var i=0; i<input.length; i++) {
//         input[i].checked = false;
//     }
// }

// function btn3() {
//     var div = document.getElementById("div");
//     var input = div.getElementsByTagName("input");
//     for(var i=0;i<input.length;i++) {
//         if(input[i].checked == false) {  //记住此处一定是==，因为是判断，并非赋值
//             input[i].checked = true;
//         } else {
//             input[i].checked = false;
//         }
//     }
// }

window.onload = initAll;

function initAll() {
    var btn = document.getElementsByTagName("input");
    var div = document.getElementsByTagName("div");
    for(var i=0; i<btn.length; i++) {
        btn[i].index = i;    //这个必须写在此处
        // btn[i].onclick = function () 
        // {
        //     for(var i=0; i<btn.length; i++) {
        //     btn[i].className = "";
        //     div[i].style.display = "none";
        //     }
        //     div[this.index].style.display = "block";
        //     this.className = "active";
        //  }
        btn[i].onclick = btn1;
    }
}

function btn1() {
    var btn = document.getElementsByTagName("input");  //这里变量声明必须再写一次
    var div = document.getElementsByTagName("div");
    for(var j=0; j<btn.length; j++) {
        btn[j].className = "";
        div[j].style.display = "none";
    }
    div[this.index].style.display = "block";
    this.className = "active";
    // this.className = "active";
    
}