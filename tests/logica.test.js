const { 
    validarEdad,
    validarNombre,
    validarTelefono,
    validarDireccion,
    validarCedula,
    validarEdadMascota,
    formatearEdadMascota
} = require('../src/Js/logica.js');
//Grupo para validar las pruebas de edad 
describe('validarEdad',() => {
    test('UT-01: rechaza 17 años, límite inferior - 1 (REQ11)',() =>{
        expect(validarEdad('17')).toBe(false);
    });
    test('UT-02: acepta 18 años, límite inferior (REQ11)',() =>{
        expect(validarEdad('18')).toBe(true);
    });
    test('UT-03: acepta 120 años, límite superior (REQ12)',() =>{
        expect(validarEdad('120')).toBe(true);
    });
    test('UT-04: rechaza 121 años, límite superior +1 (REQ12)',() =>{
        expect(validarEdad('121')).toBe(false);
    });
    test('UT-05: rechaza numeros decimales  (REQ12)',() =>{
        expect(validarEdad('18.5')).toBe(false);
    });
    test('UT-06: rechaza espacios vacios  (REQ10)',() =>{
        expect(validarEdad('')).toBe(false);
    });
    test('UT-07: acepta el valor 1e2 que equivale a 100  (REQ12)',() =>{
        expect(validarEdad('1e2')).toBe(true);
    });
});
//Grupo para validar las pruebas de nombre
describe('validarNombre',()=>{
    test('UT-08: Acepta nombre y apellido normales (REQ13)',()=>{
        expect(validarNombre('Mariana Villegas')).toBe(true);
    });
    test('UT-09: Rechaza limite inferior -1 (REQ13)',()=>{
        expect(validarNombre('Al')).toBe(false);
    });
    test('UT-10: acepta 3 caracteres, límite inferior (REQ13)',()=>{
        expect(validarNombre('Ana')).toBe(true);
    });
    test('UT-11: Rechaza nombre con numeros (REQ13)',()=>{
        expect(validarNombre('Ana123')).toBe(false);
    });
    test('UT-12: Acepta nombres con diéresis (REQ13)',()=>{
        expect(validarNombre('Andres Güiza')).toBe(true);
    });
    test('UT-13: Acepta nombres con guion (REQ13)',()=>{
        expect(validarNombre('Ana-maria')).toBe(true);
    });
});
//Grupo para validar las pruebas de telefono 
describe('validarTelefono',()=>{
    test('UT-14: Acepta el telefono con 10 digitos y comenzar en 3 (REQ14)',()=>{
        expect(validarTelefono('3218840894')).toBe(true);
    });
    test('UT-15: Rechaza el telefono con 9 digitos valor minimo -1 (REQ14)',()=>{
        expect(validarTelefono('311612516')).toBe(false);
    });
    test('UT-16: Rechaza el telefono con 10 digitos y comienza en 2 (REQ14)',()=>{
        expect(validarTelefono('2345679085')).toBe(false);
    });
    test('UT-17: Rechaza el telefono con 11 digitos valor maximo +1  (REQ14)',()=>{
        expect(validarTelefono('31456789045')).toBe(false);
    });
    test('UT-18: rechaza el teléfono con espacios (REQ27)',()=>{
        expect(validarTelefono('314 5678 904')).toBe(false);
    });
});
//Grupo para validar las pruebas de direccion 
describe('validarDireccion',()=>{
    test('UT-19: Se acepta una direccion normal (REQ16)',()=>{
        expect(validarDireccion('Calle 12 # 10-41')).toBe(true);
    });
    test('UT-20: Se rechaza el valor minimo -1 (4 caracteres) (REQ16)',()=>{
        expect(validarDireccion('Cl 1')).toBe(false);
    });
    test('UT-21: acepta el mínimo, 5 caracteres (REQ16)',()=>{
        expect(validarDireccion('Cl 12')).toBe(true);
    });
    test('UT-22: acepta el máximo, 100 caracteres (REQ16) (REQ16)',()=>{
        expect(validarDireccion('a'.repeat(100))).toBe(true);
    });
    test('UT-23: rechaza el máximo + 1, 101 caracteres (REQ16)',()=>{
        expect(validarDireccion('a'.repeat(101))).toBe(false);
    });
    test('UT-24: Se rechaza si ingresan codigo "html,scripts" (REQ26)',()=>{
        expect(validarDireccion('<img src=x onerror=alert(1)>')).toBe(false);
    });
});
//Grupo para validar las pruebas de la cedula 
describe('validarCedula',()=>{
    test('UT-25: Rechaza el valor minimo inferior -1 (REQ15)',()=>{
        expect(validarCedula('12345')).toBe(false);
    });
    test('UT-26: Acepta el valor minimo (REQ15)',()=>{
        expect(validarCedula('123456')).toBe(true);
    });
    test('UT-27: Acepta el valor maximo (REQ15)',()=>{
        expect(validarCedula('1234567890')).toBe(true);
    });
    test('UT-28: Rechaza el valor maximo +1 (REQ15)',()=>{
        expect(validarCedula('123456789101')).toBe(false);
    });
    test('UT-29: Rechaza la combinacion de numeros y letras (REQ15)',()=>{
        expect(validarCedula('145ab45hy6')).toBe(false);
    });
}); 
//Grupo para validar la edad de las mascotas 
describe('validarEdadMascota',()=>{
    test('UT-30: Acepta el valor minimo (REQ03)',()=>{
        expect(validarEdadMascota(0)).toBe(true);
    });
    test('UT-31: Rechaza  el valor minimo -1 (REQ03)',()=>{
        expect(validarEdadMascota(-1)).toBe(false);
    });
    test('UT-32: Acepta el valor maximo "300 meses" (REQ03)',()=>{
        expect(validarEdadMascota(300)).toBe(true);
    });
    test('UT-33: Rechaza el valor maximo +1 "301 meses" (REQ03)',()=>{
        expect(validarEdadMascota(301)).toBe(false);
    });
    test('UT-34: Rechaza una edad con decimales (REQ03)',()=>{
        expect(validarEdadMascota(10.5)).toBe(false);
    });
});
//Grupo para validar el formato de la edad de las mascotas o sea singular/plural
describe('formatearEdadMascota',()=>{
    test('UT-35: muestra "1 año" en singular con 12 meses (REQ25)',()=>{
    expect(formatearEdadMascota(12)).toBe('1 año y 0 meses');
    });
    test('UT-36: muestra "1 año y 1 mes" en singular con 13 meses (REQ25)',()=>{
    expect(formatearEdadMascota(13)).toBe('1 año y 1 mes');
    });
    test('UT-37: muestra edad no valida con una edad negativa (REQ03)',()=>{
    expect(formatearEdadMascota(-5)).toBe('Edad no válida');
});
});