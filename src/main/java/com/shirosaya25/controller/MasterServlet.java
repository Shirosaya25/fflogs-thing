package com.shirosaya25.controller;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.servlets.DefaultServlet;
import org.apache.log4j.PropertyConfigurator;

import com.shirosaya25.util.LogUtil;

public class MasterServlet extends DefaultServlet{

	private static final long serialVersionUID = 1L;
	private static final RequestHelper requestHelper = new RequestHelper();

	@Override
	public void init(ServletConfig config) throws ServletException {
		
		PropertyConfigurator.configure("C:\\Users\\micha\\Documents\\Git\\batch-source\\Project1\\src\\main\\resources\\log4j\\log4j.properties");
		super.init(config);
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		
		try {
			String path = request.getRequestURI().substring(request.getContextPath().length());
			
			if(path.startsWith("/static/")) {
				
				super.doGet(request, response);
			}
			
			else {
				
				requestHelper.processGet(request, response);
			}
		}
		
		catch(Exception e) {
			
			LogUtil.log.error(e.getMessage());
		}
	}
}
