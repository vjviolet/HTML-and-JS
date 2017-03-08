// window.onload = initAll;

// function initAll() {
//     for(var i = 0; i < 24; i++){
//         var newMenu = Math.floor(Math.random()*75)+1;
//         document.getElementById("square"+i).innerHTML = newMenu;
//     }
// }

// window.onload = initAll;

// function initAll() {
//     if(document.getElementById) {
//         for(var i = 0; i<24; i++){
//             setSquare(i);
//         }
//     }
//     else {
//         alert("Sorry, your browser doesn't support this script!")
//     }
// }

// function setSquare(thisSquare) {
//     var currSquare = "square"+thisSquare;
//     var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
//     var colBasis = colPlace[thisSquare]*15;
//     var newNum = colBasis + Math.floor(Math.random()*15)+1;
//     document.getElementById(currSquare).innerHTML = newNum;
// }




// window.onload = initAll;
// var usedNums = new Array(76);

// function initAll() {
//     if(document.getElementById){
//         for(var i = 0; i<24; i++){
//             setSquare(i);
//         }
//     }
//     else {
//         alert("Sorry, the browser doesn't support this script!");
//     }
// }

// function setSquare(thisSquare) {
//     var currSquare = "square"+thisSquare;
//     var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
//     var colBasis = colPlace[thisSquare]*15;
//     var newNum;
//     do {
//         newNum = colBasis + getNewNum() + 1;
//     }
//     while(usedNums[newNum]);
//     usedNums[newNum] = true;
//     document.getElementById(currSquare).innerHTML = newNum;
// }

// function getNewNum() {
//     return Math.floor(Math.random()*15);
// }