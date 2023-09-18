/* 
Main v0.9
por Alplox 
*/

const overlay = document.querySelector('.overlay'), 
    barraNombre = document.querySelector('#barra-nombre'), 
    btnCheckboxOverlay = document.querySelector('#btn-overlay'), 
    spanOverlay = document.querySelector('#span-overlay'), 
    containerTransmision = document.querySelector('#container-transmision'), 
    containerBtnsCanales = document.querySelector('#lista-botones'), 
    recordatorio = document.querySelector('#recordatorio');

// ----- traducción videojs
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

// ----- div para canales "m3u8"
const divM3u8 = document.createElement('div');
    divM3u8.className = 'm3u8-stream';
const videoM3u8 = document.createElement('video');
    videoM3u8.className = 'm3u8-player video-js vjs-16-9 vjs-fluid';
    videoM3u8.controls = true;
divM3u8.appendChild(videoM3u8);

// ----- funciones crear
function crearIframe(source) {
    const fragmentIframe = document.createDocumentFragment();
    const iframe = document.createElement('iframe');
        iframe.src = source;
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'no-referrer';  // para stream 24-horas-6
        fragmentIframe.append(iframe);
    return fragmentIframe;
}

function crearBarraNombre(nombre, fuente) {
    const fragmentBarra = document.createDocumentFragment();
    let a = document.createElement('a');
        a.innerHTML = nombre;
        a.title = 'Ir a la página oficial de esta transmisión';
        a.href = fuente;
        a.rel = 'noopener nofollow noreferrer';
        fragmentBarra.append(a);
    return fragmentBarra;
}; 

function crearBarraNombreM3u8(nombre) {
    const fragmentBarraM3u8 = document.createDocumentFragment();
    let span = document.createElement('span');
        span.textContent = nombre;
        span.title = 'Transmisión NO OFICIAL';
        fragmentBarraM3u8.append(span);
    return fragmentBarraM3u8;
}; 

function limpiarTransmisionActiva() {
    containerTransmision.innerHTML = '';
    barraNombre.textContent = '';
    document.querySelectorAll('button.boton-canal').forEach(btn => {
        btn.classList.remove('activo');
    });
}

// overlay on/off
if (containerTransmision.childElementCount !== 1) {
    btnCheckboxOverlay.disabled = true;
    spanOverlay.innerHTML = '<i class="ai-eye-closed"></i>'
}

const habilitarOverlay = () => {
    localStorage.setItem('overlay', 'show');
    if (containerTransmision.childElementCount === 1){
        overlay.classList.remove('d-none'); 
    } 
    spanOverlay.innerHTML = '<i class="ai-eye-open"></i>';
    if (containerTransmision.childElementCount !== 1) {
        spanOverlay.innerHTML = '<i class="ai-eye-closed"></i>'
    } 
}


const desabilitarOverlay = () => {
    localStorage.setItem('overlay', 'hide');
    overlay.classList.add('d-none');
    spanOverlay.innerHTML = '<i class="ai-eye-slashed"></i>';
    if (containerTransmision.childElementCount !== 1) {
        spanOverlay.innerHTML = '<i class="ai-eye-closed"></i>';
    } 
}

const checkOverlayStatus = () => {
    let lsOverlay = localStorage.getItem('overlay');
    if (lsOverlay === 'show') {
        habilitarOverlay()
    } else {
        desabilitarOverlay()
    }
}

btnCheckboxOverlay.addEventListener('click', () => {
    let lsOverlay = localStorage.getItem('overlay');
    if (lsOverlay !== 'show') {
        habilitarOverlay()
    } else {
        desabilitarOverlay();
    }
})

// carga opcion guardada overlay 
window.addEventListener('DOMContentLoaded', () => {
    checkOverlayStatus();
})

// PARA LISTADO PRIMARIO
fetch('https://raw.githubusercontent.com/Alplox/la-tele/main/assets/js/canales.json')
  .then(response => response.json())
  .then(data => {
    let fragmentBtns = document.createDocumentFragment();

    for (const canal in data) {
        let {iframe_url, m3u8_url, yt_id, nombre, fuente, pais} = data[canal];

        if (pais === "cl") {
            const btnCanal = document.createElement('button');
            btnCanal.classList.add('btn', 'boton-canal');
            btnCanal.innerHTML = nombre;

            btnCanal.addEventListener('click', () => {
                limpiarTransmisionActiva()
                btnCanal.classList.add('activo');
                recordatorio.innerHTML = 'Cargand<svg id="gear" xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>';
                // cadenas if acorde a tipo de señal
                if (typeof iframe_url !== 'undefined'){     
                    containerTransmision.append(crearIframe(iframe_url));
                } else if (typeof m3u8_url !== 'undefined'){
                    containerTransmision.append(divM3u8)
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
                    containerTransmision.append(crearIframe(`https://www.youtube-nocookie.com/embed/live_stream?channel=${yt_id}&autoplay=1&mute=0&modestbranding=1&showinfo=0`));
                    barraNombre.append(crearBarraNombre(nombre, `https://www.youtube.com/channel/${yt_id}`));
                } 
                // si posee enlace 'fuente' utlizalo en 'barraNombre'
                if (typeof fuente !== 'undefined') {barraNombre.append(crearBarraNombre(nombre, fuente));}
                // activa boton overlay y verifica su estado
                btnCheckboxOverlay.disabled = false;
                checkOverlayStatus();
            });
            fragmentBtns.append(btnCanal);
        }
    }
    containerBtnsCanales.append(fragmentBtns);
  })
  .catch(error => console.error('Error fetching data:', error));


// PARA LISTADO SECUNDARIO "m3u" (lista iptv m3u.cl)
const containerBtnsCanalesM3u8 = document.querySelector('#lista-botones-m3u8');
let fragmentBtnsM3u8 = document.createDocumentFragment();
for (let i = 0; i < parseM3u.length; i++) {
    let canal = parseM3u[i];
    let {title, m3u8_url} = canal;
    // crea botones
    const btnCanal = document.createElement('button');
    btnCanal.classList.add('btn', 'boton-canal');
    btnCanal.textContent = title;
    // crea evento si clic
    btnCanal.addEventListener('click', () => {
        // elimina div o iframe canal existente (o no)
        limpiarTransmisionActiva()
        btnCanal.classList.add('activo');
        recordatorio.innerHTML = 'Cargand<svg id="gear" xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935v0C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572v0a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0v0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>';
        // carga señal m3u8
        containerTransmision.append(divM3u8)
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
        barraNombre.append(crearBarraNombreM3u8(`${title} | M3U8`));
        // activa boton overlay y verifica su estado
        btnCheckboxOverlay.disabled = false;
        checkOverlayStatus();
    }); 
    fragmentBtnsM3u8.append(btnCanal);
    };
containerBtnsCanalesM3u8.append(fragmentBtnsM3u8);


// boton limpia/elimina señal activa
const btnQuitarSeñal = document.querySelector('#btn-quitar-señal');
btnQuitarSeñal.addEventListener('click', () => {
    limpiarTransmisionActiva()
    recordatorio.innerHTML = 'apagad<svg xmlns="http://www.w3.org/2000/svg" width="calc(1.6rem + 1.7vw)" height="calc(1.6rem + 1.7vw)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" class="ai ai-FaceSad"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1"/><path d="M16 9.05v-.1"/><path d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"/></svg>';
    // oculta overlay sin cambiar localstorage
    if (containerTransmision.childElementCount !== 1){
        overlay.classList.add('d-none'); 
        spanOverlay.innerHTML = '<i class="ai-eye-closed"></i>'
    } 
    btnCheckboxOverlay.disabled = true;
});

// alternar listas
const btnAlternar = document.querySelector('#btn-alternar');
const flip = document.querySelector('#flip-container');

btnAlternar.addEventListener('click', () => {
    if (containerBtnsCanales.style.display === 'none'){
        setTimeout (() => {
            btnAlternar.disabled = false;
            containerBtnsCanales.style.display = 'grid';
        }, 610);
        btnAlternar.disabled = true;
        containerBtnsCanales.style.display = 'grid';
    } else {
        btnAlternar.disabled = true;
        setTimeout(() => {
            btnAlternar.disabled = false;
            containerBtnsCanales.style.display = 'none';
        }, 610); /* animacion flipper dura 6 segundos */
    }
    flip.classList.toggle('hover');
});

// filtro de canales https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
const filtroCanales = document.querySelector('#filtro');

document.onkeydown = (e) => {
    filtroCanales.focus();
    /* filtroCanales.scrollIntoView(); */
    if (e.key == 'Escape' || e.key == '27'){
        filtroCanales.value = '';
        filtroCanales.blur();
        let btnsFiltrar = document.querySelectorAll('div.lista-botones > button');
        for (let i = 0; i < btnsFiltrar.length; i++) {
            btnsFiltrar[i].classList.remove('d-none');
        }
    }
}

function filtro() {
    let btnsFiltrar = document.querySelectorAll('div.lista-botones > button');
   
    for (let i = 0; i < btnsFiltrar.length; i++) {
        if (btnsFiltrar[i].textContent
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g,"")
            .toLowerCase()
            .includes(filtroCanales.value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()))
        {   btnsFiltrar[i].classList.remove('d-none');
        } else {
            btnsFiltrar[i].classList.add('d-none');
        }
    }
};
filtroCanales.addEventListener('input', filtro);


// ----- MODAL BIENVENIDA CON LOCALSTORAGE PARA QUE NO VUELVA A APARECER AL HACER CLIC EN BOTÓN
const modal = document.querySelector('#modal-legal');
const btnEntendido = document.querySelector('#btn-entendido');
let lsModal = localStorage.getItem('modal_status');

const showModal = () => {
    modal.style.display = 'block';
    localStorage.setItem('modal_status', 'show');
};

const hideModal = () => {
    modal.style.display = 'none';
    localStorage.setItem('modal_status', 'hide');
};

if (lsModal !== 'hide') {
  showModal();
} 

btnEntendido.addEventListener('click', () => {
    let lsModal = localStorage.getItem('modal_status');
    if(lsModal !== 'show') {
        modal.style.display = 'none';
    } else {
        hideModal();
    }
});

// btns cerrar modal
const btnCerrarModal = document.querySelector('div.modal-header > span')
btnCerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

// btn footer abrir modal
const btnLegal = document.querySelector('#boton-legal');
btnLegal.addEventListener('click', () => {
  modal.style.display = 'block';
});

// clic fuera modal lo cierra
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});