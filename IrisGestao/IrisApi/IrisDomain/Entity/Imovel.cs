﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace IrisGestao.Domain.Entity;

public partial class Imovel: BaseEntity<Imovel>
{
    public int IdCategoriaImovel { get; set; }

    public int? IdClienteProprietario { get; set; } = null!;

    public Guid? GuidReferencia { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string Nome { get; set; } = null!;
    public long? NumCentroCusto { get; set; } = null!;
    public bool? MonoUsuario { get; set; } = null!;

    public bool Status { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? Classificacao { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? DataCriacao { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? DataUltimaModificacao { get; set; }

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<ContratoAluguelImovel> ContratoAluguelImovel { get; } = new List<ContratoAluguelImovel>();

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<ContratoFornecedor> ContratoFornecedor { get; } = new List<ContratoFornecedor>();

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<Evento> Evento { get; } = new List<Evento>();

    [ForeignKey("IdCategoriaImovel")]
    [InverseProperty("Imovel")]
    public virtual CategoriaImovel IdCategoriaImovelNavigation { get; set; } = null!;

    [ForeignKey("IdClienteProprietario")]
    [InverseProperty("Imovel")]
    public virtual Cliente? IdClienteProprietarioNavigation { get; set; } = null!;

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<ImovelEndereco> ImovelEndereco { get; } = new List<ImovelEndereco>();

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<Obra> Obra { get; } = new List<Obra>();

    /*[InverseProperty("IdImovelNavigation")]
    public virtual ICollection<TituloReceber> TituloReceber { get; } = new List<TituloReceber>();*/

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<Unidade> Unidade { get; } = new List<Unidade>();

    [InverseProperty("IdImovelNavigation")]
    public virtual ICollection<TituloImovel> TituloImovel { get; } = new List<TituloImovel>();
}
