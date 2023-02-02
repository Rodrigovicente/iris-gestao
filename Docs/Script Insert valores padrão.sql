USE [Constutora-DEV]
/*GO
INSERT INTO [dbo].[CategoriaImovel] VALUES ('Im�vel de carteira'),
('Im�vel de Mercado');
GO

GO
INSERT INTO [dbo].[TipoUnidade] VALUES ('Edif�cio Corporativo'),
('Sala'),
('Pavimento Corporativo'),
('Loja Comercial');
GO

GO
INSERT INTO [dbo].[IndiceReajuste] ([Nome],[Percentual],[DataAtualizacao])
     VALUES ('IGPM',1,GETDATE()),
	 ('IPCA',0,GETDATE());
GO

GO
INSERT INTO [dbo].[TipoContrato] VALUES ('Comercial'),
('Residencial');
GO

GO
INSERT INTO [dbo].[FormaPagamento] VALUES ('PIX'),
('Boleto'),
('TED'),
('DOC');
GO


GO
INSERT INTO [dbo].[PlanoConta] VALUES ('IPTU'),
('Indeniza��o'),
('Reembolso'),
('DOC');
GO

INSERT INTO [dbo].[TipoDespesa] VALUES ('Despesas com vazios'),
('Manuten��es'),
('Benfeitorias (Obras)'),
('Obriga��es contratuais (Despesas previstas em contrato)'),
('Outros');
GO

INSERT INTO [dbo].[TipoEvento] VALUES ('Venda'),
('Inaugura��o'),
('Aquisi��o'),
('Abertura'),
('In�cio de Obras',);
GO

INSERT INTO [dbo].[TipoCliente] VALUES ('Propriet�rio'),
('Locat�rio'),
('Prospect');
GO

INSERT INTO [dbo].[TipoCreditoAluguel] VALUES ('Locador'),
('Administradora');
GO

*/

SELECT * FROM TipoCliente
SELECT * FROM CategoriaImovel
SELECT * FROM TipoUnidade
SELECT * FROM IndiceReajuste
SELECT * FROM TipoContrato
SELECT * FROM FormaPagamento
SELECT * FROM PlanoConta
SELECT * FROM TipoDespesa
SELECT * FROM TipoEvento
SELECT * FROM TipoEvento
SELECT * FROM TipoCreditoAluguel