const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const heartsContainer = document.querySelector('.hearts-container');

// Botão NÃO foge sempre que mouse passa ou clica nele
noBtn.addEventListener('mouseenter', moveNoBtn);
noBtn.addEventListener('click', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn);

// Ao clicar SIM, mostra a mensagem e anima os corações
yesBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  launchHearts();
});

// Ao clicar no X, fecha a mensagem (sem mexer na posição dos botões)
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Função que move o botão "Não" para posição aleatória dentro da tela
function moveNoBtn() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  // Garante que o botão "Não" não fique em cima da caixa da mensagem (opcional)
  // Mas como a mensagem aparece sobre o overlay, o botão não estará clicável durante isso

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  // Usa position fixed para que o botão possa se mover
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Função para criar corações animados
function launchHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️'; // coração normal
    heart.style.fontSize = '50px'; // maior

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}
