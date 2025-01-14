﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace IrisGestao.Domain.Entity;

public partial class FormaPagamento: BaseEntity<FormaPagamento>
{
    [StringLength(100)]
    [Unicode(false)]
    public string Nome { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? DataCriacao { get; set; }

    [InverseProperty("IdFormaPagamentoNavigation")]
    public virtual ICollection<ContratoFornecedor> ContratoFornecedor { get; } = new List<ContratoFornecedor>();

    [InverseProperty("IdFormaPagamentoNavigation")]
    public virtual ICollection<TituloReceber> TituloReceber { get; } = new List<TituloReceber>();

    [InverseProperty("IdFormaPagamentoNavigation")]
    public virtual ICollection<TituloPagar> TituloPagar { get; } = new List<TituloPagar>();
}
