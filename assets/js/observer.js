import { BOTON_ALTERNAR_VISIBILIDAD_OVERLAY, CONTAINER_OVERLAY, CONTAINER_TRANSMISION_ACTIVA, SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY } from "./main.js";
import { toggleOverlay, SHOW_OVERLAY } from "./overlay.js";
import { safeGetItem } from "./ui-utils.js";

// Observador de transmisión activa
export function setupObserver() {
  const OBSERVER = new MutationObserver(() => {
    let divs = CONTAINER_TRANSMISION_ACTIVA.children;
    if (divs.length < 1) {
      CONTAINER_OVERLAY.classList.add('d-none');
      SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = '<i class="ai-eye-closed"></i>';
      BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = true;
    } else {
      BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = false;
      toggleOverlay(safeGetItem('estado_overlay') === SHOW_OVERLAY);
    }
  });
  const config = { childList: true };
  OBSERVER.observe(CONTAINER_TRANSMISION_ACTIVA, config);
}
