// Efecto parallax para elementos del menú
document.querySelectorAll('.nav-planet').forEach(planet => {
  gsap.to(planet, {
    y: (i) => i * 30 - 15,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});
