import { CONTAINER_TRANSMISION_ACTIVA, SPAN_NOMBRE_OVERLAY, UL_OVERLAY_SEÑALES } from "./main.js";
import { limpiarActivePlayer } from "./canal.js";

export function limpiarTransmisionActiva() {
  limpiarActivePlayer();
  CONTAINER_TRANSMISION_ACTIVA.innerHTML = '';
  SPAN_NOMBRE_OVERLAY.textContent = '';
  SPAN_NOMBRE_OVERLAY.removeAttribute('href');
  UL_OVERLAY_SEÑALES.innerHTML = '';
  document.querySelectorAll('button.boton-activo').forEach(button => {
    button.classList.remove('boton-activo');
  });
}

export function cambiarTabindex(container, valor) {
  container.setAttribute("tabindex", valor);
  container.querySelectorAll('button').forEach((element) => {
    element.setAttribute("tabindex", valor);
  });
}

export function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
