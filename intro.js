// ---------- Efeito de digitação no título ----------
const titulo = document.querySelector('.titulo');
const textoOriginal = titulo.textContent.trim();
const posElementos = document.querySelectorAll('.pos-typewriter');

function digitar(texto, elemento, velocidade = 55) {
  elemento.textContent = '';
  elemento.classList.add('digitando');
  let i = 0;
  return new Promise((resolve) => {
    const intervalo = setInterval(() => {
      elemento.textContent = texto.slice(0, i + 1);
      i++;
      if (i === texto.length) {
        clearInterval(intervalo);
        resolve();
      }
    }, velocidade);
  });
}

digitar(textoOriginal, titulo).then(() => {
  titulo.classList.remove('digitando');
  posElementos.forEach((el, index) => {
    setTimeout(() => el.classList.add('show'), index * 250);
  });
});

// ---------- Corações flutuantes ----------
const heartsBg = document.querySelector('.hearts-bg');

function criarCoracao() {
  const coracao = document.createElement('span');
  coracao.className = 'heart';
  coracao.textContent = Math.random() > 0.5 ? '❤' : '♥';
  coracao.style.left = `${Math.random() * 100}vw`;
  coracao.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
  coracao.style.setProperty('--duracao', `${6 + Math.random() * 6}s`);
  coracao.style.fontSize = `${14 + Math.random() * 18}px`;
  heartsBg.appendChild(coracao);
  setTimeout(() => coracao.remove(), 14000);
}

if (heartsBg) {
  for (let i = 0; i < 8; i++) {
    setTimeout(criarCoracao, i * 400);
  }
  setInterval(criarCoracao, 900);
}

// ---------- Botão Entrar ----------
document.getElementById('enterBtn').addEventListener('click', () => {
  const curtain = document.querySelector('.curtain');
  const button = document.getElementById('enterBtn');

  // Esconde o botão
  button.style.display = 'none';

  // Anima a cortina
  curtain.style.left = '0';

  // Após o efeito, redireciona para a galeria
  setTimeout(() => {
    window.location.href = 'galeria.html';
  }, 800);
});
