const form = document.getElementById('form');
const totalCompra = document.getElementById('total');
const gorjeta = document.getElementById('gorjeta');
const qtdPeople = document.getElementById('people');

function calculaVlGorjeta() {
  const vlGorjeta = ((totalCompra.value / 100) * gorjeta.value).toFixed(2);

  try {
    if (isNaN(vlGorjeta)) {
      
      throw new Error('Selecione como foi o Serviço');
      
    }
  } catch (error) {
    alert(error.message);
  }

  return vlGorjeta;
}

function calculaGorjetaPorPessoa() {
  const vlGorjetaPorPessoa = calculaVlGorjeta() / qtdPeople.value;

try {
    if(isNaN(vlGorjetaPorPessoa)){
      return;
    }
} catch (error) {
  alert(error.message)
}

  return vlGorjetaPorPessoa;
}

function exibirVlPorPessoa() {
  document.getElementById('total-pessoa').innerHTML = `
        
        <p>Gorjeta Total:  R$ ${calculaGorjetaPorPessoa().toFixed(2)}</p>
        <p>Cada pessoa</p>
  
  `;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  exibirVlPorPessoa();
});
