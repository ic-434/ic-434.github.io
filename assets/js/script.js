const btn = document.getElementById('nickname');
const modal = document.getElementById('modal');

const close_modal = document.getElementById('modal_close');

btn.onclick = () => {
    modal.classList.add('madal_active');

    close_modal.addEventListener('click', closeModal);

    modal.addEventListener('click', hideModal);

    function closeModal() {
        modal.classList.remove('madal_active');
        close_modal.removeEventListener('click', hideModal);
    }

    function hideModal(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
};