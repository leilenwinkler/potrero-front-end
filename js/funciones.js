const btnModo = document.querySelector("#modo");
btnModo.addEventListener("click", cambiarModo);

function cambiarModo() {
  document.body.classList.toggle("dark");
  if (document.body.className === "dark") {
    document.getElementById("modo").innerHTML="Modo Soleado";
  }
}

function datos(){
  alert ("Página creada por: Leilén Winkler. Contacto: leilenwinkler@gmail.com Helvecia, Santa Fe")
}
