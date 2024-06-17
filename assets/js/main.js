// Main v0.11 por Alplox 

// MARK: Config
const URL_JSON_CANALES_PRINCIPAL = 'https://raw.githubusercontent.com/Alplox/json-teles/main/canales.json';
const URL_M3U_CANALES_IPTV = 'https://iptv-org.github.io/iptv/categories/news.m3u';
const TWITCH_PARENT = 'alplox.github.io';

const CONTAINER_OVERLAY = document.querySelector('.container-overlay');
const UL_OVERLAY_SEÑALES = document.querySelector('#lista-señales')
const SPAN_NOMBRE_OVERLAY = document.querySelector('#nombre-overlay');
const BOTON_ALTERNAR_VISIBILIDAD_OVERLAY = document.querySelector('#boton-alternar-visibilidad-overlay');
const SPAN_BOTON_ALTERNAR_VISIBILIDAD_OVERLAY = document.querySelector('#span-boton-alternar-visibilidad-overlay');
const CONTAINER_TRANSMISION_ACTIVA = document.querySelector('#container-transmision');
const TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA = document.querySelector('#texto-detras-container-transmision');
const CONTAINER_BOTONES_CANALES_PRINCIPAL = document.querySelector('#lista-botones');
const CONTAINER_BOTONES_CANALES_SECUNDARIOS = document.querySelector('#lista-botones-m3u8');

let listaCanales;

// MARK: traducción videojs
if (videojs) {
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
}

function M3U_A_JSON(m3u) {
    const channels = {};
    const lines = m3u.split('\n').filter(line => line.trim() !== '');

    for (let i = 1; i < lines.length; i++) {
        const channelInfo = lines[i].match(/([^\s]+)="([^"]+)"/g);
        if (channelInfo) {
            const attributes = channelInfo.reduce((acc, attr) => {
                const [key, value] = attr.split('=');
                acc[key.replace(/"/g, '')] = value.replace(/"/g, '');
                return acc;
            }, {});

            //  const NOMBRE_CANAL = lines[i].match(/,([^,]+)$/)[1] ?? 'Nombre canal no encontrado'; //añade lo de (1080p) [24//7]
            const NOMBRE_CANAL = lines[i].match(/,([^,(]+)/)[1]?.trim() ?? 'Nombre canal no encontrado'; // no añade lo que este luego del primer "("

            const LOGO_IMG = attributes['tvg-logo'] ?? '';
            const GROUP_TITLE_ID = attributes['group-title']?.toLowerCase() ?? '';

            const TVG_ID = attributes['tvg-id'] ?? `canal-m3u8-${i}.`;
            const [NOMBRE_CANAL_PARA_ID, COUNTRY_ID = ""] = TVG_ID.toLowerCase().split('.');

            channels[NOMBRE_CANAL_PARA_ID] = {
                "nombre": NOMBRE_CANAL,
                "logo": LOGO_IMG,
                "señales": {
                    "iframe_url": [],
                    "m3u8_url": [lines[i + 1]],
                    "yt_id": "",
                    "yt_embed": "",
                    "yt_playlist": "",
                    "twitch_id": ""
                },
                "sitio_oficial": "",
                "categoría": GROUP_TITLE_ID,
                "país": COUNTRY_ID,
            };
        }
    }
    return channels;
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
    SPAN_NOMBRE_OVERLAY.removeAttribute('href');
    UL_OVERLAY_SEÑALES.innerHTML = ''
    document.querySelectorAll('button.boton-activo').forEach(button => {
        button.classList.remove('boton-activo');
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
if (lsOverlay === null) localStorage.setItem('estado_overlay', SHOW_OVERLAY);


BOTON_ALTERNAR_VISIBILIDAD_OVERLAY.addEventListener('click', () => {
    toggleOverlay(localStorage.getItem('estado_overlay') !== SHOW_OVERLAY);
});

function guardarSeñalPreferida(canalId, señalUtilizar = '', indexSeñalUtilizar = 0) {
    let lsPreferenciasSeñalCanales = JSON.parse(localStorage.getItem('preferencia_señal_canales_la_tele')) || {};
    lsPreferenciasSeñalCanales[canalId] = { [señalUtilizar]: indexSeñalUtilizar };
    localStorage.setItem('preferencia_señal_canales_la_tele', JSON.stringify(lsPreferenciasSeñalCanales));
}

function crearIframe(canalId, tipoSeñalParaIframe, valorIndex = 0) {
    valorIndex = Number(valorIndex)
    const DIV_ELEMENT = document.createElement('div');
        DIV_ELEMENT.classList.add('h-100');
    const { nombre, señales } = listaCanales[canalId];

    const URL_POR_TIPO_SEÑAL = {
        'iframe_url': señales.iframe_url && señales.iframe_url[valorIndex],
        'yt_id': señales.yt_id && `https://www.youtube-nocookie.com/embed/live_stream?channel=${señales.yt_id}&autoplay=1&mute=1&modestbranding=1&vq=medium&showinfo=0`,
        'yt_embed': señales.yt_embed && `https://www.youtube-nocookie.com/embed/${señales.yt_embed}?autoplay=1&mute=1&modestbranding=1&showinfo=0`,
        'yt_playlist': señales.yt_playlist && `https://www.youtube-nocookie.com/embed/videoseries?list=${señales.yt_playlist}&autoplay=0&mute=0&modestbranding=1&showinfo=0`,
        'twitch_id': señales.twitch_id && `https://player.twitch.tv/?channel=${señales.twitch_id}&parent=${TWITCH_PARENT}`
    };

    const IFRAME_ELEMENT = document.createElement('iframe');
    IFRAME_ELEMENT.src = URL_POR_TIPO_SEÑAL[tipoSeñalParaIframe];
    IFRAME_ELEMENT.classList.add('pe-auto');
    IFRAME_ELEMENT.setAttribute('contenedor-canal-cambio', canalId);
    IFRAME_ELEMENT.allowFullscreen = true;
    IFRAME_ELEMENT.title = nombre;
    IFRAME_ELEMENT.referrerPolicy = 'no-referrer';

    DIV_ELEMENT.append(IFRAME_ELEMENT);
    return DIV_ELEMENT;
}

function crearVideoJs(urlCarga) {
    const DIV_ELEMENT = document.createElement('div');
        DIV_ELEMENT.classList.add('h-100');
    const videoElement = document.createElement('video');
        videoElement.classList.add('video-js', 'vjs-16-9', 'vjs-fill');
        videoElement.toggleAttribute('controls');
        DIV_ELEMENT.append(videoElement);
    videojs(videoElement).src({
        src: urlCarga,
        controls: true,
    });
    videojs(videoElement).autoplay('muted');
    return DIV_ELEMENT;
}

function crearFragmentCanal(canalId) {
    if (listaCanales[canalId]?.señales) {
        let { señales } = listaCanales[canalId]
        let { iframe_url = [], m3u8_url = [], yt_id = '', yt_embed = '', yt_playlist = '', twitch_id = '' } = señales;
        let lsPreferenciasSeñalCanales = JSON.parse(localStorage.getItem('preferencia_señal_canales_la_tele')) || {};

        let señalUtilizar;
        let valorIndexArraySeñal = 0;

        if (Array.isArray(iframe_url) && iframe_url.length > 0) {
            señalUtilizar = 'iframe_url';
        } else if (Array.isArray(m3u8_url) && m3u8_url.length > 0) {
            señalUtilizar = 'm3u8_url';
        } else if (yt_id !== '') {
            señalUtilizar = 'yt_id';
        } else if (yt_embed !== '') {
            señalUtilizar = 'yt_embed';
        } else if (yt_playlist !== '') {
            señalUtilizar = 'yt_playlist';
        } else if (twitch_id !== '') {
            señalUtilizar = 'twitch_id';
        }

        if (lsPreferenciasSeñalCanales[canalId]) {
            señalUtilizar = Object.keys(lsPreferenciasSeñalCanales[canalId])[0].toString()
            valorIndexArraySeñal = Number(Object.values(lsPreferenciasSeñalCanales[canalId]))
        }

        UL_OVERLAY_SEÑALES.innerHTML = ''
        for (const key in señales) {
            let iconoSeñal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Globe"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><path d="M2 12h20"/></svg>'
            if (key.startsWith('iframe_')) {
                iconoSeñal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Globe"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><path d="M2 12h20"/></svg>'
            } else if (key.startsWith('m3u8_')) {
                iconoSeñal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Play"><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></svg>'
            } else if (key.startsWith('yt_')) {
                iconoSeñal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-YoutubeFill"><g clip-path="url(#clip0_100_7)"><path d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27 3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47 3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494.137.479.404.916.775 1.269.371.353.833.608 1.341.743 1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47 3.05 3.05 0 0 0 1.338-.742c.37-.353.633-.792.765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517zM9.602 15.424V8.577l6.26 3.424-6.26 3.423z"/></g><defs><clipPath id="clip0_100_7"><rect width="24" height="24"/></clipPath></defs></svg>'
            } else if (key.startsWith('twitch_')) {
                iconoSeñal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-TwitchFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1H2.547zm18.39 12.478l-3.438 3.283H12l-2.922 2.791v-2.79h-4.64V2.97h16.499v10.508zm-3.438-6.731v5.74h-2.062v-5.74H17.5zm-5.499 0v5.74H9.938v-5.74H12z"/></svg>'
            }

            const value = señales[key];
            if (Array.isArray(value) && value.length > 0) {
                value.forEach((url, index) => {
                    const listItem = document.createElement("li");

                    if (señalUtilizar === key && valorIndexArraySeñal === index) listItem.classList.add('boton-activo');
                    listItem.innerHTML = value.length === 1 ? `${iconoSeñal} ${key.split('_')[0]}` : `${iconoSeñal} ${key.split('_')[0]} <span class="fst-italic">${index}</span>`;
                    listItem.addEventListener("click", () => {
                        UL_OVERLAY_SEÑALES.querySelectorAll('.dropdown-item').forEach(item => {
                            item.classList.remove('boton-activo');
                        });
                        listItem.classList.add('boton-activo');
                        guardarSeñalPreferida(canalId, key.toString(), Number(index));
                        CONTAINER_TRANSMISION_ACTIVA.innerHTML = '';
                        CONTAINER_TRANSMISION_ACTIVA.append(crearFragmentCanal(canalId));
                    });
                    UL_OVERLAY_SEÑALES.append(listItem);
                });
            } else if (typeof value === "string" && value !== "") {
                const listItem = document.createElement("li");
                if (señalUtilizar === key) listItem.classList.add('boton-activo');
                listItem.innerHTML = `${iconoSeñal} ${key.replace('_', ' ')}`;
                listItem.addEventListener("click", () => {
                    UL_OVERLAY_SEÑALES.querySelectorAll('.dropdown-item').forEach(item => {
                        item.classList.remove('boton-activo');
                    });
                    listItem.classList.add('boton-activo');
                    guardarSeñalPreferida(canalId, key.toString());
                    CONTAINER_TRANSMISION_ACTIVA.innerHTML = '';
                    CONTAINER_TRANSMISION_ACTIVA.append(crearFragmentCanal(canalId));
                });
                UL_OVERLAY_SEÑALES.append(listItem);
            }
        }

        const FRAGMENT_CANAL = document.createDocumentFragment();
            FRAGMENT_CANAL.append(señalUtilizar === 'm3u8_url' ? crearVideoJs(m3u8_url[valorIndexArraySeñal]) : crearIframe(canalId, señalUtilizar, valorIndexArraySeñal));
        return FRAGMENT_CANAL
    } else {
        console.error(`${canalId} no tiene señales definidas.`);
    }
}

// MARK: Fetch primario
fetch(URL_JSON_CANALES_PRINCIPAL)
  .then(response => response.json())
  .then(data => {
    listaCanales = data;
    const FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL = document.createDocumentFragment();
    for (const canal in data) {
        let {nombre, sitio_oficial, país} = data[canal];
        if (país === "cl") {
            const BOTON_PARA_CANAL = document.createElement('button');
                BOTON_PARA_CANAL.setAttribute('type', 'button');
                BOTON_PARA_CANAL.setAttribute('tabindex', '0');
                BOTON_PARA_CANAL.classList.add('boton', 'boton-canal');
                BOTON_PARA_CANAL.innerHTML = nombre;
                BOTON_PARA_CANAL.addEventListener('click', () => {
                    if (BOTON_PARA_CANAL.classList.contains('boton-activo')) {
                        limpiarTransmisionActiva()
                    } else {
                        limpiarTransmisionActiva()
                        BOTON_PARA_CANAL.classList.add('boton-activo');
                        TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = 'Cargand<svg id="gear" xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>';
                        
                        CONTAINER_TRANSMISION_ACTIVA.append(crearFragmentCanal(canal));
                        SPAN_NOMBRE_OVERLAY.innerHTML = `${nombre} <i class="ai-link-out"></i>`;
                        SPAN_NOMBRE_OVERLAY.href = sitio_oficial;
                        document.querySelector('.dropdown-señales').classList.remove('hide')
                    }
                });
            FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL.append(BOTON_PARA_CANAL);
        }
    }
    CONTAINER_BOTONES_CANALES_PRINCIPAL.append(FRAGMENT_CONTENEDOR_BOTONES_LISTA_PRINCIPAL);
  })
  .catch(error => console.error('Error fetching data:', error));

// MARK: Fetch secundario (lista m3u)
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
                limpiarTransmisionActiva()
            } else  {
                limpiarTransmisionActiva()
                BOTON_PARA_CANAL.classList.add('boton-activo');
                TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = 'Cargand<svg id="gear" xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>';
                const FRAGMENT_CANAL = document.createDocumentFragment();
                    FRAGMENT_CANAL.append(crearVideoJs(señales.m3u8_url[0]));
                CONTAINER_TRANSMISION_ACTIVA.append(FRAGMENT_CANAL)
               
                SPAN_NOMBRE_OVERLAY.innerHTML = `${nombre} | M3U8 no oficial`;
                document.querySelector('.dropdown-señales').classList.add('hide')
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
BOTON_QUITAR_SEÑAL.addEventListener('click', limpiarTransmisionActiva);

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

const normalizeText = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
}

// MARK: filtro canales
const INPUT_FILTRADO_CANALES = document.querySelector('#filtro');
const filtro = () => {
    let valorInput = normalizeText(INPUT_FILTRADO_CANALES.value);
    let botonesFiltrar = document.querySelectorAll('.lista-botones button'); // toma botones del front y back
    
    botonesFiltrar.forEach(boton => {
        let esCoincidencia = normalizeText(boton.textContent).includes(valorInput)
        boton.classList.toggle('d-none', !esCoincidencia);
    });
    
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

if (lsModal !== 'hide') showModal();

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
  if (e.target == MODAL_MAIN_CONTAINER) MODAL_MAIN_CONTAINER.style.display = 'none';
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