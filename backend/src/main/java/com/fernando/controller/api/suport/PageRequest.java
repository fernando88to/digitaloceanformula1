package com.fernando.controller.api.suport;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.QueryParam;

public class PageRequest {

    @QueryParam("page")
    @DefaultValue("0")
    public int page;

    @QueryParam("size")
    @DefaultValue("10")
    public int size;

    public PageRequest() {
    }


}