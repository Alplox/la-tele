import { CONTAINER_BOTONES_CANALES_PRINCIPAL, CONTAINER_BOTONES_CANALES_SECUNDARIOS, INPUT_FILTRADO_CANALES } from "./main.js";
import { normalizeText } from "./ui-utils.js";

const mensajeSinResultadosPrincipal = document.querySelector('#sin-resultados-canal-principal');
const mensajeSinResultadosSecundario = document.querySelector('#sin-resultados-canal-secundario');

export const filtro = () => {
    let valorInput = normalizeText(INPUT_FILTRADO_CANALES.value);
    let inputNoVacio = INPUT_FILTRADO_CANALES.value.trim().length > 0;
    let esPrincipalVisible = CONTAINER_BOTONES_CANALES_PRINCIPAL.style.display !== 'none';
    let contenedorVisible = esPrincipalVisible ? CONTAINER_BOTONES_CANALES_PRINCIPAL : CONTAINER_BOTONES_CANALES_SECUNDARIOS;
    let botonesFiltrar = [...contenedorVisible.querySelectorAll('button')];
    let totalCoincidencias = 0;
    botonesFiltrar.forEach(boton => {
        let esCoincidencia = normalizeText(boton.textContent).includes(valorInput);
        boton.classList.toggle('d-none', inputNoVacio ? !esCoincidencia : false);
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