(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    // openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-modal]'),
    //  modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

React;

Reply;
