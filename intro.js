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

btn.addEventListener('click', () => {
  surpresa.classList.remove('hidden');
  surpresa.classList.add('show');
  btn.style.display = 'none';
});


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

