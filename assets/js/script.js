const seccionCanales = document.getElementById('channel-btns');
const seccionCanalesM3u = document.getElementById('channel-btns-m3u');
const videoContainer = document.getElementById('video-container');
const iframe = document.createElement('iframe');
    iframe.id = 'player';
const divm3u = document.createElement('div');
    divm3u.className = 'm3u-stream';
const m3uvideo = document.createElement('video');
    m3uvideo.id = 'm3u-player';
    m3uvideo.className = 'm3u-player video-js vjs-16-9 vjs-fluid';
    m3uvideo.toggleAttribute('controls'); 
    divm3u.append(m3uvideo)
const nombreBarra = document.createElement('div');
    nombreBarra.id = 'nombre-barra';
    nombreBarra.className = 'nombre-barra';
const ancla = document.createElement('a');
    ancla.id = 'links';
const nombreM3u = document.createElement('span')
    nombreM3u.id = 'links';

const fragment = document.createDocumentFragment();
const fragmentm3u = document.createDocumentFragment();

LosCanales.forEach(canal  =>  {
    if (canal.url !== undefined && canal.m3u === undefined){
/*  canal
    url: true
    m3u: 
*/
        const BtnCanal = document.createElement('BUTTON');
            BtnCanal.classList.add('channel');
            BtnCanal.innerHTML = canal.nombre;
            BtnCanal.classList.add('solo-iframe');
            BtnCanal.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
                divm3u.remove(); 
                nombreM3u.remove();  
                videoContainer.append(iframe);
                    player.setAttribute(
                        'src',
                        canal.url
                    );
                document.getElementById('video-container').append(nombreBarra);
                ancla.href = canal.fuente;
                ancla.innerText = canal.nombre;
                ancla.title = 'Ir a la página oficial de esta transmisión';
                document.getElementById('nombre-barra').append(ancla);
            }
        fragment.append(BtnCanal);
    } else if (canal.url === undefined && canal.m3u !== undefined){
/*         
    canal
    url: 
    m3u: true
*/
        const BtnCanalM3u = document.createElement('BUTTON');
            BtnCanalM3u.classList.add('channel');
            BtnCanalM3u.innerHTML = canal.nombre;
            BtnCanalM3u.classList.add('solo-m3u');
            BtnCanalM3u.onclick = () => {
                iframe.remove();
                ancla.remove();
                videoContainer.append(divm3u)
                let m3uplayer = videojs(document.querySelector('.m3u-player'));
                    m3uplayer.src( {
                        src: canal.m3u,
                        controls: true,
                        autoplay: false,
                        preload: 'auto'
                    });
                m3uplayer.play();
                document.getElementById('video-container').append(nombreBarra);
                nombreM3u.innerText = `${canal.nombre} | M3U8`;
                nombreM3u.title = 'transmisión NO OFICIAL';
                document.getElementById('nombre-barra').append(nombreM3u);
            }
        fragmentm3u.append(BtnCanalM3u);
    } /* else 
        console.log (`oe gil el ${canal.nombre} esta sin señales`); */
    },
);
seccionCanales.append(fragment);
seccionCanalesM3u.append(fragmentm3u);

// https://www.w3schools.com/howto/howto_js_active_element.asp
const btns = document.getElementsByClassName('channel');
const recordatorio = document.getElementById('recordatorio');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
    recordatorio.textContent = 'Cargando...';
    });
};

// flip canales
const flip = document.getElementById('flip-container');
const botoniptv = document.getElementById('boton-iptv');

botoniptv.onclick = () => {
    if (seccionCanales.style.display === 'none'){
        seccionCanales.style.display = 'grid';
    }
    else {
        setTimeout( () => {
            seccionCanales.style.display = 'none';
        }, 610); /* animacion flipper dura 6 segundos */
    }
    flip.classList.toggle('hover');
};

/// nombre transmisiones on/off
const slider = document.getElementById('checkbox');

slider.onclick = ()  => {
    if (nombreBarra.style.display === "none") {
        nombreBarra.style.display = "block";
        slider.checked = true;
    } else {
        nombreBarra.style.display = "none";
        slider.checked = false;
    }
};