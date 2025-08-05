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
