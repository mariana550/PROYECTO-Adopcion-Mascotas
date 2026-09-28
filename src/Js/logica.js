//Validacion de la edad del adoptante
function validarEdad(valor){
    const texto = String(valor).trim();
    const edadValor = parseInt(texto);
    const edadFloat = parseFloat(texto);
    const edadRegex = /^(?:[1-9]|[1-9][0-9]|1[0-1][0-9]|120)$/;

    return !(edadValor < 18 || edadValor > 120 || !edadRegex.test(edadValor) || edadFloat !== edadValor);
}
//Validacion del nombre 
function validarNombre(valor){
    const nombreValor = String(valor).trim();
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

    return !(nombreValor.length < 3 || !nombreRegex.test(nombreValor));
}
//Validacion telefono 
function validarTelefono(valor){
    const telefonoValor = String(valor).trim();
    const telefonoRegex = /^3\d{9}$/;

    return !(telefonoValor.length !== 10 || !telefonoRegex.test(telefonoValor));
}
//Validacion direccion
function validarDireccion(valor){
    const direccionValor = String(valor).trim();
    const direccionRegex = /^.{5,100}$/;

    return !(direccionValor.length < 5 || direccionValor.length > 100 || !direccionRegex.test(direccionValor));
}
//Validacion cedula
function validarCedula(valor){
    const cedulaValor = String(valor).trim();
    const cedulaRegex = /^\d{6,10}$/;

    return !(cedulaValor.length < 6 || cedulaValor.length > 10 || !cedulaRegex.test(cedulaValor));
}
//Validacion en el calculo de la edad de las macotas
function calcularEdadMascota(edadMeses){
    const anios = Math.floor(edadMeses / 12);
    const mesesRestantes = edadMeses % 12;

    return { anios: anios , mesesRestantes: mesesRestantes};

}
//Este bloque sirve para que el archive funcione el pruebas de jest y pueda importarla e exportalas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarEdad, validarNombre, validarTelefono, validarDireccion, validarCedula, calcularEdadMascota };
}
