const formulario_cadastro = document.getElementById("formulario_cadastro");

const nome_fantasia = document.getElementById("nome_fantasia");
const razao_social = document.getElementById("razao_social");
const cnpj = document.getElementById("cnpj");
const telefone_empresa = document.getElementById("telefone_empresa");
const website_empresa = document.getElementById("website_empresa");
const cep = document.getElementById("cep");
const uf = document.getElementById("uf");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const numero_casa = document.getElementById("numero_casa");
const complemento = document.getElementById("complemento");
const nome_completo = document.getElementById("nome_completo");
const funcao = document.getElementById("funcao");
const email = document.getElementById("email");
const telefone_responsavel = document.getElementById("telefone_responsavel");
const senha = document.getElementById("senha");

function cadastrar() {
  fetch("http://localhost:8080/CadastroMercado", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      nome_fantasia: nome_fantasia.value,
      razao_social: razao_social.value,
      cnpj: cnpj.value,
      telefone_empresa: telefone_empresa.value,
      website: website_empresa.value,
      cep: cep.value,
      uf: uf.value,
      cidade: cidade.value,
      bairro: bairro.value,
      numero_casa: numero_casa.value,
      complemento: complemento.value,
      nome_completo: nome_completo.value,
      funcao: funcao.value,
      email: email.value,
      telefone_responsavel: telefone_responsavel.value,
      senha: senha.value,
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });

    alert("Cadastro Realizado com sucesso!")
    window.location.href = "./login.html";

}

function limpar_campos_formulario() {
  nome_fantasia.value = "";
  razao_social.value = "";
  cnpj.value = "";
  telefone_empresa.value = "";
  website_empresa.value = "";
  cep.value = "";
  uf.value = "";
  cidade.value = "";
  bairro.value = "";
  numero_casa.value = "";
  complemento.value = "";
  nome_completo.value = "";
  funcao.value = "";
  email.value = "";
  telefone_responsavel.value = "";
  senha.value = "";
}



formulario_cadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  cadastrar();

  limpar_campos_formulario();
});
