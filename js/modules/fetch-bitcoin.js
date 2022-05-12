export default function initeFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / bitcoin.BRL.last).toFixed(4);
    }).catch((error) => {
      console.log(Error(error));
    });
}
