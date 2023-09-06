'use strict';

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url).then(response => response.json())
    preencherForm(dados)
    console.log(dados)
    
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

const preencherForm = (dados) =>{
    const endereco = document.getElementById('endereco');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estado');

    endereco.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;

    if (dados.erro == "true") {
        alert('CEP Inválido')
        return;
    }
}
