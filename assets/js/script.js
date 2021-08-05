const seccionCanales = document.getElementById('channel-btns');
const seccionCanalesM3u = document.getElementById('channel-btns-m3u');

const btns = document.getElementsByClassName('channel');

const recordatorio = document.getElementById('recordatorio');

const flip = document.getElementById('flip-container');

const botoniptv = document.getElementById('boton-iptv');



const videoContainer = document.getElementById('video-container');
const iframe = document.createElement('iframe');
iframe.id = 'player';




const divm3u = document.createElement('div');
divm3u.className = 'm3u-wea';

const m3uvideo = document.createElement('video');
m3uvideo.id = 'm3u-player';
m3uvideo.className = 'm3u-player video-js vjs-16-9 vjs-fluid';
/* m3uvideo.className = 'video-js vjs-16-9'; */
/*  m3uvideo.toggleAttribute('autoplay'); */
m3uvideo.toggleAttribute('controls'); 


/* const sourceVideo = document.createElement('source');
sourceVideo.id= 'ctm'; */
/* sourceVideo.setAttribute('type', 'application/x-mpegURL'); */
/* m3uvideo.append(sourceVideo); */
divm3u.append(m3uvideo)


const nombreBarra = document.createElement('div');
nombreBarra.id = 'nombre-barra';
nombreBarra.className = 'nombre-barra';

const ancla = document.createElement('A');
ancla.id = 'links';
ancla.title = 'Ir a la página oficial de esta transmisión';

const fragment = document.createDocumentFragment();
const fragmentm3u = document.createDocumentFragment();

LosCanales.forEach(canal  =>  {
    
    
    
        

    if (canal.url !== undefined && canal.m3u === undefined){
       
/*  canal
    url: www.wea.cl
    m3u: 
        crear boton en listado y agregarlo normal para reproducrise
*/
        const BtnCanal = document.createElement('BUTTON');
        BtnCanal.classList.add('channel');
        BtnCanal.innerHTML = canal.nombre;
        BtnCanal.classList.add('solo-iframe');
        
        BtnCanal.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
            
                divm3u.remove();   
                videoContainer.append(iframe);
                player.setAttribute(
                    'src',
                    canal.url
                );
                document.getElementById('video-container').append(nombreBarra);
                ancla.href = canal.fuente;
                ancla.innerText = canal.nombre;
                document.getElementById('nombre-barra').append(ancla);
            }
        fragment.append(BtnCanal)
            

    } else if (canal.url === undefined && canal.m3u !== undefined){

/*         
    canal
    url: 
    m3u: www.wea.cl
        Crear boton que permita cambiar de columna en el listado de canales
        para pasar a modo 'IPTV' y ahi poner solo los botones de canales que tengan m3u
        y que se vayan agregando normalmente para verse, solo que estarian en secciones distintas 
*/

        const BtnCanalM3u = document.createElement('BUTTON');
        BtnCanalM3u.classList.add('channel');
        BtnCanalM3u.innerHTML = canal.nombre;
        BtnCanalM3u.classList.add('solo-m3u');
        BtnCanalM3u.onclick = () => {


           
            
            iframe.remove();
                    
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
            ancla.href = canal.fuente;
            ancla.innerText = canal.nombre;
            document.getElementById('nombre-barra').append(ancla);
            
        }
        
      
        fragmentm3u.append(BtnCanalM3u)


   
    } /* else 
        console.log (`oe gil el ${canal.nombre} esta sin señales`); */

       
},
   


    
);
   



seccionCanales.append(fragment);
seccionCanalesM3u.append(fragmentm3u);

// https://www.w3schools.com/howto/howto_js_active_element.asp
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        
      const current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += ' active';
      recordatorio.textContent = 'Cargando...';
    });
}





botoniptv.onclick = () => {
	flip.classList.toggle('hover');
};







/* } else if (canal.url !== undefined && canal.m3u !== undefined){
    /* 
        canal
        url: www.wea.cl
        m3u: www.wea.cl
            si contiene ambos metodos crear boton normal, siendo url la opcion principal, dejando como secundaria el m3u. para dejarla como secundaria se crea un boton flotante (igual que nombre-barra) que diga 'opcion 2' y que permita pasar al m3u de ese canal 
    
    
    const BtnCanal2 = document.createElement('BUTTON');
    BtnCanal2.classList.add('channel');
    BtnCanal2.innerHTML = canal.nombre;
    BtnCanal2.classList.add('solo-iframe');
    
    BtnCanal2.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
        
            divm3u.remove();   
            videoContainer.append(iframe);
            player.setAttribute(
                'src',
                canal.url
            );
            document.getElementById('video-container').append(nombreBarra);
            ancla.href = canal.fuente;
            ancla.innerText = canal.nombre;
            document.getElementById('nombre-barra').append(ancla);
    
    
    
            const BtnM3uSecondary = document.createElement('BUTTON');
    BtnM3uSecondary.classList.add('channel-secondary');
    BtnM3uSecondary.id = 'channel-secondary';
    BtnM3uSecondary.textContent = 'Opcion IPTV';
    BtnM3uSecondary.classList.add('solo-m3u');
    BtnM3uSecondary.onclick = () => {
                iframe.remove();
                        
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
                ancla.href = canal.fuente;
                ancla.innerText = canal.nombre;
                document.getElementById('nombre-barra').append(ancla); 
                
            }
            
            nombreBarra.append(BtnM3uSecondary)
        }
    
        fragment.append(BtnCanal2)
     */
    
    



      