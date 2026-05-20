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

function toggleFAQ(index) {
  const questions = document.querySelectorAll('.faq-question');
  const answers = document.querySelectorAll('.faq-answer');

  questions.forEach((question, i) => {
    if (i === index) {
      question.classList.toggle('active');
      answers[i].classList.toggle('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-faq-index]').forEach((button) => {
    button.addEventListener('click', () => {
      toggleFAQ(Number(button.dataset.faqIndex));
    });
  });
});
