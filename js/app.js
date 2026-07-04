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

    if (typeof inicializarBuscador === "function") {
        inicializarBuscador();
    }

    if (typeof inicializarFavoritos === "function") {
        inicializarFavoritos();
    }

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

    const btnGlosario = document.getElementById("btnGlosario");
    if (btnGlosario && typeof mostrarGlosario === "function") {
        btnGlosario.addEventListener("click", mostrarGlosario);
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
                Selecciona un animal desde el menú lateral
                o utiliza el buscador para comenzar.
            </p>

            <div id="estadisticas"></div>

            <div id="accesosRapidos"></div>

        </section>

    `;

    if (typeof crearEstadisticas === "function") {
        crearEstadisticas();
    }

    if (typeof crearAccesosRapidos === "function") {
        crearAccesosRapidos();
    }

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

    let html = `
        <section class="vista-nivel">

            <h1>${animal.nombre}</h1>

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

    let html = `
        <section class="vista-nivel">
            <h1>${categoria.nombre}</h1>

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

    const categoria = animal.botones.find(b => b.id === idCategoria);
    if (!categoria) return;

    const raza = categoria.botones.find(r => r.id === idRaza);
    if (!raza || !raza.ficha) return;

    const f = raza.ficha;

    const imagen = f.imagen 
        ? `<img src="${f.imagen}" alt="${raza.nombre}" class="img-raza">`
        : `<div class="no-img">📷 Sin imagen disponible</div>`;

    vista.innerHTML = `
        <section class="ficha">

            <h1>${raza.nombre}</h1>

            ${imagen}

            <h2>📖 Información general</h2>
            <p>${f.descripcion ?? "No disponible"}</p>

            <h2>🌍 Origen</h2>
            <p>${f.origen ?? "No disponible"}</p>

            <h2>⚖️ Peso</h2>
            <ul>
                <li>Machos: ${f.peso_machos ?? "-"}</li>
                <li>Hembras: ${f.peso_hembras ?? "-"}</li>
            </ul>

            <h2>🐄 Especie</h2>
            <p>${f.especie ?? "-"}</p>

            <h2>🥩 Producción</h2>
            <p>${f.cantidad_de_produccion ?? "-"}</p>

            <h2>🌿 Alimentación</h2>
            <p>${(f.alimentacion ?? []).join(", ")}</p>

            <h2>🧠 Manejo</h2>
            <p>${f.manejo ?? "-"}</p>

            <h2>😌 Temperamento</h2>
            <p>${f.temperamento ?? "-"}</p>

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