package com.fernando.controller.handler;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class CustomExceptionHandler implements ExceptionMapper<Exception> {

    /*@ConfigProperty(name = "knowledgefactory.custom.error.msg.usernotfound")
    String userNotFound;*/

    @Override
    public Response toResponse(Exception e) {

        return Response.status(Response.Status.BAD_REQUEST).
                entity(e.getMessage()).build();
    }
}