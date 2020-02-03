using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
	public class Usuario
	{
		public Usuario() {}

		public int IdUser { get; set; }

		public string User { get; set; }

		public string Email { get; set; }

		public string Senha { get; set; }
	}
}
