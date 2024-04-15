// Main v0.10 por Alplox 
//MARK: Imports
import { M3U_A_JSON } from "./F_M3U_A_JSON.js";

const CONTAINER_OVERLAY = document.querySelector('.container-overlay'), 
    SPAN_NOMBRE_OVERLAY = document.querySelector('#nombre-overlay'), 
    BOTON_ALTERNAR_VISIBILIDAD_OVERLAY = document.querySelector('#boton-alternar-visibilidad-overlay'), 
    SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY = document.querySelector('#span-boton-alternar-visibilidad-overlay'), 
    CONTAINER_TRANSMISION_ACTIVA = document.querySelector('#container-transmision'), 
    TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA = document.querySelector('#texto-detras-container-transmision'),
    CONTAINER_BOTONES_CANALES_PRINCIPAL = document.querySelector('#lista-botones'), 
    CONTAINER_BOTONES_CANALES_SECUNDARIOS = document.querySelector('#lista-botones-m3u8');

// MARK: traducción videojs
videojs.addLanguage("es", {
    "Play": "Reproducir",
    "Play Video": "Reproducir Vídeo",
    "Pause": "Pausa",
    "Current Time": "Tiempo reproducido",
    "Duration": "Duración total",
    "Remaining Time": "Tiempo restante",
    "Stream Type": "Tipo de secuencia",
    "LIVE": "DIRECTO",
    "Loaded": "Cargado",
    "Progress": "Progreso",
    "Fullscreen": "Pantalla completa",
    "Non-Fullscreen": "Pantalla no completa",
    "Mute": "Silenciar",
    "Unmute": "No silenciado",
    "Playback Rate": "Velocidad de reproducción",
    "Subtitles": "Subtítulos",
    "subtitles off": "Subtítulos desactivados",
    "Captions": "Subtítulos especiales",
    "captions off": "Subtítulos especiales desactivados",
    "Chapters": "Capítulos",
    "You aborted the media playback": "Ha interrumpido la reproducción del vídeo.",
    "A network error caused the media download to fail part-way.": "Un error de red ha interrumpido la descarga del vídeo.",
    "The media could not be loaded, either because the server or network failed or because the format is not supported.": "No se ha podido cargar el vídeo debido a un fallo de red o porque la transmisión dejo de estar disponible.",
    "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "La reproducción de vídeo se ha interrumpido por un problema de corrupción de datos o porque el vídeo precisa funciones que su navegador no ofrece.",
    "No compatible source was found for this media.": "No se ha encontrado ninguna fuente compatible con este vídeo.",
    "Audio Player": "Reproductor de audio",
    "Video Player": "Reproductor de video",
    "Replay": "Volver a reproducir",
    "Seek to live, currently behind live": "Buscar en vivo, actualmente demorado con respecto a la transmisión en vivo",
    "Seek to live, currently playing live": "Buscar en vivo, actualmente reproduciendo en vivo",
    "Progress Bar": "Barra de progreso",
    "progress bar timing: currentTime={1} duration={2}": "{1} de {2}",
    "Descriptions": "Descripciones",
    "descriptions off": "descripciones desactivadas",
    "Audio Track": "Pista de audio",
    "Volume Level": "Nivel de volumen",
    "The media is encrypted and we do not have the keys to decrypt it.": "El material audiovisual está cifrado y no tenemos las claves para descifrarlo.",
    "Close": "Cerrar",
    "Modal Window": "Ventana modal",
    "This is a modal window": "Esta es una ventana modal",
    "This modal can be closed by pressing the Escape key or activating the close button.": "Esta ventana modal puede cerrarse presionando la tecla Escape o activando el botón de cierre.",
    ", opens captions settings dialog": ", abre el diálogo de configuración de leyendas",
    ", opens subtitles settings dialog": ", abre el diálogo de configuración de subtítulos",
    ", selected": ", seleccionado",
    "Close Modal Dialog": "Cierra cuadro de diálogo modal",
    ", opens descriptions settings dialog": ", abre el diálogo de configuración de las descripciones",
    "captions settings": "configuración de leyendas",
    "subtitles settings": "configuración de subtítulos",
    "descriptions settings": "configuración de descripciones",
    "Text": "Texto",
    "White": "Blanco",
    "Black": "Negro",
    "Red": "Rojo",
    "Green": "Verde",
    "Blue": "Azul",
    "Yellow": "Amarillo",
    "Magenta": "Magenta",
    "Cyan": "Cian",
    "Background": "Fondo",
    "Window": "Ventana",
    "Transparent": "Transparente",
    "Semi-Transparent": "Semitransparente",
    "Opaque": "Opaca",
    "Font Size": "Tamaño de fuente",
    "Text Edge Style": "Estilo de borde del texto",
    "None": "Ninguno",
    "Raised": "En relieve",
    "Depressed": "Hundido",
    "Uniform": "Uniforme",
    "Dropshadow": "Sombra paralela",
    "Font Family": "Familia de fuente",
    "Proportional Sans-Serif": "Sans-Serif proporcional",
    "Monospace Sans-Serif": "Sans-Serif monoespacio",
    "Proportional Serif": "Serif proporcional",
    "Monospace Serif": "Serif monoespacio",
    "Casual": "Informal",
    "Script": "Cursiva",
    "Small Caps": "Minúsculas",
    "Reset": "Restablecer",
    "restore all settings to the default values": "restablece todas las configuraciones a los valores predeterminados",
    "Done": "Listo",
    "Caption Settings Dialog": "Diálogo de configuración de leyendas",
    "Beginning of dialog window. Escape will cancel and close the window.": "Comienzo de la ventana de diálogo. La tecla Escape cancelará la operación y cerrará la ventana.",
    "End of dialog window.": "Final de la ventana de diálogo.",
    "{1} is loading.": "{1} se está cargando."
});

// MARK: div canales "m3u8"
const DIV_POR_M3U8 = document.createElement('div');
    DIV_POR_M3U8.className = 'm3u8-stream';
const VIDEO_POR_M3U8 = document.createElement('video');
    VIDEO_POR_M3U8.className = 'm3u8-player video-js vjs-16-9 vjs-fluid';
    VIDEO_POR_M3U8.controls = true;
DIV_POR_M3U8.appendChild(VIDEO_POR_M3U8);

// MARK: Funciones
const crearIframe = (source) => {
    const FRAGMENT_IFRAME = document.createDocumentFragment();
    const IFRAME_POR_SOURCE = document.createElement('iframe');
        IFRAME_POR_SOURCE.src = source;
        IFRAME_POR_SOURCE.allowFullscreen = true;
        IFRAME_POR_SOURCE.referrerPolicy = 'no-referrer';
        FRAGMENT_IFRAME.append(IFRAME_POR_SOURCE);
    return FRAGMENT_IFRAME;
}

const crearBarraNombre = (nombre, fuente) =>{
    const FRAGMENT_BARRA = document.createDocumentFragment();
    let linkFuente = document.createElement('a');
        linkFuente.innerHTML = `${nombre} <i class="ai-link-out"></i>`;
        linkFuente.title = 'Ir a la página oficial de esta transmisión';
        linkFuente.href = fuente;
        linkFuente.rel = 'noopener nofollow noreferrer';
        FRAGMENT_BARRA.append(linkFuente);
    return FRAGMENT_BARRA;
}; 

const crearBarraNombreM3u8 = (nombre) => {
    const FRAGMENT_BARRA_M3U8 = document.createDocumentFragment();
    let spanFuente = document.createElement('span');
        spanFuente.textContent = nombre;
        spanFuente.title = 'Transmisión NO OFICIAL';
        FRAGMENT_BARRA_M3U8.append(spanFuente);
    return FRAGMENT_BARRA_M3U8;
}; 

const limpiarTransmisionActiva = () => {
    CONTAINER_TRANSMISION_ACTIVA.innerHTML = '';
    SPAN_NOMBRE_OVERLAY.textContent = '';
    document.querySelectorAll('button.boton-canal-activo').forEach(button => {
        button.classList.remove('boton-canal-activo');
    });
}

const cambiarTabindex = (container, valor) => {
    container.setAttribute("tabindex", valor);
    container.querySelectorAll('button').forEach((element) => {
        element.setAttribute("tabindex", valor);
    });
}

// MARK: Overlay
const SHOW_OVERLAY = 'show';
const HIDE_OVERLAY = 'hide';

const toggleOverlay = (show) => {
    localStorage.setItem('estado_overlay', show ? SHOW_OVERLAY : HIDE_OVERLAY);
    CONTAINER_OVERLAY.classList.toggle('d-none', !show);
    SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = show ? '<i class="ai-eye-open"></i>' : '<i class="ai-eye-slashed"></i>';
}

let lsOverlay = localStorage.getItem('estado_overlay');
if (lsOverlay === null) {
    localStorage.setItem('estado_overlay', SHOW_OVERLAY);
}

BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.addEventListener('click', () => {
    toggleOverlay(localStorage.getItem('estado_overlay') !== SHOW_OVERLAY);
});

// MARK: Fetch primario
fetch('https://raw.githubusercontent.com/Alplox/json-teles/main/canales.json')
  .then(response => response.json())
  .then(data => {
    const FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL = document.createDocumentFragment();
    for (const canal in data) {
        let {iframe_url, m3u8_url, yt_id, nombre, fuente, pais} = data[canal];
        if (pais === "cl") {
            const BOTON_PARA_CANAL = document.createElement('button');
            BOTON_PARA_CANAL.setAttribute('type', 'button');
            BOTON_PARA_CANAL.setAttribute('tabindex', '0');
            BOTON_PARA_CANAL.classList.add('boton', 'boton-canal', 'focus-outline-blue');
            BOTON_PARA_CANAL.innerHTML = nombre;
            BOTON_PARA_CANAL.addEventListener('click', () => {
                if (BOTON_PARA_CANAL.classList.contains('boton-canal-activo')) {
                    limpiarTransmisionActiva()
                } else  {
                    limpiarTransmisionActiva()
                    BOTON_PARA_CANAL.classList.add('boton-canal-activo');
                    TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = 'Cargand<svg id="gear" xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>';
                    if (typeof iframe_url !== 'undefined'){     
                        CONTAINER_TRANSMISION_ACTIVA.append(crearIframe(iframe_url));
                    } else if (typeof m3u8_url !== 'undefined'){
                        CONTAINER_TRANSMISION_ACTIVA.append(DIV_POR_M3U8)
                        let m3u8Player = videojs(document.querySelector('.m3u8-player'));
                        m3u8Player.src( {
                            src: m3u8_url,
                            controls: true,
                            preload: 'none'
                        });
                         // https://goo.gl/LdLk22
                        let playPromise = m3u8Player.play();
                        if (playPromise !== undefined) {
                            playPromise.then(_ => {
                                m3u8Player.play()
                            })
                            .catch(error => {
                                m3u8Player.pause();
                                console.log(error)
                            });
                        }
                    } else if (typeof yt_id !== 'undefined'){
                        CONTAINER_TRANSMISION_ACTIVA.append(crearIframe(`https://www.youtube-nocookie.com/embed/live_stream?channel=${yt_id}&autoplay=1&mute=0&modestbranding=1&showinfo=0`));
                        SPAN_NOMBRE_OVERLAY.append(crearBarraNombre(nombre, `https://www.youtube.com/channel/${yt_id}`));
                    } 
                    if (typeof fuente !== 'undefined') {SPAN_NOMBRE_OVERLAY.append(crearBarraNombre(nombre, fuente));}
                }
            });
            FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL.append(BOTON_PARA_CANAL);
        }
    }
    CONTAINER_BOTONES_CANALES_PRINCIPAL.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL);
  })
  .catch(error => console.error('Error fetching data:', error));

// MARK: Fetch secundario (lista m3u)
fetch('https://raw.githubusercontent.com/iptv-org/iptv/master/streams/cl.m3u')
  .then(response => response.text())
  .then(data => {
    let parseM3u = M3U_A_JSON(data);
    const FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA = document.createDocumentFragment();
    for (let i = 0; i < parseM3u.length; i++) {
        let canal = parseM3u[i];
        let { title, m3u8_url} = canal;
        const BOTON_PARA_CANAL = document.createElement('button');
            BOTON_PARA_CANAL.setAttribute('type', 'button');
            BOTON_PARA_CANAL.setAttribute('tabindex', '-1');
            BOTON_PARA_CANAL.classList.add('boton', 'boton-canal', 'focus-outline-blue');
            BOTON_PARA_CANAL.textContent = title;
            BOTON_PARA_CANAL.addEventListener('click', () => {
            if (BOTON_PARA_CANAL.classList.contains('boton-canal-activo')) {
                limpiarTransmisionActiva()
            } else  {
                limpiarTransmisionActiva()
                BOTON_PARA_CANAL.classList.add('boton-canal-activo');
                TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = 'Cargand<svg id="gear" xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>';
                CONTAINER_TRANSMISION_ACTIVA.append(DIV_POR_M3U8)
                let m3u8Player = videojs(document.querySelector('.m3u8-player'));
                    m3u8Player.src( {
                        src: m3u8_url,
                        controls: true,
                        preload: 'none'
                    });
                let playPromise = m3u8Player.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            m3u8Player.play()
                        })
                        .catch(error => {
                            m3u8Player.pause();
                            console.log(error)
                        });
                    }
                SPAN_NOMBRE_OVERLAY.append(crearBarraNombreM3u8(`${title} | M3U8`));
            }
        }); 
        FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA.append(BOTON_PARA_CANAL);
        };
        CONTAINER_BOTONES_CANALES_SECUNDARIOS.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_SECUNDARIA);
  })
  .catch(error => {
    console.error('Error al cargar el archivo m3u:', error);
  });

// MARK: Botón quitar
const BOTON_QUITAR_SEÑAL = document.querySelector('#boton-overlay-quitar-señal');
BOTON_QUITAR_SEÑAL.addEventListener('click', () => {
    limpiarTransmisionActiva()
});

// MARK: alternar listas
const BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES = document.querySelector('#boton-alternar-lista-canales');
const CONTAINER_FLIP = document.querySelector('#flip-container');

BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.addEventListener('click', () => {
    if (CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display === 'none'){ // regresar canales principales
        cambiarTabindex(CONTAINER_BOTONES_CANALES_PRINCIPAL, "0")
        cambiarTabindex(CONTAINER_BOTONES_CANALES_SECUNDARIOS, "-1")
       
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.querySelector('i').classList.replace('ai-arrow-back-thick', 'ai-arrow-forward-thick')
        setTimeout (() => {
            BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = false;
        }, 610);
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = true;
        CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display = 'grid';
    } else { // si se ocultan canales principales

        cambiarTabindex(CONTAINER_BOTONES_CANALES_PRINCIPAL, "-1")
        cambiarTabindex(CONTAINER_BOTONES_CANALES_SECUNDARIOS, "0")
       
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.querySelector('i').classList.replace('ai-arrow-forward-thick', 'ai-arrow-back-thick')
        BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = true;
       
        setTimeout(() => {
            BOTON_ALTERNAR_CONTAINER_BOTONES_CANALES.disabled = false;
            CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display = 'none';
        }, 610); // animación flipper dura 6 segundos, deja en un poco mas para evitar spam de boton durante animación
    }
    CONTAINER_FLIP.classList.toggle('hover');
});

// MARK: filtro canales
const INPUT_FILTRADO_CANALES = document.querySelector('#filtro');
const filtro = () => {
    let btnsFiltrar = document.querySelectorAll('div.lista-botones > button'); // toma botones del front y back del flipper
    for (let i = 0; i < btnsFiltrar.length; i++) {
        if (btnsFiltrar[i].textContent
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g,"")
            .toLowerCase()
            .includes(INPUT_FILTRADO_CANALES.value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()))
        {   btnsFiltrar[i].classList.remove('d-none');
        } else {
            btnsFiltrar[i].classList.add('d-none');
        }
    }
};
INPUT_FILTRADO_CANALES.addEventListener('input', filtro);

// MARK: Modal
const MODAL_MAIN_CONTAINER = document.querySelector('#modal-legal');
const BOTON_MODAL_ENTENDIDO = document.querySelector('#boton-modal-entendido');
let lsModal = localStorage.getItem('modal_status');

const showModal = () => {
    MODAL_MAIN_CONTAINER.setAttribute("tabindex", "0");
    MODAL_MAIN_CONTAINER.style.display = 'flex';
    localStorage.setItem('modal_status', 'show');
};

const hideModal = () => {
    MODAL_MAIN_CONTAINER.setAttribute("tabindex", "-1");
    MODAL_MAIN_CONTAINER.style.display = 'none';
    localStorage.setItem('modal_status', 'hide');
};

if (lsModal !== 'hide') {
  showModal();
} 

BOTON_MODAL_ENTENDIDO.addEventListener('click', () => {
    let lsModal = localStorage.getItem('modal_status');
    lsModal !== 'show' ? MODAL_MAIN_CONTAINER.style.display = 'none' :  hideModal();
});

// boton cerrar modal
const BOTON_MODAL_CERRAR = document.querySelector('div.modal-header > span')
BOTON_MODAL_CERRAR.addEventListener('click', () => {
    MODAL_MAIN_CONTAINER.style.display = 'none';
})

// boton footer abrir modal
const BOTON_DESCARGO_RESPONSABILIDAD = document.querySelector('#boton-descargo-responsabilidad');
BOTON_DESCARGO_RESPONSABILIDAD.addEventListener('click', () => {
    MODAL_MAIN_CONTAINER.style.display = 'flex';
});

// clic fuera modal lo cierra
window.addEventListener('click', (e) => {
  if (e.target == MODAL_MAIN_CONTAINER) {
    MODAL_MAIN_CONTAINER.style.display = 'none';
  }
});

// MARK: observer
const OBSERVER = new MutationObserver(() => {
    let divs = CONTAINER_TRANSMISION_ACTIVA.children;
    if (divs.length < 1 ) {
        TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = 'apagad<svg xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-FaceSad"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1"/><path d="M16 9.05v-.1"/><path d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"/></svg>';
        CONTAINER_OVERLAY.classList.add('d-none'); 
        SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.innerHTML = '<i class="ai-eye-closed"></i>';
        BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = true;
    } else if (divs.length === 1 ){
        BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.disabled = false
        toggleOverlay(localStorage.getItem('estado_overlay') === SHOW_OVERLAY);
    }
});
const config = { childList: true };
OBSERVER.observe(CONTAINER_TRANSMISION_ACTIVA, config);