// Fetch de canales y renderizado de botones
import { TEXTO_CARGANDO, URL_JSON_CANALES_PRINCIPAL, URL_M3U_CANALES_IPTV } from './config.js';
import { M3U_A_JSON } from './m3u-parser.js';
import { crearFragmentCanal, crearVideoJs } from './canal.js';
import { limpiarTransmisionActiva } from './ui-utils.js';
import { CONTAINER_BOTONES_CANALES_PRINCIPAL, CONTAINER_BOTONES_CANALES_SECUNDARIOS, CONTAINER_TRANSMISION_ACTIVA, SPAN_NOMBRE_OVERLAY, TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA } from './main.js';

export let listaCanales;

export function fetchCanalesPrincipales() {
  fetch(URL_JSON_CANALES_PRINCIPAL)
    .then(response => response.json())
    .then(data => {
      listaCanales = data;
      const FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL = document.createDocumentFragment();
      for (const canal in data) {
        let { nombre, sitio_oficial, país } = data[canal];
        if (país === "cl") {
          const BOTON_PARA_CANAL = document.createElement('button');
          BOTON_PARA_CANAL.setAttribute('type', 'button');
          BOTON_PARA_CANAL.setAttribute('tabindex', '0');
          BOTON_PARA_CANAL.classList.add('boton', 'boton-canal');
          BOTON_PARA_CANAL.innerHTML = nombre;
          BOTON_PARA_CANAL.addEventListener('click', () => {
            if (BOTON_PARA_CANAL.classList.contains('boton-activo')) {
              limpiarTransmisionActiva();
            } else {
              limpiarTransmisionActiva();
              BOTON_PARA_CANAL.classList.add('boton-activo');
              TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = TEXTO_CARGANDO;
              CONTAINER_TRANSMISION_ACTIVA.append(crearFragmentCanal(canal));
              SPAN_NOMBRE_OVERLAY.innerHTML = `${nombre} <i class="ai-link-out"></i>`;
              SPAN_NOMBRE_OVERLAY.title = 'Ir a la página oficial de esta transmisión';
              SPAN_NOMBRE_OVERLAY.href = sitio_oficial;
              document.querySelector('.dropdown-señales').classList.remove('hide');
            }
          });
          FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL.append(BOTON_PARA_CANAL);
        }
      }
      CONTAINER_BOTONES_CANALES_PRINCIPAL.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL);
    })
    .catch(error => console.error('Error fetching data:', error));
}

export function fetchCanalesSecundarios() {
  fetch(URL_M3U_CANALES_IPTV)
    .then(response => response.text())
    .then(data => {
      const M3U_CONVERTIDO_JSON = M3U_A_JSON(data);
      const FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA = document.createDocumentFragment();
      for (const canal in M3U_CONVERTIDO_JSON) {
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
            const FRAGMENT_CANAL = document.createDocumentFragment();
            FRAGMENT_CANAL.append(crearVideoJs(señales.m3u8_url[0]));
            CONTAINER_TRANSMISION_ACTIVA.append(FRAGMENT_CANAL);
            SPAN_NOMBRE_OVERLAY.innerHTML = `${nombre} | IPTV-ORG`;
            SPAN_NOMBRE_OVERLAY.title = 'Ir a lista m3u iptv-org';
            SPAN_NOMBRE_OVERLAY.href = URL_M3U_CANALES_IPTV;
            document.querySelector('.dropdown-señales').classList.add('hide');
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