

window.onload = initAll;

function initAll() {
    document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
    window.location = "index011.html";
    // return false;
    //表示停止对用户单击事件的处理，保证不会加载href指向的画面
}