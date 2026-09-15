const mascotas = [
    {
        "nombre": "Max",
        "edadMeses": 36,
        "raza": "Labrador",
        "descripcion": "Un perro juguetón y leal.",
        "especie": "Perro",
        "estado": "Disponible",
        "imagen": "Img/labrador..webp"
    },
    {
        "nombre": "Luna",
        "edadMeses": 24,
        "raza": "Golden Retriever",
        "descripcion": "Una perra amigable y cariñosa.",
        "especie": "Perro",
        "estado": "Adoptado",
        "imagen": "Img/Golden Retriever.jpeg"   
    },
    {
        "nombre": "Simba",
        "edadMeses": 12,
        "raza": "Siames",
        "descripcion": "Un gato curioso y travieso.",
        "especie": "Gato",
        "estado": "En Proceso",
        "imagen": "Img/siames.jpeg"
    },
    {
        "nombre": "Milo",
        "edadMeses": 20,
        "raza": "Persa",
        "descripcion": "Un gato juguetón y cariñoso.",
        "especie": "Gato",
        "estado": "Disponible",
        "imagen": "Img/persa.jpg"
    },
    {
        "nombre": "Rocky",
        "edadMeses": 48,
        "raza": "Bulldog",
        "descripcion": "Un perro valiente y protector.",
        "especie": "Perro",
        "estado": "Disponible",
        "imagen": "Img/bulldog.avif"
    }
]
/* Leer el array de mascotas */
const contenedorMascotas = document.getElementById('contenedor-Mascotas');
/* Recorrer el array */
mascotas.forEach(mascota => {
/*Calcular la edad en años */
let Anios = Math.floor(mascota.edadMeses / 12);
/* Calcula los meses restantes */
let mesesRestantes = mascota.edadMeses % 12;

/* Determina el color para cada estado */
let colorEstado;

if (mascota.estado === "Disponible") {
    colorEstado = 'bg-success';

} else if (mascota.estado === "Adoptado") {
    colorEstado = 'bg-secondary';

} else if (mascota.estado === "En Proceso") {
    colorEstado = 'bg-warning';
}
/* Boton dependiendo del estado */
let boton="";

if(mascota.estado === "Disponible") {
    boton = `<button class="btn btn-primary" 
    onclick="abrirFormularioAdopcion('${mascota.nombre}')"> Solicitar Adopción </button>`;
}
else if(mascota.estado === "En Proceso") {
    boton = `<button class="btn btn-primary" disabled> Solicitud en Proceso </button>`;
}
/* Pinta la información de cada mascota */
contenedorMascotas.innerHTML += `
<div class="col-md-4 mb-4">
    <div class="card h-100">
        <img src="${mascota.imagen}" class="card-img-top" alt="${mascota.nombre}">
        <div class="card-body">
            <h5 class="card-title">${mascota.nombre}</h5>
            <p class="card-text">${mascota.descripcion}</p>
            <p class="card-text">Edad: ${Anios} años y ${mesesRestantes} meses</p>
            <p class="card-text">Raza: ${mascota.raza}</p>
            <p class="card-text">Especie: ${mascota.especie}</p>
            <span class="badge ${colorEstado}">${mascota.estado}</span>
            ${boton}
        </div>
    </div>
</div>
`;
});
