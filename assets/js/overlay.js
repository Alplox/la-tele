import { CONTAINER_OVERLAY, SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY } from "./main.js";
import { safeGetItem, safeSetItem, safeParseItem } from "./ui-utils.js";

// Overlay y señal preferida
export const SHOW_OVERLAY = 'show';
export const HIDE_OVERLAY = 'hide';

export const toggleOverlay = (show) => {
  safeSetItem('estado_overlay', show ? SHOW_OVERLAY : HIDE_OVERLAY);
  CONTAINER_OVERLAY.classList.toggle('d-none', !show);
  SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = show ? '<i class="ai-eye-open"></i>' : '<i class="ai-eye-slashed"></i>';
}

export function guardarSeñalPreferida(canalId, señalKey) {
  const lsPref = safeParseItem('preferencia_señal_canales_la_tele');
  lsPref[canalId] = { [señalKey]: 0 };
  safeSetItem('preferencia_señal_canales_la_tele', JSON.stringify(lsPref));
}