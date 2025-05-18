const mostrarIcone = document.querySelector("#icon-mais");
const esconderIcone = document.querySelector("#icon-menos");
const campoTexto = document.querySelector(".campo-de-texto1");
let verify = false;
// Adiciona eventos de clique

mostrarIcone.addEventListener("click", () => {
  campoTexto.style.display = "block"; // Mostra o campo
  mostrarIcone.style.display = "none";
  verify = true;
  if (verify === true) {
    esconderIcone.style.position = "relative";
    esconderIcone.style.left = "475px";
    esconderIcone.style.bottom = "30px";
    verify = false;
  }
  esconderIcone.style.display = "block";
});

esconderIcone.addEventListener("click", () => {
  campoTexto.style.display = "none"; // Esconde o campo
  if (verify === false) {
    mostrarIcone.style.position = "relative";
    mostrarIcone.style.left = "60px";
    mostrarIcone.style.top = "12px";
  }
  mostrarIcone.style.display = "block";
  esconderIcone.style.display = "none";
});

const mostrarIcone2 = document.querySelector("#icon-mais2");
const esconderIcone2 = document.querySelector("#icon-menos2");
const campoTexto2 = document.querySelector(".campo-de-texto2");

if (verify === false) {
  mostrarIcone2.style.position = "relative";
  mostrarIcone2.style.left = "264px";
  mostrarIcone2.style.top = "10px";
}
// Adiciona eventos de clique
mostrarIcone2.addEventListener("click", () => {
  campoTexto2.style.display = "block"; // Mostra o campo
  mostrarIcone2.style.display = "none";
  esconderIcone2.style.display = "block";
});

esconderIcone2.addEventListener("click", () => {
  campoTexto2.style.display = "none"; // Esconde o campo
  mostrarIcone2.style.display = "block";
  esconderIcone2.style.display = "none";
});

const mostrarIcone3 = document.querySelector("#icon-mais3");
const esconderIcone3 = document.querySelector("#icon-menos3");
const campoTexto3 = document.querySelector(".campo-de-texto3");

if (verify === false) {
  mostrarIcone3.style.position = "relative";
  mostrarIcone3.style.left = "45px";
  mostrarIcone3.style.top = "10px";
}
// Adiciona eventos de clique
mostrarIcone3.addEventListener("click", () => {
  campoTexto3.style.display = "block"; // Mostra o campo
  mostrarIcone3.style.display = "none";
  esconderIcone3.style.display = "block";
});

esconderIcone3.addEventListener("click", () => {
  campoTexto3.style.display = "none"; // Esconde o campo
  mostrarIcone3.style.display = "block";
  esconderIcone3.style.display = "none";
});

const mostrarIcone4 = document.querySelector("#icon-mais4");
const esconderIcone4 = document.querySelector("#icon-menos4");
const campoTexto4 = document.querySelector(".campo-de-texto4");

if (verify === false) {
  mostrarIcone4.style.position = "relative";
  mostrarIcone4.style.left = "384px";
  mostrarIcone4.style.top = "10px";
}

// Adiciona eventos de clique
mostrarIcone4.addEventListener("click", () => {
  campoTexto4.style.display = "block"; // Mostra o campo
  mostrarIcone4.style.display = "none";
  esconderIcone4.style.display = "block";
});

esconderIcone4.addEventListener("click", () => {
  campoTexto4.style.display = "none"; // Esconde o campo
  mostrarIcone4.style.display = "block";
  esconderIcone4.style.display = "none";
});
