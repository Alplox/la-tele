import { CONTAINER_OVERLAY, SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY } from "./main.js";

// Overlay y señal preferida
export const SHOW_OVERLAY = 'show';
export const HIDE_OVERLAY = 'hide';

export const toggleOverlay = (show) => {
  localStorage.setItem('estado_overlay', show ? SHOW_OVERLAY : HIDE_OVERLAY);
  CONTAINER_OVERLAY.classList.toggle('d-none', !show);
  SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = show ? '<i class="ai-eye-open"></i>' : '<i class="ai-eye-slashed"></i>';
}

export function guardarSeñalPreferida(canalId, señalUtilizar = '', indexSeñalUtilizar = 0) {
  let lsPreferenciasSeñalCanales = JSON.parse(localStorage.getItem('preferencia_señal_canales_la_tele')) || {};
  lsPreferenciasSeñalCanales[canalId] = { [señalUtilizar]: indexSeñalUtilizar };
  localStorage.setItem('preferencia_señal_canales_la_tele', JSON.stringify(lsPreferenciasSeñalCanales));
}