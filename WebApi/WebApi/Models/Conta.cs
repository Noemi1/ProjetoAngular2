using System;
using System.Collections.Generic;

namespace WebApi.Models
{
  public partial class Conta
  {
    public Conta()
    {

    }

    public int IdConta { get; set; }
    public string Agencia { get; set; }
    public string NumeroConta { get; set; }
    public string DataAbertura { get; set; }

    public int IdPessoa { get; set; }

    public virtual Pessoa Pessoa { get; set; }


  }
}
