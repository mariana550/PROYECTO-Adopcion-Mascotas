//VALIDACIONES DEL FORMULARIO DE ADOPCION
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    let formularioValido = true;
//VALIDACION NOMBRE 
    const nombreInput = document.getElementById('exampleInputName');
    const nombreValor = nombreInput.value.trim();
    // Expresión regular para validar el nombre (solo letras y espacios, al menos 3 caracteres)
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

    if (nombreValor.length < 3 || !nombreRegex.test(nombreValor)) {
        nombreInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        nombreInput.classList.remove('is-invalid');
    }
//VALIDACION EDAD 
    const edadInput = document.getElementById('exampleInputEdad');
    const edadValor = parseInt(edadInput.value.trim());
    const edadFloat = parseFloat(edadInput.value.trim());

    // Expresión regular para validar la edad (solo números, entre 18 y 120)
    const edadRegex = /^(?:[1-9]|[1-9][0-9]|1[0-1][0-9]|120)$/;

    if(edadValor < 18 || edadValor > 120 || !edadRegex.test(edadValor) || edadFloat !== edadValor) {
        edadInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        edadInput.classList.remove('is-invalid');
    }
//VALIDACION TELEFONO
    const telefonoInput = document.getElementById('exampleInputTelefono');
    const telefonoValor = telefonoInput.value.trim();

    // Expresión regular para validar el teléfono (solo números, 10 dígitos, inicia en 3)
    const telefonoRegex = /^3\d{9}$/;

    if(telefonoValor.length !== 10 || !telefonoRegex.test(telefonoValor)) {
        telefonoInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        telefonoInput.classList.remove('is-invalid');
    }
//VALIDACION DIRECCION
    const direccionInput = document.getElementById('exampleInputDireccion');
    const direccionValor = direccionInput.value.trim();
    // Expresión regular para validar la dirección (al menos 5 Y 100caracteres)
    const direccionRegex = /^.{5,100}$/;

    if(direccionValor.length < 5 || direccionValor.length > 100 || !direccionRegex.test(direccionValor)) {
        direccionInput.classList.add('is-invalid');
        formularioValido = false;
    } else {
        direccionInput.classList.remove('is-invalid');
    }
//VALIDACION CEDULA
    const cedulaInput = document.getElementById('exampleInputCedula');
    const cedulaValor = cedulaInput.value.trim();

    // Expresión regular para validar la cédula (solo números, entre 6 y 10 dígitos)
    const cedulaRegex = /^\d{6,10}$/;

    if(cedulaValor.length < 6 || cedulaValor.length > 10 || !cedulaRegex.test(cedulaValor)) {
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
    formulario.reset();

    // Mostrar el hsitorial de solicitudes actualizado
    mostrarHistorial();
}
});