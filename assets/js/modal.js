import { safeGetItem, safeSetItem } from './ui-utils.js';

const MODAL_MAIN_CONTAINER = document.querySelector('#modal-legal');
let previousFocused = null;

function openModal() {
  if (!MODAL_MAIN_CONTAINER) { console.error('modal.js: elemento "#modal-legal" no encontrado en el DOM'); return; }
  previousFocused = document.activeElement;
  MODAL_MAIN_CONTAINER.style.display = 'flex';
  const firstFocusable = MODAL_MAIN_CONTAINER.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) firstFocusable.focus();
}

export const showModal = () => {
  if (safeGetItem('modal_status') !== 'hide') {
    openModal();
    safeSetItem('modal_status', 'show');
  }
};

const hideModal = () => {
  if (!MODAL_MAIN_CONTAINER) return;
  MODAL_MAIN_CONTAINER.style.display = 'none';
  safeSetItem('modal_status', 'hide');
  if (previousFocused) previousFocused.focus();
};

const BOTON_MODAL_ENTENDIDO = document.querySelector('#boton-modal-entendido');
if (BOTON_MODAL_ENTENDIDO) {
  BOTON_MODAL_ENTENDIDO.addEventListener('click', hideModal);
} else console.error('modal.js: elemento "#boton-modal-entendido" no encontrado en el DOM');

const BOTON_DESCARGO_RESPONSABILIDAD = document.querySelector('#boton-descargo-responsabilidad');
if (BOTON_DESCARGO_RESPONSABILIDAD) {
  BOTON_DESCARGO_RESPONSABILIDAD.addEventListener('click', openModal);
} else console.error('modal.js: elemento "#boton-descargo-responsabilidad" no encontrado en el DOM');

const BOTON_MODAL_CERRAR = document.querySelector('.modal-cerrar');
if (BOTON_MODAL_CERRAR) {
  BOTON_MODAL_CERRAR.addEventListener('click', hideModal);
} else console.error('modal.js: elemento ".modal-cerrar" no encontrado en el DOM');

if (MODAL_MAIN_CONTAINER) {
  MODAL_MAIN_CONTAINER.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
  });
}

window.addEventListener('click', (e) => {
  if (e.target === MODAL_MAIN_CONTAINER) hideModal();
});