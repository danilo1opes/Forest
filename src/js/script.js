const mobileButton = document.getElementById('mobile-button');
const mobileMenu = document.getElementById('mobile-menu');
const video = document.getElementById('video');
const temperatura = document.getElementById('temperatura');
const tempo = document.getElementById('tempo');
const dia = document.getElementById('dia');
const random = Math.floor(Math.random() * 10) + 20;
const date = new Date();

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});

temperatura.innerText = `${random}°`;
tempo.innerText = random < 25 ? `🌧️ ${random + 5}%` : `🌤️`;
dia.innerText = date.toLocaleDateString('pt-BR', {
  weekday: 'long',
});

video.src = random < 25 ? '/video/video_chuva.mp4' : '/video/video_sol.mp4';
