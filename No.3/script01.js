window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
    if(document.getElementById) {
        document.getElementById("reload").onclick = anotherCard;
        newCard();
    }
    else {
        alert("Sorry, the browser doesn't support this script");
    }
}

function newCard() {
    for(var i = 0; i<24; i++) {
        setSquare(i);
    }
}

function setSquare(thisSquare) {
    var currSquare = "square"+thisSquare;
    var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var colBasis = colPlace[thisSquare]*15;
    var newNum;

    do {
        newNum = getNewNum() + colBasis + 1;
    } while(usedNums[newNum])

    usedNums[newNum] = true;

    document.getElementById(currSquare).innerHTML = newNum;
    document.getElementById(currSquare).className = "";
    document.getElementById(currSquare).onmousedown = toggleColor;

}

function getNewNum() {
    return Math.floor(Math.random()*15);
}

function anotherCard() {
    for(var i = 0; i<usedNums.length; i++) {
        usedNums[i] = flase;
    }

    newCard();
    return false;
}

function toggleColor(evt) {
    if(evt) {
        var Square = evt.target;
    }
    else {
        var Square = window.event.srcElement;
    }

    if(Square.className == "") {
        Square.className = "pickedBG"
    }
    else {
        Square.className = "";
    }
}