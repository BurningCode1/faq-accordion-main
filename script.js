const mostrarIcone = document.querySelector("#icon-mais");
const mediaQuery = window.matchMedia("(max-width: 1024px)");
const mediaQuery2 = window.matchMedia("(max-width: 1440px)");
const mediaQuery3 = window.matchMedia("(max-width: 1280px)");
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
    esconderIcone.style.bottom = "12px";
    verify = false;
  }
  esconderIcone.style.display = "block";
  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    esconderIcone.style.position = "relative";
    esconderIcone.style.left = "525px";
    esconderIcone.style.bottom = "12px";
  }
  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1280px.");
    esconderIcone.style.position = "relative";
    esconderIcone.style.left = "480px";
    esconderIcone.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    esconderIcone.style.position = "relative";
    esconderIcone.style.left = "425px";
    esconderIcone.style.bottom = "12px";
  }
});
console.log(verify.valueOf);
esconderIcone.addEventListener("click", () => {
  campoTexto.style.display = "none"; // Esconde o campo

  mostrarIcone.style.display = "block";
  if (verify === false) {
    mostrarIcone.style.position = "relative";
    mostrarIcone.style.left = "475px";
    mostrarIcone.style.bottom = "12px";
  }
  esconderIcone.style.display = "none";

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    mostrarIcone.style.position = "relative";
    mostrarIcone.style.left = "425px";
    mostrarIcone.style.bottom = "12px";
  }

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    mostrarIcone.style.position = "relative";
    mostrarIcone.style.left = "525px";
    mostrarIcone.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1280px.");
    mostrarIcone.style.position = "relative";
    mostrarIcone.style.left = "480px";
    mostrarIcone.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    mostrarIcone.style.position = "relative";
    mostrarIcone.style.left = "425px";
    mostrarIcone.style.bottom = "12px";
  }
});

const mostrarIcone2 = document.querySelector("#icon-mais2");
const esconderIcone2 = document.querySelector("#icon-menos2");
const campoTexto2 = document.querySelector(".campo-de-texto2");
let verify2 = false;
// Adiciona eventos de clique
mostrarIcone2.addEventListener("click", () => {
  campoTexto2.style.display = "block"; // Mostra o campo
  mostrarIcone2.style.display = "none";
  verify2 = true;
  if (verify2 === true) {
    esconderIcone2.style.position = "relative";
    esconderIcone2.style.left = "475px";
    esconderIcone2.style.bottom = "12px";
    verify2 = false;
  }
  esconderIcone2.style.display = "block";

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    esconderIcone2.style.position = "relative";
    esconderIcone2.style.left = "525px";
    esconderIcone2.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1280px.");
    esconderIcone2.style.position = "relative";
    esconderIcone2.style.left = "480px";
    esconderIcone2.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    esconderIcone2.style.position = "relative";
    esconderIcone2.style.left = "425px";
    esconderIcone2.style.bottom = "12px";
  }
});

esconderIcone2.addEventListener("click", () => {
  campoTexto2.style.display = "none"; // Esconde o campo
  mostrarIcone2.style.display = "block";

  if (verify2 === false) {
    mostrarIcone2.style.position = "relative";
    mostrarIcone2.style.left = "475px";
    mostrarIcone2.style.bottom = "12px";
  }
  esconderIcone2.style.display = "none";

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    mostrarIcone2.style.position = "relative";
    mostrarIcone2.style.left = "525px";
    mostrarIcone2.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1280px.");
    mostrarIcone2.style.position = "relative";
    mostrarIcone2.style.left = "480px";
    mostrarIcone2.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    mostrarIcone2.style.position = "relative";
    mostrarIcone2.style.left = "425px";
    mostrarIcone2.style.bottom = "12px";
  }
});

const mostrarIcone3 = document.querySelector("#icon-mais3");
const esconderIcone3 = document.querySelector("#icon-menos3");
const campoTexto3 = document.querySelector(".campo-de-texto3");
let verify3 = false;
// Adiciona eventos de clique
mostrarIcone3.addEventListener("click", () => {
  campoTexto3.style.display = "block"; // Mostra o campo
  mostrarIcone3.style.display = "none";
  verify3 = true;
  if (verify3 === true) {
    esconderIcone3.style.position = "relative";
    esconderIcone3.style.left = "475px";
    esconderIcone3.style.bottom = "12px";
    verify3 = false;
  }
  esconderIcone3.style.display = "block";

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    esconderIcone3.style.position = "relative";
    esconderIcone3.style.left = "525px";
    esconderIcone3.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    esconderIcone3.style.position = "relative";
    esconderIcone3.style.left = "480px";
    esconderIcone3.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    esconderIcone3.style.position = "relative";
    esconderIcone3.style.left = "425px";
    esconderIcone3.style.bottom = "12px";
  }
});

esconderIcone3.addEventListener("click", () => {
  campoTexto3.style.display = "none"; // Esconde o campo
  mostrarIcone3.style.display = "block";
  if (verify3 === false) {
    mostrarIcone3.style.position = "relative";
    mostrarIcone3.style.left = "475px";
    mostrarIcone3.style.bottom = "12px";
  }
  esconderIcone3.style.display = "none";

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    mostrarIcone3.style.position = "relative";
    mostrarIcone3.style.left = "525px";
    mostrarIcone3.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1280px.");
    mostrarIcone3.style.position = "relative";
    mostrarIcone3.style.left = "480px";
    mostrarIcone3.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    mostrarIcone3.style.position = "relative";
    mostrarIcone3.style.left = "425px";
    mostrarIcone3.style.bottom = "12px";
  }
});

const mostrarIcone4 = document.querySelector("#icon-mais4");
const esconderIcone4 = document.querySelector("#icon-menos4");
const campoTexto4 = document.querySelector(".campo-de-texto4");
let verify4 = false;
// Adiciona eventos de clique
mostrarIcone4.addEventListener("click", () => {
  campoTexto4.style.display = "block"; // Mostra o campo
  mostrarIcone4.style.display = "none";
  verify4 = true;
  if (verify4 === true) {
    esconderIcone4.style.position = "relative";
    esconderIcone4.style.left = "475px";
    esconderIcone4.style.bottom = "12px";
    verify4 = false;
  }
  esconderIcone4.style.display = "block";

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    esconderIcone4.style.position = "relative";
    esconderIcone4.style.left = "525px";
    esconderIcone4.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    esconderIcone4.style.position = "relative";
    esconderIcone4.style.left = "480px";
    esconderIcone4.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    esconderIcone4.style.position = "relative";
    esconderIcone4.style.left = "425px";
    esconderIcone4.style.bottom = "12px";
  }
});

esconderIcone4.addEventListener("click", () => {
  campoTexto4.style.display = "none"; // Esconde o campo
  mostrarIcone4.style.display = "block";
  if (verify4 === false) {
    mostrarIcone4.style.position = "relative";
    mostrarIcone4.style.left = "475px";
    mostrarIcone4.style.bottom = "12px";
  }
  esconderIcone4.style.display = "none";

  if (mediaQuery2.matches) {
    alert("A largura da tela é menor ou igual a 1440px.");
    mostrarIcone4.style.position = "relative";
    mostrarIcone4.style.left = "525px";
    mostrarIcone4.style.bottom = "12px";
  }

  if (mediaQuery3.matches) {
    alert("A largura da tela é menor ou igual a 1280px.");
    mostrarIcone4.style.position = "relative";
    mostrarIcone4.style.left = "480px";
    mostrarIcone4.style.bottom = "12px";
  }

  if (mediaQuery.matches) {
    alert("A largura da tela é menor ou igual a 1024px.");
    mostrarIcone4.style.position = "relative";
    mostrarIcone4.style.left = "425px";
    mostrarIcone4.style.bottom = "12px";
  }
});
