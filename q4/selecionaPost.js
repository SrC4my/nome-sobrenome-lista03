const posts = [
    { id: 1, title: "Introdução ao DOM" },
    { id: 2, title: "Eventos em JavaScript" },
    { id: 3, title: "O que é uma API?" }
];

const comentarios = [
    { postId: 1, id: 1, name: "Ana", email: "ana@email.com", body: "Explicação muito clara!" },
    { postId: 1, id: 2, name: "Bruno", email: "bruno@email.com", body: "Gostei do exemplo do getElementById." },
    { postId: 2, id: 3, name: "Carla", email: "carla@email.com", body: "addEventListener é bem melhor que onclick." },
    { postId: 3, id: 4, name: "Diego", email: "diego@email.com", body: "A analogia do garçom ajudou muito." },
    { postId: 3, id: 5, name: "Elisa", email: "elisa@email.com", body: "Quero testar o JSONPlaceholder!" },
    { postId: 3, id: 6, name: "Fábio", email: "fabio@email.com", body: "E o método POST, como funciona?" }
];

const select = document.getElementById("post");
const areaComentarios = document.getElementById("comentarios");
const titulo = document.getElementById("titulo");

// Criar a primeira opção
const primeiraOpcao = document.createElement("option");
primeiraOpcao.value = "";
primeiraOpcao.textContent = "Selecione um post";
select.appendChild(primeiraOpcao);

// Criar as opções dos posts
posts.forEach(function(post) {
    const opcao = document.createElement("option");

    opcao.value = post.id;
    opcao.textContent = post.title;

    select.appendChild(opcao);
});

// Evento de mudança
select.addEventListener("change", function() {

    const idPost = Number(select.value);

    areaComentarios.innerHTML = "";

    if (select.value === "") {
        titulo.textContent = "Comentários (0)";
        return;
    }

    const comentariosPost = comentarios.filter(function(comentario) {
        return comentario.postId === idPost;
    });

    titulo.textContent = "Comentários (" + comentariosPost.length + ")";

    comentariosPost.forEach(function(comentario) {

        const card = document.createElement("div");
        card.className = "card";

        const nome = document.createElement("h3");
        nome.textContent = comentario.name;

        const email = document.createElement("p");
        email.textContent = "E-mail: " + comentario.email;

        const texto = document.createElement("p");
        texto.textContent = comentario.body;

        card.appendChild(nome);
        card.appendChild(email);
        card.appendChild(texto);

        areaComentarios.appendChild(card);
    });

});