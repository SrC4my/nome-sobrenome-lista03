
const formulario = document.getElementById("formulario");
const json = document.getElementById("json");
const listaAlunos = document.getElementById("listaAlunos");

// Evento de envio do formulario
formulario.addEventListener("submit", function(event) {

    // Impede a pagina de recarregar
    event.preventDefault();

    // Coleta os dados do formulario
    const dados = new FormData(formulario);

    // Cria um objeto vazio
    const objeto = {};

    // Percorre os dados do formulario
    for (const [chave, valor] of dados) {
        objeto[chave] = valor;
    }

    // Exibe o objeto em formato JSON
    json.textContent = JSON.stringify(objeto, null, 2);

    // Cria uma nova linha na tabela
    const linha = document.createElement("tr");

    // Percorre os valores do objeto
    for (const chave in objeto) {

        const coluna = document.createElement("td");

        coluna.textContent = objeto[chave];

        linha.appendChild(coluna);
    }

    // Adiciona a linha na tabela
    listaAlunos.appendChild(linha);

    // Limpa o formulario
    formulario.reset();

});
