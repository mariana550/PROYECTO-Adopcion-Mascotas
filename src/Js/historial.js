function mostrarHistorial() {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    const tablaHistorial = document.getElementById('historialSolicitudes');

    if (solicitudes.length === 0) {
    tablaHistorial.innerHTML = '<tr><td colspan="8" class="text-center text-muted">No hay solicitudes de adopción.</td></tr>';
    }
    else{
    tablaHistorial.innerHTML = ''; // Limpiar la tabla antes de llenarla nuevamente
    solicitudes.forEach((solicitud, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${solicitud.nombre}</td>
            <td>${solicitud.cedula}</td>
            <td>${solicitud.telefono}</td>
            <td>${solicitud.direccion}</td>
            <td>${solicitud.mascotaSeleccionada}</td>
            <td>${solicitud.fecha}</td>
            <td>${solicitud.estado}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarSolicitud(${index})">Eliminar</button>
            </td>
        `;
        tablaHistorial.appendChild(fila);
    });
}
}
function eliminarSolicitud(index) {
    let solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    solicitudes.splice(index, 1);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
    mostrarHistorial();
}
mostrarHistorial();