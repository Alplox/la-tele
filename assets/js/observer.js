import { TEXTO_APAGADO } from "./config.js";
import { BOTON_ALTERNAR_VISIBILIDAD_OVERLAY, CONTAINER_OVERLAY, CONTAINER_TRANSMISION_ACTIVA, SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY, TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA } from "./main.js";
import { toggleOverlay, SHOW_OVERLAY } from "./overlay.js";

// Observador de transmisión activa
export function setupObserver() {
  const OBSERVER = new MutationObserver(() => {
    let divs = CONTAINER_TRANSMISION_ACTIVA.children;
    if (divs.length < 1) {
      TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_APAGADO;
      CONTAINER_OVERLAY.classList.add('d-none');
      SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = '<i class="ai-eye-closed"></i>';
      BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = true;
    } else if (divs.length === 1) {
      BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = false;
      toggleOverlay(localStorage.getItem('estado_overlay') === SHOW_OVERLAY);
    }
  });
  const config = { childList: true };
  OBSERVER.observe(CONTAINER_TRANSMISION_ACTIVA, config);
}
