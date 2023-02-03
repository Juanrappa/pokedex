const URL = "https://pokeapi.co/api/v2/pokemon/";
fetch(URL).then(function (respuesta) {
  console.log(respuesta.json().results);
});
