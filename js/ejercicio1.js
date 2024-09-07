//EJERCICIO 1.1

document.addEventListener("DOMContentLoaded", function() {
    const fechaVueloInput = document.getElementById("fecha_vuelo");
    const buscarBtn = document.querySelector("button.btn-primary");

    buscarBtn.addEventListener("click", function(event) {
        const fechaVuelo = new Date(fechaVueloInput.value);
        const fechaActual = new Date();

        if (fechaVuelo < fechaActual.setHours(0, 0, 0, 0)) {
            alert("Fecha de Vuelo debe ser Mayor a la Fecha Actual");
            event.preventDefault(); // Evita que se envíe el formulario
        }
    });
});

//EJERCICIO 1.2

document.addEventListener("DOMContentLoaded", function() {
    const fechaVueloInput = document.getElementById("fecha_vuelo");
    const origenSelect = document.getElementById("origen");
    const destinoSelect = document.getElementById("destino");
    const buscarBtn = document.querySelector("button.btn-primary");

    // Validación de fecha de vuelo
    buscarBtn.addEventListener("click", function(event) {
        const fechaVuelo = new Date(fechaVueloInput.value);
        const fechaActual = new Date();

        if (fechaVuelo < fechaActual.setHours(0, 0, 0, 0)) {
            alert("Fecha de Vuelo debe ser Mayor a la Fecha Actual");
            event.preventDefault();
        }

        // Validación de Origen y Destino
        if (origenSelect.value === destinoSelect.value) {
            alert("El origen y el destino no pueden ser iguales.");
            event.preventDefault();
        }
    });

    // Actualizar lista de destino cuando cambie origen
    origenSelect.addEventListener("change", function() {
        const origenSeleccionado = origenSelect.value;

        // Habilitar todas las opciones en el campo destino
        for (let i = 0; i < destinoSelect.options.length; i++) {
            destinoSelect.options[i].disabled = false;
        }

        // Deshabilitar la opción seleccionada en origen
        for (let i = 0; i < destinoSelect.options.length; i++) {
            if (destinoSelect.options[i].value === origenSeleccionado) {
                destinoSelect.options[i].disabled = true;
            }
        }
    });
});

//EJERCICIO 2
