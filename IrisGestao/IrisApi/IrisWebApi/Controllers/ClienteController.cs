﻿using IrisGestao.ApplicationService.Services.Interface;
using IrisGestao.Domain.Command.Request;
using Microsoft.AspNetCore.Mvc;

namespace IrisWebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ClienteController : Controller
{
    private readonly IClienteService clienteService;

    public ClienteController(IClienteService ClienteService)
    {
        this.clienteService = ClienteService;
    }
 
    // GET
    [HttpGet("/api/[controller]")]
    [Produces("application/json")]
   public async Task<IActionResult> GetAll() =>
        Ok(await clienteService.GetAll());

    // GET
    [HttpGet("/api/[controller]/{codigo}/id/")]
    [Produces("application/json")]
    public async Task<IActionResult> BuscarCliente([FromRoute] int codigo) =>
        Ok(await clienteService.GetById(codigo));

    [HttpPost("/api/[controller]/criar")]
    [Produces("application/json")]
    public async Task<IActionResult> Cadatrar([FromBody] CriarClienteCommand cmd)
    {
        var result = await clienteService.Insert(cmd);

        if (result == null)
            return BadRequest("Operação não realizada");

        return Ok(result);
    }

    [HttpPut("/api/[controller]/{codigo}/atualizar/")]
    [Produces("application/json")]
    public async Task<IActionResult> Atualizar(int? codigo, [FromBody] CriarClienteCommand cmd)
    {
        var result = await clienteService.Update(codigo, cmd);

        if (result == null)
            return BadRequest("Operação não realizada");

        return Ok(result);
    }

    [HttpDelete("/api/[controller]/{codigo}/deletar/")]
    [Produces("application/json")]
    public async Task<IActionResult> Deletar(int? codigo)
    {
        var result = await clienteService.Delete(codigo);

        if (result == null)
            return BadRequest("Operação não realizada");

        return Ok(result);
    }
}
