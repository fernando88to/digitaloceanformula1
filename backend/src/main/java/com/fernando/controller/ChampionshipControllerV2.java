package com.fernando.controller;

import com.fernando.domain.Championship;
import com.fernando.dto.ChampionshipDTO;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import javax.ws.rs.GET;
import javax.ws.rs.Path;



@Path("/v2/championship")
@Tag(name = "Controller of the campionship - v2 ", description = "Basic Hello World using JAX-RS")
public class ChampionshipControllerV2 extends ChampionshipController {


    @GET
    @Path("/")
    public ChampionshipDTO get() {
        Championship championship = new Championship();
        championship.year = 2018;
        championship.id = 2;
        return championshipMapper.toDto(championship);
    }
}
