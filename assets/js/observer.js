import { BOTON_ALTERNAR_VISIBILIDAD_OVERLAY, CONTAINER_OVERLAY, CONTAINER_TRANSMISION_ACTIVA, SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY } from "./main.js";
import { toggleOverlay, SHOW_OVERLAY, HIDE_OVERLAY } from "./overlay.js";
import { safeGetItem } from "./ui-utils.js";

// Observador de transmisión activa
export function setupObserver() {
  const OBSERVER = new MutationObserver(() => {
    let divs = CONTAINER_TRANSMISION_ACTIVA.children;
    if (divs.length < 1) {
      CONTAINER_OVERLAY.classList.add('d-none');
      SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
      BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = true;
    } else {
      BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = false;
      toggleOverlay(safeGetItem('estado_overlay') !== HIDE_OVERLAY);
    }
  });
  const config = { childList: true };
  OBSERVER.observe(CONTAINER_TRANSMISION_ACTIVA, config);
}
