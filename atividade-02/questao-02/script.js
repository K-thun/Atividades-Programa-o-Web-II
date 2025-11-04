const btn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
btn.addEventListener('click', (event) => {
  event.preventDefault();

  const valorPorIntervalo = parseFloat(document.getElementById('valorPorIntervalo').value);
  const tempoDeUso = parseFloat(document.getElementById('tempoDeUso').value);

  if (isNaN(valorPorIntervalo) || isNaN(tempoDeUso) || valorPorIntervalo <= 0 || tempoDeUso <= 0) {
    resultado.textContent = "Preencha os valores corretamente!";
    return;
  }

  const intervalos = Math.ceil(tempoDeUso / 15);
  const valorFinal = intervalos * valorPorIntervalo;
  resultado.textContent = `O valor total é R$ ${valorFinal.toFixed(2)}`;
});