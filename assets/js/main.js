/* 
Main v0.7
por Alplox 
*/

const overlay = document.querySelector('.overlay');
const barraNombre = document.querySelector('#barra-nombre');
const containerTransmision = document.querySelector('#container-transmision');
const containerBtnsCanales = document.querySelector('#lista-botones');
const recordatorio = document.querySelector('#recordatorio');
const checkboxOverlay = document.querySelector('#checkbox-overlay');

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
    videoM3u8.toggleAttribute('controls'); 
divM3u8.append(videoM3u8)

// ----- funciones crear
function crearIframe(source) {
    const fragmentIframe = document.createDocumentFragment();
    const iframe = document.createElement('iframe');
        iframe.setAttribute('src', source);
        iframe.toggleAttribute('allowFullScreen'); 
    fragmentIframe.append(iframe);
    return fragmentIframe;
}

function crearBarraNombre(nombre, fuente) {
    const fragmentBarra = document.createDocumentFragment();
    let a = document.createElement('a');
        a.innerHTML = nombre;
        a.setAttribute('title', 'Ir a la página oficial de esta transmisión');
        a.href = fuente;
        a.setAttribute('rel', 'noopener nofollow noreferrer');
        fragmentBarra.append(a);
    return fragmentBarra;
}; 

function crearBarraNombreM3u8(nombre) {
    const fragmentBarraM3u8 = document.createDocumentFragment();
    let span = document.createElement('span');
        span.textContent = nombre;
        span.setAttribute('title', 'Transmisión NO OFICIAL');
        fragmentBarraM3u8.append(span);
    return fragmentBarraM3u8;
}; 

function limpiarTransmisionActiva() {
    containerTransmision.innerHTML = "";
    barraNombre.textContent = "";
    document.querySelectorAll('button.boton-canal').forEach(btn => {
        btn.classList.remove('activo');
    });
}

// PARA LISTADO PRINCIPAL "listadoCanales"
let fragmentBtns = document.createDocumentFragment();
for (const canal in listaCanales) {
    // destructuring (almacena variables legibles) desde listaCanales == canales.js
    let {iframeURL, m3u8URL, ytID, nombre, fuente} = listaCanales[canal];
    // crea botones
    const btnCanal = document.createElement('button');
        btnCanal.classList.add('btn', 'boton-canal');
        btnCanal.textContent = nombre;
    // crea evento si clic
    btnCanal.addEventListener('click', () => {
        limpiarTransmisionActiva()
        btnCanal.classList.add('activo');
        recordatorio.innerHTML = 'Cargando...<br>(^‿^)';
        // cadenas if acorde a tipo de señal
        if (typeof iframeURL !== 'undefined'){     
            containerTransmision.append(crearIframe(iframeURL));
        } else if (typeof m3u8URL !== 'undefined'){
            containerTransmision.append(divM3u8)
            let m3u8Player = videojs(document.querySelector('.m3u8-player'));
                m3u8Player.src( {
                    src: m3u8URL,
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
        } else if (typeof ytID !== 'undefined'){
            containerTransmision.append(crearIframe(`https://www.youtube-nocookie.com/embed/live_stream?channel=${ytID}&autoplay=1&mute=0&modestbranding=1&showinfo=0`));
            barraNombre.append(crearBarraNombre(nombre, `https://www.youtube.com/channel/${ytID}`));
        } 
        // si posee enlace 'fuente' utlizalo en 'barraNombre'
        if (typeof fuente !== 'undefined') {barraNombre.append(crearBarraNombre(nombre, fuente));}
        // si checkbox desmarcado oculta overlay
        if (checkboxOverlay.checked === true) {overlay.classList.remove('d-none');}
    });
    fragmentBtns.append(btnCanal);
}
containerBtnsCanales.append(fragmentBtns);

// PARA LISTADO SECUNDARIO "m3u" (lista iptv m3u.cl)
const containerBtnsCanalesM3u8 = document.querySelector('#lista-botones-m3u8');
let fragmentBtnsM3u8 = document.createDocumentFragment();
for (let i = 0; i < parseM3u.length; i++) {
    let canal = parseM3u[i];
    let {title, m3u8URL} = canal;
    // crea botones
    const btnCanal = document.createElement('button');
    btnCanal.classList.add('btn', 'boton-canal');
    btnCanal.textContent = title;
    // crea evento si clic
    btnCanal.addEventListener('click', () => {
        // elimina div o iframe canal existente (o no)
        limpiarTransmisionActiva()
        btnCanal.classList.add('activo');
        recordatorio.innerHTML = 'Cargando...<br>(^‿^)';
        // carga señal m3u8
        containerTransmision.append(divM3u8)
        let m3u8Player = videojs(document.querySelector('.m3u8-player'));
            m3u8Player.src( {
                src: m3u8URL,
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
        if (checkboxOverlay.checked === true) {
            overlay.classList.remove('d-none');
        }
    }); 
    fragmentBtnsM3u8.append(btnCanal);
    };
containerBtnsCanalesM3u8.append(fragmentBtnsM3u8);

// boton limpia/elimina señal activa
const btnQuitarSeñal = document.querySelector('#btn-quitar-señal');
btnQuitarSeñal.addEventListener('click', () => {
    limpiarTransmisionActiva()
    recordatorio.textContent = '(∪ ◡ ∪)';
    if (checkboxOverlay.checked === true) {
        overlay.classList.add('d-none');
    }
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

// overlay on/off
const estadoBarra = document.querySelector('#estado-barra');
let lsOverlay = localStorage.getItem('overlay');

checkboxOverlay.addEventListener('click', () => {
    if (checkboxOverlay.checked === true) {
        checkboxOverlay.setAttribute('checked', 'checked');
        if(containerTransmision.childElementCount === 1) {
            overlay.classList.remove('d-none');
        }
        estadoBarra.innerText= 'ON'
        localStorage.setItem('overlay', 'show');
    } else {
        checkboxOverlay.removeAttribute('checked', 'checked');
        overlay.classList.add('d-none');
        estadoBarra.innerText= 'OFF'
        localStorage.setItem('overlay', 'hide');
    };
});

// carga opcion guardada overlay 
window.addEventListener('DOMContentLoaded', () => {
    if (lsOverlay !== 'hide') {
        estadoBarra.innerText= 'ON'
        checkboxOverlay.setAttribute('checked', 'checked');
    } else {
        overlay.classList.add('d-none');
        estadoBarra.innerText= 'OFF'
        checkboxOverlay.removeAttribute('checked', 'checked');
    }
})

// filtro de canales https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
const filtroCanales = document.querySelector('#filtro');

document.onkeydown = (e) => {
    filtroCanales.focus();
    /* filtroCanales.scrollIntoView(); */
    if (e.key == 'Escape' || e.key == '27'){
        filtroCanales.value = '';
        filtroCanales.blur();
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