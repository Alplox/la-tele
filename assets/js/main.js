/* 
Main v0.6
por Alplox 
*/

const overlay = document.querySelector('.overlay');
const barra = document.querySelector('#nombre-barra');
const container_transmision = document.querySelector('#transmision');
const botones_canales = document.querySelector('#lista-botones');
const botones_canales_m3u8 = document.querySelector('#lista-botones-m3u8');
const borrar_canal_activo = document.querySelector('.borrar-canal-activo');
const botones = document.getElementsByClassName('boton-canal');
const recordatorio = document.querySelector('#recordatorio');
const boton_borrar = document.querySelector('#boton-borrar');
const flip = document.querySelector('#flip-container');
const boton_alternar = document.querySelector('#boton-alternar');
const checkbox = document.querySelector('#checkbox-overlay');
const estado_barra = document.querySelector('#estado-barra');
let ls_overlay = localStorage.getItem('overlay');

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

const divm3u = document.createElement('div');
    divm3u.className = 'm3u-stream';
const m3uvideo = document.createElement('video');
    m3uvideo.className = 'm3u-player video-js vjs-theme-fantasy vjs-16-9 vjs-fluid';
    m3uvideo.toggleAttribute('controls'); 
divm3u.append(m3uvideo)
   
function crear_iframe(source) {
    const fragment_iframe = document.createDocumentFragment();
    const iframe = document.createElement('iframe');
        iframe.setAttribute('src', source);
        iframe.setAttribute('allowFullScreen', ''); 
    fragment_iframe.append(iframe);
    return fragment_iframe;
}

function barra_nombre(nombre, fuente) {
    const fragment_barra = document.createDocumentFragment();
    let a = document.createElement('a');
        a.innerHTML = nombre;
        a.setAttribute('title', 'Ir a la página oficial de esta transmisión');
        a.href = fuente;
        a.setAttribute('rel', 'noopener nofollow noreferrer');
        fragment_barra.append(a);
    return fragment_barra;
}; 

function barra_nombre_m3u8(nombre) {
    const fragment_barra_m3u8 = document.createDocumentFragment();
    let span = document.createElement('span');
        span.textContent = nombre;
        span.setAttribute('title', 'Transmisión NO OFICIAL');
        fragment_barra_m3u8.append(span);
    return fragment_barra_m3u8;
}; 

function limpia_transmision() {
    container_transmision.innerHTML = ""
    barra.textContent = "";
}

// PARA LISTADO PRINCIPAL "canales"
let fragmento_botones = document.createDocumentFragment();
canales.forEach(canal => {
    // crea botones
    const boton_canal = document.createElement('button');
        boton_canal.classList.add('btn', 'boton-canal');
        boton_canal.textContent = canal.nombre;

    // crea evento si clic
    boton_canal.addEventListener('click', function() {
        // elimina div o iframe canal existente (o no)
        limpia_transmision()
        // cadenas if acorde a tipo de transmision
        if (canal.iframe){     
            container_transmision.append(crear_iframe(canal.iframe));
        } else if (canal.m3u8){
            container_transmision.append(divm3u)
            let m3uplayer = videojs(document.querySelector('.m3u-player'));
                m3uplayer.src( {
                    src: canal.m3u8,
                    controls: true,
                    preload: 'auto'
                });

            // https://goo.gl/LdLk22
            let playPromise = m3uplayer.play();
    
                if (playPromise !== undefined) {
                playPromise.then(_ => {
                    m3uplayer.pause();
                })
                .catch(error => {
                    console.log(error)
                });
                }
            
        } else if (canal.yt_id){
            container_transmision.append(crear_iframe(`https://www.youtube-nocookie.com/embed/live_stream?channel=${canal.yt_id}&autoplay=1&mute=0&modestbranding=1&showinfo=0`));
            barra.append(barra_nombre(canal.nombre, `https://www.youtube.com/channel/${canal.yt_id}`));
        } else if (canal.yt_embed){
            container_transmision.append(crear_iframe(`https://www.youtube-nocookie.com/embed/${canal.yt_embed}?autoplay=1&mute=0&modestbranding=1&showinfo=0`));
        }
        // si posee enlace 'fuente'
        if (canal.fuente) {
            barra.append(barra_nombre(canal.nombre, canal.fuente));
        }

        if (checkbox.checked === true) {
            overlay.classList.remove('d-none');
        }
    });
    fragmento_botones.append(boton_canal);
});
botones_canales.append(fragmento_botones);

// PARA LISTADO ALTERNO "canales_m3u8"
let fragmento_botones_m3u8 = document.createDocumentFragment();
canales_m3u8.forEach(canal => {
    // crea botones
    const boton_canal = document.createElement('button');
        boton_canal.classList.add('btn', 'boton-canal');
        boton_canal.textContent = canal.nombre;
    // crea evento si clic
    boton_canal.addEventListener('click', function() {
        // elimina div o iframe canal existente (o no)
        limpia_transmision()
        // carga señal m3u8
        container_transmision.append(divm3u)
        let m3uplayer = videojs(document.querySelector('.m3u-player'));
            m3uplayer.src( {
                src: canal.m3u8,
                controls: true,
                preload: 'auto'
            });
        
        let playPromise = m3uplayer.play();
            if (playPromise !== undefined) {
            playPromise.then(_ => {
                m3uplayer.pause();
            })
            .catch(error => {
                console.log(error)
            });
            }

        barra.append(barra_nombre_m3u8(`${canal.nombre} | M3U8`));
   
        if (checkbox.checked === true) {
            overlay.classList.remove('d-none');
        }
    }); 
   fragmento_botones_m3u8.append(boton_canal);
});

botones_canales_m3u8.append(fragmento_botones_m3u8);

// https://www.w3schools.com/howto/howto_js_active_element.asp
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('activo');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(' activo', '');
        } 
        this.className += ' activo';
        recordatorio.innerHTML = 'Cargando...<br>(^‿^)';
    });
};

// boton limpia/elimina señal activa
boton_borrar.addEventListener('click', function() {
    limpia_transmision()
    const current = document.getElementsByClassName('activo');
        current[0].className = current[0].className.replace(' activo', '');
    recordatorio.textContent = '(∪ ◡ ∪)';
    if (checkbox.checked === true) {
        overlay.classList.add('d-none');
    }
});

// alternar listas
boton_alternar.addEventListener('click', function() {
    if (botones_canales.style.display === 'none'){
        setTimeout ( () => {
            boton_alternar.disabled = false;
            botones_canales.style.display = 'grid';
        }, 610);
        boton_alternar.disabled = true;
        botones_canales.style.display = 'grid';
    } else {
        boton_alternar.disabled = true;
        setTimeout( () => {
            boton_alternar.disabled = false;
            botones_canales.style.display = 'none';
        }, 610); /* animacion flipper dura 6 segundos */
    }
    flip.classList.toggle('hover');
});

// overlay on/off
checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
        checkbox.setAttribute('checked', 'checked');
        if(container_transmision.childElementCount === 1) {
            overlay.classList.remove('d-none');
        }
        estado_barra.innerText= 'ON'
        localStorage.setItem('overlay', 'show');
    } else {
        checkbox.removeAttribute('checked', 'checked');
        overlay.classList.add('d-none');
        estado_barra.innerText= 'OFF'
        localStorage.setItem('overlay', 'hide');
    };
});

// carga opcion guarda overlay 
window.addEventListener('DOMContentLoaded', () => {
    if (ls_overlay !== 'hide') {
        estado_barra.innerText= 'ON'
        checkbox.setAttribute('checked', 'checked');
    } else {
        overlay.classList.add('d-none');
        estado_barra.innerText= 'OFF'
        checkbox.removeAttribute('checked', 'checked');
    }
})

// filtro de canales https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
const buscar = document.querySelector('#mifiltro');

document.onkeydown = (e) => {
    buscar.focus();
    /* buscar.scrollIntoView(); */
    if (e.key == 'Escape' || e.key == '27'){
        buscar.value = '';
        buscar.blur();
    }
}

function liveSearch() {
    let botones_a_filtrar = document.querySelectorAll('div.lista-botones > button');
   
    for (let i = 0; i < botones_a_filtrar.length; i++) {
        if(botones_a_filtrar[i].textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
                .includes(buscar.value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
                )) {
            botones_a_filtrar[i].classList.remove('d-none');
        } else {
            botones_a_filtrar[i].classList.add('d-none');
        }
    }
};
buscar.addEventListener('input', liveSearch);


// ----- MODAL BIENVENIDA CON LOCALSTORAGE PARA QUE NO VUELVA A APARECER AL HACER CLIC EN BOTÓN
const modal = document.querySelector('#modal-legal');
const btn_entendido = document.querySelector('#boton-entendido');
let ls_modal = localStorage.getItem('modal_status');

const show_modal_bienvenida = () => {
    modal.style.display = 'block';
    localStorage.setItem('modal_status', 'show');
};

const hide_modal_bienvenida = () => {
    modal.style.display = 'none';
    localStorage.setItem('modal_status', 'hide');
};

if (ls_modal !== 'hide') {
  show_modal_bienvenida();
} 

btn_entendido.addEventListener('click', () => {
  ls_modal = localStorage.getItem('modal_status'); 
    if(ls_modal !== 'show') {
      show_modal_bienvenida();
    } else {
      hide_modal_bienvenida();
    }
});

// botones cerrar modal
const btn_cerrar_modal = document.querySelector('div.modal-header > span')
btn_cerrar_modal.addEventListener('click', () => {
    modal.style.display = 'none';
})


// boton footer abrir modal
const btn = document.querySelector('#boton-legal');
btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// clic fuera modal lo cierra
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});