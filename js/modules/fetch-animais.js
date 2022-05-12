import initAnimaNumeros from './anima-numeros.js';

function createAnimais(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');

  div.innerHTML = `<h3>${animal.specie}</h3>
  <span data-numero>${animal.total}</span>`;

  return div;
}

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const responseAnimais = await fetch(url);
      const animaisJSON = await responseAnimais.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJSON.forEach((animal) => {
        numerosGrid.appendChild(createAnimais(animal));
      });

      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais('../../animaisapi.json');
}
