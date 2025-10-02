// Contador regresivo
const diasSpan = document.getElementById('dias');
const horasSpan = document.getElementById('horas');
const minutosSpan = document.getElementById('minutos');
const segundosSpan = document.getElementById('segundos');

const evento = new Date("October 12, 2025 19:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = evento - ahora;

    const dias = Math.floor(distancia / (1000*60*60*24));
    const horas = Math.floor((distancia % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((distancia % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((distancia % (1000*60)) / 1000);

    diasSpan.innerText = dias;
    horasSpan.innerText = horas;
    minutosSpan.innerText = minutos;
    segundosSpan.innerText = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// Enviar datos al Google Form
const rsvpBtn = document.getElementById('rsvpBtn');
const confirmation = document.getElementById('confirmation');
const nombreInput = document.getElementById('nombre');
const asistiraSelect = document.getElementById('asistira');

rsvpBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    const asistira = asistiraSelect.value;

    if(nombre === "") {
        alert("Por favor escribe tu nombre.");
        return;
    }

    // REEMPLAZA con tu Google Form ID y Entry IDs
    const formBase = "https://docs.google.com/forms/d/e/TU_FORM_ID/formResponse";
    const nombreEntry = "entry.1111111111";
    const asistiraEntry = "entry.2222222222";

    const submitURL = `${formBase}?${nombreEntry}=${encodeURIComponent(nombre)}&${asistiraEntry}=${encodeURIComponent(asistira)}&submit=Submit`;

    fetch(submitURL, { method: "POST", mode: "no-cors" })
        .then(() => {
            confirmation.classList.remove('hidden');
            nombreInput.value = "";
        })
        .catch(err => alert("Error al enviar, intenta de nuevo."));
});
