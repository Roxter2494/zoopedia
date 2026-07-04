const informacion = {

    titulo: "Animales de Importancia Zootécnica",

    botones: [
        
        {
            id: "bovinos",
            nombre: "🐄 Bovinos",
            botones: [
        {
            id: "carne",
            nombre: "🥩 Carne",
            botones: [
                {
                    id: "angus",
                    nombre: "Angus",
                    ficha: {
                        descripcion: "Raza bovina de carne premium reconocida mundialmente por su excelente marmoleo y terneza.",
                        origen: "Escocia",
                        especie: "Bovino",
                        imagen: "img/angus.jpg",
                        cantidad_de_produccion: "Carne de alta calidad con alto valor comercial",
                        peso_machos: "800-1000 kg",
                        peso_hembras: "550-700 kg",
                        alimentacion: ["pasto", "granos", "forraje"],
                        manejo: "Extensivo o semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "hereford",
                    nombre: "Hereford",
                    ficha: {
                        descripcion: "Raza rústica de excelente adaptación al pastoreo extensivo y alta eficiencia en conversión alimenticia.",
                        origen: "Reino Unido",
                        especie: "Bovino",
                        imagen: "img/hereford.jpg",
                        cantidad_de_produccion: "Alta producción de carne en sistemas extensivos",
                        peso_machos: "850-1100 kg",
                        peso_hembras: "550-750 kg",
                        alimentacion: ["pasto", "forraje"],
                        manejo: "Extensivo",
                        temperamento: "Muy dócil"
                    }
                },
                {
                    id: "charolais",
                    nombre: "Charolais",
                    ficha: {
                        descripcion: "Raza francesa de gran tamaño, destacada por su alto rendimiento en canal y carne magra.",
                        origen: "Francia",
                        especie: "Bovino",
                        imagen: "img/charolais.jpg",
                        cantidad_de_produccion: "Muy alta producción de carne magra",
                        peso_machos: "1000-1200 kg",
                        peso_hembras: "650-800 kg",
                        alimentacion: ["pasto", "granos", "forraje"],
                        manejo: "Semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "limousin",
                    nombre: "Limousin",
                    ficha: {
                        descripcion: "Raza musculosa con alta eficiencia alimenticia y excelente rendimiento en carne magra.",
                        origen: "Francia",
                        especie: "Bovino",
                        imagen: "img/limousin.jpg",
                        cantidad_de_produccion: "Alta eficiencia en carne magra",
                        peso_machos: "900-1100 kg",
                        peso_hembras: "600-750 kg",
                        alimentacion: ["pasto", "forraje", "granos"],
                        manejo: "Semi-intensivo",
                        temperamento: "Moderado"
                    }
                },
                {
                    id: "brahman",
                    nombre: "Brahman",
                    ficha: {
                        descripcion: "Raza cebuina altamente resistente al calor, parásitos y enfermedades tropicales.",
                        origen: "India / EE.UU.",
                        especie: "Bovino",
                        imagen: "img/brahman.jpg",
                        cantidad_de_produccion: "Producción media con alta rusticidad",
                        peso_machos: "800-1100 kg",
                        peso_hembras: "500-700 kg",
                        alimentacion: ["pasto", "forraje"],
                        manejo: "Extensivo",
                        temperamento: "Activo"
                    }
                },
                {
                    id: "santa_gertrudis",
                    nombre: "Santa Gertrudis",
                    ficha: {
                        descripcion: "Raza adaptada a climas cálidos con buena producción de carne y rusticidad.",
                        origen: "Estados Unidos",
                        especie: "Bovino",
                        imagen: "img/santagertrudis.jpg",
                        cantidad_de_produccion: "Alta producción en climas cálidos",
                        peso_machos: "900-1100 kg",
                        peso_hembras: "600-750 kg",
                        alimentacion: ["pasto", "forraje", "granos"],
                        manejo: "Extensivo o semi-intensivo",
                        temperamento: "Dócil"
                    }
                }
            ]
        },
        {
            id: "leche",
            nombre: "🥛 Leche",
            botones: [
                {
                    id: "holstein",
                    nombre: "Holstein",
                    ficha: {
                        descripcion: "Raza lechera líder mundial en producción de leche de alto volumen.",
                        origen: "Países Bajos / Alemania",
                        especie: "Bovino",
                        imagen: "img/holstein.jpg",
                        cantidad_de_produccion: "Muy alta producción (25–40 L/día)",
                        peso_machos: "900-1100 kg",
                        peso_hembras: "600-750 kg",
                        alimentacion: ["pasto", "ensilado", "concentrado"],
                        manejo: "Intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "jersey",
                    nombre: "Jersey",
                    ficha: {
                        descripcion: "Raza pequeña con leche de alto contenido graso y excelente calidad industrial.",
                        origen: "Isla de Jersey",
                        especie: "Bovino",
                        imagen: "img/jersey.jpg",
                        cantidad_de_produccion: "Media-alta (18–25 L/día)",
                        peso_machos: "600-800 kg",
                        peso_hembras: "400-500 kg",
                        alimentacion: ["pasto", "concentrado"],
                        manejo: "Intensivo o semi-intensivo",
                        temperamento: "Muy dócil"
                    }
                },
                {
                    id: "guernsey",
                    nombre: "Guernsey",
                    ficha: {
                        descripcion: "Raza productora de leche rica en beta-caroteno, de color dorado característico.",
                        origen: "Isla de Guernsey",
                        especie: "Bovino",
                        imagen: "img/guernsey.jpg",
                        cantidad_de_produccion: "Media (18–22 L/día)",
                        peso_machos: "700-900 kg",
                        peso_hembras: "450-600 kg",
                        alimentacion: ["pasto", "forraje"],
                        manejo: "Semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "pardo_suizo",
                    nombre: "Pardo Suizo",
                    ficha: {
                        descripcion: "Raza robusta y longeva con buena producción lechera y resistencia ambiental.",
                        origen: "Suiza",
                        especie: "Bovino",
                        imagen: "img/pardosuizo.jpg",
                        cantidad_de_produccion: "Media-alta (20–30 L/día)",
                        peso_machos: "900-1200 kg",
                        peso_hembras: "600-800 kg",
                        alimentacion: ["pasto", "forraje", "concentrado"],
                        manejo: "Semi-intensivo",
                        temperamento: "Muy dócil"
                    }
                }
            ]
        },
        {
            id: "doble",
            nombre: "🐄 Doble propósito",
            botones: [
                {
                    id: "simmental",
                    nombre: "Simmental",
                    ficha: {
                        descripcion: "Raza suiza de doble propósito con excelente equilibrio entre producción de leche y carne.",
                        origen: "Suiza",
                        especie: "Bovino",
                        imagen: "img/simmental.jpg",
                        cantidad_de_produccion: "Alta producción dual (leche + carne)",
                        peso_machos: "1000-1300 kg",
                        peso_hembras: "650-850 kg",
                        alimentacion: ["pasto", "forraje", "concentrado"],
                        manejo: "Semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "normando",
                    nombre: "Normando",
                    ficha: {
                        descripcion: "Raza francesa con leche rica en sólidos y excelente calidad de carne.",
                        origen: "Francia",
                        especie: "Bovino",
                        imagen: "img/normando.jpg",
                        cantidad_de_produccion: "Media-alta en leche y carne",
                        peso_machos: "900-1100 kg",
                        peso_hembras: "600-750 kg",
                        alimentacion: ["pasto", "forraje"],
                        manejo: "Extensivo o semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "brown_swiss",
                    nombre: "Pardo Suizos",
                    ficha: {
                        descripcion: "Raza muy longeva y resistente, ideal para sistemas mixtos de producción.",
                        origen: "Suiza",
                        especie: "Bovino",
                        imagen: "img/pardosuizo.jpg",
                        cantidad_de_produccion: "Media-alta en leche y carne",
                        peso_machos: "900-1200 kg",
                        peso_hembras: "600-800 kg",
                        alimentacion: ["pasto", "forraje", "concentrado"],
                        manejo: "Semi-intensivo",
                        temperamento: "Muy dócil"
                    }
                },
                {
                    id: "gelbvieh",
                    nombre: "Gelbvieh",
                    ficha: {
                        descripcion: "Raza alemana eficiente utilizada tanto para carne como para mejora genética productiva.",
                        origen: "Alemania",
                        especie: "Bovino",
                        imagen: "img/gelbvieh.jpg",
                        cantidad_de_produccion: "Alta eficiencia en carne y leche",
                        peso_machos: "1000-1200 kg",
                        peso_hembras: "650-800 kg",
                        alimentacion: ["pasto", "forraje", "granos"],
                        manejo: "Semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "brangus",
                    nombre: "Brangus",
                    ficha: {
                        descripcion: "Cruce Angus x Brahman con excelente calidad de carne y resistencia al calor.",
                        origen: "Estados Unidos",
                        especie: "Bovino",
                        imagen: "img/brangus.jpg",
                        cantidad_de_produccion: "Alta producción de carne con rusticidad",
                        peso_machos: "800-1100 kg",
                        peso_hembras: "550-700 kg",
                        alimentacion: ["pasto", "forraje", "concentrado"],
                        manejo: "Extensivo o semi-intensivo",
                        temperamento: "Dócil"
                    }
                },
                {
                    id: "braford",
                    nombre: "Braford",
                    ficha: {
                        descripcion: "Cruce Hereford x Brahman altamente adaptado a climas tropicales.",
                        origen: "Australia / EE.UU.",
                        especie: "Bovino",
                        imagen: "img/braford.jpg",
                        cantidad_de_produccion: "Alta producción cárnica en trópico",
                        peso_machos: "900-1100 kg",
                        peso_hembras: "600-750 kg",
                        alimentacion: ["pasto", "forraje"],
                        manejo: "Extensivo",
                        temperamento: "Dócil"
                    }
                }
                ]
        }
        ]
        },
        {
            id: "ovinos",
            nombre: "🐑 Ovinos",
            botones:
            [
                {
                    id: "merino",
                    nombre: "Merino",
                    ficha: {
                        descripcion: "Raza productora de lana fina de alta calidad.",
                        origen: "España",
                        especie: "Ovino",
                        cantidad_de_produccion: "Alta producción de lana",
                        peso_machos: "80-100 kg",
                        peso_hembras: "50-70 kg",
                        alimentacion: ["pasto", "forraje"],
                        manejo: "Extensivo",
                        temperamento: "Dócil"
                    }
                }
            ]
        },
        {
            id: "caprinos",
            nombre: "🐐 Caprinos",
            botones:
            [
                {
                    id: "boer",
                    nombre: "Boer",
                    ficha: {
                        descripcion: "Raza de carne con rápido crecimiento.",
                        origen: "Sudáfrica",
                        especie: "Caprino",
                        cantidad_de_produccion: "Alta producción de carne",
                        peso_machos: "110-135 kg",
                        peso_hembras: "90-100 kg",
                        alimentacion: ["pasto", "arbustos"],
                        manejo: "Extensivo",
                        temperamento: "Activo"
                    }
                }
            ]
        },
        {
            id: "porcinos",
            nombre: "🐖 Porcinos",
            botones:
            [
                {
                    id: "landrace",
                    nombre: "Landrace",
                    ficha: {
                        descripcion: "Raza porcina de alta prolificidad materna.",
                        origen: "Dinamarca",
                        especie: "Porcino",
                        cantidad_de_produccion: "Alta producción de lechones",
                        peso_machos: "300 kg",
                        peso_hembras: "250 kg",
                        alimentacion: ["concentrado"],
                        manejo: "Intensivo",
                        temperamento: "Dócil"
                    }
                }
            ]
        },
        {
    id: "equinos",
    nombre: "🐎 Equinos",
    botones: [
        {
            id: "pura_sangre",
            nombre: "Pura Sangre Inglés",
            ficha: {
                descripcion: "Raza de alta velocidad para carreras.",
                origen: "Reino Unido",
                especie: "Equino",
                cantidad_de_produccion: "Alto rendimiento deportivo",
                peso_machos: "450-500 kg",
                peso_hembras: "400-450 kg",
                alimentacion: ["heno", "avena", "concentrado"],
                manejo: "Intensivo deportivo",
                temperamento: "Energético"
            }
            }
            ]
        },
        {
            id: "aves",
            nombre: "🐔 Aves",
            botones: [
        {
            id: "broiler",
            nombre: "Broiler",
            ficha: {
                descripcion: "Pollo de engorde de crecimiento rápido.",
                origen: "Industrial",
                especie: "Aves",
                cantidad_de_produccion: "Alta producción de carne",
                peso_machos: "2-3 kg",
                peso_hembras: "2-2.5 kg",
                alimentacion: ["balanceado"],
                manejo: "Intensivo",
                temperamento: "N/A"}}
            ]
        },
        {
            id: "camelidos",
            nombre: "🦙 Camélidos",
            botones: [
                {
            id: "alpaca",
            nombre: "Alpaca",
            ficha: {
                descripcion: "Animal andino productor de fibra fina.",
                origen: "Andes",
                especie: "Camélido",
                cantidad_de_produccion: "Fibra de alta calidad",
                peso_machos: "60-80 kg",
                peso_hembras: "50-70 kg",
                alimentacion: ["pasto altoandino"],
                manejo: "Extensivo",
                temperamento: "Dócil"}}
            ]
        },
        {
            id: "conejos",
            nombre: "🐇 Conejos",
            botones: [
        {
            id: "neozelandes",
            nombre: "Neozelandés",
            ficha: {
                descripcion: "Raza de carne de rápido crecimiento.",
                origen: "Nueva Zelanda",
                especie: "Conejo",
                cantidad_de_produccion: "Alta eficiencia cárnica",
                peso_machos: "4-5 kg",
                peso_hembras: "4-5.5 kg",
                alimentacion: ["forraje", "concentrado"],
                manejo: "Intensivo",
                temperamento: "Dócil"}}
            ]
        },
        {
            id: "cuys",
            nombre: "🐟 Cuys",
            botones: [
        {
            id: "criollo",
            nombre: "Cuy Criollo",
            ficha: {
                descripcion: "Animal andino de carne tradicional.",
                origen: "Perú",
                especie: "Roedor",
                cantidad_de_produccion: "Alta eficiencia alimenticia",
                peso_machos: "1-1.5 kg",
                peso_hembras: "1-1.2 kg",
                alimentacion: ["forraje", "verduras"],
                manejo: "Intensivo",
                temperamento: "Dócil"}}
            ]
        }

    ]

};