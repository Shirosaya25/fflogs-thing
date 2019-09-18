package com.shirosaya25.deligates;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ViewDeligate {

	private static final String LANDING_VIEW = "/static/views/landing.html";
	
	public void getView(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		String uri = request.getContextPath();
		
		switch(uri) {
		
		default:
			request.getRequestDispatcher(LANDING_VIEW).forward(request, response);
			break;
		}
	}
}
