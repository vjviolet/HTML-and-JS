
// window.onload = initAll;

// function initAll() {
//     document.getElementById("redirect").onclick = initRedirect;
// }

// function initRedirect() {
//     alert("We are not responsible for the content outside our site");
//     window.location = this;
//     return false;
// }



// window.onload = initAll;

// function initAll() {
//     document.getElementById("Lincoln").onclick = saySomething;
//     document.getElementById("Kennedy").onclick = saySomething;
//     document.getElementById("Nixon").onclick = saySomething;
// }

// function saySomething() {
//     switch(this.id) {
//         case "Lincoln":
//         alert("Four score and seven years ago");
//         break;
//         case "Kennedy":
//         alert("Ask not what you country can do for you...");
//         break;
//         case "Nixon":
//         alert("I am not a crook!");
//         break;
//         default:
//     }
// }


window.onload = initAll;

function initAll() {
    var ans = prompt("Please enter a number: ");
    try {
        if(!ans||isNaN(ans)||ans<0) {
            throw new Error("Not a valid number");
        }
        alert("The square root of "+ans+ " is "+Math.sqrt(ans));
    }

    catch(errMsg) {
        alert(errMsg.message);
    }
}