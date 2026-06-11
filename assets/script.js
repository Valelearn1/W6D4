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

const renderProdotti = (lista) => {
  const html = lista
    .map(
      (p) =>
        `<article class="col-12 col-sm-6 col-xl-4 mb-3">
            <div class="card h-100 ${p.categoria}">
                <img src="${p.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${p.nome}</h5>
                    <p class="card-text">${p.descrizione}</p>
                    <p class="fw-bold">€${p.prezzo}</p>
                </div>
            </div>
        </article>`,
    )
    .join("");

  document.getElementById("contenitore-prodotti").innerHTML = html;
};

renderProdotti(prodotti);

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
