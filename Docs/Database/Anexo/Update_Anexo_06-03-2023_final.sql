/*
   segunda-feira, 6 de março de 202317:56:10
   Application: 
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
ALTER TABLE dbo.Anexo
	DROP CONSTRAINT DF_Anexo
GO
CREATE TABLE dbo.Tmp_Anexo
	(
	Id int NOT NULL IDENTITY (1, 1),
	Nome varchar(100) NOT NULL,
	Local varchar(255) NOT NULL,
	GuidReferencia uniqueidentifier NOT NULL,
	MimeType varchar(100) NULL,
	Tamanho int NULL,
	Classificacao varchar(50) NULL,
	DataCriacao datetime2(7) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Tmp_Anexo SET (LOCK_ESCALATION = TABLE)
GO
ALTER TABLE dbo.Tmp_Anexo ADD CONSTRAINT
	DF_Anexo DEFAULT (getdate()) FOR DataCriacao
GO
SET IDENTITY_INSERT dbo.Tmp_Anexo ON
GO
IF EXISTS(SELECT * FROM dbo.Anexo)
	 EXEC('INSERT INTO dbo.Tmp_Anexo (Id, Nome, Local, GuidReferencia, MimeType, Tamanho, Classificacao, DataCriacao)
		SELECT Id, Nome, Local, GuidReferencia, MimeType, Tamanho, Classificacao, DataCriacao FROM dbo.Anexo WITH (HOLDLOCK TABLOCKX)')
GO
SET IDENTITY_INSERT dbo.Tmp_Anexo OFF
GO
DROP TABLE dbo.Anexo
GO
EXECUTE sp_rename N'dbo.Tmp_Anexo', N'Anexo', 'OBJECT' 
GO
ALTER TABLE dbo.Anexo ADD CONSTRAINT
	PK__Anexo__3214EC0789E97BE1 PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
COMMIT
