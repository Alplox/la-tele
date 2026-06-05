import { CONTAINER_BOTONES_CANALES_PRINCIPAL, CONTAINER_BOTONES_CANALES_SECUNDARIOS, INPUT_FILTRADO_CANALES } from "./main.js";
import { normalizeText } from "./ui-utils.js";

const mensajeSinResultadosPrincipal = document.querySelector('#sin-resultados-canal-principal');
const mensajeSinResultadosSecundario = document.querySelector('#sin-resultados-canal-secundario');
if (!mensajeSinResultadosPrincipal || !mensajeSinResultadosSecundario) {
    console.error('filtro.js: elementos #sin-resultados-canal no encontrados en el DOM');
}

let cachePrincipal = null;
let cacheSecundario = null;

export const resetFiltroCache = () => {
    cachePrincipal = null;
    cacheSecundario = null;
};

export const filtro = () => {
    let valorInput = normalizeText(INPUT_FILTRADO_CANALES.value);
    let inputNoVacio = INPUT_FILTRADO_CANALES.value.trim().length > 0;
    let esPrincipalVisible = CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display !== 'none';

    let botonesFiltrar = [];
    if (esPrincipalVisible) {
        if (!cachePrincipal) {
            cachePrincipal = [...CONTAINER_BOTONES_CANALES_PRINCIPAL.querySelectorAll('button')].map(btn => ({
                element: btn,
                normalizedText: normalizeText(btn.textContent)
            }));
        }
        botonesFiltrar = cachePrincipal;
    } else {
        if (!cacheSecundario) {
            cacheSecundario = [...CONTAINER_BOTONES_CANALES_SECUNDARIOS.querySelectorAll('button')].map(btn => ({
                element: btn,
                normalizedText: normalizeText(btn.textContent)
            }));
        }
        botonesFiltrar = cacheSecundario;
    }

    let totalCoincidencias = 0;
    botonesFiltrar.forEach(item => {
        let esCoincidencia = item.normalizedText.includes(valorInput);
        item.element.classList.toggle('d-none', inputNoVacio ? !esCoincidencia : false);
        if (esCoincidencia) totalCoincidencias++;
    });

    // Oculta ambos mensajes por defecto
    mensajeSinResultadosPrincipal.classList.replace('d-block', 'd-none');
    mensajeSinResultadosSecundario.classList.replace('d-block', 'd-none');

    // Si input no vacío y sin coincidencias, muestra mensaje en el contenedor activo
    if (inputNoVacio && totalCoincidencias === 0) {
        if (esPrincipalVisible) {
            mensajeSinResultadosPrincipal.textContent = `SIN RESULTADOS PARA "${INPUT_FILTRADO_CANALES.value}"`;
            mensajeSinResultadosPrincipal.classList.replace('d-none', 'd-block');
        } else {
            mensajeSinResultadosSecundario.textContent = `SIN RESULTADOS PARA "${INPUT_FILTRADO_CANALES.value}"`;
            mensajeSinResultadosSecundario.classList.replace('d-none', 'd-block');
        }
    }
};