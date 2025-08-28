// Configurar plugins do Day.js
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

const tempoDisplay = document.getElementById("tempo");

let serverTime; // Hora fornecida pela API

// Obter o horário do servidor no fuso horário de São Paulo
async function obterHorarioServidor() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo");
    const data = await response.json();
    serverTime = dayjs.tz(data.datetime, "America/Sao_Paulo");
    atualizarContador(); // Atualiza o contador assim que o horário é obtido
  } catch (error) {
    console.error("ops a quimica do casal foi tanta que acabou gerando um erro recarregue a pagina:", error);
    tempoDisplay.textContent = "Erro ao carregar o horário.";
  }
}

function atualizarContador() {
  if (!serverTime) return;

  const initDate = dayjs.tz("2022-01-01", "America/Sao_Paulo");
  const now = serverTime.add(dayjs().diff(dayjs(serverTime), "millisecond"), "millisecond");

  const yearDiff = now.diff(initDate, "year");
  const monthDiff = now.diff(initDate.add(yearDiff, "year"), "month");
  const dayDiff = now.diff(
    initDate.add(yearDiff, "year").add(monthDiff, "month"),
    "day"
  );
  const hourDiff = now.diff(
    initDate.add(yearDiff, "year").add(monthDiff, "month").add(dayDiff, "day"),
    "hour"
  );
  const minuteDiff = now.diff(
    initDate
      .add(yearDiff, "year")
      .add(monthDiff, "month")
      .add(dayDiff, "day")
      .add(hourDiff, "hour"),
    "minute"
  );
  const secondDiff = now.diff(
    initDate
      .add(yearDiff, "year")
      .add(monthDiff, "month")
      .add(dayDiff, "day")
      .add(hourDiff, "hour")
      .add(minuteDiff, "minute"),
    "second"
  );

  // Atualizar o contador na tela
  tempoDisplay.textContent = `${yearDiff} anos, ${monthDiff} meses, ${dayDiff} dias, ${hourDiff} horas, ${minuteDiff} minutos e ${secondDiff < 10 ? `0${secondDiff}` : secondDiff} segundos`;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Botão para resetar
document.getElementById("resetar").addEventListener("click", () => {
  location.reload(); // Reinicia a página
});

// Obter o horário inicial
obterHorarioServidor();

let i = 0;
const txt1 = "";
const speed = 100;

function typeWriter() {
if (i < txt1.length) {
const textElement = document.getElementById("text1");
textElement.innerHTML += txt1.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
}

typeWriter();

setInterval(() => {
const bgHeart = document.querySelector('.bg_heart');
const rSize = Math.floor(Math.random() * 15) + 10;
const rLeft = Math.floor(Math.random() * 100);
const rBg = Math.floor(Math.random() * 25) + 20;
const rTime = Math.floor(Math.random() * 10) + 10;

const heart = document.createElement('div');
heart.classList.add('heart');
heart.style.width = `${rSize}px`;
heart.style.height = `${rSize}px`;
heart.style.left = `${rLeft}%`;
heart.style.background = `rgba(255, ${rBg - 25}, ${rBg}, 1)`;
heart.style.animation = `love ${rTime}s ease`;

bgHeart.appendChild(heart);

setTimeout(() => {
bgHeart.removeChild(heart);
}, rTime * 1000);
}, 500);
