// script.js

// Data de início do evento
const dataInicio = new Date('2024-01-01T00:00:00'); // Ajuste para a data desejada

// Elemento do contador
const tempoDisplay = document.getElementById('tempo');

// Função para calcular o tempo decorrido
function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  // Converter para dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  // Atualizar o contador na tela
  tempoDisplay.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Botão para resetar (opcional)
document.getElementById('resetar').addEventListener('click', () => {
  location.reload(); // Reinicia a página
});
