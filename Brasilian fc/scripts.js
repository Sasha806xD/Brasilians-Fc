// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const jugadores = [
        { nombre: 'Vado', posicion: 'Extremo', edad: 12, nacionalidad: 'México' },
        { nombre: 'Iker', posicion: 'Delantero', edad: 12, nacionalidad: 'México' },
        { nombre: 'Barcelo', posicion: 'Defensa/Medio', edad: 12, nacionalidad: 'México' },
        { nombre: 'Gael', posicion: 'Defensa/Extremo', edad: 12, nacionalidad: 'México' },
        { nombre: 'Hector', posicion: 'Defensa/Delantero', edad: 12, nacionalidad: 'México' },
        { nombre: 'Kike', posicion: 'Defensa/Portero', edad: 12, nacionalidad: 'México' },
        { nombre: 'Navarrete', posicion: 'Portero', edad: 12, nacionalidad: 'México' },
        { nombre: 'Emiliano', posicion: 'Lateral/Medio', edad: 12, nacionalidad: 'México' },
        { nombre: 'Sasha', posicion: 'Delantero/Lateral/Extremo/Medio', edad: 12, nacionalidad: 'México' },
        { nombre: 'Esteban', posicion: 'Extremo/Medio', edad: 12, nacionalidad: 'México' },
        { nombre: 'Fabio', posicion: 'Delantero/Portero/Medio', edad: 12, nacionalidad: 'México' },
        { nombre: 'Emilio', posicion: 'Portero', edad: 12, nacionalidad: 'México' },
        { nombre: 'Javier', posicion: 'Defensa?', edad: 12, nacionalidad: 'México' },
        { nombre: 'Diego', posicion: 'Medio', edad: 12, nacionalidad: 'México' },
        { nombre: 'Yare', posicion: '???', edad: 12, nacionalidad: 'México' },
    ];

    const contenedorJugadores = document.getElementById('jugadores');
    const detalleJugador = document.getElementById('detalle-jugador');

    jugadores.forEach((jugador, index) => {
        const divJugador = document.createElement('div');
        divJugador.className = 'jugador';
        divJugador.textContent = jugador.nombre;
        divJugador.draggable = true;
        divJugador.addEventListener('click', () => mostrarInfoJugador(jugador));
        contenedorJugadores.appendChild(divJugador);
    });

    function mostrarInfoJugador(jugador) {
        detalleJugador.textContent = `Nombre: ${jugador.nombre}\nPosición: ${jugador.posicion}\nEdad: ${jugador.edad}\nNacionalidad: ${jugador.nacionalidad}`;
    }
});
