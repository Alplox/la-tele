import { CONTAINER_BOTONES_CANALES_PRINCIPAL, CONTAINER_BOTONES_CANALES_SECUNDARIOS, INPUT_FILTRADO_CANALES } from "./main.js";
import { normalizeText } from "./ui-utils.js";

const mensajeSinResultadosPrincipal = document.querySelector('#sin-resultados-canal-principal');
const mensajeSinResultadosSecundario = document.querySelector('#sin-resultados-canal-secundario');
if (!mensajeSinResultadosPrincipal || !mensajeSinResultadosSecundario) {
    console.error('filtro.js: elementos #sin-resultados-canal no encontrados en el DOM');
}

export const filtro = () => {
    let valorInput = normalizeText(INPUT_FILTRADO_CANALES.value);
    let inputNoVacio = INPUT_FILTRADO_CANALES.value.trim().length > 0;
    let esPrincipalVisible = CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display !== 'none';

    const container = esPrincipalVisible ? CONTAINER_BOTONES_CANALES_PRINCIPAL : CONTAINER_BOTONES_CANALES_SECUNDARIOS;
    const botones = [...container.querySelectorAll('button')];

    let totalCoincidencias = 0;
    botones.forEach(btn => {
        let esCoincidencia = normalizeText(btn.textContent).includes(valorInput);
        btn.classList.toggle('d-none', inputNoVacio ? !esCoincidencia : false);
        if (esCoincidencia) totalCoincidencias++;
    });

    if (botones.length > 0) {
        mensajeSinResultadosPrincipal.classList.replace('d-block', 'd-none');
        mensajeSinResultadosSecundario.classList.replace('d-block', 'd-none');
    }

    if (inputNoVacio && totalCoincidencias === 0 && botones.length > 0) {
        if (esPrincipalVisible) {
            mensajeSinResultadosPrincipal.textContent = `SIN RESULTADOS PARA "${INPUT_FILTRADO_CANALES.value}"`;
            mensajeSinResultadosPrincipal.classList.replace('d-none', 'd-block');
        } else {
            mensajeSinResultadosSecundario.textContent = `SIN RESULTADOS PARA "${INPUT_FILTRADO_CANALES.value}"`;
            mensajeSinResultadosSecundario.classList.replace('d-none', 'd-block');
        }
    }

    if (!inputNoVacio && botones.length === 0) {
        const msg = esPrincipalVisible ? mensajeSinResultadosPrincipal : mensajeSinResultadosSecundario;
        if (!msg.textContent) {
            msg.textContent = 'NO HAY CANALES DISPONIBLES';
        }
        msg.classList.replace('d-none', 'd-block');
    }
};