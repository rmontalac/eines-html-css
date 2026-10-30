const boton = document.getElementById("boton-ingredientes");
const lista = document.getElementById("lista-ingredientes");

boton.addEventListener("click", function () {
  lista.hidden = !lista.hidden;

  if (lista.hidden) {
    boton.textContent = "Mostrar ingredientes";
  } else {
    boton.textContent = "Ocultar ingredientes";
  }
});