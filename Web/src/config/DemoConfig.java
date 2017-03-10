package config;

import java.util.Set;

import javax.websocket.Endpoint;
import javax.websocket.server.ServerApplicationConfig;
import javax.websocket.server.ServerEndpointConfig;

public class DemoConfig implements ServerApplicationConfig{

	@Override
	//注解方式编程
	public Set<Class<?>> getAnnotatedEndpointClasses(Set<Class<?>> scanned) {
		System.out.println("config......"+scanned.size());
		//提供了一定的过滤作用
		return scanned;
	}

	@Override
	//接口方式编程
	public Set<ServerEndpointConfig> getEndpointConfigs(Set<Class<? extends Endpoint>> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

}
