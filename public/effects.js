// 1. Efecto Estrellas Dinámicas
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.getElementById('stars');
  
  // Crear 200 estrellas
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3}px;
      height: ${Math.random() * 3}px;
      background: white;
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: ${Math.random()};
      animation: twinkle ${5 + Math.random() * 5}s infinite;
    `;
    stars.appendChild(star);
  }

  // 2. Conexión Wallet
  document.getElementById('connectBtn').addEventListener('click', async () => {
    if (!window.ethereum) {
      alert("¡Instala MetaMask!");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });
      console.log("Conectado:", accounts[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

// 3. Efecto Parallax para el banner
window.addEventListener('scroll', () => {
  const banner = document.querySelector('.parallax-banner');
  banner.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
