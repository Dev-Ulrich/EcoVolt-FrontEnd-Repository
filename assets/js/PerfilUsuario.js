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
 
function openActionModal() {
  document.getElementById('actionModal')?.classList.add('active');
}
 
function closeActionModal() {
  document.getElementById('actionModal')?.classList.remove('active');
}
 
document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('openActionModal');
  const closeButton = document.getElementById('closeActionModal');
  const cancelButton = document.getElementById('cancelActionModal');
  const modal = document.getElementById('actionModal');
  const form = document.getElementById('actionForm');
  const fileUploadBox = document.getElementById('fileUploadBox');
  const videoUpload = document.getElementById('videoUpload');
 
  openButton?.addEventListener('click', openActionModal);
  closeButton?.addEventListener('click', closeActionModal);
  cancelButton?.addEventListener('click', closeActionModal);
 
  fileUploadBox?.addEventListener('click', () => {
    videoUpload?.click();
  });
 
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeActionModal();
    }
  });
 
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Ação sustentável enviada para validação! ✅');
    closeActionModal();
    form.reset();
  });
});