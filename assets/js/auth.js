// Authentication Check
function checkAuth() {
  const user = localStorage.getItem('ecovolt-user');
  
  if (!user) {
    window.location.href = '../login.html';
    return null;
  }
  
  return JSON.parse(user);
}

// Logout function
function logout() {
  localStorage.removeItem('ecovolt-user');
  window.location.href = '../login.html';
}

// Display user name in dashboard
function displayUserName() {
  const user = checkAuth();
  if (user) {
    const userNameElements = document.querySelectorAll('.user-name');
    userNameElements.forEach(el => {
      el.textContent = user.displayName;
    });
  }
}

// Initialize on protected pages
if (window.location.pathname.includes('/pages/')) {
  document.addEventListener('DOMContentLoaded', () => {
    displayUserName();
  });
}
