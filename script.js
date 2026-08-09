// ---------- Contador "Juntos há..." ----------
const DATA_INICIO = new Date(2026, 2, 22); // 22/03/2026 — início do relacionamento
const contadorPrincipal = document.querySelector('.contador-principal');
const contadorRelogio = document.querySelector('.contador-relogio');

function calcularTempoJuntos(inicio) {
  const agora = new Date();
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0) { minutos += 60; horas--; }
  if (horas < 0) { horas += 24; dias--; }
  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }
  if (meses < 0) { meses += 12; anos--; }

  return { anos, meses, dias, horas, minutos, segundos };
}

function pad(numero) {
  return String(numero).padStart(2, '0');
}

function plural(valor, singular, pluralForma) {
  return `${valor} ${valor === 1 ? singular : pluralForma}`;
}

function atualizarContador() {
  const t = calcularTempoJuntos(DATA_INICIO);
  contadorPrincipal.textContent =
    `Juntos há ${plural(t.anos, 'ano', 'anos')}, ${plural(t.meses, 'mês', 'meses')} e ${plural(t.dias, 'dia', 'dias')}`;
  contadorRelogio.textContent = `${pad(t.horas)}:${pad(t.minutos)}:${pad(t.segundos)}`;
}

if (contadorPrincipal && contadorRelogio) {
  atualizarContador();
  setInterval(atualizarContador, 1000);
}

// Viewport animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

document.querySelectorAll('.obra').forEach(el => observer.observe(el));

// Botão Surpresa
const btn = document.getElementById('btnSurpresa');
const surpresa = document.querySelector('.surpresa');

if (btn && surpresa) {
  btn.addEventListener('click', () => {
    surpresa.classList.remove('hidden');
    surpresa.classList.add('show');
    btn.style.display = 'none';
  });
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('.lightbox-img');
const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

function abrirLightbox(img) {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = img.dataset.titulo || img.alt || '';
  lightbox.classList.remove('hidden');
}

function fecharLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
}

if (lightbox) {
  document.querySelectorAll('.obra').forEach(img => {
    img.addEventListener('click', () => abrirLightbox(img));
  });

  lightboxClose.addEventListener('click', fecharLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) fecharLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') fecharLightbox();
  });
}

// Carta secreta
const btnCarta = document.getElementById('btnCarta');
const modalCarta = document.getElementById('modalCarta');
const envelope = document.getElementById('envelope');
const envelopeDica = document.getElementById('envelopeDica');
const cartaConteudo = document.getElementById('cartaConteudo');
const cartaFechar = modalCarta?.querySelector('.carta-fechar');

function abrirCarta() {
  modalCarta.classList.remove('hidden');
}

function abrirEnvelope() {
  envelope.classList.add('aberto');
  envelopeDica?.classList.add('hidden');
  setTimeout(() => cartaConteudo.classList.remove('hidden'), 500);
}

function fecharCarta() {
  modalCarta.classList.add('hidden');
  envelope.classList.remove('aberto');
  envelopeDica?.classList.remove('hidden');
  cartaConteudo.classList.add('hidden');
}

if (btnCarta && modalCarta) {
  btnCarta.addEventListener('click', abrirCarta);
  envelope.addEventListener('click', abrirEnvelope);
  cartaFechar.addEventListener('click', fecharCarta);

  modalCarta.addEventListener('click', (event) => {
    if (event.target === modalCarta) fecharCarta();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modalCarta.classList.contains('hidden')) {
      fecharCarta();
    }
  });
}

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 50, duration: 0.4 }
    }
  },
  retina_detect: true
});
