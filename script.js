const seccionCanales = document.getElementById("channel-list");
const btns = seccionCanales.getElementsByClassName("channel");

const nombreBarra = document.createElement('div');
nombreBarra.id = 'nombre-barra';
nombreBarra.className = 'nombre-barra';

const ancla = document.createElement('A');
ancla.id = 'links';
ancla.title = 'Ir a la página oficial de esta transmisión';

for (const canal of LosCanales) {
    const BtnCanal = document.createElement('BUTTON');

    BtnCanal.classList.add('channel');
    BtnCanal.innerHTML = canal.nombre;

    BtnCanal.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
        player.setAttribute(
            'src',
            canal.url
        );

        document.getElementById('video-container').appendChild(nombreBarra);
        ancla.href = canal.fuente;
        ancla.innerText = canal.nombre;
        document.getElementById('nombre-barra').appendChild(ancla);
    };
    seccionCanales.appendChild(BtnCanal)
}

// https://www.w3schools.com/howto/howto_js_active_element.asp
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}