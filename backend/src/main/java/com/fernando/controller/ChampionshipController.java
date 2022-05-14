package com.fernando.controller;

import com.fernando.controller.api.suport.HEADER;
import com.fernando.controller.api.suport.PageRequest;
import com.fernando.domain.Championship;
import com.fernando.dto.ChampionshipDTO;
import com.fernando.dto.mapper.ChampionshipMapper;
import com.fernando.repository.ChampionschipRepository;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Page;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.stream.Collectors;


@Path("/v1/championship")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ChampionshipController {

    @Inject
    ChampionschipRepository championschipRepository;
    @Inject
    ChampionshipMapper championshipMapper;

    @GET
    @Path("/")
    public ChampionshipDTO get(){
        Championship championship = new Championship();
        championship.year = 2018;
        championship.id = 1;
        return championshipMapper.toDto(championship);
    }

  /*  @POST
    @Path("/")
    @Transactional
    public Response save(@Valid Championship championship){
        try {
            championschipRepository.persistAndFlush(championship);
            return Response.status(201).entity(championship).build();
        } catch (Exception e) {
            return Response.serverError().entity(championship).build();
        }


    }*/

   /* @GET
    @Path("/erro")
    public Championship get2(){

        Championship championship = null;
        championship.year = 2018;
        championship.id = 1l;
        return championship;
    }*/

   /* @GET
    @Path("/teste")
    public ChampionshipDTO teste(){
        Championship championship = new Championship();
        championship.year = 2018;
        championship.id = 1l;
        championship.startDate = LocalDate.now();
        championship.endDate = LocalDate.now();
        ChampionshipDTO championshipDTO = championshipMapper.toDto(championship);
        return championshipDTO;


    }*/
   /* @GET()
    @Path("/list")
    public List<ChampionshipDTO> list() {
        return championschipRepository.listAll(Sort.by("year").descending())
                .stream()
                .map(c -> championshipMapper.toDto(c))
                .collect(Collectors.toList());

    }*/
/*        @GET()
        @Path("/list2")
        public List<ChampionshipDTO> list2(@QueryParam("page") int page, @QueryParam("size") int size){
            PanacheQuery<Championship> queryAll = championschipRepository.findAll();
            List<Championship> championshipList = queryAll.page(Page.of(page, size)).list();
            return championshipList.stream().map(c -> championshipMapper.toDto(c)).collect(Collectors.toList());


        }*/
/*    @GET()
    @Path("/list3")
    public List<ChampionshipDTO> list2(@BeanParam PageRequest pageRequest){
        PanacheQuery<Championship> queryAll = championschipRepository.findAll();
        List<Championship> championshipList = queryAll.page(Page.of(pageRequest.page, pageRequest.size)).list();
        return championshipList.stream().map(c -> championshipMapper.toDto(c)).collect(Collectors.toList());


    }*/

    @GET()
    @Path("/list")
    public Response list(@BeanParam PageRequest pageRequest) {
        PanacheQuery<Championship> queryAll = championschipRepository.findAll();
        List<Championship> championshipList = queryAll.page(Page.of(pageRequest.page, pageRequest.size)).list();
        List<ChampionshipDTO> championshipDTOList = championshipList.stream().map(c -> championshipMapper.toDto(c)).collect(Collectors.toList());
        return Response.ok(championshipDTOList).header(HEADER.PARAM_SIZE, 15).build();
    }
}
