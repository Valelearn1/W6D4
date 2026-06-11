const btnTema = document.getElementById("toggle-tema");

btnTema.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
    btnTema.textContent = document.body.classList.contains("dark") ? "Tema chiaro" : "Tema scuro";
})