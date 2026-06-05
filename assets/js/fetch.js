// Fetch de canales y renderizado de botones
import { TEXTO_CARGANDO, URL_JSON_CANALES_PRINCIPAL, URL_M3U_CANALES_IPTV } from './config.js';
import { M3U_A_JSON } from './m3u-parser.js';
import { crearFragmentCanal, crearVideoJs, reproducirActivePlayer } from './canal.js';
import { limpiarTransmisionActiva } from './ui-utils.js';
import { CONTAINER_BOTONES_CANALES_PRINCIPAL, CONTAINER_BOTONES_CANALES_SECUNDARIOS, CONTAINER_TRANSMISION_ACTIVA, SPAN_NOMBRE_OVERLAY, TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA } from './main.js';

export let listaCanales = {};

export function fetchCanalesPrincipales() {
  fetch(URL_JSON_CANALES_PRINCIPAL)
    .then(response => response.json())
    .then(data => {
      if (!Array.isArray(data?.channels)) {
        console.error('cl.json: propiedad "channels" ausente o no es array', data);
        return;
      }
      data.channels.forEach(canal => { if (canal.id) listaCanales[canal.id] = canal });
      const canalesCL = data.channels;
      const FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL = document.createDocumentFragment();
      canalesCL.forEach(canal => {
        const BOTON_PARA_CANAL = document.createElement('button');
        BOTON_PARA_CANAL.setAttribute('type', 'button');
        BOTON_PARA_CANAL.setAttribute('tabindex', '0');
        BOTON_PARA_CANAL.classList.add('boton', 'boton-canal');
        BOTON_PARA_CANAL.innerHTML = canal.name;
        BOTON_PARA_CANAL.addEventListener('click', () => {
          if (BOTON_PARA_CANAL.classList.contains('boton-activo')) {
            limpiarTransmisionActiva();
          } else {
            limpiarTransmisionActiva();
            BOTON_PARA_CANAL.classList.add('boton-activo');
            TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_CARGANDO;
            CONTAINER_TRANSMISION_ACTIVA.append(crearFragmentCanal(canal.id));
            reproducirActivePlayer();
            SPAN_NOMBRE_OVERLAY.innerHTML = `${canal.name} <i class="ai-link-out"></i>`;
            SPAN_NOMBRE_OVERLAY.title = 'Ir a la página oficial de esta transmisión';
            SPAN_NOMBRE_OVERLAY.href = canal.website || '';
            const dropdownSeñales = document.querySelector('.dropdown-señales');
            if (dropdownSeñales) dropdownSeñales.classList.remove('hide');
          }
        });
        FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL.append(BOTON_PARA_CANAL);
      });
      CONTAINER_BOTONES_CANALES_PRINCIPAL.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL);
      const mensajeSinResultados = document.querySelector('#sin-resultados-canal-principal');
      if (canalesCL.length === 0) {
        mensajeSinResultados.textContent = 'NO HAY CANALES DISPONIBLES';
        mensajeSinResultados.classList.replace('d-none', 'd-block');
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

export function fetchCanalesSecundarios() {
  fetch(URL_M3U_CANALES_IPTV)
    .then(response => response.text())
    .then(data => {
      const M3U_CONVERTIDO_JSON = M3U_A_JSON(data);
      const FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA = document.createDocumentFragment();
      for (const canal of Object.keys(M3U_CONVERTIDO_JSON)) {
        let { nombre, señales } = M3U_CONVERTIDO_JSON[canal];
        const BOTON_PARA_CANAL = document.createElement('button');
        BOTON_PARA_CANAL.setAttribute('type', 'button');
        BOTON_PARA_CANAL.setAttribute('tabindex', '-1');
        BOTON_PARA_CANAL.classList.add('boton', 'boton-canal');
        BOTON_PARA_CANAL.innerHTML = nombre;
        BOTON_PARA_CANAL.addEventListener('click', () => {
          if (BOTON_PARA_CANAL.classList.contains('boton-activo')) {
            limpiarTransmisionActiva();
          } else {
            limpiarTransmisionActiva();
            BOTON_PARA_CANAL.classList.add('boton-activo');
            TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_CARGANDO;
            const urlM3u8 = señales?.m3u8_url?.[0];
            if (!urlM3u8) {
              TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = `${nombre}: URL M3U8 NO DISPONIBLE`;
              return;
            }
            const FRAGMENT_CANAL = document.createDocumentFragment();
            FRAGMENT_CANAL.append(crearVideoJs(urlM3u8));
            CONTAINER_TRANSMISION_ACTIVA.append(FRAGMENT_CANAL);
            reproducirActivePlayer();
            SPAN_NOMBRE_OVERLAY.innerHTML = `${nombre} | IPTV-ORG`;
            SPAN_NOMBRE_OVERLAY.title = 'Ir a lista m3u iptv-org';
            SPAN_NOMBRE_OVERLAY.href = URL_M3U_CANALES_IPTV;
            const dropdownSeñales2 = document.querySelector('.dropdown-señales');
            if (dropdownSeñales2) dropdownSeñales2.classList.add('hide');
          }
        });
        FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA.append(BOTON_PARA_CANAL);
      }
      CONTAINER_BOTONES_CANALES_SECUNDARIOS.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA);
    })
    .catch(error => {
      console.error('Error al cargar el archivo m3u:', error);
    });
}