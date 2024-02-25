(function () {
  'use strict';
  console.log('reading js');
  
  const clickableImgs = document.querySelectorAll('.clickable-img');
const modalCancelBtns = document.querySelectorAll('.modal-cancel');
const modalWrapper = document.querySelector('#modal-wrapper');

clickableImgs.forEach((clickableImg) => {
  clickableImg.addEventListener('click', function(e) {
    const targetModalString = e.target.getAttribute('data-modal');
    const targetModal = targetModalString !== null ? document.querySelector(`#${targetModalString}`) : null;
    if (targetModal !== null) {
      targetModal.style.display = 'flex';
    }
    modalWrapper.style.display = 'flex';
  })
})

modalCancelBtns.forEach((cancelBtn) => {
  cancelBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const parentModal = e.target.parentElement;
    parentModal.style.display = 'none';
    modalWrapper.style.display = 'none';
  });
});
})();