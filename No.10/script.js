// window.onload = initAll;

// function initAll() {
//     document.getElementById("btn").onclick = set;
// }

// function set() {
//     document.getElementById("div").innerHTML = document.getElementById("txt").value;
// }




// window.onload = function () {
//     var arr=[ 
//                  '快过年了，大家一起去放鞭炮咯！', 
//                   '马上上学了，不开心！', 
//                    '妇女节快乐！', 
//                    '很平淡的四月', 
//                    '劳动光荣！', 
//                    '儿童节快乐！', 
//                    '好热的七月!', 
//                    '八一建军节!', 
//                    '又开学了哎！' 
//         ]; 
//     var div = document.getElementById('div');
//     var ull = div.getElementsByTagName('li');
//     var text = div.getElementsByTagName('div')[0];
//     // var text = div.getElementById("text");
//     for(var i = 0; i<ull.length; i++) {
//         ull[i].index = i;
//         ull[i].onmouseover = function () 
//         {
    
//             for(var i = 0; i<ull.length; i++) 
//             {
//                 ull[i].className = '';
//             }
//             this.className = 'active';
//             text.innerHTML='<h2>'+(this.index+1)+'月活动</h2><p>'+arr[this.index]+'</p>'; 
//         };
//     }
// };




window.onload = initAll;
function initAll() { 
    
    var div = document.getElementById('div');
    var ull = div.getElementsByTagName('li');
    // var text = div.getElementsByTagName('div')[0];
    // var text = div.getElementById("text");
    for(var i = 0; i<ull.length; i++) {
        ull[i].index = i;
        ull[i].onmouseover = point1;
    } 
}

function point1() {
        var arr=[ 
                '快过年了，大家一起去放鞭炮咯！', 
                '马上上学了，不开心！', 
                '妇女节快乐！', 
                '很平淡的四月', 
                '劳动光荣！', 
                '儿童节快乐！', 
                '好热的七月!', 
                '八一建军节!', 
                '又开学了哎！' 
         ]; 
        var div = document.getElementById('div');
        var ull = div.getElementsByTagName('li');
        var text = div.getElementsByTagName('div')[0];
        for(var j = 0; j<ull.length; j++) 
        {
            ull[j].className = '';
        }
        this.className = 'active';
        text.innerHTML='<h2>'+(this.index+1)+'月活动</h2><p>'+arr[this.index]+'</p>'; 

}
