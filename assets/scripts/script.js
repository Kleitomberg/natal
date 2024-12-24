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
  
// Tentar tocar a música automaticamente
window.addEventListener('load', () => {
  const music = document.getElementById('music');

  if (music) {
      const playMusic = () => {
          music.play()
              .then(() => {
                  console.log("Música tocando automaticamente!");
              })
              .catch((err) => {
                  console.warn(
                      "A música foi bloqueada pelo navegador. O usuário precisa interagir com a página."
                  );
              });
      };

      // Tentar tocar automaticamente
      playMusic();

      // Caso falhe, reproduzir após a interação do usuário
      document.body.addEventListener('click', playMusic, { once: true });
  }
});
  


  muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    music.muted = isMuted;
    // muteButton.textContent = isMuted ? '🔇' : '🔊';
  });
  
  // Iniciar a neve
  createSnow();
  