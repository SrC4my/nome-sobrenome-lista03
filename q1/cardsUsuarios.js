
const usuarios = [
    { 
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: { city: "Gwenborough" },
        company: { name: "Romaguera-Crona" }
    },
    {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        address: { city: "Wisokyburgh" },
        company: { name: "Deckow-Crist" }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        address: { city: "McKenziehaven" },
        company: { name: "Romaguera-Jacobson" }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        address: { city: "South Elvis" },
        company: { name: "Robel-Corkery" }
    }
];

// Pegando os elementos do HTML
const cards = document.getElementById("cards");
const total = document.getElementById("total");

// Percorrendo os usuarios
usuarios.forEach(function(usuario) {

    // Criando uma div
    const card = document.createElement("div");

    // Adicionando a classe card
    card.classList.add("card");

    // Inserindo as informacoes
    card.innerHTML = `
        <h2>${usuario.name}</h2>
        <p>E-mail: ${usuario.email}</p>
        <p>Cidade: ${usuario.address.city}</p>
        <p>Empresa: ${usuario.company.name}</p>
    `;

    // Evento de clique no card
    card.addEventListener("click", function() {
        card.classList.toggle("selecionado");
    });

    // Adicionando o card na div principal
    cards.appendChild(card);

});

// Mostrando o total de usuarios
total.textContent = "Total de usuários: " + usuarios.length;
