const features = [
  {
    icon: '🎯',
    title: 'Ações Sustentáveis',
    description: 'Pontuação de 0 a 100 para cada ação sustentável realizada'
  },
  {
    icon: '🏆',
    title: 'Missões Semanais',
    description: 'Desafios personalizados para manter o engajamento contínuo'
  },
  {
    icon: '👥',
    title: 'Ranking por Tiers',
    description: 'Sistema de níveis: Ferro, Bronze, Prata, Ouro, Diamante e Sustentabilístico'
  },
  {
    icon: '📅',
    title: 'Login Diário',
    description: 'Recompensas por consistência e sequência de acessos'
  },
  {
    icon: '🎥',
    title: 'Validação por Vídeo',
    description: 'Sistema híbrido com IA como apoio e revisão manual'
  },
  {
    icon: '🎁',
    title: 'Recompensas Reais',
    description: 'Subsídio na conta de energia de até R$ 300'
  }
];

const navigationTargets = {
  dashboard: '#dashboard',
  about: '#about',
  contact: '#contact'
};

function renderFeatures() {
  const grid = document.getElementById('featuresGrid');

  if (!grid) return;

  grid.innerHTML = features.map((feature) => `
    <article class="feature-card">
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </article>
  `).join('');
}

function showToast(message) {
  const toast = document.getElementById('toast');

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  window.clearTimeout(showToast.timeoutId);

  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function handleNavigation(page) {
  const target = navigationTargets[page];

  if (target) {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  const labels = {
    dashboard: 'Navegando para o dashboard.',
    about: 'Navegando para a seção Saiba Mais.',
    contact: 'Navegando para contato.'
  };

  showToast(labels[page] || 'Navegação acionada.');
}

function bindNavigationButtons() {
  document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => {
      handleNavigation(button.dataset.page);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeatures();
  bindNavigationButtons();
});