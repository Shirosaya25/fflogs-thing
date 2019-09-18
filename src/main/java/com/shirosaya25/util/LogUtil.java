package com.shirosaya25.util;

import org.apache.log4j.Logger;

import com.shirosaya25.controller.MasterServlet;

public class LogUtil {

	public static final Logger log = Logger.getLogger(MasterServlet.class);
	
	private LogUtil() {
		
		throw new IllegalStateException("Utility Class");
	}
}
