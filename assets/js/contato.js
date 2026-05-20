// Contact Form
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    if (successMessage) {
      successMessage.textContent = 'Mensagem enviada com sucesso!';
      successMessage.style.display = 'block';
      successMessage.style.color = 'var(--accent-green)';
      successMessage.style.padding = '1rem';
      successMessage.style.borderRadius = '8px';
      successMessage.style.background = 'rgba(46, 230, 107, 0.1)';
      successMessage.style.border = '1px solid var(--accent-green)';
      successMessage.style.marginBottom = '1rem';
      successMessage.style.textAlign = 'center';
    }

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      if (successMessage) {
        successMessage.style.display = 'none';
      }
    }, 5000);
  });
}
