window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelector('.promo_btn_item'),
          modalTrigger2 = document.querySelector('.present_btn'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close');


        setTimeout(function() {
            modal.classList.add('show');
            modal.classList.remove('hide');
        }, 15000);

    function openModal(item1, item2, value) {
        item1.addEventListener('click', () => {
            value.classList.add('show');
            value.classList.remove('hide');
        });
        item2.addEventListener('click', () => {
            value.classList.add('show');
            value.classList.remove('hide');
        });
    }
    openModal(modalTrigger, modalTrigger2, modal);

    function closeModal() {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
            modal.classList.add('hide');
        });
    }
    closeModal();
    
   
});