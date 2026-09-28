function abrirFormularioAdopcion(nombreMascota) {

    // Muestra  el formulario de adopción
    const formularioAdopcion = document.getElementById('contenedor-formulario');

    formularioAdopcion.style.display = 'block';

    // Rellena el campo del nombre de la mascota en el formulario
    const nombreMascotaInput = document.getElementById('mascota-nombre');
    nombreMascotaInput.value = nombreMascota;

    //Texto visible para el usuario
    document.getElementById('nombreMascotaVisible').textContent = nombreMascota;

    // Desplazarse hacia el formulario de adopción
    formularioAdopcion.scrollIntoView({ behavior: 'smooth' });
}