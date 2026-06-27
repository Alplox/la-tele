// Fetch de canales y renderizado de botones
import { TEXTO_CARGANDO, URL_JSON_CANALES_PRINCIPAL, URL_JSON_CANALES_PRINCIPAL_FALLBACK, URL_M3U_CANALES_IPTV, URL_M3U_CANALES_IPTV_FALLBACK } from './config.js';
import { M3U_A_JSON } from './m3u-parser.js';
import { crearFragmentCanal, crearVideoJs, reproducirActivePlayer } from './canal.js';
import { limpiarTransmisionActiva } from './ui-utils.js';
import { CONTAINER_BOTONES_CANALES_PRINCIPAL, CONTAINER_BOTONES_CANALES_SECUNDARIOS, CONTAINER_TRANSMISION_ACTIVA, SPAN_NOMBRE_OVERLAY, TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA } from './main.js';

export let listaCanales = {};

function procesarCanales(data) {
  if (!Array.isArray(data?.channels)) {
    console.error('channels.json: propiedad "channels" ausente o no es array', data);
    return;
  }
  data.channels.forEach(canal => { if (canal.id) listaCanales[canal.id] = canal });
  const canalesCL = data.channels;
  const FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL = document.createDocumentFragment();
  canalesCL.forEach(canal => {
    const btn = crearBoton(canal.name, '0', async () => {
      limpiarTransmisionActiva();
      if (!btn.classList.contains('boton-activo')) {
        btn.classList.add('boton-activo');
        TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_CARGANDO;
        const fragment = await crearFragmentCanal(canal.id);
        CONTAINER_TRANSMISION_ACTIVA.append(fragment);
        reproducirActivePlayer();
        SPAN_NOMBRE_OVERLAY.innerHTML = `${canal.name} <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
        SPAN_NOMBRE_OVERLAY.title = 'Ir a la página oficial de esta transmisión';
        SPAN_NOMBRE_OVERLAY.href = canal.website || '';
        document.querySelector('.dropdown-señales')?.classList.remove('hide');
      }
    });
    FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL.append(btn);
  });
  CONTAINER_BOTONES_CANALES_PRINCIPAL.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL);
  const mensajeSinResultados = document.querySelector('#sin-resultados-canal-principal');
  if (canalesCL.length === 0) {
    mensajeSinResultados.textContent = 'NO HAY CANALES DISPONIBLES';
    mensajeSinResultados.classList.replace('d-none', 'd-block');
  }
  const SKELETON = document.querySelector('#skeleton-canales');
  if (SKELETON) SKELETON.classList.add('d-none');
}

function crearBoton(texto, tabindex, alHacerClick) {
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('tabindex', tabindex);
  btn.classList.add('boton', 'boton-canal');
  btn.innerHTML = texto;
  btn.addEventListener('click', alHacerClick);
  return btn;
}

function fetchConFallback(primaria, fallback, leer, procesar, skeletonId, errorId) {
  const skeleton = document.getElementById(skeletonId);
  skeleton?.classList.remove('d-none');
  const intentar = url => fetch(url).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return leer(r); }).then(d => procesar(d));
  intentar(primaria).catch(() => { console.warn('Falló primario, intentando fallback...'); return intentar(fallback); })
    .catch(error => {
      console.error('Error:', error);
      skeleton?.classList.add('d-none');
      const errEl = document.getElementById(errorId);
      if (errEl) { errEl.textContent = 'ERROR AL CARGAR CANALES'; errEl.classList.replace('d-none', 'd-block'); }
    });
}

export function fetchCanalesPrincipales() {
  fetchConFallback(URL_JSON_CANALES_PRINCIPAL, URL_JSON_CANALES_PRINCIPAL_FALLBACK, r => r.json(), procesarCanales, 'skeleton-canales', 'sin-resultados-canal-principal');
}

function procesarM3U(data) {
  const M3U_CONVERTIDO_JSON = M3U_A_JSON(data);
  const FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA = document.createDocumentFragment();
  for (const canal of Object.keys(M3U_CONVERTIDO_JSON)) {
    let { nombre, señales } = M3U_CONVERTIDO_JSON[canal];
    const btn = crearBoton(nombre, '-1', async () => {
      limpiarTransmisionActiva();
      if (!btn.classList.contains('boton-activo')) {
        btn.classList.add('boton-activo');
        TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_CARGANDO;
        const urlM3u8 = señales?.m3u8_url?.[0];
        if (!urlM3u8) {
          TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = `${nombre}: URL M3U8 NO DISPONIBLE`;
          return;
        }
        const FRAGMENT_CANAL = document.createDocumentFragment();
        FRAGMENT_CANAL.append(await crearVideoJs(urlM3u8));
        CONTAINER_TRANSMISION_ACTIVA.append(FRAGMENT_CANAL);
        reproducirActivePlayer();
        SPAN_NOMBRE_OVERLAY.innerHTML = `${nombre} | IPTV-ORG`;
        SPAN_NOMBRE_OVERLAY.title = 'Ir a lista m3u iptv-org';
        SPAN_NOMBRE_OVERLAY.href = URL_M3U_CANALES_IPTV;
        document.querySelector('.dropdown-señales')?.classList.add('hide');
      }
    });
    FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA.append(btn);
  }
  CONTAINER_BOTONES_CANALES_SECUNDARIOS.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA);
  const mensajeSinResultados = document.querySelector('#sin-resultados-canal-secundario');
  if (Object.keys(M3U_CONVERTIDO_JSON).length === 0) {
    mensajeSinResultados.textContent = 'NO HAY CANALES DISPONIBLES';
    mensajeSinResultados.classList.replace('d-none', 'd-block');
  }
  const SKELETON = document.querySelector('#skeleton-canales-secundario');
  if (SKELETON) SKELETON.classList.add('d-none');
}

export function fetchCanalesSecundarios() {
  fetchConFallback(URL_M3U_CANALES_IPTV, URL_M3U_CANALES_IPTV_FALLBACK, r => r.text(), procesarM3U, 'skeleton-canales-secundario', 'sin-resultados-canal-secundario');
}