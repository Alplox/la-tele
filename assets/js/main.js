// Main v0.16 por Alplox
import { SHOW_OVERLAY, toggleOverlay } from './overlay.js';
import { fetchCanalesPrincipales, fetchCanalesSecundarios } from './fetch.js';
import { limpiarTransmisionActiva, cambiarTabindex, safeGetItem } from './ui-utils.js';
import { setupObserver } from './observer.js';
import { showModal } from './modal.js';
import { filtro } from './filtro.js';

// Elementos del DOM
export const CONTAINER_OVERLAY = document.querySelector('.container-overlay');
export const UL_OVERLAY_SEÑALES = document.querySelector('#lista-señales');
export const SPAN_NOMBRE_OVERLAY = document.querySelector('#nombre-overlay');
export const BOTON_ALTERNAR_VISIBILIDAD_OVERLAY = document.querySelector('#boton-alternar-visibilidad-overlay');
export const SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY = document.querySelector('#span-boton-alternar-visibilidad-overlay');
export const CONTAINER_TRANSMISION_ACTIVA = document.querySelector('#container-transmision');
export const TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA = document.querySelector('#texto-detras-container-transmision');
export const CONTAINER_BOTONES_CANALES_PRINCIPAL = document.querySelector('#lista-botones');
export const CONTAINER_BOTONES_CANALES_SECUNDARIOS = document.querySelector('#lista-botones-m3u8');
export const CONTAINER_VIDEO = document.querySelector('.container-video');
const BOTON_QUITAR_SEÑAL = document.querySelector('#boton-overlay-quitar-señal');
const BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES = document.querySelector('#boton-alternar-lista-canales');
const CONTAINER_FLIP = document.querySelector('#flip-container');
export const INPUT_FILTRADO_CANALES = document.querySelector('#filtro');
const DURACION_FLIP_MS = 610;
let secundarioCargado = false;
const SVG_ARROW_FWD = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
const SVG_ARROW_BACK = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
export const SVG_EYE_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
export const SVG_EYE_CLOSED = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

const _showModalIdle = typeof requestIdleCallback === 'function'
  ? () => requestIdleCallback(showModal, { timeout: 1000 })
  : () => setTimeout(showModal, 0);
_showModalIdle();

BOTON_QUITAR_SEÑAL.addEventListener('click', limpiarTransmisionActiva);

BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.addEventListener('click', () => {
    // toggle solo si existe video cargado activo
    if (CONTAINER_TRANSMISION_ACTIVA.children.length > 0) {
        toggleOverlay(safeGetItem('estado_overlay') !== SHOW_OVERLAY);
    }
});

// Alternar listas de canales
BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.addEventListener('click', () => {
    // Limpiar el input al alternar listado, pero restaurar botones tras el giro
    INPUT_FILTRADO_CANALES.value = "";
    if (CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display === 'none') {
        cambiarTabindex(CONTAINER_BOTONES_CANALES_PRINCIPAL, "0");
        cambiarTabindex(CONTAINER_BOTONES_CANALES_SECUNDARIOS, "-1");
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.innerHTML = 'Alternar listado ' + SVG_ARROW_FWD;
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = true;
        CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display = 'grid';
        setTimeout(() => {
            BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = false;
            filtro();
        }, DURACION_FLIP_MS);
    } else {
        if (!secundarioCargado) {
            secundarioCargado = true;
            fetchCanalesSecundarios();
        }
        cambiarTabindex(CONTAINER_BOTONES_CANALES_PRINCIPAL, "-1");
        cambiarTabindex(CONTAINER_BOTONES_CANALES_SECUNDARIOS, "0");
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.innerHTML = 'Alternar listado ' + SVG_ARROW_BACK;
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = true;
        setTimeout(() => {
            BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = false;
            CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display = 'none';
            filtro();
        }, DURACION_FLIP_MS);
    }
    CONTAINER_FLIP.classList.toggle('flipped');
});

let _timer;
INPUT_FILTRADO_CANALES.addEventListener('input', () => { clearTimeout(_timer); _timer = setTimeout(filtro, 150); });

fetchCanalesPrincipales();

setupObserver();

// Close .dropdown-señales when clicking outside — scoped to .container-video
if (CONTAINER_VIDEO) {
    CONTAINER_VIDEO.addEventListener('click', (e) => {
        document.querySelectorAll('.dropdown-señales[open]').forEach(dropdown => {
            const summary = dropdown.querySelector('summary');
            const list = dropdown.querySelector('ul');
            if (summary && list && !summary.contains(e.target) && !list.contains(e.target)) {
                dropdown.removeAttribute('open');
            }
        });
    });
}
