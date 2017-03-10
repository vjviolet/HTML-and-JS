<!DOCTYPE html>
<html>
<head>
<meta charset = "utf-8">
<title>Connection</title>
<script>
	var ws;  //一个WS对象意味着一条管道
	var target = "ws:/localhost:8080/Web/echo";
	function subOpen() {
		if ('WebSocket' in window) {
            ws = new WebSocket(target);
        } else if ('MozWebSocket' in window) {
            ws = new MozWebSocket(target);
        } else {
            alert('WebSocket is not supported by this browser.');
            return;
        }
		
		ws.onmessage = function(event) {
			var dv = document.getElementById("dv");
			dv.innerHTML = event.data;
		}
	}
	
	function subSend() {
		var msg = document.getElementById("msg").value;
		ws.send(msg);//demo如此来send消息
		document.getElementById("msg").value = "";//发送完将消息清空掉
	}
</script>
</head>
<body>
<button onclick = "subOpen();">Open</button>

<input type="text" id = "msg"> <button onclick = "subSend();">Send</button>
<div id = "dv"></div>
</body>
</html>