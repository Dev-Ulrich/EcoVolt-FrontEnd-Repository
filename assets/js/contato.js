// Contact Form validation and feedback
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

function showFormMessage(el, type, messages) {
  if (!el) return;
  el.className = 'form-message';
  if (type === 'error') el.classList.add('error');
  if (type === 'success') el.classList.add('success');
  if (Array.isArray(messages)) el.innerHTML = messages.map(m => `<div>${m}</div>`).join('');
  else el.textContent = messages;
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    const errors = [];
    if (!name) errors.push('Por favor informe seu nome.');
    if (!email) errors.push('Por favor informe seu e-mail.');
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) errors.push('Por favor informe um e-mail válido.');
    }
    if (!subject) errors.push('Por favor informe o assunto.');
    if (!message) errors.push('Por favor escreva sua mensagem.');

    // Show errors or success
    if (errors.length) {
      showFormMessage(successMessage, 'error', errors);
      return;
    }

    // Simulate successful submit
    showFormMessage(successMessage, 'success', 'Mensagem enviada com sucesso!');
    contactForm.reset();

    // Hide after 5s
    setTimeout(() => {
      if (successMessage) {
        successMessage.className = 'form-message';
        successMessage.textContent = '';
      }
    }, 5000);
  });
}
