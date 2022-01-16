/* 
Main v0.5
por Alplox 
*/

const barra = document.getElementById('nombre-barra');
const container__transmision = document.getElementById('transmision');
const botones__canales = document.getElementById('lista__botones');
const botones__canales__m3u8 = document.getElementById('lista__botones__m3u8');

const divm3u = document.createElement('div');
    divm3u.className = 'm3u-stream';
const m3uvideo = document.createElement('video');
    m3uvideo.className = 'm3u-player video-js vjs-16-9 vjs-fluid';
    m3uvideo.toggleAttribute('controls'); 
divm3u.append(m3uvideo)
   
function crear__iframe(source) {
    const fragment__iframe = document.createDocumentFragment();
    const iframe = document.createElement('iframe');
        iframe.setAttribute('src', source);
        iframe.setAttribute('allowFullScreen', ''); 
    fragment__iframe.append(iframe);
    return fragment__iframe;
}

function barra__nombre(nombre, fuente) {
    const fragment__barra = document.createDocumentFragment();
    let a = document.createElement('a');
        a.innerHTML = nombre;
        a.setAttribute('title', 'Ir a la página oficial de esta transmisión');
        a.href = fuente;
        a.setAttribute('rel', 'noopener nofollow noreferrer');
        fragment__barra.append(a);
    return fragment__barra;
}; 

function barra__nombre__m3u8(nombre) {
    const fragment__barra__m3u8 = document.createDocumentFragment();
    let span = document.createElement('span');
        span.innerHTML = nombre;
        span.setAttribute('title', 'Transmisión NO OFICIAL');
        fragment__barra__m3u8.append(span);
    return fragment__barra__m3u8;
}; 

function limpia__transmision() {
    container__transmision.innerHTML = ""
    barra.innerHTML = "";
}

// PARA LISTADO PRINCIPAL "canales"
let fragmento__botones = document.createDocumentFragment();
canales.forEach(canal => {
    // crea botones
    const boton__canal = document.createElement('button');
        boton__canal.classList.add('boton__canal', 'para-filtro');
        boton__canal.innerHTML = canal.nombre;

    // crea evento si clic
    boton__canal.addEventListener('click', function() {
        // elimina div o iframe canal existente (o no)
        limpia__transmision()
        // cadenas if acorde a tipo de transmision
        if (canal.iframe){     
            container__transmision.append(crear__iframe(canal.iframe));
        } else if (canal.m3u8){
            container__transmision.append(divm3u)
            let m3uplayer = videojs(document.querySelector('.m3u-player'));
                m3uplayer.src( {
                    src: canal.m3u8,
                    controls: true,
                    preload: 'auto'
                });
            m3uplayer.play();
        } else if (canal.yt_id){
            container__transmision.append(crear__iframe(`https://www.youtube-nocookie.com/embed/live_stream?channel=${canal.yt_id}&autoplay=1&mute=0&modestbranding=1&showinfo=0`));
            barra.append(barra__nombre(canal.nombre, `https://www.youtube.com/channel/${canal.yt_id}`));
        } else if (canal.yt_embed){
            container__transmision.append(crear__iframe(`https://www.youtube-nocookie.com/embed/${canal.yt_embed}?autoplay=1&mute=0&modestbranding=1&showinfo=0`));
        }
        // si posee enlace 'fuente'
        if (canal.fuente) {
            barra.append(barra__nombre(canal.nombre, canal.fuente));
        }
    });





fragmento__botones.append(boton__canal);
});
botones__canales.append(fragmento__botones);

// PARA LISTADO ALTERNO "canales__m3u8"
let fragmento__botones__m3u8 = document.createDocumentFragment();
canales__m3u8.forEach(canal => {
    // crea botones
    const boton__canal = document.createElement('button');
        boton__canal.classList.add('boton__canal', 'para-filtro');
        boton__canal.innerHTML = canal.nombre;
    // crea evento si clic
    boton__canal.addEventListener('click', function() {
        // elimina div o iframe canal existente (o no)
        limpia__transmision()
        // carga señal m3u8
            container__transmision.append(divm3u)
            let m3uplayer = videojs(document.querySelector('.m3u-player'));
                m3uplayer.src( {
                    src: canal.m3u8,
                    controls: true,
                    preload: 'auto'
                });
            m3uplayer.play();

            barra.append(barra__nombre__m3u8(`${canal.nombre} | M3U8`));
        });
    fragmento__botones__m3u8.append(boton__canal);
});
botones__canales__m3u8.append(fragmento__botones__m3u8);

// https://www.w3schools.com/howto/howto_js_active_element.asp
const botones = document.getElementsByClassName('boton__canal');
const recordatorio = document.getElementById('recordatorio');

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
const boton__borrar = document.getElementById('boton-borrar');

boton__borrar.addEventListener('click', function() {
    limpia__transmision()
    const current = document.getElementsByClassName('activo');
        current[0].className = current[0].className.replace(' activo', '');
    recordatorio.textContent = '(∪ ◡ ∪)';
});

// alternar listas
const flip = document.getElementById('flip-container');
const boton__alternar = document.getElementById('boton-alternar');

boton__alternar.addEventListener('click', function() {
    if (botones__canales.style.display === 'none'){
        setTimeout ( () => {
            boton__alternar.disabled = false;
            botones__canales.style.display = 'grid';
        }, 610);
        boton__alternar.disabled = true;
        botones__canales.style.display = 'grid';
    } else {
        boton__alternar.disabled = true;
        setTimeout( () => {
            boton__alternar.disabled = false;
            botones__canales.style.display = 'none';
        }, 610); /* animacion flipper dura 6 segundos */
    }
    flip.classList.toggle('hover');
});

// nombre transmisiones on/off
const checkbox = document.getElementById('switch-nombre-transmisiones');
const estado_bara = document.getElementById('estada-barra');

checkbox.onclick = () => {
    let barra__activa = document.querySelector('.nombre-barra');
    if (checkbox.checked === true) {
        barra__activa.style.display = 'block';
        estado_bara.innerText= 'ON'
    } else {
        barra__activa.style.display = 'none';
        estado_bara.innerText= 'OFF'
        checkbox.checked = false;
    };
};

// filtro de canales https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
const buscar = document.getElementById('mifiltro');

document.onkeydown = (e) => {
    buscar.focus();
    /* buscar.scrollIntoView(); */
    if (e.key == 'Escape' || e.key == '27'){
        buscar.value = '';
        buscar.blur();
    }
}

function liveSearch() {
    let botones__a__filtrar = document.querySelectorAll('.para-filtro');
    let filtro__input = buscar.value;

    for (let i = 0; i < botones__a__filtrar.length; i++) {
        if(botones__a__filtrar[i].textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
                .includes(filtro__input.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
                )) {
            botones__a__filtrar[i].classList.remove('is-hidden');
        } else {
            botones__a__filtrar[i].classList.add('is-hidden');
        }
    }
};
buscar.addEventListener('input', liveSearch);

// Modal
const btn = document.getElementById('boton__legal');
const modal = document.getElementById('modal__legal');
const btn__entendido = document.getElementById('boton__entendido');

// Modal legal junto a crear cookie para que no vuelva a salir al hacer clic en boton
window.addEventListener('DOMContentLoaded', () => {
  if (document.cookie.indexOf('ModalShown=true') < 0) {
    modal.style.display = 'block';
    console.log('cookie aun no creada');
    btn__entendido.onclick = () => {
        modal.style.display = 'none';
      console.log('cookie creada');
      document.cookie = 'ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict; Secure';
    };
  } else {
    console.log('cookie existe')
  }
});

// botones cerrar modal
document.querySelectorAll('.modal__boton__cerrar').forEach(item => {
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