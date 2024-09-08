document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const fechaInput = document.getElementById("fecha_vuelo");
    const origenInput = document.getElementById("origen");
    const destinoInput = document.getElementById("destino");

    form.addEventListener("submit", function (e) {
        const fechaActual = new Date().toISOString().split("T")[0];
        const fechaVuelo = fechaInput.value;

    
        if (fechaVuelo < fechaActual) {
            alert("La fecha de vuelo no puede ser anterior a la fecha actual.");
            e.preventDefault();
        }

        if (origenInput.value === destinoInput.value) {
            alert("El origen y el destino no pueden ser iguales.");
            e.preventDefault();
        }
    });

  
    origenInput.addEventListener("change", function () {
        const destinoOptions = destinoInput.options;
        for (let i = 0; i < destinoOptions.length; i++) {
            destinoOptions[i].disabled = false; 
            if (destinoOptions[i].value === origenInput.value) {
                destinoOptions[i].disabled = true; // Deshabilitar la opción que coincide con el origen
            }
        }
    });

    const cantidadPasajeInput = document.getElementById("cantidad_pasaje");
    const claseInput = document.getElementById("clase");
    const sectionPasajeros = document.getElementById("section-pasajeros");

    cantidadPasajeInput.addEventListener("input", generarCamposPasajeros);
    claseInput.addEventListener("change", generarCamposPasajeros);

    function generarCamposPasajeros() {
        const cantidadPasaje = parseInt(cantidadPasajeInput.value);
        const clase = claseInput.value;

        // Limpiar la sección antes de regenerar los campos
        sectionPasajeros.innerHTML = "";

        if (isNaN(cantidadPasaje) || cantidadPasaje <= 0) {
            return;
        }

        
        for (let i = 0; i < cantidadPasaje; i++) {
            const pasajeroDiv = document.createElement("div");
            pasajeroDiv.classList.add("pasajero", "mb-4");


            const pasajeroTitle = document.createElement("h4");
            pasajeroTitle.textContent = `Pasajero ${i + 1}`;
            pasajeroDiv.appendChild(pasajeroTitle);

        
            const ubicacionDiv = document.createElement("div");
            ubicacionDiv.classList.add("mb-3");

            const ubicacionLabel = document.createElement("label");
            ubicacionLabel.textContent = "Ubicación:";
            ubicacionLabel.setAttribute("for", `ubicacion-${i}`);

            const ubicacionSelect = document.createElement("select");
            ubicacionSelect.classList.add("form-select");
            ubicacionSelect.id = `ubicacion-${i}`;
            ubicacionSelect.name = `ubicacion-${i}`;
            ubicacionSelect.required = true;

            const opcionesUbicacion = clase === "ejecutiva" ?
                ["Ventanilla", "Pasillo"] :
                ["Ventanilla", "Centro", "Pasillo"];

            opcionesUbicacion.forEach(opcion => {
                const optionElement = document.createElement("option");
                optionElement.value = opcion.toLowerCase();
                optionElement.textContent = opcion;
                ubicacionSelect.appendChild(optionElement);
            });

            ubicacionDiv.appendChild(ubicacionLabel);
            ubicacionDiv.appendChild(ubicacionSelect);

            
            const sillaDiv = document.createElement("div");
            sillaDiv.classList.add("mb-3");

            const sillaLabel = document.createElement("label");
            sillaLabel.textContent = "Nro de Silla:";
            sillaLabel.setAttribute("for", `silla-${i}`);

            const sillaInput = document.createElement("input");
            sillaInput.classList.add("form-control");
            sillaInput.type = "number";
            sillaInput.id = `silla-${i}`;
            sillaInput.name = `silla-${i}`;
            sillaInput.required = true;

            if (clase === "ejecutiva") {
                sillaInput.min = 1;
                sillaInput.max = 8;
            } else {
                sillaInput.min = 9;
                sillaInput.max = 50;
            }

            sillaDiv.appendChild(sillaLabel);
            sillaDiv.appendChild(sillaInput);

  
            const nombreDiv = document.createElement("div");
            nombreDiv.classList.add("mb-3");

            const nombreLabel = document.createElement("label");
            nombreLabel.textContent = "Apellido y Nombre:";
            nombreLabel.setAttribute("for", `nombre-${i}`);

            const nombreInput = document.createElement("input");
            nombreInput.classList.add("form-control");
            nombreInput.type = "text";
            nombreInput.id = `nombre-${i}`;
            nombreInput.name = `nombre-${i}`;
            nombreInput.maxLength = 100;
            nombreInput.required = true;

            nombreDiv.appendChild(nombreLabel);
            nombreDiv.appendChild(nombreInput);

            const dniDiv = document.createElement("div");
            dniDiv.classList.add("mb-3");

            const dniLabel = document.createElement("label");
            dniLabel.textContent = "DNI:";
            dniLabel.setAttribute("for", `dni-${i}`);

            const dniInput = document.createElement("input");
            dniInput.classList.add("form-control");
            dniInput.type = "number";
            dniInput.id = `dni-${i}`;
            dniInput.name = `dni-${i}`;
            dniInput.maxLength = 8;
            dniInput.required = true;

            dniDiv.appendChild(dniLabel);
            dniDiv.appendChild(dniInput);

            const fechaDiv = document.createElement("div");
            fechaDiv.classList.add("mb-3");

            const fechaLabel = document.createElement("label");
            fechaLabel.textContent = "Fecha de Nacimiento:";
            fechaLabel.setAttribute("for", `fecha-${i}`);

            const fechaInput = document.createElement("input");
            fechaInput.classList.add("form-control");
            fechaInput.type = "date";
            fechaInput.id = `fecha-${i}`;
            fechaInput.name = `fecha-${i}`;

            fechaDiv.appendChild(fechaLabel);
            fechaDiv.appendChild(fechaInput);


            const sexoDiv = document.createElement("div");
            sexoDiv.classList.add("mb-3");

            const sexoLabel = document.createElement("label");
            sexoLabel.textContent = "Sexo:";
            sexoLabel.setAttribute("for", `sexo-${i}`);

            sexoDiv.appendChild(sexoLabel);


            const sexoMContainer = document.createElement("div");
            sexoMContainer.classList.add("form-check");

            const sexoMInput = document.createElement("input");
            sexoMInput.classList.add("form-check-input");
            sexoMInput.type = "radio";
            sexoMInput.name = `sexo-${i}`;
            sexoMInput.id = `sexo-m-${i}`;
            sexoMInput.value = "M";
            sexoMInput.required = true;

            const sexoMLabel = document.createElement("label");
            sexoMLabel.classList.add("form-check-label");
            sexoMLabel.setAttribute("for", `sexo-m-${i}`);
            sexoMLabel.textContent = "Masculino";

            sexoMContainer.appendChild(sexoMInput);
            sexoMContainer.appendChild(sexoMLabel);


            const sexoFContainer = document.createElement("div");
            sexoFContainer.classList.add("form-check");

            const sexoFInput = document.createElement("input");
            sexoFInput.classList.add("form-check-input");
            sexoFInput.type = "radio";
            sexoFInput.name = `sexo-${i}`;
            sexoFInput.id = `sexo-f-${i}`;
            sexoFInput.value = "F";

            const sexoFLabel = document.createElement("label");
            sexoFLabel.classList.add("form-check-label");
            sexoFLabel.setAttribute("for", `sexo-f-${i}`);
            sexoFLabel.textContent = "Femenino";

            sexoFContainer.appendChild(sexoFInput);
            sexoFContainer.appendChild(sexoFLabel);

            sexoDiv.appendChild(sexoMContainer);
            sexoDiv.appendChild(sexoFContainer);


            pasajeroDiv.appendChild(ubicacionDiv);
            pasajeroDiv.appendChild(sillaDiv);
            pasajeroDiv.appendChild(nombreDiv);
            pasajeroDiv.appendChild(dniDiv);
            pasajeroDiv.appendChild(fechaDiv);
            pasajeroDiv.appendChild(sexoDiv);

            

            sectionPasajeros.appendChild(pasajeroDiv);
        }
    }
});
