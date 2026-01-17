function openConfirmModal({
  actionUrl,
  title = 'Confirm',
  message = 'Are you sure you want to proceed? This action cannot be undone.',
  primaryActionText = 'Proceed',
  secondaryActionText = 'Cancel',
}) {
  openModal({
    onRender: () => {
      const form = document.getElementById('confirm-form');
      const titleEl = document.getElementById('confirm-title');
      const messageEl = document.getElementById('confirm-message');
      const primaryBtn = form.querySelector('.confirm-modal__btn--primary');
      const secondaryBtn = form.querySelector('.confirm-modal__btn--secondary');

      form.action = actionUrl;
      titleEl.textContent = title;
      messageEl.innerHTML = message;
      primaryBtn.textContent = primaryActionText;
      secondaryBtn.textContent = secondaryActionText;
    },
  });
}
