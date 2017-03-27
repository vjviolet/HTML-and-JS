window.onload = initAll;

function initAll() {
    var oUl = document.getElementById("ul");
    var aLi = oUl.getElementsByTagName("li");
    var oTxt = document.getElementById("txt");
    var oBtn = document.getElementById("btn");

    oBtn.onclick = function () {
        var oLi = document.createElement("li");   
        //注意这里的createElement()是document的静态方法，不属于oUl,或者oLi
        // oUl.appendChild(oLi);
        // oLi.innerHTML = oTxt.value;
        // oTxt.value = "";

        if(aLi.length>0) {
            oUl.insertBefore(oLi, aLi[0]);
        } else {
            oUl.appendChild(oLi);
        }
        oLi.innerHTML = oTxt.value;
        oTxt.value = "";
    }
   
}