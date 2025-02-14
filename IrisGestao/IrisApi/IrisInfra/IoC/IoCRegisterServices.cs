﻿using IrisGestao.ApplicationService.Repository.Interfaces;
using IrisGestao.ApplicationService.Service.Impl;
using IrisGestao.ApplicationService.Services.Interface;
using IrisGestao.Infraestructure.ExternalServices;
using Microsoft.Extensions.DependencyInjection;

namespace IrisGestao.Infraestructure.IoC;

public class IoCRegisterServices
{
    public static void Register(IServiceCollection services)
    {
        //Services            
        services.AddScoped<IContatoService, ContatoService>();
        services.AddScoped<ICategoriaImovelService, CategoriaImovelService>();
        services.AddScoped<IIndiceReajusteService, IndiceReajusteService>();
        services.AddScoped<IFormaPagamentoService, FormaPagamentoService>();
        services.AddScoped<ITipoUnidadeService, TipoUnidadeService>();
        services.AddScoped<ITipoContratoService, TipoContratoService>();
        services.AddScoped<ITipoTituloService, TipoTituloService>();
        services.AddScoped<ITipoDespesaService, TipoDespesaService>();
        services.AddScoped<ITipoEventoService, TipoEventoService>();
        services.AddScoped<ITipoClienteService, TipoClienteService>();
        services.AddScoped<ITipoCreditoAluguelService, TipoCreditoAluguelService>();
        services.AddScoped<IAnexoService, AnexoService>();
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IClienteService, ClienteService>();
        services.AddScoped<IImovelService, ImovelService>();
        services.AddScoped<IUnidadeService, UnidadeService>();
        services.AddScoped<IImovelEnderecoService, ImovelEnderecoService>();
        services.AddScoped<IEventoService, EventoService>();
        services.AddScoped<IEventoUnidadeService, EventoUnidadeService>();
        services.AddScoped<IFornecedorService, FornecedorService>();
        services.AddScoped<IDadoBancarioService, DadoBancarioService>();
        services.AddScoped<IContratoAluguelService, ContratoAluguelService>();
        services.AddScoped<IContratoAluguelHistoricorReajusteService, ContratoAluguelHistoricorReajusteService>();
        services.AddScoped<IContratoAluguelImovelService, ContratoAluguelImovelService>();
        services.AddScoped<IContratoAluguelUnidadeService, ContratoAluguelUnidadeService>();
        services.AddScoped<IContratoFornecedorService, ContratoFornecedorService>();
        services.AddScoped<ITituloPagarService, TituloPagarService>();
        services.AddScoped<ITituloReceberService, TituloReceberService>();
        services.AddScoped<ITituloImovelService, TituloImovelService>();
        services.AddScoped<ITituloUnidadeService, TituloUnidadeService>();
        services.AddScoped<IFaturaTituloService, FaturaTituloService>();
        services.AddScoped<IFaturaTituloPagarService, FaturaTituloPagarService>();
        services.AddScoped<IAzureStorageService, AzureStorageService>();
        services.AddScoped<IObraService, ObraService>();

        //External Services
        services.AddScoped<IRepublicaVirtualService, RepublicaVirtualService>();

        //Repositories
        services.AddTransient(typeof(IRepository<>), typeof(Repository.Impl.Repository<>));
        services.AddScoped<IContatoRepository, Repository.Impl.ContatoRepository>();
        services.AddScoped<ICategoriaImovelRepository, Repository.Impl.CategoriaImovelRepository>();
        services.AddScoped<IIndiceReajusteRepository, Repository.Impl.IndiceReajusteRepository>();
        services.AddScoped<IFormaPagamentoRepository, Repository.Impl.FormaPagamentoRepository>();
        services.AddScoped<ITipoUnidadeRepository, Repository.Impl.TipoUnidadeRepository>();
        services.AddScoped<ITipoContratoRepository, Repository.Impl.TipoContratoRepository>();
        services.AddScoped<ITipoTituloRepository, Repository.Impl.TipoTituloRepository>();
        services.AddScoped<ITipoDespesaRepository, Repository.Impl.TipoDespesaRepository>();
        services.AddScoped<ITipoEventoRepository, Repository.Impl.TipoEventoRepository>();
        services.AddScoped<ITipoClienteRepository, Repository.Impl.TipoClienteRepository>();
        services.AddScoped<ITipoCreditoAluguelRepository, Repository.Impl.TipoCreditoAluguelRepository>();
        services.AddScoped<IAnexoRepository, Repository.Impl.AnexoRepository>();
        services.AddScoped<IClienteRepository, Repository.Impl.ClienteRepository>();
        services.AddScoped<IImovelRepository, Repository.Impl.ImovelRepository>();
        services.AddScoped<IUnidadeRepository, Repository.Impl.UnidadeRepository>();
        services.AddScoped<IImovelEnderecoRepository, Repository.Impl.ImovelEnderecoRepository>();
        services.AddScoped<IEventoRepository, Repository.Impl.EventoRepository>();
        services.AddScoped<IEventoUnidadeRepository, Repository.Impl.EventoUnidadeRepository>();
        services.AddScoped<IFornecedorRepository, Repository.Impl.FornecedorRepository>();
        services.AddScoped<IDadoBancarioRepository, Repository.Impl.DadoBancarioRepository>();
        services.AddScoped<IContratoAluguelRepository, Repository.Impl.ContratoAluguelRepository>();
        services.AddScoped<IContratoAluguelHistoricoReajusteRepository, Repository.Impl.ContratoAluguelHistoricoReajusteRepository>();
        services.AddScoped<IContratoAluguelImovelRepository, Repository.Impl.ContratoAluguelImovelRepository>();
        services.AddScoped<IContratoAluguelUnidadeRepository, Repository.Impl.ContratoAluguelUnidadeRepository>();
        services.AddScoped<IContratoFornecedorRepository, Repository.Impl.ContratoFornecedorRepository>();
        services.AddScoped<IFaturaTituloPagarRepository, Repository.Impl.FaturaTituloPagarRepository>();
        services.AddScoped<ITituloPagarRepository, Repository.Impl.TituloPagarRepository>();
        services.AddScoped<IFaturaTituloRepository, Repository.Impl.FaturaTituloRepository>();
        services.AddScoped<ITituloReceberRepository, Repository.Impl.TituloReceberRepository>();
        services.AddScoped<ITituloImovelRepository, Repository.Impl.TituloImovelRepository>();
        services.AddScoped<ITituloUnidadeRepository, Repository.Impl.TituloUnidadeRepository>();
        services.AddScoped<IObraRepository, Repository.Impl.ObraRepository>();
    }
}