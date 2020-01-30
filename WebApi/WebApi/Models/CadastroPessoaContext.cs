using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApi.Models
{
    public partial class CadastroPessoaContext : DbContext
    {
        public CadastroPessoaContext()
        {
        }

        public CadastroPessoaContext(DbContextOptions<CadastroPessoaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Conta> Conta { get; set; }
        public virtual DbSet<Pessoa> Pessoa { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-G71UKEB;Database=CadastroPessoa;User ID=sa;Password=cadomeew;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Conta>(entity =>
            {
                entity.HasKey(e => e.IdConta);

                entity.Property(e => e.DataAbertura);
				
			});

            modelBuilder.Entity<Pessoa>(entity =>
            {
                entity.HasKey(e => e.IdPessoa);

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasColumnName("CEP")
                    .IsUnicode(false);

                entity.Property(e => e.CpfPessoa)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DataNascPessoa)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Endereco)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.NomePessoa)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.NumeroEnd)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.RgPessoa)
                    .IsRequired()
                    .IsUnicode(false);

            });
        }
    }
}
