function openConfirmModal({
  actionUrl,
  title = 'Confirm',
  message = 'Are you sure you want to proceed? This action cannot be undone.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) {
  const modal = document.getElementById('confirm-modal');
  const form = document.getElementById('confirm-form');
  const titleEl = document.getElementById('confirm-title');
  const messageEl = document.getElementById('confirm-message');
  const confirmBtn = form.querySelector('.confirm-modal__btn--primary');
  const cancelBtn = form.querySelector('.confirm-modal__btn--secondary');

  form.action = actionUrl;
  titleEl.textContent = title;

  messageEl.innerHTML = message;

  confirmBtn.textContent = confirmText;
  cancelBtn.textContent = cancelText;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
