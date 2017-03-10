package socket;

import java.io.IOException;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/echo")
public class EchoSocket {
	//如果是成员变量，不会影响各个管道之间的通信
	public EchoSocket() {
		System.out.println("mmmm");
	}
	
	@OnOpen
	public void open(Session session) {
		System.out.println("session id: "+session.getId());
	}
	
	@OnClose
	public void close(Session session) {
		System.out.println("Session id"+session.getId()+" is closing!");
	}
	
	@OnMessage
	public void message(Session session, String msg) {
		System.out.println("Client: "+msg);
		try {
			session.getBasicRemote().sendText("Server: 你好！");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
//在这边什么都不写的时候就可以看到scanned的大小变成了1