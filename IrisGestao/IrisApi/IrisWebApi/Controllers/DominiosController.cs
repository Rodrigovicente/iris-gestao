﻿using IrisGestao.ApplicationService.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace IrisWebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DominiosController : Controller
{
    private readonly ICategoriaImovelService categoriaImovelService;
    private readonly IIndiceReajusteService indiceReajusteService;
    private readonly IFormaPagamentoService formaPagamentoService;
    private readonly ITipoUnidadeService tipoUnidadeService;
    private readonly ITipoContratoService tipoContratoService;
    private readonly ITipoTituloService tipoTituloService;
    private readonly ITipoDespesaService tipoDespesaService;
    private readonly ITipoEventoService tipoEventoService;

    public DominiosController(ICategoriaImovelService categoriaImovelService,
                              IIndiceReajusteService indiceReajusteService,
                              IFormaPagamentoService formaPagamentoService,
                              ITipoUnidadeService tipoUnidadeService,
                              ITipoContratoService tipoContratoService,
                              ITipoTituloService tipoTituloService,
                              ITipoDespesaService tipoDespesaService,
                              ITipoEventoService tipoEventoService)
    {
        this.categoriaImovelService = categoriaImovelService;
        this.indiceReajusteService = indiceReajusteService;
        this.formaPagamentoService = formaPagamentoService;
        this.tipoUnidadeService = tipoUnidadeService;
        this.tipoContratoService = tipoContratoService;
        this.tipoTituloService = tipoTituloService;
        this.tipoDespesaService = tipoDespesaService;
        this.tipoEventoService = tipoEventoService;
    }

    // GET
    [HttpGet("/api/[controller]/categoria-imovel")]
    [Produces("application/json")]
    public async Task<IActionResult> GetCategoriaImoveis() =>
        Ok(await categoriaImovelService.GetAll());

    // GET
    [HttpGet("/api/[controller]/indice-reajuste")]
    [Produces("application/json")]
    public async Task<IActionResult> GetIndiceReajuste() =>
        Ok(await indiceReajusteService.GetAll());

    // GET
    [HttpGet("/api/[controller]/forma-pagamento")]
    [Produces("application/json")]
    public async Task<IActionResult> GetFormaPagamento() =>
        Ok(await formaPagamentoService.GetAll());

    // GET
    [HttpGet("/api/[controller]/tipo-unidade")]
    [Produces("application/json")]
    public async Task<IActionResult> GetTipoUnidade() =>
        Ok(await tipoUnidadeService.GetAll());

    // GET
    [HttpGet("/api/[controller]/tipo-contrato")]
    [Produces("application/json")]
    public async Task<IActionResult> GetTipoContrato() =>
        Ok(await tipoContratoService.GetAll());

    // GET
    [HttpGet("/api/[controller]/tipo-titulo")]
    [Produces("application/json")]
    public async Task<IActionResult> GetTipoTitulo() =>
        Ok(await tipoTituloService.GetAll());

    // GET
    [HttpGet("/api/[controller]/tipo-despesa")]
    [Produces("application/json")]
    public async Task<IActionResult> GetTipoDespesa() =>
        Ok(await tipoDespesaService.GetAll());

    // GET
    [HttpGet("/api/[controller]/tipo-evento")]
    [Produces("application/json")]
    public async Task<IActionResult> GetTipoEvento() =>
        Ok(await tipoEventoService.GetAll());
}