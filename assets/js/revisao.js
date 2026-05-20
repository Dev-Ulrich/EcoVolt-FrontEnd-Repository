// Revision Form
const revisionForm = document.getElementById('revision-form');
const revisionMessage = document.getElementById('revision-message');

if (revisionForm) {
  revisionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    if (revisionMessage) {
      revisionMessage.textContent = 'Recurso enviado com sucesso. Status: Em análise manual.';
      revisionMessage.style.display = 'block';
      revisionMessage.style.color = 'var(--accent-green)';
      revisionMessage.style.padding = '1rem';
      revisionMessage.style.borderRadius = '12px';
      revisionMessage.style.background = 'rgba(46, 230, 107, 0.1)';
      revisionMessage.style.border = '1px solid var(--accent-green)';
      revisionMessage.style.marginBottom = '1rem';
      revisionMessage.style.textAlign = 'center';
      revisionMessage.style.fontWeight = '600';
    }

    // Redirect after delay
    setTimeout(() => {
      window.location.href = 'validacoes.html';
    }, 2000);
  });
}
