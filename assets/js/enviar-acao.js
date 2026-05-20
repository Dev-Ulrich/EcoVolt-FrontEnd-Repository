// Action Submission
const actionTypeSelect = document.getElementById('action-type');
const actionDetails = document.getElementById('action-details');
const odsDisplay = document.getElementById('ods-display');
const pointsDisplay = document.getElementById('points-display');
const actionForm = document.getElementById('action-form');
const submitMessage = document.getElementById('submit-message');

const actionData = {
  'reciclagem': {
    ods: 'ODS 12 — Consumo e Produção Responsáveis',
    points: 'Até 70 pontos'
  },
  'agua': {
    ods: 'ODS 6 — Água Potável e Saneamento',
    points: 'Até 85 pontos'
  },
  'transporte': {
    ods: 'ODS 11 — Cidades e Comunidades Sustentáveis',
    points: 'Até 75 pontos'
  },
  'energia': {
    ods: 'ODS 7 — Energia Limpa e Acessível',
    points: 'Até 90 pontos'
  },
  'compostagem': {
    ods: 'ODS 12 — Consumo e Produção Responsáveis',
    points: 'Até 80 pontos'
  },
  'reflorestamento': {
    ods: 'ODS 15 — Vida Terrestre',
    points: 'Até 100 pontos'
  }
};

if (actionTypeSelect) {
  actionTypeSelect.addEventListener('change', (e) => {
    const selectedAction = e.target.value;

    if (selectedAction && actionData[selectedAction]) {
      actionDetails.style.display = 'block';
      odsDisplay.textContent = actionData[selectedAction].ods;
      pointsDisplay.textContent = actionData[selectedAction].points;
    } else {
      actionDetails.style.display = 'none';
    }
  });
}

if (actionForm) {
  actionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    if (submitMessage) {
      submitMessage.textContent = 'Ação enviada com sucesso! Status: Em análise.';
      submitMessage.style.display = 'block';
      submitMessage.style.color = 'var(--accent-green)';
      submitMessage.style.padding = '1rem';
      submitMessage.style.borderRadius = '12px';
      submitMessage.style.background = 'rgba(46, 230, 107, 0.1)';
      submitMessage.style.border = '1px solid var(--accent-green)';
      submitMessage.style.marginBottom = '1rem';
      submitMessage.style.textAlign = 'center';
      submitMessage.style.fontWeight = '600';
    }

    // Reset form
    setTimeout(() => {
      actionForm.reset();
      actionDetails.style.display = 'none';
      
      // Redirect to validacoes page
      setTimeout(() => {
        window.location.href = 'validacoes.html';
      }, 2000);
    }, 1000);
  });
}
