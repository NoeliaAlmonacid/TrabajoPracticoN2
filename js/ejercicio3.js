// Clase Vuelo
class Vuelo {
    constructor(origen, destino, fecha) {
        this.origen = origen;
        this.destino = destino;
        this.fecha = new Date(fecha);
    }

    mostrarInformacion() {
        return `Origen: ${this.origen}, Destino: ${this.destino}, Fecha: ${this.fecha.toLocaleDateString()}`;
    }
}

// Clase Reserva
class Reserva {
    constructor(apellidoNombre, dni, vuelo, clase, asiento) {
        this.apellidoNombre = apellidoNombre;
        this.dni = dni;
        this.vuelo = vuelo;
        this.clase = clase;
        this.asiento = asiento;
    }

    eliminarReserva() {
       
    }
}

// Lista de reservas
let reservas = [];

function agregarReserva() {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha_vuelo').value;
    const clase = document.getElementById('clase').value;
    const asiento = document.getElementById('ubicacion').value;
    const apellidoNombre = document.getElementById('apellido_nombre').value;
    const dni = document.getElementById('dni').value;

    
    console.log({ origen, destino, fecha, clase, asiento, apellidoNombre, dni });

    
    if (!origen || !destino || !fecha || !apellidoNombre || !dni || !clase || !asiento) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear nuevas instancias de Vuelo y Reserva
    const vuelo = new Vuelo(origen, destino, fecha);
    const reserva = new Reserva(apellidoNombre, dni, vuelo, clase, asiento);

    reservas.push(reserva);

    actualizarTabla();


    document.getElementById('formulario-reserva').reset();
}


function actualizarTabla() {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ''; 

    reservas.forEach((reserva, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${reserva.apellidoNombre}</td>
            <td>${reserva.dni}</td>
            <td>${reserva.vuelo.origen}</td>
            <td>${reserva.vuelo.destino}</td>
            <td>${reserva.vuelo.fecha.toLocaleDateString()}</td>
            <td>${reserva.clase}</td>
            <td>${reserva.asiento}</td>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarReserva(${index})">Eliminar</button></td>
        `;
        tbody.appendChild(tr); 
    });
}


function eliminarReserva(index) {
    reservas.splice(index, 1); 
    actualizarTabla(); 
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formulario-reserva').addEventListener('submit', (event) => {
        event.preventDefault();
        agregarReserva();
    });
});
