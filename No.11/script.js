window.onload = initAll;

function initAll() {
    // var ali = document.getElementsByTagName("li");
    // for(var i=0; i<ali.length; i++) {
    //     if(i%2==0){
    //         ali[i].style.backgroundColor = "gray";
    //     } else {
    //         ali[i].style.backgroundColor = "";
    //     }
    // }

    // var a = 156;
    // alert(parseInt(a/60)+"minutes"+(a%60)+"seconds!");

    var name = "abc";
    var sex = "男";

    switch(sex) {
        case "男":
            alert(name+"先生, 你好！");
            break;
        case "女":
            alert(name+"女士，你好！");
            break;
        default:
            alert(name+"你好!");
    }
}