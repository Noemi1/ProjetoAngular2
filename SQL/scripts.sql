USE [master]
GO
/****** Object:  Database [CadastroPessoa]    Script Date: 03/02/2020 15:36:32 ******/
CREATE DATABASE [CadastroPessoa]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CadastroPessoa', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\CadastroPessoa.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CadastroPessoa_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\CadastroPessoa_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CadastroPessoa] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CadastroPessoa].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CadastroPessoa] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CadastroPessoa] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CadastroPessoa] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CadastroPessoa] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CadastroPessoa] SET ARITHABORT OFF 
GO
ALTER DATABASE [CadastroPessoa] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CadastroPessoa] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CadastroPessoa] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CadastroPessoa] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CadastroPessoa] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CadastroPessoa] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CadastroPessoa] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CadastroPessoa] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CadastroPessoa] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CadastroPessoa] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CadastroPessoa] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CadastroPessoa] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CadastroPessoa] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CadastroPessoa] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CadastroPessoa] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CadastroPessoa] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CadastroPessoa] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CadastroPessoa] SET RECOVERY FULL 
GO
ALTER DATABASE [CadastroPessoa] SET  MULTI_USER 
GO
ALTER DATABASE [CadastroPessoa] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CadastroPessoa] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CadastroPessoa] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CadastroPessoa] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CadastroPessoa] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'CadastroPessoa', N'ON'
GO
ALTER DATABASE [CadastroPessoa] SET QUERY_STORE = OFF
GO
USE [CadastroPessoa]
GO
/****** Object:  Table [dbo].[Conta]    Script Date: 03/02/2020 15:36:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Conta](
	[IdConta] [int] IDENTITY(1,1) NOT NULL,
	[Agencia] [varchar](5) NOT NULL,
	[NumeroConta] [varchar](9) NOT NULL,
	[DataAbertura] [varchar](11) NOT NULL,
	[IdPessoa] [int] NOT NULL,
 CONSTRAINT [PK_Conta] PRIMARY KEY CLUSTERED 
(
	[IdConta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pessoa]    Script Date: 03/02/2020 15:36:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pessoa](
	[IdPessoa] [int] IDENTITY(1,1) NOT NULL,
	[NomePessoa] [varchar](40) NOT NULL,
	[DataNascPessoa] [varchar](15) NOT NULL,
	[RgPessoa] [varchar](15) NOT NULL,
	[CpfPessoa] [varchar](15) NOT NULL,
	[Endereco] [varchar](50) NOT NULL,
	[NumeroEnd] [varchar](10) NOT NULL,
	[CEP] [varchar](15) NOT NULL,
 CONSTRAINT [PK_Pessoa] PRIMARY KEY CLUSTERED 
(
	[IdPessoa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 03/02/2020 15:36:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUser] [int] IDENTITY(1,1) NOT NULL,
	[User] [varchar](20) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Senha] [varchar](10) NOT NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Conta] ON 

INSERT [dbo].[Conta] ([IdConta], [Agencia], [NumeroConta], [DataAbertura], [IdPessoa]) VALUES (41, N'6565', N'6565656', N'66', 66)
INSERT [dbo].[Conta] ([IdConta], [Agencia], [NumeroConta], [DataAbertura], [IdPessoa]) VALUES (42, N'5555', N'5555555', N'65656565', 66)
SET IDENTITY_INSERT [dbo].[Conta] OFF
SET IDENTITY_INSERT [dbo].[Pessoa] ON 

INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (66, N'meu nome é joao', N'20000326', N'502650650', N'22810679800', N'6565', N'656', N'65656565')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (67, N'dfdg6565', N'06560506', N'502650650', N'65656556565', N'656565', N'6565', N'65656565')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (68, N'6556', N'0064-05-06', N'654654646', N'645.646.464-65', N'64646', N'64654', N'65464654')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (69, N'5454', N'0004-05-05', N'56.565.656-c', N'554.564.654-65', N'212121', N'21212', N'25412-121')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (70, N'Noemi', N'2000-03-26', N'502645065', N'65650656566', N'6565', N'6565', N'02808000')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (71, N'656565656565656', N'6565-05-06', N'656565656', N'65656565656', N'65656565656565', N'65656565', N'65656565')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (72, N'nono', N'0656-05-06', N'656656565', N'65665665656', N'656565', N'656', N'65656565')
INSERT [dbo].[Pessoa] ([IdPessoa], [NomePessoa], [DataNascPessoa], [RgPessoa], [CpfPessoa], [Endereco], [NumeroEnd], [CEP]) VALUES (73, N'oi', N'5555-05-05', N'555555555', N'55555555555', N'5555555', N'55', N'55555555')
SET IDENTITY_INSERT [dbo].[Pessoa] OFF
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (1, N'noemi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (2, N'oi', N'tchau', N'tchau')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (5, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (6, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (7, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (9, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (10, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (11, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (15, N'oi', N'oi', N'oi')
INSERT [dbo].[Usuario] ([IdUser], [User], [Email], [Senha]) VALUES (16, N'', N'', N'')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
ALTER TABLE [dbo].[Conta]  WITH CHECK ADD  CONSTRAINT [FK_Conta_Pessoa] FOREIGN KEY([IdPessoa])
REFERENCES [dbo].[Pessoa] ([IdPessoa])
GO
ALTER TABLE [dbo].[Conta] CHECK CONSTRAINT [FK_Conta_Pessoa]
GO
USE [master]
GO
ALTER DATABASE [CadastroPessoa] SET  READ_WRITE 
GO
