const btn = document.getElementById('calcular');
const res = document.getElementById('resultado');

btn.addEventListener('click', (event) => {
  event.preventDefault(); 
  const med = document.getElementById('medicamento').value.trim(); 
  const preco = parseFloat(document.getElementById('preco').value); 
  if (!med || isNaN(preco) || preco <= 0) {
    res.textContent = "Preenchimento incorreto.";
    return; 
  }
  const total = preco * 2; 
  const desconto = total - Math.floor(total); 
  const valorFinal = total - desconto; 

  res.textContent = `Promoção de ${med}. Leve 2 por apenas R$ ${valorFinal.toFixed(2)}`;
}); 