/*
=========================================================
 Enciclopedia de Animales de Zootecnia
 Archivo: app.js
 Función: Inicializar la aplicación
=========================================================
*/

document.addEventListener("DOMContentLoaded", iniciarAplicacion);

/**
 * Punto de entrada de la aplicación
 */
function iniciarAplicacion() {

    console.log("Enciclopedia iniciada.");

    mostrarInicio();

    inicializarModoOscuro();

    inicializarBotonArriba();

    inicializarEventos();

}

/**
 * Eventos de los botones
 */
function inicializarEventos() {

    const btnInicio = document.getElementById("btnInicio");
    if (btnInicio) {
        btnInicio.addEventListener("click", mostrarInicio);
    }

    const btnInformacion = document.getElementById("btnInformacion");
    if (btnInformacion) {
        btnInformacion.addEventListener("click", mostrarInformacion);
    }

    const btnFAQ = document.getElementById("btnFAQ");
    if (btnFAQ) {
        btnFAQ.addEventListener("click", mostrarPreguntas);
    }

}

/**
 * Pantalla de inicio
 */
function mostrarInicio() {

    const vista = document.getElementById("vista");

    vista.innerHTML = `

        <section class="inicio">

            <h1>Inicio</h1>

            <p>
                Bienvenido.
                Selecciona un animal desde el menú para comenzar.
            </p>

        </section>

    `;
}

function mostrarPreguntas() {

    const vista = document.getElementById("vista");

    vista.innerHTML = `

        <section class="preguntas">

            <h1>${preguntas.titulo}</h1>

            <p>
xd
            </p>

        </section>

    `;
}
/**
 * Muestra los botones definidos en datos.js
 */
function mostrarInformacion() {

    const vista = document.getElementById("vista");

    let html = `
        <section class="informacion">

            <h1>${informacion.titulo}</h1>

            <div class="lista-botones">
    `;

    informacion.botones.forEach(boton => {

        html += `
            <button class="btn-animal"
                    onclick="abrirAnimal('${boton.id}')">

                ${boton.nombre}

            </button>
        `;

    });

    html += `
            </div>

        </section>
    `;

    vista.innerHTML = html;

}
/**
 * Abre un animal
 */
function abrirAnimal(id) {

    const vista = document.getElementById("vista");

    const animal = informacion.botones.find(boton => boton.id === id);

    if (!animal) return;

    const clasificacion = animal.clasificacion_taxonomica
        ? `
        <ul>
            <li><strong>Reino:</strong> ${animal.clasificacion_taxonomica.reino ?? "-"}</li>
            <li><strong>Filo:</strong> ${animal.clasificacion_taxonomica.filo ?? "-"}</li>
            <li><strong>Clase:</strong> ${animal.clasificacion_taxonomica.clase ?? "-"}</li>
            <li><strong>Orden:</strong> ${animal.clasificacion_taxonomica.orden ?? "-"}</li>
            <li><strong>Familia:</strong> ${animal.clasificacion_taxonomica.familia ?? "-"}</li>
            <li><strong>Género:</strong> ${animal.clasificacion_taxonomica.genero ?? "-"}</li>
            <li><strong>Especie:</strong> ${animal.clasificacion_taxonomica.especie ?? "-"}</li>
        </ul>
        `
        : "";

    const periodoLabel = animal.periodo_gestacion
        ? "🤰 Período de gestación"
        : "🥚 Período de incubación";

    const periodoValor = animal.periodo_gestacion ?? animal.periodo_incubacion;

    const infoGeneral =
        (animal.especie ||
        animal.nombre_cientifico ||
        animal.clasificacion_taxonomica ||
        animal.esperanza_de_vida ||
        periodoValor)
        ? `
        <div class="info-general">

            ${animal.especie ? `<p><strong>Especie:</strong> ${animal.especie}</p>` : ""}

            ${animal.nombre_cientifico
                ? `<p><strong>Nombre científico:</strong> <i>${animal.nombre_cientifico}</i></p>`
                : ""}

            ${clasificacion
                ? `<h3>🧾 Clasificación taxonómica</h3>${clasificacion}`
                : ""}

            ${animal.esperanza_de_vida
                ? `<p><strong>⏳ Esperanza de vida:</strong> ${animal.esperanza_de_vida}</p>`
                : ""}

            ${periodoValor
                ? `<p><strong>${periodoLabel}:</strong> ${periodoValor}</p>`
                : ""}

        </div>
        `
        : "";

    let html = `
        <section class="vista-nivel">

            <h1>${animal.nombre}</h1>

            ${infoGeneral}

            <div class="lista-botones">
    `;

    if (animal.botones) {

        animal.botones.forEach(boton => {

            html += `
                <button onclick="abrirBoton('${animal.id}','${boton.id}')">
                    ${boton.nombre}
                </button>
            `;

        });

    }

    html += `
            </div>

            <br>

            <button onclick="mostrarInformacion()">
                ← Volver
            </button>

        </section>
    `;

    vista.innerHTML = html;
}
function abrirBoton(idAnimal, idBoton) {

    const vista = document.getElementById("vista");

    const animal = informacion.botones.find(a => a.id === idAnimal);
    if (!animal) return;

    const categoria = animal.botones.find(b => b.id === idBoton);
    if (!categoria) return;

    const usosGenerales = Array.isArray(categoria.usos_principales)
        ? `
        <div class="info-general">
            <h3>🎯 Usos principales de esta categoría</h3>
            <ul>${categoria.usos_principales.map(u => `<li>${u}</li>`).join("")}</ul>
        </div>
        `
        : "";

    let html = `
        <section class="vista-nivel">
            <h1>${categoria.nombre}</h1>

            ${usosGenerales}

            <div class="lista-botones">
    `;

    if (categoria.botones) {

        categoria.botones.forEach(item => {

            html += `
                <button onclick="abrirRaza('${idAnimal}','${idBoton}','${item.id}')">
                    ${item.nombre}
                </button>
            `;
        });
    }

    html += `
            </div>

            <br>
            <button onclick="abrirAnimal('${idAnimal}')">← Volver</button>
        </section>
    `;

    vista.innerHTML = html;
}
function abrirRaza(idAnimal, idCategoria, idRaza) {

    const vista = document.getElementById("vista");

    const animal = informacion.botones.find(a => a.id === idAnimal);
    if (!animal) return;

    const categoria = animal.botones.find(c => c.id === idCategoria);
    if (!categoria) return;

    const raza = categoria.botones.find(r => r.id === idRaza);
    if (!raza || !raza.ficha) return;

    const f = raza.ficha;

    const imagen = f.imagen
        ? `<img src="${f.imagen}" alt="${raza.nombre}" class="img-raza">`
        : `<div class="no-img">📷 Sin imagen disponible</div>`;

    const alimentacion = Array.isArray(f.alimentacion)
        ? `<ul>${f.alimentacion.map(a => `<li>${a}</li>`).join("")}</ul>`
        : `<p>${f.alimentacion ?? "No disponible"}</p>`;

    // La especie, el nombre científico, la clasificación taxonómica, la esperanza
    // de vida, el período de gestación/incubación y los usos principales ya se
    // muestran una sola vez en la página del animal y de la categoría.
    // Aquí solo se repiten si esta raza en concreto los sobreescribe
    // (por ejemplo un híbrido como Brahman o una especie distinta como la Alpaca).
    const excepcionCientifica = (f.especie || f.nombre_cientifico || f.clasificacion_taxonomica)
        ? `
        <h2>🧬 Clasificación propia de esta raza</h2>
        <p class="nota-info">Esta raza difiere del resto de ${animal.nombre.replace(/^[^\wáéíóúñÁÉÍÓÚÑ]+/, '').trim()} en su clasificación:</p>
        ${f.especie ? `<p><strong>Especie:</strong> ${f.especie}</p>` : ""}
        ${f.nombre_cientifico ? `<p><strong>Nombre científico:</strong> <i>${f.nombre_cientifico}</i></p>` : ""}
        ${f.clasificacion_taxonomica ? `
        <ul>
            <li><strong>Reino:</strong> ${f.clasificacion_taxonomica.reino ?? "-"}</li>
            <li><strong>Filo:</strong> ${f.clasificacion_taxonomica.filo ?? "-"}</li>
            <li><strong>Clase:</strong> ${f.clasificacion_taxonomica.clase ?? "-"}</li>
            <li><strong>Orden:</strong> ${f.clasificacion_taxonomica.orden ?? "-"}</li>
            <li><strong>Familia:</strong> ${f.clasificacion_taxonomica.familia ?? "-"}</li>
            <li><strong>Género:</strong> ${f.clasificacion_taxonomica.genero ?? "-"}</li>
            <li><strong>Especie:</strong> ${f.clasificacion_taxonomica.especie ?? "-"}</li>
        </ul>
        ` : ""}
        `
        : "";

    const excepcionUsos = Array.isArray(f.usos_principales)
        ? `
        <h2>🎯 Usos principales (propios de esta raza)</h2>
        <ul>${f.usos_principales.map(u => `<li>${u}</li>`).join("")}</ul>
        `
        : "";

    const excepcionEsperanzaVida = f.esperanza_de_vida
        ? `<h2>⏳ Esperanza de vida</h2><p>${f.esperanza_de_vida}</p>`
        : "";

    const excepcionPeriodo = f.periodo_gestacion
        ? `<h2>🤰 Período de gestación</h2><p>${f.periodo_gestacion}</p>`
        : f.periodo_incubacion
        ? `<h2>🥚 Período de incubación</h2><p>${f.periodo_incubacion}</p>`
        : "";

    vista.innerHTML = `
    <section class="ficha">

        <h1>${raza.nombre}</h1>

        ${imagen}

        <h2>📖 Descripción</h2>
        <p>${f.descripcion ?? "No disponible"}</p>

        <h2>📜 Historia</h2>
        <p>${f.historia ?? "No disponible"}</p>

        <h2>🌍 Origen</h2>
        <p>${f.origen ?? "No disponible"}</p>

        ${excepcionCientifica}

        <h2>⚖️ Peso</h2>
        <ul>
            <li><strong>Machos:</strong> ${f.peso_machos ?? "-"}</li>
            <li><strong>Hembras:</strong> ${f.peso_hembras ?? "-"}</li>
        </ul>

        <h2>🥩 Producción</h2>
        <p>${f.cantidad_de_produccion ?? "No disponible"}</p>

        ${excepcionEsperanzaVida}

        ${excepcionPeriodo}

        ${excepcionUsos}

        <h2>🌿 Alimentación</h2>
        ${alimentacion}

        <h2>🧑‍🌾 Manejo</h2>
        <p>${f.manejo ?? "No disponible"}</p>

        <h2>😌 Temperamento</h2>
        <p>${f.temperamento ?? "No disponible"}</p>

        <button onclick="abrirBoton('${idAnimal}','${idCategoria}')">
            ← Volver
        </button>

    </section>
    `;
}

/**
 * Modo oscuro
 */
function inicializarModoOscuro() {

    const boton = document.getElementById("btnDarkMode");

    if (!boton) return;

    boton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

/**
 * Botón volver arriba
 */
function inicializarBotonArriba() {

    const boton = document.getElementById("btnTop");

    if (!boton) return;

    boton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}