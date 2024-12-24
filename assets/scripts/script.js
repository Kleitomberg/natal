// Criação da neve
function createSnow() {
    const snowContainer = document.getElementById('snow');
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 2 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowContainer.appendChild(snowflake);
    }
  }
  
  // Controle de música
  const music = document.getElementById('music');
 
  const muteButton = document.getElementById('muteButton');
  let isMuted = false;
  
  muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    music.muted = isMuted;
    // muteButton.textContent = isMuted ? '🔇' : '🔊';
  });
  
  // Iniciar a neve
  createSnow();
  