const posts = [
    { userId: 1, id: 1, title: "Primeiro post", body: "Aprendendo a manipular o DOM." },
    { userId: 1, id: 2, title: "Segundo post", body: "Arrays de objetos são parecidos com o JSON de uma API." },
    { userId: 2, id: 3, title: "Terceiro post", body: "Em breve vamos buscar estes dados no servidor." },
    { userId: 2, id: 4, title: "Quarto post", body: "O método find devolve o primeiro item encontrado." },
    { userId: 3, id: 5, title: "Quinto post", body: "Se nada for encontrado, find devolve undefined." }
];

function buscarPost() {
    const id = document.getElementById("idPost").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (id === "") {
        resultado.textContent = "Digite um ID.";
        return;
    }

    const post = posts.find(function(item) {
        return item.id === Number(id);
    });

    if (post) {
        const titulo = document.createElement("h2");
        titulo.textContent = post.title;

        const corpo = document.createElement("p");
        corpo.textContent = post.body;

        resultado.appendChild(titulo);
        resultado.appendChild(corpo);
    } else {
        const erro = document.createElement("p");
        erro.className = "erro";
        erro.textContent = "Post não encontrado (ID " + id + "). Os IDs válidos vão de 1 a 5.";

        resultado.appendChild(erro);
    }
}