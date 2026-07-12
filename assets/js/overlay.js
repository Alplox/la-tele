import { CONTAINER_OVERLAY, SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY } from "./main.js";
import { safeGetItem, safeSetItem, safeParseItem } from "./ui-utils.js";

// Overlay y señal preferida
export const SHOW_OVERLAY = 'show';
export const HIDE_OVERLAY = 'hide';

export const toggleOverlay = (show) => {
  safeSetItem('estado_overlay', show ? SHOW_OVERLAY : HIDE_OVERLAY);
  CONTAINER_OVERLAY.classList.toggle('d-none', !show);
  SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = show ? '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
}

export function guardarSeñalPreferida(canalId, señalKey) {
  const lsPref = safeParseItem('preferencia_señal_canales_la_tele');
  lsPref[canalId] = { [señalKey]: 0 };
  safeSetItem('preferencia_señal_canales_la_tele', JSON.stringify(lsPref));
}