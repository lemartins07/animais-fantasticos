import initAnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais() {

  async function fetchAnimais(url) {
    const responseAnimais = await fetch(url);
    const animaisJSON = await responseAnimais.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    animaisJSON.forEach(animal => {
      numerosGrid.appendChild(createAnimais(animal));
    });

    initAnimaNumeros();
  }

  fetchAnimais('./animaisapi.json');

  function createAnimais(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>`;
    
    return div;
  }

}