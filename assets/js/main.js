/* 
Main v0.5
por Alplox 
*/

const barra = document.querySelector('#nombre-barra');
const container_transmision = document.querySelector('#transmision');
const botones_canales = document.querySelector('#lista-botones');
const botones_canales_m3u8 = document.querySelector('#lista-botones-m3u8');

const divm3u = document.createElement('div');
    divm3u.className = 'm3u-stream';
const m3uvideo = document.createElement('video');
    m3uvideo.className = 'm3u-player video-js vjs-16-9 vjs-fluid';
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
        span.innerHTML = nombre;
        span.setAttribute('title', 'Transmisión NO OFICIAL');
        fragment_barra_m3u8.append(span);
    return fragment_barra_m3u8;
}; 

function limpia_transmision() {
    container_transmision.innerHTML = ""
    barra.innerHTML = "";
}

// PARA LISTADO PRINCIPAL "canales"
/* let fragmento_botones = document.createDocumentFragment();
canales.forEach(canal => {
    // crea botones
    const boton_canal = document.createElement('button');
        boton_canal.classList.add('boton-canal', 'para-filtro');
        boton_canal.innerHTML = canal.nombre;

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
            m3uplayer.play();
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
    });





fragmento_botones.append(boton_canal);
});
botones_canales.append(fragmento_botones); */

// PARA LISTADO ALTERNO "canales_m3u8"
let fragmento_botones_m3u8 = document.createDocumentFragment();
canales_m3u8.forEach(canal => {
    // crea botones
    const boton_canal = document.createElement('button');
        boton_canal.classList.add('boton-canal', 'para-filtro');
        boton_canal.innerHTML = canal.nombre;
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
            m3uplayer.play();

            barra.append(barra_nombre_m3u8(`${canal.nombre} | M3U8`));
        });
    fragmento_botones_m3u8.append(boton_canal);
});
botones_canales_m3u8.append(fragmento_botones_m3u8);

// https://www.w3schools.com/howto/howto_js_active_element.asp
const botones = document.querySelector('.boton-canal');
const recordatorio = document.querySelector('#recordatorio');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function() {
    const current = document.querySelector('.activo');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(' activo', '');
        } 
        this.className += ' activo';
        recordatorio.innerHTML = 'Cargando...<br>(^‿^)';
    });
};

// boton limpia/elimina señal activa
const boton_borrar = document.querySelector('#boton-borrar');

boton_borrar.addEventListener('click', function() {
    limpia_transmision()
    const current = document.querySelector('.activo');
        current[0].className = current[0].className.replace(' activo', '');
    recordatorio.textContent = '(∪ ◡ ∪)';
});

// alternar listas
const flip = document.querySelector('#flip-container');
const boton_alternar = document.querySelector('#boton-alternar');

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

// nombre transmisiones on/off
const checkbox = document.querySelector('#switch-nombre-transmisiones');
const estado_bara = document.querySelector('#estada-barra');

checkbox.onclick = () => {
    let barra_activa = document.querySelector('.nombre-barra');
    if (checkbox.checked === true) {
        barra_activa.style.display = 'block';
        estado_bara.innerText= 'ON'
    } else {
        barra_activa.style.display = 'none';
        estado_bara.innerText= 'OFF'
        checkbox.checked = false;
    };
};

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
    let botones_a_filtrar = document.querySelectorAll('.para-filtro');
    let filtro_input = buscar.value;

    for (let i = 0; i < botones_a_filtrar.length; i++) {
        if(botones_a_filtrar[i].textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
                .includes(filtro_input.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
                )) {
            botones_a_filtrar[i].classList.remove('is-hidden');
        } else {
            botones_a_filtrar[i].classList.add('is-hidden');
        }
    }
};
buscar.addEventListener('input', liveSearch);

// Modal
const btn = document.querySelector('#boton-legal');
const modal = document.querySelector('#modal-legal');
const btn_entendido = document.querySelector('#boton-entendido');

// Modal legal junto a crear cookie para que no vuelva a salir al hacer clic en boton
window.addEventListener('DOMContentLoaded', () => {
  if (document.cookie.indexOf('ModalShown=true') < 0) {
    modal.style.display = 'block';
    console.log('cookie aun no creada');
    btn_entendido.onclick = () => {
        modal.style.display = 'none';
      console.log('cookie creada');
      document.cookie = 'ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict; Secure';
    };
  } else {
    console.log('cookie existe')
  }
});

// botones cerrar modal
document.querySelectorAll('.modal-boton-cerrar').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'none';
    })
})

// boton footer abrir modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// clic fuera modal lo cierra
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};