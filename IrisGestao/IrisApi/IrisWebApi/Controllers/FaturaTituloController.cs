﻿using IrisGestao.ApplicationService.Services.Interface;
using IrisGestao.Domain.Command.Request;
using Microsoft.AspNetCore.Mvc;

namespace IrisWebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FaturaTituloController : Controller
{
    private readonly IFaturaTituloService faturaTituloService;

    public FaturaTituloController(IFaturaTituloService FaturaTituloService)
    {
        this.faturaTituloService = FaturaTituloService;
    }

    [HttpPost("{guid}/criar")]
    [Produces("application/json")]
    public async Task<IActionResult> Cadastrar(
    Guid guid,
    [FromBody] BaixaDeFaturaCommand cmd)
    {
        var result = await faturaTituloService.Insert(guid, cmd);

        return Ok(result);
    }

    [HttpPut("{guid}/atualizar")]
    [Produces("application/json")]
    public async Task<IActionResult> Atualizar(
    Guid guid,
    [FromBody] BaixaDeFaturaCommand cmd)
    {
        var result = await faturaTituloService.Update(guid, cmd);

        return Ok(result);
    }

    [HttpPut("{guid}/baixarFatura")]
    [Produces("application/json")]
    public async Task<IActionResult> BaixarFatura(
    Guid guid,
    [FromBody] BaixaDeFaturaCommand cmd)
    {
        var result = await faturaTituloService.BaixarFatura(guid, cmd);

        return Ok(result);
    }
}