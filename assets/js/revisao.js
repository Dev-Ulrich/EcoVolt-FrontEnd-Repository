// Revision Form
const revisionForm = document.getElementById('revision-form');
const revisionMessage = document.getElementById('revision-message');

if (revisionForm) {
  revisionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    if (revisionMessage) {
      revisionMessage.classList.remove('hidden');
      revisionMessage.classList.add('form-message', 'success');
      revisionMessage.textContent = 'Recurso enviado com sucesso. Status: Em análise manual.';
    }

    // Redirect after delay
    setTimeout(() => {
      window.location.href = 'validacoes.html';
    }, 2000);
  });
}
