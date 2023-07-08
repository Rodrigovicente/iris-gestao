﻿using IrisGestao.ApplicationService.Service.Impl;
using IrisGestao.ApplicationService.Services.Interface;
using IrisGestao.Domain.Command.Request;
using Microsoft.AspNetCore.Mvc;
using System;

namespace IrisWebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EventoController : Controller
{
    private readonly IEventoService eventoService;

    public EventoController(IEventoService EventoService)
    {
        this.eventoService = EventoService;
    }
 
    // GET
    [HttpGet("/api/[controller]")]
    [Produces("application/json")]
    public async Task<IActionResult> GetAll(
      [FromQuery] int? limit = 10
    , [FromQuery] int? page = 1)
       => Ok(await eventoService.GetAllPaging(limit ?? 10, page ?? 1));


    // GET
    [HttpGet("/api/[controller]/{codigo}/id/")]
    [Produces("application/json")]
    public async Task<IActionResult> BuscarEvento([FromRoute] int codigo) =>
        Ok(await eventoService.GetById(codigo));

    // GET
    [HttpGet("/api/[controller]/{codigo}/idImovel/")]
    [Produces("application/json")]
    public async Task<IActionResult> BuscarEventoPorIdImovel([FromRoute] int codigo) =>
        Ok(await eventoService.BuscarEventoPorIdImovel(codigo));

    // GET
    [HttpGet("/api/[controller]/{codigo}/idCliente/")]
    [Produces("application/json")]
    public async Task<IActionResult> BuscarEventoPorIdCliente([FromRoute] int codigo) =>
        Ok(await eventoService.BuscarEventoPorIdCliente(codigo));

    [HttpPost("/api/[controller]/criar")]
    [Produces("application/json")]
    public async Task<IActionResult> Cadatrar([FromBody] CriarEventoCommand cmd)
    {
        var result = await eventoService.Insert(cmd);

        if (result == null)
            return BadRequest("Operação não realizada");

        return Ok(result);
    }

    [HttpPut("/api/[controller]/{codigo}/atualizar/")]
    [Produces("application/json")]
    public async Task<IActionResult> Atualizar(Guid uuid, [FromBody] CriarEventoCommand cmd)
    {
        var result = await eventoService.Update(uuid, cmd);

        if (result == null)
            return BadRequest("Operação não realizada");

        return Ok(result);
    }

    [HttpDelete("/api/[controller]/{codigo}/deletar/")]
    [Produces("application/json")]
    public async Task<IActionResult> Deletar(Guid uuid)
    {
        var result = await eventoService.Delete(uuid);

        if (result == null)
            return BadRequest("Operação não realizada");

        return Ok(result);
    }
}

