// Funciones para crear iframes, videojs y fragmentos de canal
import { guardarSeñalPreferida } from './overlay.js';
import { UL_OVERLAY_SEÑALES, CONTAINER_TRANSMISION_ACTIVA, TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA } from './main.js';
import { listaCanales } from './fetch.js';
import { safeParseItem } from './ui-utils.js';

const ICONOS = {
  iframe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Globe"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><path d="M2 12h20"/></svg>',
  m3u8: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Play"><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></svg>',
  yt: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-YoutubeFill"><g clip-path="url(#clip0_100_7)"><path d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27 3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47 3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494.137.479.404.916.775 1.269.371.353.833.608 1.341.743 1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47 3.05 3.05 0 0 0 1.338-.742c.37-.353.633-.792.765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517zM9.602 15.424V8.577l6.26 3.424-6.26 3.423z"/></g><defs><clipPath id="clip0_100_7"><rect width="24" height="24"/></clipPath></defs></svg>',
  twitch: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-TwitchFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1H2.547zm18.39 12.478l-3.438 3.283H12l-2.922 2.791v-2.79h-4.64V2.97h16.499v10.508zm-3.438-6.731v5.74h-2.062v-5.74H17.5zm-5.499 0v5.74H9.938v-5.74H12z"/></svg>'
};

const GROUP_MAP = { iframe: 'iframe', m3u8: 'm3u8', youtube: 'yt', youtube_video: 'yt', twitch: 'twitch' };
const getGroup = s => GROUP_MAP[s.tipo] || 'iframe';

function obtenerSeñales(canal) {
  const señales = [];
  if (canal.signals) {
    const freqs = {};
    canal.signals.forEach(s => { freqs[s.type] = (freqs[s.type] || 0) + 1 });
    const counts = {};
    canal.signals.forEach((s, i) => {
      counts[s.type] = (counts[s.type] || 0) + 1;
      const idx = counts[s.type] - 1;
      señales.push({
        key: `signals_${i}`,
        tipo: s.type,
        url: s.url,
        label: freqs[s.type] > 1 ? `${s.type} ${idx}` : s.type
      });
    });
  }
  if (canal.youtube) {
    señales.push({
      key: 'youtube',
      tipo: 'youtube',
      channelId: canal.youtube,
      label: 'youtube'
    });
    if (Array.isArray(canal.last_youtube_livestreams)) {
      canal.last_youtube_livestreams.forEach((videoId, i) => {
        señales.push({
          key: `youtube_video_${i}`,
          tipo: 'youtube_video',
          videoId,
          label: `video ${videoId.slice(0, 8)}`
        });
      });
    }
  }
  if (canal.twitch) {
    señales.push({
      key: 'twitch',
      tipo: 'twitch',
      channel: canal.twitch,
      label: 'twitch'
    });
  }
  return señales;
}

function señalPreferida(señales, canalId) {
  const lsPref = safeParseItem('preferencia_señal_canales_la_tele');
  if (lsPref[canalId]) {
    const keyPref = Object.keys(lsPref[canalId])[0];
    const encontrada = señales.find(s => s.key === keyPref);
    if (encontrada) return encontrada;
  }
  for (const tipo of ['iframe', 'm3u8', 'youtube', 'youtube_video', 'twitch']) {
    const encontrada = señales.find(s => s.tipo === tipo);
    if (encontrada) return encontrada;
  }
  return señales[0];
}

function crearIframe(canalId, señalObj) {
  const DIV_ELEMENT = document.createElement('div');
  DIV_ELEMENT.classList.add('h-100');
  const canal = listaCanales[canalId];
  if (!canal) {
    console.error(`crearIframe: canalId "${canalId}" no encontrado en listaCanales`);
    return DIV_ELEMENT;
  }
  const name = canal.name;
  let src = '';
  if (señalObj.tipo === 'iframe') {
    src = señalObj.url;
  } else if (señalObj.tipo === 'youtube') {
    src = `https://www.youtube-nocookie.com/embed/live_stream?channel=${señalObj.channelId}&autoplay=1&mute=1&modestbranding=1&vq=medium&showinfo=0`;
  } else if (señalObj.tipo === 'youtube_video') {
    src = `https://www.youtube-nocookie.com/embed/${señalObj.videoId}?autoplay=1&mute=1&modestbranding=1&showinfo=0`;
  } else if (señalObj.tipo === 'twitch') {
    src = `https://player.twitch.tv/?channel=${señalObj.channel}&parent=alplox.github.io`;
  } else {
    console.warn(`crearIframe: tipo de señal desconocido "${señalObj.tipo}" para canal "${name || canalId}"`);
  }
  const IFRAME_ELEMENT = document.createElement('iframe');
  IFRAME_ELEMENT.src = src;
  IFRAME_ELEMENT.classList.add('pe-auto');
  IFRAME_ELEMENT.setAttribute('contenedor-canal-cambio', canalId);
  IFRAME_ELEMENT.allowFullscreen = true;
  IFRAME_ELEMENT.title = name;
  if (señalObj.tipo === 'youtube' || señalObj.tipo === 'youtube_video') {
    IFRAME_ELEMENT.referrerPolicy = 'strict-origin-when-cross-origin';
  } else {
    IFRAME_ELEMENT.referrerPolicy = 'no-referrer';
  }
  DIV_ELEMENT.append(IFRAME_ELEMENT);
  return DIV_ELEMENT;
}

let activePlayer = null;

let videoJsLoading = null;

async function loadVideoJs() {
  if (window.videojs) return;
  if (videoJsLoading) return videoJsLoading;

  videoJsLoading = (async () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/video.js/dist/video-js.min.css';
    document.head.appendChild(link);

    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/video.js/dist/video.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

    const { setVideojsLang } = await import('./videojs-lang.js');
    setVideojsLang(window.videojs);
  })();

  return videoJsLoading;
}

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

export async function crearVideoJs(urlCarga) {
  await loadVideoJs();
  limpiarActivePlayer();
  const DIV_ELEMENT = document.createElement('div');
  DIV_ELEMENT.classList.add('h-100');
  const videoElement = document.createElement('video');
  videoElement.classList.add('video-js', 'vjs-16-9', 'vjs-fill');
  videoElement.toggleAttribute('controls');
  videoElement.setAttribute('playsinline', '');
  DIV_ELEMENT.append(videoElement);
  activePlayer = videojs(videoElement, {
    controls: true,
    muted: true,
    autoplay: true,
    sources: [{ src: urlCarga }]
  });
  return DIV_ELEMENT;
}

export function reproducirActivePlayer() {
  if (activePlayer) {
    activePlayer.muted(true);
    activePlayer.play();
  }
}

export async function crearFragmentCanal(canalId) {
  limpiarActivePlayer();
  const canal = listaCanales[canalId];
  if (!canal) {
    TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = `CANAL NO ENCONTRADO: ${canalId}`;
    console.error(`${canalId} no encontrado.`);
    return;
  }
  const señales = obtenerSeñales(canal);
  if (señales.length === 0) {
    TEXTO_DETRAS_CONTAINER_TRANSMISION_ACTIVA.innerHTML = `${canal.name || canalId}: SIN SEÑALES DISPONIBLES`;
    console.error(`${canalId} no tiene señales definidas.`);
    return;
  }
  const señal = señalPreferida(señales, canalId);

  UL_OVERLAY_SEÑALES.innerHTML = '';
  señales.forEach(s => {
    const listItem = document.createElement('li');
    listItem.classList.add('dropdown-item');
    if (s.key === señal.key) listItem.classList.add('boton-activo');
    listItem.innerHTML = `${ICONOS[getGroup(s)]} ${s.label}`;
    listItem.addEventListener('click', async () => {
      UL_OVERLAY_SEÑALES.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('boton-activo'));
      listItem.classList.add('boton-activo');
      guardarSeñalPreferida(canalId, s.key);
      CONTAINER_TRANSMISION_ACTIVA.innerHTML = '';
      const fragment = await crearFragmentCanal(canalId);
      CONTAINER_TRANSMISION_ACTIVA.append(fragment);
      reproducirActivePlayer();
      const dropdown = document.querySelector('.dropdown-señales');
      if (dropdown) dropdown.removeAttribute('open');
    });
    UL_OVERLAY_SEÑALES.append(listItem);
  });

  const FRAGMENT_CANAL = document.createDocumentFragment();
  if (señal.tipo === 'm3u8') {
    FRAGMENT_CANAL.append(await crearVideoJs(señal.url));
  } else {
    FRAGMENT_CANAL.append(crearIframe(canalId, señal));
  }
  return FRAGMENT_CANAL;
}