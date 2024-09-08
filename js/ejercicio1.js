//EJERCICIO 1.1

document.addEventListener("DOMContentLoaded", function() {
    const fechaVueloInput = document.getElementById("fecha_vuelo");
    const buscarBtn = document.querySelector("button.btn-primary");

    buscarBtn.addEventListener("click", function(event) {
        const fechaVuelo = new Date(fechaVueloInput.value);
        const fechaActual = new Date();

        if (fechaVuelo < fechaActual.setHours(0, 0, 0, 0)) {
            alert("Fecha de Vuelo debe ser Mayor a la Fecha Actual");
            event.preventDefault(); 
        }
    });
});

//EJERCICIO 1.2

document.addEventListener("DOMContentLoaded", function() {
    const fechaVueloInput = document.getElementById("fecha_vuelo");
    const origenSelect = document.getElementById("origen");
    const destinoSelect = document.getElementById("destino");
    const buscarBtn = document.querySelector("button.btn-primary");

    
    buscarBtn.addEventListener("click", function(event) {
        const fechaVuelo = new Date(fechaVueloInput.value);
        const fechaActual = new Date();

        if (fechaVuelo < fechaActual.setHours(0, 0, 0, 0)) {
            alert("Fecha de Vuelo debe ser Mayor a la Fecha Actual");
            event.preventDefault();
        }

        
        if (origenSelect.value === destinoSelect.value) {
            alert("El origen y el destino no pueden ser iguales.");
            event.preventDefault();
        }
    });

 
    origenSelect.addEventListener("change", function() {
        const origenSeleccionado = origenSelect.value;

   
        for (let i = 0; i < destinoSelect.options.length; i++) {
            destinoSelect.options[i].disabled = false;
        }

  
        for (let i = 0; i < destinoSelect.options.length; i++) {
            if (destinoSelect.options[i].value === origenSeleccionado) {
                destinoSelect.options[i].disabled = true;
            }
        }
    });
});


