package com.shirosaya25.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shirosaya25.deligates.ViewDeligate;

public class RequestHelper {
	
	private static final ViewDeligate viewDeligate = new ViewDeligate();

	
	public void processGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		viewDeligate.getView(request, response);
	}
}
