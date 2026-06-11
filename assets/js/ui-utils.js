import { CONTAINER_TRANSMISION_ACTIVA, SPAN_NOMBRE_OVERLAY, TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA, UL_OVERLAY_SEÑALES } from "./main.js";
import { TEXTO_APAGADO } from "./config.js";
import { limpiarActivePlayer } from "./canal.js";

export function limpiarTransmisionActiva() {
  limpiarActivePlayer();
  CONTAINER_TRANSMISION_ACTIVA.innerHTML = '';
  TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_APAGADO;
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

export function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

function storageAvailable() {
  try {
    const k = '__storage_test__';
    localStorage.setItem(k, k);
    localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

const storageOk = storageAvailable();

export function safeGetItem(key) {
  if (!storageOk) return null;
  try { return localStorage.getItem(key); } catch { return null; }
}

export function safeSetItem(key, value) {
  if (!storageOk) return;
  try { localStorage.setItem(key, value); } catch { /* quota exceeded or blocked */ }
}

export function safeRemoveItem(key) {
  if (!storageOk) return;
  try { localStorage.removeItem(key); } catch { /* ignored */ }
}

export function safeParseItem(key, fallback = {}) {
  try { return JSON.parse(safeGetItem(key) || '{}') || fallback; }
  catch { return fallback; }
}
