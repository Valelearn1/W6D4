const btnTema = document.getElementById("toggle-tema");

btnTema.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  btnTema.textContent = document.body.classList.contains("dark")
    ? "Tema chiaro"
    : "Tema scuro";
});

const prodotti = [
  {
    id: 1,
    nome: "Sneaker Bianche",
    prezzo: 59.99,
    categoria: "scarpe",
    descrizione: "Sneaker comode e leggere per uso quotidiano.",
    img: "https://placehold.co/300x180",
  },
  {
    id: 2,
    nome: "Stivali Marroni",
    prezzo: 89.99,
    categoria: "scarpe",
    descrizione: "Stivali in pelle ideali per l'autunno.",
    img: "https://placehold.co/300x180",
  },
  {
    id: 3,
    nome: "Giacca di Jeans",
    prezzo: 74.99,
    categoria: "abbigliamento",
    descrizione: "Giacca casual in denim, vestibilità slim.",
    img: "https://placehold.co/300x180",
  },
  {
    id: 4,
    nome: "Maglione Verde",
    prezzo: 49.99,
    categoria: "abbigliamento",
    descrizione: "Maglione morbido in lana merino.",
    img: "https://placehold.co/300x180",
  },
  {
    id: 5,
    nome: "Cintura in Pelle",
    prezzo: 29.99,
    categoria: "accessori",
    descrizione: "Cintura classica in vera pelle nera.",
    img: "https://placehold.co/300x180",
  },
  {
    id: 6,
    nome: "Zaino Grigio",
    prezzo: 64.99,
    categoria: "accessori",
    descrizione: "Zaino capiente con scomparto per laptop.",
    img: "https://placehold.co/300x180",
  },
];

// /**
//  * Renderizza le card dei prodotti nel contenitore e aggiorna il contatore.
//  * @param {Object[]} lista - Array di prodotti da visualizzare
//  * @param {number}   lista[].id
//  * @param {string}   lista[].nome
//  * @param {number}   lista[].prezzo
//  * @param {string}   lista[].categoria
//  * @param {string}   lista[].descrizione
//  * @param {string}   lista[].img
//  */
const renderProdotti = (lista) => {
  const contenitore = document.getElementById("contenitore-prodotti");
  contenitore.replaceChildren();

  lista.forEach((p) => {
    const article = document.createElement("article");
    article.className = "col-12 col-sm-6 col-xl-4 mb-3";

    const card = document.createElement("div");
    card.className = `card h-100 ${p.categoria}`;

    const img = document.createElement("img");
    img.src = p.img;
    img.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titolo = document.createElement("h5");
    titolo.className = "card-title";
    titolo.textContent = p.nome;

    const descrizione = document.createElement("p");
    descrizione.className = "card-text";
    descrizione.textContent = p.descrizione;

    const prezzo = document.createElement("p");
    prezzo.className = "fw-bold";
    prezzo.textContent = `€${p.prezzo}`;

    const btnDettagli = document.createElement("button");
    btnDettagli.type = "button";
    btnDettagli.className = "btn btn-primary btn-sm mt-2";
    btnDettagli.textContent = "Dettagli";
    btnDettagli.dataset.bsToggle = "modal";
    btnDettagli.dataset.bsTarget = "#modal-prodotto";
    btnDettagli.dataset.prodottoId = p.id;

    cardBody.appendChild(titolo);
    cardBody.appendChild(descrizione);
    cardBody.appendChild(prezzo);
    cardBody.appendChild(btnDettagli);

    card.appendChild(img);
    card.appendChild(cardBody);

    article.appendChild(card);
    contenitore.appendChild(article);
  });

  document.getElementById("contatore").textContent = lista.length;
};

renderProdotti(prodotti);

document
  .getElementById("modal-prodotto")
  .addEventListener("show.bs.modal", (e) => {
    const id = Number(e.relatedTarget.dataset.prodottoId);
    const prodotto = prodotti.find((p) => p.id === id);

    document.getElementById("modal-titolo").textContent = prodotto.nome;
    document.getElementById("modal-img").src = prodotto.img;
    document.getElementById("modal-descrizione").textContent =
      prodotto.descrizione;
    document.getElementById("modal-prezzo").textContent = `€${prodotto.prezzo}`;
  });

// /**
//  * Gestisce il click sui bottoni filtro tramite event delegation.
//  * Filtra i prodotti per categoria e chiama renderProdotti.
//  * @listens click
//  */
const filtri = document.getElementById("filtri");
filtri.addEventListener("click", (e) => {
  const bottone = e.target.closest("[data-categoria]");
  if (!bottone) return;

  filtri.querySelectorAll(".btn").forEach((b) => b.classList.remove("active"));

  bottone.classList.add("active");
  const categoria = bottone.dataset.categoria;
  const filtrati =
    categoria === "tutti"
      ? prodotti
      : prodotti.filter((p) => p.categoria === categoria);

  renderProdotti(filtrati);
});
