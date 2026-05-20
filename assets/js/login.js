// Login System
const users = [
  { username: 'admEcoVolt', password: 'EcoVolt2026', displayName: 'Administrador EcoVolt' },
  { username: 'Matheus Pereira', password: '569315', displayName: 'Matheus Pereira' },
  { username: 'Victor Ulrich', password: '568634', displayName: 'Victor Ulrich' },
  { username: 'Matheus Luca', password: '572228', displayName: 'Matheus Luca' },
  { username: 'Arthur da Silva', password: '571075', displayName: 'Arthur da Silva' },
  { username: 'Alexandre Carlos', password: '271280', displayName: 'Alexandre Carlos' }
];

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // Save user to localStorage
      localStorage.setItem('ecovolt-user', JSON.stringify(user));
      // Redirect to dashboard
      window.location.href = 'pages/dashboard.html';
    } else {
      // Show error
      if (errorMessage) {
        errorMessage.textContent = 'Usuário ou senha inválidos.';
        errorMessage.style.display = 'block';
        errorMessage.style.color = '#EF4444';
        errorMessage.style.padding = '1rem';
        errorMessage.style.borderRadius = '8px';
        errorMessage.style.background = 'rgba(239, 68, 68, 0.1)';
        errorMessage.style.border = '1px solid #EF4444';
        errorMessage.style.marginTop = '1rem';
      }
    }
  });
}
