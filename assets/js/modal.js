const MODAL_MAIN_CONTAINER = document.querySelector('#modal-legal');

export const showModal = () => {
    MODAL_MAIN_CONTAINER.setAttribute("tabindex", "0");
    MODAL_MAIN_CONTAINER.style.display = 'flex';
    localStorage.setItem('modal_status', 'show');
};
const hideModal = () => {
    MODAL_MAIN_CONTAINER.setAttribute("tabindex", "-1");
    MODAL_MAIN_CONTAINER.style.display = 'none';
    localStorage.setItem('modal_status', 'hide');
};

const BOTON_MODAL_ENTENDIDO = document.querySelector('#boton-modal-entendido');
BOTON_MODAL_ENTENDIDO.addEventListener('click', () => {
    hideModal()
})

// boton footer abrir modal
const BOTON_DESCARGO_RESPONSABILIDAD = document.querySelector('#boton-descargo-responsabilidad');
BOTON_DESCARGO_RESPONSABILIDAD.addEventListener('click', () => {
    MODAL_MAIN_CONTAINER.style.display = 'flex';
});

const BOTON_MODAL_CERRAR = document.querySelector('div.modal-header > span')
BOTON_MODAL_CERRAR.addEventListener('click', () => {
    MODAL_MAIN_CONTAINER.style.display = 'none';
})

// clic fuera modal lo cierra
window.addEventListener('click', (e) => {
    if (e.target == MODAL_MAIN_CONTAINER) MODAL_MAIN_CONTAINER.style.display = 'none';
});