﻿using IrisGestao.Domain.Command.Request;
using IrisGestao.Domain.Command.Result;

namespace IrisGestao.ApplicationService.Services.Interface;

public interface IImovelService
{
    Task<CommandResult> GetAllPaging(int? idCategoria, int? idTipoImovel, int? idProprietario, string? nome, int limit, int page);
    Task<CommandResult> GetById(int codigo);
    Task<CommandResult> Insert(CriarImovelCommand cmd);
    Task<CommandResult> Update(Guid guid, CriarImovelCommand cmd);
    Task<CommandResult> Delete(int? codigo);
    Task<CommandResult> GetByGuid(Guid uuid);
    Task<CommandResult> AlterarStatus(Guid uuid, bool status);
    Task<CommandResult> GetImoveisParaContrato();
}