//VALIDACIONES DEL FORMULARIO DE ADOPCION
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    let formularioValido = true;
//VALIDACION NOMBRE 
    const nombreInput = document.getElementById('exampleInputName');
    const nombreValor = nombreInput.value.trim();

    if (!validarNombre(nombreInput.value)) {
        nombreInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        nombreInput.classList.remove('is-invalid');
    }
//VALIDACION EDAD 
    const edadInput = document.getElementById('exampleInputEdad');
    const edadValor = parseInt(edadInput.value.trim());

    if(!validarEdad(edadInput.value)) {
        edadInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        edadInput.classList.remove('is-invalid');
    }
//VALIDACION TELEFONO
    const telefonoInput = document.getElementById('exampleInputTelefono');
    const telefonoValor = telefonoInput.value.trim();
    
    if(!validarTelefono(telefonoInput.value)) {
        telefonoInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        telefonoInput.classList.remove('is-invalid');
    }
//VALIDACION DIRECCION
    const direccionInput = document.getElementById('exampleInputDireccion');
    const direccionValor = direccionInput.value.trim();
    
    if(!validarDireccion(direccionInput.value)) {
        direccionInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        direccionInput.classList.remove('is-invalid');
    }
//VALIDACION CEDULA
    const cedulaInput = document.getElementById('exampleInputCedula');
    const cedulaValor = cedulaInput.value.trim();

    if(!validarCedula(cedulaInput.value)) {
        cedulaInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        cedulaInput.classList.remove('is-invalid');
    }
//VALIDACION DE ENVIO DEL FORMULARIO
if (formularioValido) {
    let solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];

    const mascotaSeleccionada = document.getElementById('mascota-nombre').value;

    const nuevaSolicitud = {
        nombre: nombreValor,
        edad: edadValor,
        telefono: telefonoValor,
        direccion: direccionValor,
        cedula: cedulaValor,
        mascotaSeleccionada: mascotaSeleccionada,
        fecha: new Date().toLocaleDateString(),
        estado: 'En Proceso'
    };
    // Guardar la solicitud en el localStorage
    solicitudes.push(nuevaSolicitud);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));

    // Mostrar mensaje de éxito y limpiar el formulario
    document.getElementById('mensajeExito').classList.remove('d-none');
    
    setTimeout(function() {
        document.getElementById('mensajeExito').classList.add('d-none');
    }, 3000); // Ocultar el mensaje después de 3 segundos
    
    formulario.reset();

    // Mostrar el hsitorial de solicitudes actualizado
    mostrarHistorial();
}
});