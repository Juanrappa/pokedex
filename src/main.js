const $boton = document.querySelector("#boton");
const $menu = document.querySelector("#menu");
const $enviarAGithub = document.querySelector("#enviaragithub");
function aparecerYDesaparecerMenu() {
  $menu.classList.toggle("hidden");
}
function enviarAGithub() {
  window.location.href = "https://github.com/Juanrappa/pokedex";
}
$boton.onclick = aparecerYDesaparecerMenu;
$enviarAGithub.onclick = enviarAGithub;
