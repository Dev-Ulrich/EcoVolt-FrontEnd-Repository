document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMobile = document.getElementById('navMobile');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMobile.classList.toggle('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! ✅\nObrigado pelo contato. Retornaremos em breve!');
    form.reset();
  });
});
