// Funciones para crear iframes, videojs y fragmentos de canal
import { TWITCH_PARENT } from './config.js';
import { guardarSeñalPreferida } from './overlay.js';
import { UL_OVERLAY_SEÑALES, CONTAINER_TRANSMISION_ACTIVA } from './main.js';
import { listaCanales } from './fetch.js';

export function crearIframe(canalId, tipoSeñalParaIframe, valorIndex = 0) {
    valorIndex = Number(valorIndex);
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
    if (tipoSeñalParaIframe === 'yt_id' || tipoSeñalParaIframe === 'yt_embed' || tipoSeñalParaIframe === 'yt_playlist') {
        IFRAME_ELEMENT.referrerPolicy = 'strict-origin-when-cross-origin';  // Debido a Error 153 con Youtube. Rompe otras señales iframe_url por eso lo filtramos antes.
    } else {
        IFRAME_ELEMENT.referrerPolicy = 'no-referrer';
    }
    DIV_ELEMENT.append(IFRAME_ELEMENT);
    return DIV_ELEMENT;
}

let activePlayer = null;

export function limpiarActivePlayer() {
    if (activePlayer) {
        try {
            activePlayer.dispose();
        } catch (e) {
            console.error('Error disposing VideoJS player:', e);
        }
        activePlayer = null;
    }
}

export function crearVideoJs(urlCarga) {
    limpiarActivePlayer();

    const DIV_ELEMENT = document.createElement('div');
    DIV_ELEMENT.classList.add('h-100');
    const videoElement = document.createElement('video');
    videoElement.classList.add('video-js', 'vjs-16-9', 'vjs-fill');
    videoElement.toggleAttribute('controls');
    DIV_ELEMENT.append(videoElement);

    activePlayer = videojs(videoElement, {
        controls: true,
        autoplay: 'muted',
        sources: [{
            src: urlCarga
        }]
    });

    return DIV_ELEMENT;
}

export function crearFragmentCanal(canalId) {
    limpiarActivePlayer();
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
                        
                        const dropdown = document.querySelector('.dropdown-señales');
                        if (dropdown) dropdown.removeAttribute('open');
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

                    const dropdown = document.querySelector('.dropdown-señales');
                    if (dropdown) dropdown.removeAttribute('open');
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