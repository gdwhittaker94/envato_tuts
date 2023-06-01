const modalContainer = document.querySelectorAll('.modal-container');
modalContainer.forEach(container => container.style.display = 'none');

const btnModal = document.querySelectorAll('.btn-modal');
btnModal.forEach(button => {
    button.addEventListener('click', function () {
        modalContainer.forEach(container => container.style.display = 'flex');
        modalContainer.forEach(container => {
            container.addEventListener('click', function () {
                container.style.display = 'none';
            });
        });
    });
});