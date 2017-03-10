package socket;

import java.io.IOException;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/echo")
public class EchoSocket {
	//����ǳ�Ա����������Ӱ������ܵ�֮���ͨ��
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
			session.getBasicRemote().sendText("Server: ��ã�");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
//�����ʲô����д��ʱ��Ϳ��Կ���scanned�Ĵ�С�����1