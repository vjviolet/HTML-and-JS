window.onload = initAll;

function initAll() {
    function toDou(n) {
        if(n<10) {
            return "0"+n;
        } else {
            return ""+n;
        }
    }
    var div = document.getElementById("div");
    var aImg = div.getElementsByTagName("img");
    // var oDate = new Date();
    // var str = toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
    // for(var i = 0; i<str.length; i++) {
    //     aImg[i].src = 'img/'+str[i]+'.png';
    // }

    function clock() {
        var oDate = new Date();
        var str = toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        for(var i = 0; i<str.length; i++) {
            aImg[i].src = 'img/'+str[i]+'.png';
        }
    }
    setInterval(clock, 1000);
    clock();
}