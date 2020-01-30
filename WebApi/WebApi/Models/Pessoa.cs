using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Pessoa
    {
		public Pessoa(){
			Conta = new HashSet<Conta>();
		}
		
        public int IdPessoa { get; set; }
        public string NomePessoa { get; set; }
        public string DataNascPessoa { get; set; }
        public string RgPessoa { get; set; }
        public string CpfPessoa { get; set; }
        public string Endereco { get; set; }
        public string NumeroEnd { get; set; }
        public string Cep { get; set; }

		public virtual ICollection<Conta> Conta { get; set; }

	}
}
