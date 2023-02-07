const URL = "https://pokeapi.co/api/v2/pokemon/";
const $container = document.querySelector("#containercards");
let pokemons = ``;
let next = "";
const getpokemons = async function (result) {
  let url = result.url;
  let data = await fetch(url);
  let jsondata = await data.json();
  createPokemonsHTML(jsondata);
  $container.innerHTML = pokemons;
};
const displaypokemons = async function (URL) {
  let data = await fetch(URL);
  let jsonData = await data.json();
  let result = await jsonData.results;
  next = jsonData.next;
  await result.forEach(getpokemons);
  setTimeout(function () {
    let $cards = document.querySelectorAll("#card");
    let lastCard = $cards[$cards.length - 1];
    observer.observe(lastCard);
  }, 1000);
};
let observer = new IntersectionObserver(function (inputs) {
  inputs.forEach(function (input) {
    if (input.isIntersecting) {
      displaypokemons(next);
    }
  });
}, {});
displaypokemons(URL);
