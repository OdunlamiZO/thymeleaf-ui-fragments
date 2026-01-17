function openModal({ onRender } = {}) {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (typeof onRender === 'function') {
    onRender();
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
