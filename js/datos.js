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
                                historia: "Originaria de los condados de Aberdeen y Angus, en el noreste de Escocia, desciende de ganado local sin cuernos seleccionado desde el siglo XVIII. Hugh Watson y William McCombie impulsaron su consolidación en el siglo XIX; la Aberdeen-Angus Cattle Society se fundó en 1879. Hoy es una de las razas de carne más difundidas del planeta por su marmoleo natural.",
                                origen: "Escocia",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/angus.jpg",
                                cantidad_de_produccion: "Carne de alta calidad con alto valor comercial",
                                peso_machos: "800-1000 kg",
                                peso_hembras: "550-700 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de carne (res, en pie y en canal)",
                                    "Cría y engorde en sistemas extensivos o semi-intensivos",
                                    "Cruzamiento como raza terminal o materna",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "granos",
                                    "forraje"
                                ],
                                manejo: "Extensivo o semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "hereford",
                            nombre: "Hereford",
                            ficha: {
                                descripcion: "Raza rústica de excelente adaptación al pastoreo extensivo y alta eficiencia en conversión alimenticia.",
                                historia: "Desarrollada en el condado de Herefordshire, Inglaterra, durante el siglo XVIII a partir de ganado bovino local. Su cabeza y línea inferior blancas la hacen inconfundible. Fue de las primeras razas de carne exportadas masivamente a América y Oceanía por su rusticidad.",
                                origen: "Reino Unido",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/hereford.jpg",
                                cantidad_de_produccion: "Alta producción de carne en sistemas extensivos",
                                peso_machos: "850-1100 kg",
                                peso_hembras: "550-750 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de carne (res, en pie y en canal)",
                                    "Cría y engorde en sistemas extensivos o semi-intensivos",
                                    "Cruzamiento como raza terminal o materna",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "charolais",
                            nombre: "Charolais",
                            ficha: {
                                descripcion: "Raza francesa de gran tamaño, destacada por su alto rendimiento en canal y carne magra.",
                                historia: "Originaria de la región de Charolles, en el centro de Francia, con registros desde el siglo XVI. Se introdujo en México en 1930 y en EE.UU. en 1936, extendiéndose por América como raza terminal por su rápido crecimiento y gran tamaño corporal.",
                                origen: "Francia",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/charolais.jpg",
                                cantidad_de_produccion: "Muy alta producción de carne magra",
                                peso_machos: "1000-1200 kg",
                                peso_hembras: "650-800 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de carne (res, en pie y en canal)",
                                    "Cría y engorde en sistemas extensivos o semi-intensivos",
                                    "Cruzamiento como raza terminal o materna",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "granos",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "limousin",
                            nombre: "Limousin",
                            ficha: {
                                descripcion: "Raza musculosa con alta eficiencia alimenticia y excelente rendimiento en carne magra.",
                                historia: "Procede de la región de Limousin, en el centro-oeste de Francia, zona de suelos pobres que forjó una raza rústica y eficiente. Su libro genealógico se fundó en 1886 y se popularizó mundialmente desde los años 60 como raza terminal por su alto rendimiento en cortes magros.",
                                origen: "Francia",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/limousin.jpg",
                                cantidad_de_produccion: "Alta eficiencia en carne magra",
                                peso_machos: "900-1100 kg",
                                peso_hembras: "600-750 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de carne (res, en pie y en canal)",
                                    "Cría y engorde en sistemas extensivos o semi-intensivos",
                                    "Cruzamiento como raza terminal o materna",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Moderado"
                            }
                        },
                        {
                            id: "brahman",
                            nombre: "Brahman",
                            ficha: {
                                descripcion: "Raza cebuina altamente resistente al calor, parásitos y enfermedades tropicales.",
                                historia: "Desarrollada en el sur de EE.UU. (Texas y Luisiana) entre finales del siglo XIX e inicios del XX a partir de varias razas cebuinas indias (Guzerat, Nelore, Gir) importadas vía India y Brasil. Su joroba, papada y piel suelta con numerosas glándulas sudoríparas le dan extraordinaria tolerancia al calor y a los parásitos.",
                                origen: "India / EE.UU.",
                                especie: "Bovino",
                                nombre_cientifico: "Bos indicus (bovino cebuino)",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos indicus"
                                },
                                imagen: "img/bovinos/brahman.jpg",
                                cantidad_de_produccion: "Producción media con alta rusticidad",
                                peso_machos: "800-1100 kg",
                                peso_hembras: "500-700 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de carne (res, en pie y en canal)",
                                    "Cría y engorde en sistemas extensivos o semi-intensivos",
                                    "Cruzamiento como raza terminal o materna",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "santa_gertrudis",
                            nombre: "Santa Gertrudis",
                            ficha: {
                                descripcion: "Raza adaptada a climas cálidos con buena producción de carne y rusticidad.",
                                historia: "Creada en el King Ranch de Texas, EE.UU., entre 1910 y 1940, cruzando Shorthorn (5/8) con Brahman (3/8). Fue la primera raza bovina de carne reconocida oficialmente como desarrollada en Estados Unidos (1940), pensada para climas cálidos y húmedos.",
                                origen: "Estados Unidos",
                                especie: "Bovino",
                                nombre_cientifico: "Híbrido Bos taurus × Bos indicus (5/8 Shorthorn x 3/8 Brahman)",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus × Bos indicus (híbrido)"
                                },
                                imagen: "img/bovinos/santagertrudis.jpg",
                                cantidad_de_produccion: "Alta producción en climas cálidos",
                                peso_machos: "900-1100 kg",
                                peso_hembras: "600-750 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de carne (res, en pie y en canal)",
                                    "Cría y engorde en sistemas extensivos o semi-intensivos",
                                    "Cruzamiento como raza terminal o materna",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "granos"
                                ],
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
                                historia: "Originaria de Frisia, región compartida hoy por Países Bajos y norte de Alemania, donde el ganado negro local se seleccionó por siglos para producción lechera. Llevada a EE.UU. desde 1852, allí se consolidó el tipo Holstein-Friesian moderno, hoy la raza lechera dominante en el mundo.",
                                origen: "Países Bajos / Alemania",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/holstein.jpg",
                                cantidad_de_produccion: "Muy alta producción (25–40 L/día)",
                                peso_machos: "900-1100 kg",
                                peso_hembras: "600-750 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de leche",
                                    "Elaboración de derivados lácteos (quesos, mantequilla, yogur)",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "ensilado",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "jersey",
                            nombre: "Jersey",
                            ficha: {
                                descripcion: "Raza pequeña con leche de alto contenido graso y excelente calidad industrial.",
                                historia: "Originaria de la isla de Jersey, en el Canal de la Mancha, mantenida genéticamente aislada desde 1789 por leyes que prohibían importar otro ganado. Es reconocida por la altísima concentración de grasa y proteína de su leche.",
                                origen: "Isla de Jersey",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/jersey.jpg",
                                cantidad_de_produccion: "Media-alta (18–25 L/día)",
                                peso_machos: "600-800 kg",
                                peso_hembras: "400-500 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de leche",
                                    "Elaboración de derivados lácteos (quesos, mantequilla, yogur)",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "concentrado"
                                ],
                                manejo: "Intensivo o semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "guernsey",
                            nombre: "Guernsey",
                            ficha: {
                                descripcion: "Raza productora de leche rica en beta-caroteno, de color dorado característico.",
                                historia: "Procede de la isla de Guernsey, en el Canal de la Mancha, con posible ascendencia de ganado normando y bretón llevado por monjes medievales. Su leche de color amarillo dorado se debe a su alto contenido de betacaroteno.",
                                origen: "Isla de Guernsey",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/guernsey.jpg",
                                cantidad_de_produccion: "Media (18–22 L/día)",
                                peso_machos: "700-900 kg",
                                peso_hembras: "450-600 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de leche",
                                    "Elaboración de derivados lácteos (quesos, mantequilla, yogur)",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "pardo_suizo",
                            nombre: "Pardo Suizo",
                            ficha: {
                                descripcion: "Raza robusta y longeva con buena producción lechera y resistencia ambiental.",
                                historia: "Una de las razas bovinas más antiguas de Europa, originaria de los cantones alpinos suizos, con referencias de más de mil años. Exportada a EE.UU. desde 1869, donde se seleccionó la línea más lechera conocida como Brown Swiss.",
                                origen: "Suiza",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/pardosuizo.jpg",
                                cantidad_de_produccion: "Media-alta (20–30 L/día)",
                                peso_machos: "900-1200 kg",
                                peso_hembras: "600-800 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción de leche",
                                    "Elaboración de derivados lácteos (quesos, mantequilla, yogur)",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
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
                                historia: "Originaria del valle del río Simme, cantón de Berna, Suiza, con registros desde la Edad Media. Es una de las razas bovinas más extendidas del mundo, de aptitud triple (leche, carne y antiguamente tiro).",
                                origen: "Suiza",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/simmental.jpg",
                                cantidad_de_produccion: "Alta producción dual (leche + carne)",
                                peso_machos: "1000-1300 kg",
                                peso_hembras: "650-850 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas de doble propósito en pequeña y mediana escala",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "normando",
                            nombre: "Normando",
                            ficha: {
                                descripcion: "Raza francesa con leche rica en sólidos y excelente calidad de carne.",
                                historia: "Desarrollada en Normandía, Francia, a partir de ganado escandinavo llevado por los vikingos (siglos IX-X) cruzado con ganado local. De triple aptitud (leche, carne y tiro), es la base de quesos como el Camembert.",
                                origen: "Francia",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/normando.jpg",
                                cantidad_de_produccion: "Media-alta en leche y carne",
                                peso_machos: "900-1100 kg",
                                peso_hembras: "600-750 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas de doble propósito en pequeña y mediana escala",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo o semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "brown_swiss",
                            nombre: "Pardo Suizos",
                            ficha: {
                                descripcion: "Raza muy longeva y resistente, ideal para sistemas mixtos de producción.",
                                historia: "Línea lechera derivada del Pardo Suizo original, seleccionada intensamente en Estados Unidos desde su importación en 1869 para maximizar la producción de leche, conservando la rusticidad y longevidad típicas de la raza alpina.",
                                origen: "Suiza",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/pardosuizo.jpg",
                                cantidad_de_produccion: "Media-alta en leche y carne",
                                peso_machos: "900-1200 kg",
                                peso_hembras: "600-800 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas de doble propósito en pequeña y mediana escala",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "gelbvieh",
                            nombre: "Gelbvieh",
                            ficha: {
                                descripcion: "Raza alemana eficiente utilizada tanto para carne como para mejora genética productiva.",
                                historia: "Originaria de Baviera y Franconia, sur de Alemania, desarrollada en el siglo XIX a partir de razas locales de color amarillo-rojizo ('Gelbvieh' significa 'ganado amarillo'). De triple propósito tradicional, hoy se usa sobre todo como raza materna por su fertilidad y facilidad de parto.",
                                origen: "Alemania",
                                especie: "Bovino",
                                nombre_cientifico: "Bos taurus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus"
                                },
                                imagen: "img/bovinos/gelbvieh.jpg",
                                cantidad_de_produccion: "Alta eficiencia en carne y leche",
                                peso_machos: "1000-1200 kg",
                                peso_hembras: "650-800 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas de doble propósito en pequeña y mediana escala",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "brangus",
                            nombre: "Brangus",
                            ficha: {
                                descripcion: "Cruce Angus x Brahman con excelente calidad de carne y resistencia al calor.",
                                historia: "Raza sintética creada en EE.UU. desde 1932 combinando 5/8 Angus y 3/8 Brahman, buscando unir el marmoleo y docilidad del Angus con la resistencia al calor y a los parásitos del Brahman. La Asociación Internacional de Brangus se formalizó en 1949.",
                                origen: "Estados Unidos",
                                especie: "Bovino",
                                nombre_cientifico: "Híbrido Bos taurus × Bos indicus (5/8 Angus x 3/8 Brahman)",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus × Bos indicus (híbrido)"
                                },
                                imagen: "img/bovinos/brangus.jpg",
                                cantidad_de_produccion: "Alta producción de carne con rusticidad",
                                peso_machos: "800-1100 kg",
                                peso_hembras: "550-700 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas de doble propósito en pequeña y mediana escala",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo o semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "braford",
                            nombre: "Braford",
                            ficha: {
                                descripcion: "Cruce Hereford x Brahman altamente adaptado a climas tropicales.",
                                historia: "Raza sintética desarrollada en paralelo en Australia y Estados Unidos (Florida) a mediados del siglo XX, combinando aproximadamente 5/8 Hereford y 3/8 Brahman, para lograr ganado rústico y adaptado al trópico.",
                                origen: "Australia / EE.UU.",
                                especie: "Bovino",
                                nombre_cientifico: "Híbrido Bos taurus × Bos indicus (5/8 Hereford x 3/8 Brahman)",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Bos",
                                    especie: "Bos taurus × Bos indicus (híbrido)"
                                },
                                imagen: "img/bovinos/braford.jpg",
                                cantidad_de_produccion: "Alta producción cárnica en trópico",
                                peso_machos: "900-1100 kg",
                                peso_hembras: "600-750 kg",
                                esperanza_de_vida: "18-22 años (vida productiva de 8-10 años)",
                                periodo_gestacion: "Aproximadamente 283 días (9 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas de doble propósito en pequeña y mediana escala",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje"
                                ],
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
            botones: [
                {
                    id: "carne",
                    nombre: "🥩 Carne",
                    botones: [
                        {
                            id: "dorper",
                            nombre: "Dorper",
                            ficha: {
                                descripcion: "Raza ovina originaria de Sudáfrica desarrollada mediante el cruce de Dorset Horn y Blackhead Persian. Destaca por su rápido crecimiento, excelente conversión alimenticia y gran adaptación a zonas áridas y semiáridas. Es una de las razas de carne más utilizadas en sistemas intensivos y extensivos debido a su rusticidad y facilidad de manejo.",
                                historia: "Desarrollada en Sudáfrica en la década de 1930 por el Departamento de Agricultura, cruzando ovejas Dorset Horn con carneros Blackhead Persian. Es una oveja de pelo (no lana), de gran rusticidad, criada exclusivamente para carne.",
                                origen: "Sudáfrica",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/dorper.jpg",
                                cantidad_de_produccion: "Ganancia diaria: 250-350 g/día. Rendimiento en canal: 50-59 %. Carne tierna con buena cobertura de grasa y excelente aceptación comercial.",
                                peso_machos: "90-120 kg",
                                peso_hembras: "60-90 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne (cordero y ovino adulto)",
                                    "Cría en sistemas extensivos",
                                    "Uso como raza terminal o materna en cruzamientos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "ensilado",
                                    "concentrado",
                                    "maíz",
                                    "alfalfa",
                                    "forraje",
                                    "sales minerales"
                                ],
                                manejo: "Intensivo, semiintensivo o extensivo. Requiere desparasitación periódica, buena nutrición y manejo reproductivo eficiente.",
                                temperamento: "Dócil y resistente."
                            }
                        },
                        {
                            id: "suffolk",
                            nombre: "Suffolk",
                            ficha: {
                                descripcion: "Raza especializada en producción de carne ampliamente utilizada como raza terminal en programas de cruzamiento. Se caracteriza por su rápido crecimiento, gran desarrollo muscular y excelente fertilidad. Produce corderos pesados con muy buena conformación.",
                                historia: "Originaria del condado de Suffolk, Inglaterra, desarrollada a inicios del siglo XIX cruzando carneros Southdown con ovejas Norfolk Horn. Su cabeza y patas negras y su rápido crecimiento la hacen una de las razas terminales de carne más usadas del mundo.",
                                origen: "Inglaterra",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/suffolk.jpg",
                                cantidad_de_produccion: "Ganancia diaria: 300-400 g/día. Rendimiento en canal: 52-60 %. Carne magra de excelente calidad.",
                                peso_machos: "100-150 kg",
                                peso_hembras: "70-100 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne (cordero y ovino adulto)",
                                    "Cría en sistemas extensivos",
                                    "Uso como raza terminal o materna en cruzamientos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "ensilado",
                                    "concentrado",
                                    "alfalfa",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semiintensivo e intensivo con adecuado control sanitario.",
                                temperamento: "Activo y dócil."
                            }
                        },
                        {
                            id: "texel",
                            nombre: "Texel",
                            ficha: {
                                descripcion: "Raza reconocida mundialmente por producir carne muy magra con excelente desarrollo muscular. Presenta gran eficiencia alimenticia y buena adaptación a diferentes sistemas de producción. Es ampliamente utilizada para mejorar la calidad cárnica mediante cruzamientos.",
                                historia: "Originaria de la isla de Texel, Países Bajos, seleccionada desde el siglo XIX e intensificada en el XX con genética británica. Célebre por su extraordinario desarrollo muscular y bajo nivel de grasa de cobertura.",
                                origen: "Países Bajos",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/texel.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 55-60 %. Excelente musculatura y baja grasa intramuscular.",
                                peso_machos: "90-130 kg",
                                peso_hembras: "65-90 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne (cordero y ovino adulto)",
                                    "Cría en sistemas extensivos",
                                    "Uso como raza terminal o materna en cruzamientos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "heno",
                                    "concentrado",
                                    "alfalfa",
                                    "maíz"
                                ],
                                manejo: "Extensivo o intensivo según disponibilidad de pasturas.",
                                temperamento: "Tranquilo."
                            }
                        },
                        {
                            id: "hampshire",
                            nombre: "Hampshire Down",
                            ficha: {
                                descripcion: "Raza de carne con excelente velocidad de crecimiento y gran capacidad para producir corderos pesados. Posee buena conformación muscular y elevada rusticidad, adaptándose a diferentes condiciones climáticas.",
                                historia: "Desarrollada en el condado de Hampshire, Inglaterra, a inicios del siglo XIX combinando Southdown con razas locales de cara oscura (Wiltshire Horn y Berkshire Knot). Es una raza terminal de carne de crecimiento rápido.",
                                origen: "Inglaterra",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/hampshire.jpg",
                                cantidad_de_produccion: "Ganancia diaria: 280-360 g/día. Rendimiento en canal: 52-58 %. Carne tierna y bien marmoleada.",
                                peso_machos: "110-140 kg",
                                peso_hembras: "70-95 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne (cordero y ovino adulto)",
                                    "Cría en sistemas extensivos",
                                    "Uso como raza terminal o materna en cruzamientos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "ensilado",
                                    "concentrado",
                                    "maíz",
                                    "alfalfa"
                                ],
                                manejo: "Semiintensivo y extensivo.",
                                temperamento: "Dócil."
                            }
                        },
                        {
                            id: "iledefrance",
                            nombre: "Île-de-France",
                            ficha: {
                                descripcion: "Raza francesa especializada en carne, reconocida por su rápido crecimiento, excelente fertilidad y buena calidad de canal. Produce corderos con alta conformación muscular y muy buena eficiencia productiva.",
                                historia: "Creada en Francia en el siglo XIX cruzando carneros Dishley Leicester ingleses con ovejas Merino Rambouillet francesas, combinando la conformación cárnica inglesa con la rusticidad del merino.",
                                origen: "Francia",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/iledefrance.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 54-60 %. Excelente desarrollo muscular.",
                                peso_machos: "100-140 kg",
                                peso_hembras: "70-90 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne (cordero y ovino adulto)",
                                    "Cría en sistemas extensivos",
                                    "Uso como raza terminal o materna en cruzamientos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "concentrado",
                                    "ensilado",
                                    "forraje"
                                ],
                                manejo: "Intensivo y semiintensivo.",
                                temperamento: "Manso."
                            }
                        },
                        {
                            id: "southdown",
                            nombre: "Southdown",
                            ficha: {
                                descripcion: "Una de las razas británicas más antiguas destinadas a la producción de carne. Produce canales compactas con carne de excelente sabor y buena cobertura de grasa.",
                                historia: "Una de las razas de oveja más antiguas de Inglaterra, originaria de las colinas South Downs en Sussex, desarrollada por John Ellman a finales del siglo XVIII. Fue la base genética de numerosas razas 'Down' posteriores (Suffolk, Hampshire, Dorset Down).",
                                origen: "Inglaterra",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/southdown.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 50-56 %. Carne de alta calidad.",
                                peso_machos: "80-100 kg",
                                peso_hembras: "60-75 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne (cordero y ovino adulto)",
                                    "Cría en sistemas extensivos",
                                    "Uso como raza terminal o materna en cruzamientos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "heno",
                                    "concentrado"
                                ],
                                manejo: "Extensivo y semiintensivo.",
                                temperamento: "Muy dócil."
                            }
                        }
                    ]
                },
                {
                    id: "lana",
                    nombre: "🧶 Lana",
                    botones: [
                        {
                            id: "merino",
                            nombre: "Merino",
                            ficha: {
                                descripcion: "Considerada la raza ovina más importante del mundo para la producción de lana fina. Produce fibras extremadamente suaves, uniformes y de gran valor comercial utilizadas en prendas de alta calidad. Presenta buena rusticidad y adaptación a climas templados y secos.",
                                historia: "Originaria de España, desarrollada durante la Edad Media —posiblemente con influencia norteafricana— y protegida por la Corona bajo el sistema de la Mesta hasta el siglo XVIII. Produce la lana fina de mayor calidad del mundo y dio origen a razas derivadas como el Rambouillet.",
                                origen: "España",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/merino.jpg",
                                cantidad_de_produccion: "Producción de lana: 4-10 kg/año. Diámetro de fibra: 17-24 micras. Lana muy fina, suave y de alta calidad.",
                                peso_machos: "80-100 kg",
                                peso_hembras: "50-70 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de lana / fibra textil",
                                    "Producción de carne como uso secundario",
                                    "Conservación genética de razas laneras"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "alfalfa",
                                    "concentrado",
                                    "sales minerales"
                                ],
                                manejo: "Extensivo con esquila anual, control de parásitos y buena suplementación.",
                                temperamento: "Dócil."
                            }
                        },
                        {
                            id: "rambouillet",
                            nombre: "Rambouillet",
                            ficha: {
                                descripcion: "Raza derivada del Merino seleccionada para producir grandes cantidades de lana fina. Es resistente, fértil y ampliamente utilizada en programas de mejoramiento genético.",
                                historia: "Desarrollada en Francia a partir de 1786, cuando Luis XVI importó un rebaño de ovejas Merino españolas a la granja real de Rambouillet. Es más grande y produce más lana y carne que el Merino original.",
                                origen: "Francia",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/rambouillet.jpg",
                                cantidad_de_produccion: "Producción de lana: 5-9 kg/año. Fibra de 18-24 micras.",
                                peso_machos: "90-135 kg",
                                peso_hembras: "60-90 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de lana / fibra textil",
                                    "Producción de carne como uso secundario",
                                    "Conservación genética de razas laneras"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "alfalfa",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo.",
                                temperamento: "Tranquilo."
                            }
                        },
                        {
                            id: "corriedale",
                            nombre: "Corriedale",
                            ficha: {
                                descripcion: "Raza de doble propósito reconocida por producir lana media de excelente calidad y carne aceptable. Es muy utilizada en América del Sur debido a su adaptación a diferentes condiciones climáticas.",
                                historia: "Creada en Nueva Zelanda a finales del siglo XIX cruzando carneros Lincoln o Leicester con ovejas Merino, para obtener una raza de doble propósito (lana y carne), luego difundida ampliamente en Sudamérica.",
                                origen: "Nueva Zelanda",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/corriedale.jpg",
                                cantidad_de_produccion: "Lana: 4-7 kg/año. Fibra de 25-31 micras.",
                                peso_machos: "90-120 kg",
                                peso_hembras: "55-80 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de lana / fibra textil",
                                    "Producción de carne como uso secundario",
                                    "Conservación genética de razas laneras"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "alfalfa"
                                ],
                                manejo: "Extensivo.",
                                temperamento: "Manso."
                            }
                        },
                        {
                            id: "romney",
                            nombre: "Romney",
                            ficha: {
                                descripcion: "Raza ampliamente utilizada para producir lana media y carne. Se adapta muy bien a climas húmedos y presenta buena resistencia a enfermedades podales.",
                                historia: "Originaria del área pantanosa de Romney Marsh, condado de Kent, Inglaterra, seleccionada por siglos para resistir la humedad y el barro. Se convirtió en la raza base de la industria lanera de Nueva Zelanda.",
                                origen: "Nueva Zelanda",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/romney.jpg",
                                cantidad_de_produccion: "Lana: 4-6 kg/año. Fibra de 30-37 micras.",
                                peso_machos: "100-130 kg",
                                peso_hembras: "65-85 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de lana / fibra textil",
                                    "Producción de carne como uso secundario",
                                    "Conservación genética de razas laneras"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "heno"
                                ],
                                manejo: "Extensivo.",
                                temperamento: "Dócil."
                            }
                        },
                        {
                            id: "lincoln",
                            nombre: "Lincoln",
                            ficha: {
                                descripcion: "Raza productora de lana larga y gruesa. Produce una de las mayores cantidades de lana por animal y es muy utilizada en cruzamientos para mejorar longitud de fibra.",
                                historia: "Una de las razas de oveja más grandes del mundo, originaria de Lincolnshire, Inglaterra, mejorada en el siglo XVIII por Robert Bakewell. Produce el vellón más pesado y de fibra más larga entre las razas laneras.",
                                origen: "Inglaterra",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/lincoln.jpg",
                                cantidad_de_produccion: "Lana: 6-10 kg/año. Longitud: 20-38 cm.",
                                peso_machos: "110-160 kg",
                                peso_hembras: "80-110 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de lana / fibra textil",
                                    "Producción de carne como uso secundario",
                                    "Conservación genética de razas laneras"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje"
                                ],
                                manejo: "Extensivo.",
                                temperamento: "Muy tranquilo."
                            }
                        },
                        {
                            id: "borderleicester",
                            nombre: "Border Leicester",
                            ficha: {
                                descripcion: "Raza utilizada tanto para producción de lana como en cruzamientos para mejorar crecimiento y fertilidad. Produce lana larga y brillante de buena calidad.",
                                historia: "Desarrollada a finales del siglo XVIII en la frontera entre Inglaterra y Escocia, cruzando la Dishley Leicester de Robert Bakewell con ovejas Cheviot; su perfil romano característico la hace usada como línea paterna en cruzamientos terminales.",
                                origen: "Escocia",
                                especie: "Ovino",
                                nombre_cientifico: "Ovis aries",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Ovis",
                                    especie: "Ovis aries"
                                },
                                imagen: "img/ovinos/borderleicester.jpg",
                                cantidad_de_produccion: "Lana: 4-7 kg/año. Fibra larga de 28-38 micras.",
                                peso_machos: "110-140 kg",
                                peso_hembras: "70-90 kg",
                                esperanza_de_vida: "10-12 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 147 días (5 meses)",
                                usos_principales: [
                                    "Producción de lana / fibra textil",
                                    "Producción de carne como uso secundario",
                                    "Conservación genética de razas laneras"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "alfalfa"
                                ],
                                manejo: "Semiintensivo.",
                                temperamento: "Dócil."
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "caprinos",
            nombre: "🐐 Caprinos",
            botones: [
                {
                    id: "caprinos_leche",
                    nombre: "🥛 Leche",
                    botones: [
                        {
                            id: "saanen",
                            nombre: "Saanen",
                            ficha: {
                                descripcion: "Raza suiza de capa blanca, considerada la principal raza lechera caprina del mundo por su elevado volumen de producción. Es de temperamento tranquilo, gran tamaño y buena adaptación a sistemas intensivos de estabulación, aunque es sensible a la radiación solar directa por su piel clara.",
                                historia: "Originaria del valle de Saanen, cantón de Berna, Suiza, es la raza caprina lechera más productiva del mundo, de capa blanca, ampliamente exportada desde finales del siglo XIX.",
                                origen: "Suiza",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/saanen.jpg",
                                cantidad_de_produccion: "3-4.5 L/día; grasa 3.0-3.5%; proteína 2.9-3.1%; lactancia de 280-300 días",
                                peso_machos: "85-100 kg",
                                peso_hembras: "55-70 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de leche caprina",
                                    "Elaboración de quesos artesanales",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado",
                                    "alfalfa",
                                    "heno"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "toggenburg",
                            nombre: "Toggenburg",
                            ficha: {
                                descripcion: "Raza suiza de capa marrón con rayas blancas características en cara y patas, muy antigua y de buena producción lechera. Es rústica, se adapta bien a climas fríos de montaña y es ampliamente utilizada en programas de mejoramiento genético caprino a nivel mundial.",
                                historia: "Procede del valle de Toggenburg, cantón de San Galo, Suiza. Es probablemente la raza caprina lechera de pedigrí más antigua registrada, con su característico color pardo y marcas blancas en cara y patas.",
                                origen: "Suiza",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/toggenburg.jpg",
                                cantidad_de_produccion: "2.5-3.5 L/día; grasa 3.5-4.0%; proteína 3.0%; leche de buena calidad para quesería",
                                peso_machos: "70-90 kg",
                                peso_hembras: "45-60 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de leche caprina",
                                    "Elaboración de quesos artesanales",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado",
                                    "heno"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "alpina",
                            nombre: "Alpina (Alpina Francesa)",
                            ficha: {
                                descripcion: "Raza francesa de capa variable (desde blanca hasta negra), muy rústica y con excelente adaptación a diversos climas y sistemas de pastoreo. Presenta alta persistencia de lactancia y es una de las razas lecheras más difundidas en América Latina.",
                                historia: "Desarrollada en los Alpes franceses a partir de cabras alpinas locales, mejorada con genética Saanen y Toggenburg importada de Suiza durante los siglos XIX y XX. Muy valorada por su rusticidad y adaptabilidad.",
                                origen: "Francia",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/alpina.jpg",
                                cantidad_de_produccion: "3-4 L/día; grasa 3.3-3.8%; proteína 3.0-3.2%; buena persistencia de lactancia",
                                peso_machos: "75-95 kg",
                                peso_hembras: "50-65 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de leche caprina",
                                    "Elaboración de quesos artesanales",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado",
                                    "arbustos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "anglo_nubia",
                            nombre: "Anglo Nubia",
                            ficha: {
                                descripcion: "Raza británica de orejas largas y péndulas y perfil convexo, con leche de alto contenido graso ideal para quesería artesanal. Es más rústica y tolerante al calor que otras razas lecheras europeas, con buena aptitud dual leche-carne.",
                                historia: "Creada en Inglaterra en el siglo XIX cruzando cabras británicas locales con machos de orejas caídas de India, Oriente Medio y el norte de África. Su perfil convexo y leche de alto contenido graso la distinguen.",
                                origen: "Reino Unido",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/anglo_nubia.jpg",
                                cantidad_de_produccion: "2.5-3.5 L/día; grasa 4.5-5.0%; proteína 3.5%; leche de alta calidad para quesos",
                                peso_machos: "80-100 kg",
                                peso_hembras: "55-70 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de leche caprina",
                                    "Elaboración de quesos artesanales",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado",
                                    "arbustos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "lamancha",
                            nombre: "LaMancha",
                            ficha: {
                                descripcion: "Raza estadounidense reconocida fácilmente por sus orejas muy pequeñas o ausentes, con buena producción lechera y temperamento excepcionalmente dócil. Es muy resistente y se adapta bien a diversos climas y sistemas de manejo.",
                                historia: "Única raza caprina desarrollada en Estados Unidos (California, década de 1930), reconocida por sus orejas extremadamente cortas ('gopher ears'), un rasgo genético dominante característico.",
                                origen: "Estados Unidos",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/lamancha.jpg",
                                cantidad_de_produccion: "2.8-3.8 L/día; grasa 3.8-4.2%; proteína 3.1%; leche de buena calidad industrial",
                                peso_machos: "70-90 kg",
                                peso_hembras: "50-65 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de leche caprina",
                                    "Elaboración de quesos artesanales",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "murciano_granadina",
                            nombre: "Murciano-Granadina",
                            ficha: {
                                descripcion: "Raza española de capa negra o caoba, muy valorada por la calidad de su leche (alto extracto seco) usada en quesos de denominación de origen. Es rústica, prolífica y bien adaptada al clima mediterráneo semiárido del sureste español.",
                                historia: "Originaria de las provincias de Murcia y Granada, España, resultado de la fusión de las razas Murciana y Granadina a mediados del siglo XX. Es la principal raza lechera caprina de España.",
                                origen: "España",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/murciano_granadina.jpg",
                                cantidad_de_produccion: "2.5-3.5 L/día; grasa 5.0-5.5%; proteína 3.6-3.9%; leche de altísima calidad quesera",
                                peso_machos: "65-80 kg",
                                peso_hembras: "45-55 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de leche caprina",
                                    "Elaboración de quesos artesanales",
                                    "Reproducción y mejora genética lechera"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "caprinos_carne",
                    nombre: "🥩 Carne",
                    botones: [
                        {
                            id: "boer",
                            nombre: "Boer",
                            ficha: {
                                descripcion: "Raza sudafricana de carne por excelencia, de cabeza roja y cuerpo blanco, con rápido crecimiento y excelente conformación muscular. Es la raza caprina cárnica más difundida del mundo, usada tanto pura como en cruzamientos terminales para mejorar el rendimiento de canal.",
                                historia: "Desarrollada en Sudáfrica a inicios del siglo XX por granjeros bóer a partir de cabras nativas cruzadas con razas indias y europeas, seleccionada intensamente para carne. Es la raza cárnica caprina de referencia mundial.",
                                origen: "Sudáfrica",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/boer.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 48-52%; ganancia diaria 200-250 g; carne de excelente calidad y buena conformación",
                                peso_machos: "110-135 kg",
                                peso_hembras: "90-100 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne caprina",
                                    "Cría en sistemas extensivos y zonas áridas",
                                    "Uso como raza terminal en cruzamientos cárnicos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "arbustos",
                                    "concentrado",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "kiko",
                            nombre: "Kiko",
                            ficha: {
                                descripcion: "Raza neozelandesa desarrollada a partir de cabras ferales seleccionadas por rusticidad, resistencia a parásitos y capacidad materna, con buen crecimiento en condiciones extensivas sin suplementación intensiva. Requiere mínimo manejo sanitario.",
                                historia: "Creada en Nueva Zelanda en los años 1980 mediante selección de cabras ferales cruzadas con machos Nubian, Toggenburg y Saanen, priorizando rusticidad y crecimiento rápido con manejo mínimo.",
                                origen: "Nueva Zelanda",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/kiko.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 45-50%; ganancia diaria 150-220 g; alta rusticidad y resistencia parasitaria",
                                peso_machos: "80-110 kg",
                                peso_hembras: "55-70 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne caprina",
                                    "Cría en sistemas extensivos y zonas áridas",
                                    "Uso como raza terminal en cruzamientos cárnicos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "arbustos",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "spanish_goat",
                            nombre: "Spanish Goat (Cabra Española)",
                            ficha: {
                                descripcion: "Raza rústica descendiente de cabras traídas por los colonizadores españoles a América, adaptada a condiciones extensivas de monte con mínimo manejo. Es muy resistente a enfermedades y parásitos, usada principalmente para producción de carne en pastoreo de matorral.",
                                historia: "Descendiente de cabras traídas por colonizadores españoles a América desde el siglo XVI, asilvestradas y luego re-domesticadas en Texas y el sur de EE.UU. Destaca por su gran rusticidad y resistencia a la aridez.",
                                origen: "España / América",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/spanish_goat.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 44-48%; ganancia diaria 130-180 g; alta rusticidad en pastoreo de monte",
                                peso_machos: "60-90 kg",
                                peso_hembras: "45-55 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne caprina",
                                    "Cría en sistemas extensivos y zonas áridas",
                                    "Uso como raza terminal en cruzamientos cárnicos"
                                ],
                                alimentacion: [
                                    "arbustos",
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "rangeland_goat",
                            nombre: "Rangeland Goat (Cabra de Monte Australiana)",
                            ficha: {
                                descripcion: "Raza australiana feral seleccionada por su capacidad de sobrevivir y producir carne en condiciones extremadamente extensivas y áridas, con mínima intervención humana. Es muy valorada en exportación de carne caprina orgánica.",
                                historia: "Cabras ferales del interior de Australia, descendientes de animales domésticos escapados desde el siglo XIX, capturadas y manejadas para carne por su extraordinaria adaptación al monte árido.",
                                origen: "Australia",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/rangeland_goat.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 45-49%; ganancia diaria 140-190 g; carne magra de producción orgánica",
                                peso_machos: "70-100 kg",
                                peso_hembras: "45-60 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne caprina",
                                    "Cría en sistemas extensivos y zonas áridas",
                                    "Uso como raza terminal en cruzamientos cárnicos"
                                ],
                                alimentacion: [
                                    "arbustos",
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "kalahari_red",
                            nombre: "Kalahari Red",
                            ficha: {
                                descripcion: "Raza sudafricana de capa rojiza uniforme, desarrollada para resistir las condiciones áridas del desierto de Kalahari, con buena fertilidad y capacidad materna. Su pigmentación oscura la protege del cáncer de piel frente a la fuerte radiación solar.",
                                historia: "Desarrollada en Sudáfrica en los años 1990 a partir de cabras nativas del desierto de Kalahari, seleccionadas por su color rojo uniforme (protección solar) combinado con buen rendimiento cárnico.",
                                origen: "Sudáfrica",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/kalahari_red.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 46-50%; ganancia diaria 180-220 g; alta resistencia a condiciones desérticas",
                                peso_machos: "90-110 kg",
                                peso_hembras: "65-80 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne caprina",
                                    "Cría en sistemas extensivos y zonas áridas",
                                    "Uso como raza terminal en cruzamientos cárnicos"
                                ],
                                alimentacion: [
                                    "arbustos",
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "myotonic",
                            nombre: "Myotonic (Tennessee Fainting Goat)",
                            ficha: {
                                descripcion: "Raza estadounidense caracterizada por la miotonía congénita, una condición muscular que provoca rigidez temporal al asustarse. Es una raza de carne de tamaño mediano, dócil y de fácil manejo, criada también con fines de conservación genética.",
                                historia: "Originaria del sureste de Estados Unidos (Tennessee), presenta miotonía congénita, una condición genética que provoca rigidez muscular temporal al sobresaltarse; de ahí su apodo de 'cabra desmayada'.",
                                origen: "Estados Unidos",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/myotonic.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 45-48%; ganancia diaria 120-160 g; carne de buena calidad en pequeña escala",
                                peso_machos: "55-80 kg",
                                peso_hembras: "35-50 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de carne caprina",
                                    "Cría en sistemas extensivos y zonas áridas",
                                    "Uso como raza terminal en cruzamientos cárnicos"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "caprinos_fibra",
                    nombre: "🧵 Fibra",
                    botones: [
                        {
                            id: "angora",
                            nombre: "Angora (Mohair)",
                            ficha: {
                                descripcion: "Raza turca productora de mohair, una fibra lustrosa, resistente y de gran valor textil obtenida mediante esquilas semestrales. Es menos rústica que otras razas caprinas y requiere protección frente al frío y la humedad, especialmente tras la esquila.",
                                historia: "Originaria de Anatolia (Angora, actual Ankara), Turquía, criada desde la antigüedad por su fibra mohair. Se introdujo en Sudáfrica y Texas (EE.UU.) en el siglo XIX, donde hoy se concentra buena parte de la producción mundial.",
                                origen: "Turquía (Anatolia)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/angora.jpg",
                                cantidad_de_produccion: "Producción de mohair 4-6 kg/año; longitud de fibra 12-15 cm; finura 24-40 micras según edad",
                                peso_machos: "45-65 kg",
                                peso_hembras: "35-45 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de fibra textil (mohair, cachemira o pashmina)",
                                    "Artesanía y exportación de fibra fina",
                                    "Conservación de razas fibreras tradicionales"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "cashmere_goat",
                            nombre: "Cashmere (Cabra Cachemira)",
                            ficha: {
                                descripcion: "Grupo racial productor de la fibra cachemira, un subpelo extremadamente fino recolectado mediante peinado o esquila en climas fríos de montaña. Es sumamente rústica y resistente a temperaturas extremas de Asia Central.",
                                historia: "No es una raza única sino un tipo caprino de Asia Central (Mongolia, norte de China, región de Cachemira) seleccionado por su subpelo fino que crece en invierno bajo el pelo de cobertura y se cosecha por peinado.",
                                origen: "Asia Central (Mongolia, China, Cachemira)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/cashmere.jpg",
                                cantidad_de_produccion: "Producción de fibra 150-300 g/año de subpelo; finura 14-16 micras; fibra de altísimo valor comercial",
                                peso_machos: "40-60 kg",
                                peso_hembras: "30-45 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de fibra textil (mohair, cachemira o pashmina)",
                                    "Artesanía y exportación de fibra fina",
                                    "Conservación de razas fibreras tradicionales"
                                ],
                                alimentacion: [
                                    "pasto altoandino",
                                    "arbustos",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "pygora",
                            nombre: "Pygora",
                            ficha: {
                                descripcion: "Raza estadounidense creada del cruce entre la cabra Pigmea y la Angora, desarrollada específicamente para producir fibra suave apta para hilado artesanal en tres tipos distintos (mohair, cashmere y mixta). Es de tamaño pequeño y fácil manejo.",
                                historia: "Raza estadounidense creada en los años 1980 cruzando la cabra Pigmea (Pygmy) con la Angora, combinando el tamaño pequeño de la primera con la producción de fibra de la segunda.",
                                origen: "Estados Unidos",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/pygora.jpg",
                                cantidad_de_produccion: "Producción de fibra 0.5-1.5 kg/año; finura 18-28 micras según tipo de fibra",
                                peso_machos: "30-40 kg",
                                peso_hembras: "25-32 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de fibra textil (mohair, cachemira o pashmina)",
                                    "Artesanía y exportación de fibra fina",
                                    "Conservación de razas fibreras tradicionales"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "nigora",
                            nombre: "Nigora",
                            ficha: {
                                descripcion: "Raza estadounidense derivada del cruce entre la cabra Nigeriana Enana y la Angora, seleccionada para producir fibra fina de calidad junto con un tamaño corporal reducido, ideal para pequeños productores y granjas de traspatio.",
                                historia: "Desarrollada en Estados Unidos cruzando la cabra lechera Nigeriana Enana con la Angora, buscando una raza pequeña de doble propósito: fibra y leche en pequeña escala.",
                                origen: "Estados Unidos",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/nigora.jpg",
                                cantidad_de_produccion: "Producción de fibra 0.4-1.0 kg/año; finura 20-30 micras; fibra suave apta para hilado",
                                peso_machos: "30-45 kg",
                                peso_hembras: "25-35 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de fibra textil (mohair, cachemira o pashmina)",
                                    "Artesanía y exportación de fibra fina",
                                    "Conservación de razas fibreras tradicionales"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "changthangi",
                            nombre: "Changthangi (Pashmina)",
                            ficha: {
                                descripcion: "Raza del altiplano de Ladakh (Himalaya), productora de la fibra pashmina, una de las más finas y costosas del mundo. Vive en condiciones extremas de altura y frío, desarrollando un subpelo denso como protección térmica natural.",
                                historia: "Criada por los pastores changpa en la meseta de Changthang, Ladakh (Himalaya indio), a más de 4000 msnm. Produce la fibra pashmina, una de las más finas y valiosas del mundo.",
                                origen: "India (Ladakh, Himalaya)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/changthangi.jpg",
                                cantidad_de_produccion: "Producción de pashmina 100-200 g/año; finura 12-15 micras; fibra de altísimo valor en el mercado textil",
                                peso_machos: "35-50 kg",
                                peso_hembras: "25-35 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de fibra textil (mohair, cachemira o pashmina)",
                                    "Artesanía y exportación de fibra fina",
                                    "Conservación de razas fibreras tradicionales"
                                ],
                                alimentacion: [
                                    "pasto altoandino",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "chegu",
                            nombre: "Chegu",
                            ficha: {
                                descripcion: "Raza cachemira originaria del Himalaya indio, criada en condiciones de alta montaña para producción de fibra fina de gran calidad. Es muy rústica, con excelente adaptación al frío extremo y escasez de forraje.",
                                historia: "Originaria de Himachal Pradesh, en el Himalaya indio, criada por comunidades pastoriles de altitud por su fibra fina tipo cachemira, de menor volumen pero calidad reconocida.",
                                origen: "India (Himachal Pradesh)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/chegu.jpg",
                                cantidad_de_produccion: "Producción de fibra 150-250 g/año; finura 13-16 micras; fibra fina de alto valor comercial",
                                peso_machos: "35-50 kg",
                                peso_hembras: "25-35 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción de fibra textil (mohair, cachemira o pashmina)",
                                    "Artesanía y exportación de fibra fina",
                                    "Conservación de razas fibreras tradicionales"
                                ],
                                alimentacion: [
                                    "pasto altoandino",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "caprinos_doble",
                    nombre: "🐐 Doble propósito",
                    botones: [
                        {
                            id: "damascus",
                            nombre: "Damascus (Shami)",
                            ficha: {
                                descripcion: "Raza siria de doble propósito leche-carne, de orejas largas y péndulas y perfil marcadamente convexo, muy valorada en Medio Oriente por su alta producción lechera y buena conformación cárnica en condiciones áridas.",
                                historia: "Originaria de Siria (región de Damasco) y difundida por Líbano y Chipre, apreciada por su alta prolificidad y producción lechera, con perfil muy convexo y orejas largas y caídas.",
                                origen: "Siria / Líbano / Chipre",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/damascus.jpg",
                                cantidad_de_produccion: "Leche: 2-3.5 L/día, grasa 4.0%; Carne: rendimiento en canal 46-50%",
                                peso_machos: "70-90 kg",
                                peso_hembras: "50-65 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas familiares de doble propósito",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "jamnapari",
                            nombre: "Jamnapari",
                            ficha: {
                                descripcion: "Raza india de gran tamaño y orejas largas, de doble propósito leche-carne, usada como base genética de numerosas razas mejoradas del sudeste asiático como la Boer indonesia (Etawah). Es rústica y bien adaptada al clima tropical.",
                                historia: "Originaria del distrito de Etawah, Uttar Pradesh, India, es una de las razas caprinas más grandes de Asia, de doble propósito (leche y carne), con orejas largas y perfil romano marcado.",
                                origen: "India",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/jamnapari.jpg",
                                cantidad_de_produccion: "Leche: 1.5-2.5 L/día, grasa 4.5%; Carne: rendimiento en canal 44-48%",
                                peso_machos: "65-85 kg",
                                peso_hembras: "45-55 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas familiares de doble propósito",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "beetal",
                            nombre: "Beetal",
                            ficha: {
                                descripcion: "Raza del Punjab (India/Pakistán) de doble propósito, de gran tamaño y orejas largas, similar a la Jamnapari, con buena producción lechera y de carne. Es muy usada como raza mejoradora en programas de cruzamiento en Asia.",
                                historia: "Originaria de la región del Punjab, entre India y Pakistán, similar a la Jamnapari; se cría tanto por leche como por carne y también se valora como animal de exhibición.",
                                origen: "India / Pakistán",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/beetal.jpg",
                                cantidad_de_produccion: "Leche: 1.5-2.2 L/día, grasa 4.3%; Carne: rendimiento en canal 45-48%",
                                peso_machos: "60-80 kg",
                                peso_hembras: "40-50 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas familiares de doble propósito",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "barbari",
                            nombre: "Barbari",
                            ficha: {
                                descripcion: "Raza de origen africano adaptada en India, de tamaño pequeño-mediano, precoz y muy prolífica, con buena producción de leche y carne en condiciones extensivas. Es una de las razas caprinas más populares del norte de India.",
                                historia: "Criada principalmente en India y Pakistán, su nombre remite a un origen norteafricano (Berbería). Es pequeña, prolífica y de doble propósito, muy popular en sistemas de traspatio.",
                                origen: "India (originaria del norte de África)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/barbari.jpg",
                                cantidad_de_produccion: "Leche: 1.0-1.8 L/día, grasa 4.5%; Carne: rendimiento en canal 44-47%",
                                peso_machos: "35-45 kg",
                                peso_hembras: "25-35 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas familiares de doble propósito",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "sirohi",
                            nombre: "Sirohi",
                            ficha: {
                                descripcion: "Raza india de tamaño mediano y buena resistencia a enfermedades, criada tanto por su producción de leche como de carne en sistemas extensivos de Rajastán. Es rústica y de buena capacidad de adaptación a climas cálidos y secos.",
                                historia: "Originaria del distrito de Sirohi, Rajastán, India, es una raza rústica de doble propósito adaptada a climas semiáridos, con buena resistencia a enfermedades.",
                                origen: "India (Rajastán)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/sirohi.jpg",
                                cantidad_de_produccion: "Leche: 1.0-1.5 L/día, grasa 4.2%; Carne: rendimiento en canal 43-46%",
                                peso_machos: "40-55 kg",
                                peso_hembras: "30-40 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas familiares de doble propósito",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "arbustos"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "criolla_caprina",
                            nombre: "Criolla",
                            ficha: {
                                descripcion: "Cabra descendiente de las razas ibéricas introducidas en América durante la colonia, seleccionada por generaciones por su rusticidad y capacidad de producir leche y carne con mínimos insumos, en sistemas de pastoreo familiar de zonas áridas.",
                                historia: "Descendiente de cabras ibéricas (principalmente andaluzas y canarias) introducidas por colonizadores españoles en América desde el siglo XVI, adaptada durante siglos a climas muy diversos mediante selección natural.",
                                origen: "América Latina (origen ibérico)",
                                especie: "Caprino",
                                nombre_cientifico: "Capra aegagrus hircus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Bovidae",
                                    genero: "Capra",
                                    especie: "Capra aegagrus hircus"
                                },
                                imagen: "img/caprinos/criolla.jpg",
                                cantidad_de_produccion: "Leche: 0.8-1.5 L/día; Carne: rendimiento en canal 42-46%; alta rusticidad en zonas áridas",
                                peso_machos: "35-50 kg",
                                peso_hembras: "25-35 kg",
                                esperanza_de_vida: "12-15 años (vida productiva de 6-8 años)",
                                periodo_gestacion: "Aproximadamente 150 días (5 meses)",
                                usos_principales: [
                                    "Producción combinada de leche y carne",
                                    "Sistemas familiares de doble propósito",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "arbustos",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "porcinos",
            nombre: "🐖 Porcinos",
            botones: [
                {
                    id: "porcinos_carne",
                    nombre: "🥩 Carne",
                    botones: [
                        {
                            id: "duroc",
                            nombre: "Duroc",
                            ficha: {
                                descripcion: "Raza estadounidense de capa rojiza, reconocida por su excelente calidad de carne, buen marmoleo y alta velocidad de crecimiento. Es ampliamente usada como línea paterna terminal en cruzamientos comerciales por su robustez y buena conversión alimenticia.",
                                historia: "Desarrollada en el noreste de Estados Unidos en el siglo XIX a partir de cerdos rojos locales (Duroc de Nueva York y Jersey Red de Nueva Jersey), unificados como Duroc-Jersey en 1883. Reconocida por su color rojizo y buena calidad de carne.",
                                origen: "Estados Unidos",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/duroc.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 75-78%; ganancia diaria 800-900 g; carne de buen marmoleo y terneza",
                                peso_machos: "300-350 kg",
                                peso_hembras: "250-300 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne magra",
                                    "Uso como raza terminal en cruzamientos comerciales",
                                    "Mejora genética de calidad de canal"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "hampshire_porcino",
                            nombre: "Hampshire",
                            ficha: {
                                descripcion: "Raza estadounidense de capa negra con una franja blanca característica alrededor del cuerpo, destacada por su alto rendimiento en canal magra y buena masa muscular. Se utiliza frecuentemente como raza terminal en cruzamientos comerciales.",
                                historia: "Originaria del condado de Hampshire, Inglaterra, aunque se consolidó como raza en Kentucky, EE.UU., en el siglo XIX. Se distingue por su franja blanca característica sobre hombros y patas delanteras.",
                                origen: "Estados Unidos",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/hampshire.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 76-79%; ganancia diaria 750-850 g; canal magra de alto rendimiento muscular",
                                peso_machos: "280-330 kg",
                                peso_hembras: "230-280 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne magra",
                                    "Uso como raza terminal en cruzamientos comerciales",
                                    "Mejora genética de calidad de canal"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "pietrain",
                            nombre: "Piétrain",
                            ficha: {
                                descripcion: "Raza belga hipermuscular de capa manchada blanco y negro, con el mayor rendimiento en canal magra de todas las razas porcinas comerciales. Es sensible al estrés (síndrome PSS) por lo que requiere manejo cuidadoso durante el transporte y faena.",
                                historia: "Originaria del pueblo de Piétrain, en la Valonia belga, desarrollada a inicios del siglo XX. Célebre por su extraordinario desarrollo muscular, aunque es portadora frecuente del gen halotano, asociado al síndrome de estrés porcino.",
                                origen: "Bélgica",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/pietrain.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 78-82%; ganancia diaria 700-800 g; carne extremadamente magra y musculosa",
                                peso_machos: "250-300 kg",
                                peso_hembras: "200-250 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne magra",
                                    "Uso como raza terminal en cruzamientos comerciales",
                                    "Mejora genética de calidad de canal"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Nervioso"
                            }
                        },
                        {
                            id: "berkshire",
                            nombre: "Berkshire",
                            ficha: {
                                descripcion: "Raza inglesa de capa negra con extremidades y hocico blancos, muy valorada por la calidad, jugosidad y marmoleo de su carne, base de productos premium como el cerdo Kurobuta japonés. Es de crecimiento más lento que las razas comerciales modernas.",
                                historia: "Una de las razas porcinas más antiguas de Inglaterra, originaria del condado de Berkshire, con registros desde el siglo XVII. Muy apreciada en Japón (Kurobuta) por la calidad y jugosidad de su carne.",
                                origen: "Inglaterra",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/berkshire.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 72-75%; ganancia diaria 600-700 g; carne de altísima calidad y marmoleo (Kurobuta)",
                                peso_machos: "250-300 kg",
                                peso_hembras: "200-250 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne magra",
                                    "Uso como raza terminal en cruzamientos comerciales",
                                    "Mejora genética de calidad de canal"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "chester_white",
                            nombre: "Chester White",
                            ficha: {
                                descripcion: "Raza estadounidense de capa blanca, rústica y de buena capacidad materna, con carne de calidad aceptable y buen crecimiento. Se utiliza frecuentemente como línea materna en cruzamientos comerciales de tres vías.",
                                historia: "Desarrollada en el condado de Chester, Pensilvania, EE.UU., en el siglo XIX a partir de cerdos blancos ingleses. Reconocida por su prolificidad y buenas cualidades maternas.",
                                origen: "Estados Unidos",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/chester_white.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 74-77%; ganancia diaria 700-800 g; buena calidad de carne",
                                peso_machos: "280-320 kg",
                                peso_hembras: "230-270 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne magra",
                                    "Uso como raza terminal en cruzamientos comerciales",
                                    "Mejora genética de calidad de canal"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "tamworth",
                            nombre: "Tamworth",
                            ficha: {
                                descripcion: "Raza inglesa de capa rojiza, una de las más antiguas y rústicas del mundo, con buena aptitud para pastoreo al aire libre. Produce carne de excelente calidad para curados y embutidos, siendo muy apreciada en sistemas de producción extensiva.",
                                historia: "Originaria del área de Tamworth, Staffordshire, Inglaterra, es una de las razas porcinas más antiguas y menos mezcladas con razas asiáticas. Su color rojizo y hocico largo la hacen ideal para el pastoreo al aire libre.",
                                origen: "Inglaterra",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/tamworth.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 72-75%; ganancia diaria 550-650 g; carne firme ideal para embutidos y curados",
                                peso_machos: "250-300 kg",
                                peso_hembras: "200-250 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne magra",
                                    "Uso como raza terminal en cruzamientos comerciales",
                                    "Mejora genética de calidad de canal"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "concentrado",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        }
                    ]
                },
                {
                    id: "porcinos_intensiva",
                    nombre: "🏭 Producción intensiva",
                    botones: [
                        {
                            id: "landrace",
                            nombre: "Landrace",
                            ficha: {
                                descripcion: "Raza danesa de capa blanca y orejas caídas, de alta prolificidad materna y excelente producción de leche para sus lechones. Es la principal línea materna utilizada en cruzamientos comerciales intensivos de todo el mundo por su gran tamaño de camada.",
                                historia: "Desarrollada en Dinamarca desde 1895 cruzando el cerdo local danés con Large White inglés, bajo estricto control estatal de calidad. Se convirtió en la base genética de las líneas landrace de toda Europa.",
                                origen: "Dinamarca",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/landrace.jpg",
                                cantidad_de_produccion: "12-14 lechones/camada; 2.2-2.4 partos/año; excelente aptitud materna y producción de leche",
                                peso_machos: "300-350 kg",
                                peso_hembras: "250-300 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción intensiva de carne",
                                    "Uso como línea materna de alta prolificidad",
                                    "Cruzamientos industriales comerciales"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "large_white",
                            nombre: "Large White (Yorkshire)",
                            ficha: {
                                descripcion: "Raza inglesa de capa blanca y orejas erguidas, una de las más difundidas del mundo en sistemas intensivos por su gran prolificidad, buena producción de leche materna y excelente conformación magra. Es pilar de la genética porcina comercial global.",
                                historia: "Originaria de Yorkshire, Inglaterra, desarrollada en el siglo XIX, es una de las razas porcinas más difundidas del mundo y base fundamental de la mayoría de programas comerciales de cruzamiento.",
                                origen: "Reino Unido",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/large_white.jpg",
                                cantidad_de_produccion: "11-13 lechones/camada; 2.2-2.4 partos/año; alto rendimiento en canal magra",
                                peso_machos: "300-350 kg",
                                peso_hembras: "250-300 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción intensiva de carne",
                                    "Uso como línea materna de alta prolificidad",
                                    "Cruzamientos industriales comerciales"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "belgian_landrace",
                            nombre: "Belgian Landrace (Landrace Belga)",
                            ficha: {
                                descripcion: "Variante belga del Landrace, seleccionada con mayor énfasis en rendimiento magro y musculatura, utilizada en sistemas de confinamiento de alta eficiencia productiva en Europa central.",
                                historia: "Desarrollada en Bélgica a partir de la introducción del Landrace danés a mediados del siglo XX, adaptada localmente a las condiciones de producción belgas.",
                                origen: "Bélgica",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/belgian_landrace.jpg",
                                cantidad_de_produccion: "11-13 lechones/camada; alta eficiencia de conversión alimenticia; buen rendimiento magro",
                                peso_machos: "280-330 kg",
                                peso_hembras: "230-280 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción intensiva de carne",
                                    "Uso como línea materna de alta prolificidad",
                                    "Cruzamientos industriales comerciales"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "dutch_landrace",
                            nombre: "Dutch Landrace (Landrace Holandés)",
                            ficha: {
                                descripcion: "Variante neerlandesa del Landrace, muy usada como línea materna en programas de hibridación comercial por su prolificidad y solidez de patas, adaptada a sistemas de producción en confinamiento de alta densidad.",
                                historia: "Línea landrace desarrollada en los Países Bajos a partir de la genética danesa introducida en el siglo XX, seleccionada por prolificidad y calidad de canal dentro de los estrictos programas neerlandeses.",
                                origen: "Países Bajos",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/dutch_landrace.jpg",
                                cantidad_de_produccion: "11-13 lechones/camada; buena solidez de aplomos para confinamiento intensivo",
                                peso_machos: "280-330 kg",
                                peso_hembras: "230-280 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción intensiva de carne",
                                    "Uso como línea materna de alta prolificidad",
                                    "Cruzamientos industriales comerciales"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "norwegian_landrace",
                            nombre: "Norwegian Landrace (Landrace Noruego)",
                            ficha: {
                                descripcion: "Variante noruega del Landrace, seleccionada genéticamente por salud, robustez de patas y alta prolificidad, siendo una de las líneas maternas de referencia mundial en programas de mejoramiento porcino intensivo.",
                                historia: "Desarrollada en Noruega a partir del Landrace danés, bajo un estricto programa nacional de mejora genética orientado a la calidad de la canal y la salud del hato.",
                                origen: "Noruega",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/norwegian_landrace.jpg",
                                cantidad_de_produccion: "12-14 lechones/camada; excelente robustez de patas y longevidad reproductiva",
                                peso_machos: "300-340 kg",
                                peso_hembras: "250-290 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción intensiva de carne",
                                    "Uso como línea materna de alta prolificidad",
                                    "Cruzamientos industriales comerciales"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "swedish_landrace",
                            nombre: "Swedish Landrace (Landrace Sueco)",
                            ficha: {
                                descripcion: "Variante sueca del Landrace, criada bajo estrictos estándares de bienestar animal, con buena prolificidad y calidad de canal, ampliamente usada en cruzamientos comerciales del norte de Europa.",
                                historia: "Desarrollada en Suecia desde inicios del siglo XX cruzando razas locales con Landrace danés, integrando los sistemas de cruzamiento nórdicos junto con el Yorkshire sueco.",
                                origen: "Suecia",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/swedish_landrace.jpg",
                                cantidad_de_produccion: "11-13 lechones/camada; buena calidad de canal bajo sistemas de bienestar animal",
                                peso_machos: "280-330 kg",
                                peso_hembras: "230-280 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción intensiva de carne",
                                    "Uso como línea materna de alta prolificidad",
                                    "Cruzamientos industriales comerciales"
                                ],
                                alimentacion: [
                                    "concentrado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "porcinos_extensiva",
                    nombre: "🌾 Producción extensiva",
                    botones: [
                        {
                            id: "iberico",
                            nombre: "Ibérico",
                            ficha: {
                                descripcion: "Raza española de capa negra o colorada, criada tradicionalmente en régimen extensivo de dehesa alimentándose de bellota, base de productos de altísimo valor como el jamón ibérico. Es rústica, de crecimiento lento y excelente capacidad de infiltración grasa.",
                                historia: "Raza porcina autóctona de la península ibérica (suroeste de España y Portugal), de origen muy antiguo, posiblemente emparentada con el jabalí mediterráneo. Criada tradicionalmente en dehesa, es la base de los jamones ibéricos de bellota.",
                                origen: "España",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/iberico.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 70-73%; crecimiento lento; carne de altísimo marmoleo y valor comercial (jamón ibérico de bellota)",
                                peso_machos: "150-200 kg",
                                peso_hembras: "120-160 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne en sistemas extensivos o al aire libre",
                                    "Elaboración de embutidos y productos curados tradicionales",
                                    "Conservación de razas porcinas autóctonas"
                                ],
                                alimentacion: [
                                    "bellota",
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "mangalica",
                            nombre: "Mangalica",
                            ficha: {
                                descripcion: "Raza húngara conocida como 'cerdo lanudo' por su abundante pelaje rizado similar a la lana de oveja, criada en sistemas extensivos para producir carne y grasa de altísima calidad. Es muy resistente al frío y de crecimiento lento.",
                                historia: "Desarrollada en Hungría en el siglo XIX cruzando razas locales con jabalí europeo y cerdos serbios, es conocida como 'cerdo lanudo' por su espeso pelaje rizado, único entre las razas porcinas.",
                                origen: "Hungría",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/mangalica.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 68-72%; crecimiento lento; alto contenido de grasa de excelente calidad",
                                peso_machos: "150-200 kg",
                                peso_hembras: "130-160 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne en sistemas extensivos o al aire libre",
                                    "Elaboración de embutidos y productos curados tradicionales",
                                    "Conservación de razas porcinas autóctonas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "bellota",
                                    "concentrado"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "meishan",
                            nombre: "Meishan",
                            ficha: {
                                descripcion: "Raza china de piel arrugada y orejas caídas, famosa por su extraordinaria prolificidad (hasta 16 lechones por camada), criada tradicionalmente en sistemas rústicos con forrajes y residuos de cocina. Es de crecimiento lento pero muy valorada genéticamente.",
                                historia: "Originaria del delta del río Yangtsé, China, es una de las razas porcinas más antiguas del mundo (más de mil años de selección), famosa por su extraordinaria prolificidad, aunque de crecimiento lento.",
                                origen: "China",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/meishan.jpg",
                                cantidad_de_produccion: "14-16 lechones/camada; crecimiento lento; alta rusticidad y prolificidad excepcional",
                                peso_machos: "120-150 kg",
                                peso_hembras: "100-130 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne en sistemas extensivos o al aire libre",
                                    "Elaboración de embutidos y productos curados tradicionales",
                                    "Conservación de razas porcinas autóctonas"
                                ],
                                alimentacion: [
                                    "forraje",
                                    "pasto",
                                    "residuos de cosecha",
                                    "concentrado"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "large_black",
                            nombre: "Large Black",
                            ficha: {
                                descripcion: "Raza inglesa de capa completamente negra y orejas caídas que cubren los ojos, muy rústica y adaptada al pastoreo al aire libre. Es de crecimiento lento y produce carne de gran calidad, siendo hoy una raza en conservación por productores especializados.",
                                historia: "Originaria del suroeste y este de Inglaterra (Devon, Cornualles y Essex), unificada como raza a inicios del siglo XX. Es la única raza porcina británica completamente negra, criada tradicionalmente al aire libre.",
                                origen: "Inglaterra",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/large_black.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 68-72%; crecimiento lento; carne de buena calidad en sistemas al aire libre",
                                peso_machos: "250-300 kg",
                                peso_hembras: "200-250 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne en sistemas extensivos o al aire libre",
                                    "Elaboración de embutidos y productos curados tradicionales",
                                    "Conservación de razas porcinas autóctonas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "gloucestershire_old_spot",
                            nombre: "Gloucestershire Old Spot",
                            ficha: {
                                descripcion: "Raza inglesa de capa blanca con manchas negras, tradicionalmente criada en huertos de manzanos aprovechando la fruta caída como alimento. Es rústica, de buena aptitud materna y muy usada en sistemas de producción al aire libre y agricultura orgánica.",
                                historia: "Originaria del valle del Severn, Gloucestershire, Inglaterra, con registros desde el siglo XIX. Tradicionalmente se criaba en huertos de manzanos, comiendo la fruta caída, de ahí su apodo 'Orchard Pig'.",
                                origen: "Inglaterra",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/gloucestershire.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 70-73%; crecimiento moderado; carne de buena calidad en producción orgánica",
                                peso_machos: "250-300 kg",
                                peso_hembras: "200-250 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne en sistemas extensivos o al aire libre",
                                    "Elaboración de embutidos y productos curados tradicionales",
                                    "Conservación de razas porcinas autóctonas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "frutas caídas",
                                    "concentrado"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "kunekune",
                            nombre: "Kunekune",
                            ficha: {
                                descripcion: "Raza neozelandesa de pequeño tamaño y carácter muy dócil, criada tradicionalmente en pastoreo extensivo sin necesidad de hociquear el suelo, lo que la hace ideal para sistemas de pastoreo sostenible y pequeñas fincas familiares.",
                                historia: "Originaria de Nueva Zelanda, criada tradicionalmente por los maoríes, es una raza pequeña, de hocico corto y a menudo con mechones bajo la mandíbula ('piri piri'), criada al pastoreo y como mascota.",
                                origen: "Nueva Zelanda",
                                especie: "Porcino",
                                nombre_cientifico: "Sus scrofa domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla",
                                    familia: "Suidae",
                                    genero: "Sus",
                                    especie: "Sus scrofa domesticus"
                                },
                                imagen: "img/porcinos/kunekune.jpg",
                                cantidad_de_produccion: "Rendimiento en canal 65-70%; crecimiento lento; producción de carne en pequeña escala familiar",
                                peso_machos: "60-100 kg",
                                peso_hembras: "60-80 kg",
                                esperanza_de_vida: "10-15 años (vida productiva de la cerda: 3-4 años, 5-8 partos)",
                                periodo_gestacion: "114 días en promedio (\"regla de los 3 meses, 3 semanas y 3 días\")",
                                usos_principales: [
                                    "Producción de carne en sistemas extensivos o al aire libre",
                                    "Elaboración de embutidos y productos curados tradicionales",
                                    "Conservación de razas porcinas autóctonas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Muy dócil"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "equinos",
            nombre: "🐎 Equinos",
            botones: [
                {
                    id: "equinos_trabajo",
                    nombre: "🐴 Trabajo",
                    botones: [
                        {
                            id: "criollo_argentino",
                            nombre: "Criollo Argentino",
                            ficha: {
                                descripcion: "Raza sudamericana descendiente de caballos ibéricos traídos en la colonia, seleccionada por su extraordinaria rusticidad, resistencia y capacidad de trabajo en tareas de campo y ganadería extensiva. Es ampliamente usado en el manejo de ganado en la Pampa argentina.",
                                historia: "Descendiente de caballos españoles (jennets andaluces y berberiscos) traídos por los conquistadores en el siglo XVI, que se asilvestraron en las pampas y fueron luego seleccionados por su rusticidad y resistencia extrema.",
                                origen: "Argentina",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/criollo.jpg",
                                cantidad_de_produccion: "Alta resistencia y capacidad de trabajo en largas jornadas; velocidad moderada; excelente rusticidad",
                                peso_machos: "400-500 kg",
                                peso_hembras: "380-450 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Trabajo agrícola y ganadero (arreo, tiro ligero)",
                                    "Monta de trabajo de campo",
                                    "Reproducción y conservación de razas criollas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "avena"
                                ],
                                manejo: "Extensivo de trabajo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "quarter_horse",
                            nombre: "Quarter Horse",
                            ficha: {
                                descripcion: "Raza estadounidense muy versátil usada tradicionalmente en el trabajo con ganado (rodeo, arreo, corte de vacas), reconocida por su explosividad en distancias cortas y su temperamento manejable. Es una de las razas más numerosas del mundo.",
                                historia: "Desarrollada en las colonias americanas del siglo XVII cruzando caballos ingleses con caballos españoles/chickasaw, seleccionada por su explosividad en carreras cortas de un cuarto de milla, de donde toma su nombre.",
                                origen: "Estados Unidos",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/quarter_horse.jpg",
                                cantidad_de_produccion: "Alta velocidad en distancias cortas (400 m); excelente capacidad de trabajo con ganado; gran agilidad",
                                peso_machos: "450-550 kg",
                                peso_hembras: "400-500 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Trabajo agrícola y ganadero (arreo, tiro ligero)",
                                    "Monta de trabajo de campo",
                                    "Reproducción y conservación de razas criollas"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "pasto"
                                ],
                                manejo: "Intensivo de trabajo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "paso_fino",
                            nombre: "Paso Fino",
                            ficha: {
                                descripcion: "Raza de origen ibérico desarrollada en Puerto Rico y Colombia, famosa por su andar natural de cuatro tiempos suave y cómodo, muy usado tradicionalmente en el trabajo de fincas y desplazamiento en terrenos difíciles.",
                                historia: "Descendiente de caballos españoles (andaluces, jennets y bereberes) llevados a Puerto Rico y Colombia desde los siglos XV-XVI, seleccionados por su marcha natural suave de cuatro tiempos.",
                                origen: "Puerto Rico / Colombia",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/paso_fino.jpg",
                                cantidad_de_produccion: "Marcha suave de alta comodidad; buena resistencia en terrenos montañosos; velocidad moderada",
                                peso_machos: "350-450 kg",
                                peso_hembras: "320-400 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Trabajo agrícola y ganadero (arreo, tiro ligero)",
                                    "Monta de trabajo de campo",
                                    "Reproducción y conservación de razas criollas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de trabajo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "mustang",
                            nombre: "Mustang",
                            ficha: {
                                descripcion: "Raza semi-salvaje estadounidense descendiente de caballos españoles introducidos en América, de gran resistencia y capacidad de adaptación a condiciones agrestes. Históricamente usado por pueblos originarios y vaqueros para trabajo de largas distancias.",
                                historia: "Descendiente de caballos españoles introducidos en América desde el siglo XVI, asilvestrados y difundidos por las llanuras norteamericanas; hoy manadas protegidas viven en estado semisalvaje en el oeste de EE.UU.",
                                origen: "Estados Unidos",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/mustang.jpg",
                                cantidad_de_produccion: "Gran resistencia y rusticidad; capacidad de trabajo en terrenos áridos; buena longevidad",
                                peso_machos: "350-450 kg",
                                peso_hembras: "300-400 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Trabajo agrícola y ganadero (arreo, tiro ligero)",
                                    "Monta de trabajo de campo",
                                    "Reproducción y conservación de razas criollas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "forraje",
                                    "heno"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "fiordo_noruego",
                            nombre: "Fiordo Noruego (Fjord)",
                            ficha: {
                                descripcion: "Raza noruega muy antigua, de capa dun característica y crin bicolor, extremadamente fuerte para su tamaño relativamente pequeño. Es utilizado tradicionalmente tanto para trabajo agrícola ligero como para tiro y monta familiar.",
                                historia: "Una de las razas de caballo más antiguas y puras del mundo, originaria de los valles de los fiordos noruegos, con evidencia de domesticación de hace más de 4000 años. Su crin corta y bicolor es característica de la raza.",
                                origen: "Noruega",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/fiordo_noruego.jpg",
                                cantidad_de_produccion: "Alta capacidad de tiro relativa a su tamaño; gran resistencia y longevidad; velocidad moderada",
                                peso_machos: "400-500 kg",
                                peso_hembras: "380-450 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Trabajo agrícola y ganadero (arreo, tiro ligero)",
                                    "Monta de trabajo de campo",
                                    "Reproducción y conservación de razas criollas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje"
                                ],
                                manejo: "Extensivo de trabajo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "haflinger",
                            nombre: "Haflinger",
                            ficha: {
                                descripcion: "Raza austríaca de pequeño-mediano tamaño y capa alazana con crin y cola blancas, muy versátil para trabajo de montaña, tiro ligero y equitación familiar. Es extremadamente fuerte y resistente en terrenos escarpados de los Alpes.",
                                historia: "Originaria del Tirol, en los Alpes austríacos (localidad de Hafling, hoy en Italia), desarrollada a finales del siglo XIX a partir de sementales árabes cruzados con yeguas de montaña locales.",
                                origen: "Austria",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/haflinger.jpg",
                                cantidad_de_produccion: "Buena capacidad de tiro y carga en montaña; resistencia notable; velocidad moderada",
                                peso_machos: "350-450 kg",
                                peso_hembras: "330-420 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Trabajo agrícola y ganadero (arreo, tiro ligero)",
                                    "Monta de trabajo de campo",
                                    "Reproducción y conservación de razas criollas"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "avena"
                                ],
                                manejo: "Extensivo de trabajo",
                                temperamento: "Muy dócil"
                            }
                        }
                    ]
                },
                {
                    id: "equinos_deporte",
                    nombre: "🏇 Deporte",
                    botones: [
                        {
                            id: "pura_sangre",
                            nombre: "Pura Sangre Inglés",
                            ficha: {
                                descripcion: "Raza inglesa desarrollada específicamente para las carreras de velocidad, considerada la más rápida del mundo en distancias medias. Es de temperamento enérgico y nervioso, requiriendo manejo especializado y dietas de alta energía para sostener su rendimiento atlético.",
                                historia: "Desarrollada en Inglaterra entre los siglos XVII y XVIII a partir de yeguas locales cruzadas con tres sementales fundadores orientales (Byerley Turk, Darley Arabian y Godolphin Arabian), de los que descienden casi todos los pura sangre actuales.",
                                origen: "Reino Unido",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/pura_sangre.jpg",
                                cantidad_de_produccion: "Velocidad de hasta 70 km/h; alto rendimiento deportivo en carreras; resistencia media-alta",
                                peso_machos: "450-500 kg",
                                peso_hembras: "400-450 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Deportes ecuestres (salto, doma clásica, carreras)",
                                    "Cría selectiva para competencia",
                                    "Reproducción de alto valor genético"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "alfalfa"
                                ],
                                manejo: "Intensivo deportivo",
                                temperamento: "Energético"
                            }
                        },
                        {
                            id: "hannoveriano",
                            nombre: "Hannoveriano (Hanoverian)",
                            ficha: {
                                descripcion: "Raza alemana de sangre caliente considerada una de las mejores del mundo para deportes ecuestres olímpicos como salto y adiestramiento. Combina elegancia, potencia y gran capacidad atlética con un temperamento equilibrado.",
                                historia: "Originaria de la región de Hannover, Alemania, con registros oficiales desde 1735 bajo el rey Jorge II. Evolucionó de caballo de carruaje y agrícola a uno de los caballos de deporte olímpico más exitosos del mundo.",
                                origen: "Alemania",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/hannoveriano.jpg",
                                cantidad_de_produccion: "Excelente desempeño en salto y adiestramiento; gran potencia de tren posterior; alta resistencia deportiva",
                                peso_machos: "550-650 kg",
                                peso_hembras: "500-600 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Deportes ecuestres (salto, doma clásica, carreras)",
                                    "Cría selectiva para competencia",
                                    "Reproducción de alto valor genético"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "alfalfa"
                                ],
                                manejo: "Intensivo deportivo",
                                temperamento: "Energético"
                            }
                        },
                        {
                            id: "holsteiner",
                            nombre: "Holsteiner",
                            ficha: {
                                descripcion: "Raza alemana de sangre caliente, una de las más antiguas de caballos deportivos de Europa, especializada en salto de obstáculos de alto nivel. Presenta gran fuerza en el tren trasero y capacidad de salto excepcional.",
                                historia: "Una de las razas de sangre caliente más antiguas de Alemania, originaria de Schleswig-Holstein, con registros del siglo XIII; hoy está especializada en salto de obstáculos de alto nivel.",
                                origen: "Alemania",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/holsteiner.jpg",
                                cantidad_de_produccion: "Excelente capacidad de salto de altura; gran potencia y equilibrio; alto rendimiento en competencias olímpicas",
                                peso_machos: "550-650 kg",
                                peso_hembras: "500-600 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Deportes ecuestres (salto, doma clásica, carreras)",
                                    "Cría selectiva para competencia",
                                    "Reproducción de alto valor genético"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "alfalfa"
                                ],
                                manejo: "Intensivo deportivo",
                                temperamento: "Energético"
                            }
                        },
                        {
                            id: "pre_andaluz",
                            nombre: "Andaluz (PRE)",
                            ficha: {
                                descripcion: "Raza española (Pura Raza Española) de gran elegancia y movimientos armoniosos, tradicionalmente usada en doma clásica, alta escuela y espectáculos ecuestres. Es de temperamento equilibrado y gran capacidad de aprendizaje.",
                                historia: "El Pura Raza Española desciende de caballos ibéricos usados desde la Antigüedad y refinados durante la dominación árabe de la península. Fue la base de razas europeas como el Lipizzano y de la equitación clásica.",
                                origen: "España",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/andaluz.jpg",
                                cantidad_de_produccion: "Excelente en doma clásica y alta escuela; movimientos elevados y armoniosos; buena resistencia deportiva",
                                peso_machos: "500-600 kg",
                                peso_hembras: "450-550 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Deportes ecuestres (salto, doma clásica, carreras)",
                                    "Cría selectiva para competencia",
                                    "Reproducción de alto valor genético"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "pasto"
                                ],
                                manejo: "Intensivo deportivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "lipizzano",
                            nombre: "Lipizzano",
                            ficha: {
                                descripcion: "Raza austríaca de capa blanca (nacen oscuros y aclaran con la edad), mundialmente famosa por su desempeño en la Escuela Española de Equitación de Viena en ejercicios de alta escuela y doma clásica de gran dificultad.",
                                historia: "Creada en 1580 en el stud imperial de Lipizza (actual Lipica, Eslovenia) por orden del archiduque Carlos II de Austria, a partir de caballos andaluces cruzados con líneas locales. Es la raza clásica de la Escuela Española de Equitación de Viena.",
                                origen: "Austria (Eslovenia)",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/lipizzano.jpg",
                                cantidad_de_produccion: "Excelente en alta escuela y doma clásica; gran longevidad deportiva; movimientos de precisión",
                                peso_machos: "500-600 kg",
                                peso_hembras: "450-550 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Deportes ecuestres (salto, doma clásica, carreras)",
                                    "Cría selectiva para competencia",
                                    "Reproducción de alto valor genético"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "pasto"
                                ],
                                manejo: "Intensivo deportivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "trakehner",
                            nombre: "Trakehner",
                            ficha: {
                                descripcion: "Raza alemana de sangre caliente originaria de Prusia Oriental, con importante influencia de Pura Sangre Inglés, destacada por su elegancia, resistencia y aptitud para adiestramiento y concurso completo de alto nivel.",
                                historia: "Originaria de Prusia Oriental (actual Kaliningrado/Lituania), fundada en el criadero real de Trakehnen en 1732 mediante el cruce de caballos locales con Pura Sangre y Árabes; es la raza de sangre caliente más antigua de Alemania.",
                                origen: "Alemania (Prusia Oriental)",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/trakehner.jpg",
                                cantidad_de_produccion: "Excelente en adiestramiento y concurso completo; gran resistencia y elegancia de movimientos",
                                peso_machos: "500-600 kg",
                                peso_hembras: "450-550 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Deportes ecuestres (salto, doma clásica, carreras)",
                                    "Cría selectiva para competencia",
                                    "Reproducción de alto valor genético"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "concentrado",
                                    "alfalfa"
                                ],
                                manejo: "Intensivo deportivo",
                                temperamento: "Energético"
                            }
                        }
                    ]
                },
                {
                    id: "equinos_tiro",
                    nombre: "🚛 Tiro",
                    botones: [
                        {
                            id: "percheron",
                            nombre: "Percherón",
                            ficha: {
                                descripcion: "Raza francesa de tiro pesado, de capa gris o negra, muy fuerte pero de temperamento sorprendentemente dócil para su tamaño. Fue ampliamente usado en labores agrícolas y de transporte antes de la mecanización, y hoy se mantiene en exhibiciones y trabajo forestal.",
                                historia: "Originaria de la región de Le Perche, Normandía, Francia, con posible influencia de caballos árabes traídos durante invasiones musulmanas del siglo VIII, seleccionada como caballo de tiro pesado.",
                                origen: "Francia",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/percheron.jpg",
                                cantidad_de_produccion: "Gran capacidad de tiro pesado (hasta el doble de su peso); resistencia alta; velocidad baja",
                                peso_machos: "800-1000 kg",
                                peso_hembras: "700-900 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Tiro pesado agrícola e industrial",
                                    "Exhibición en desfiles y ferias",
                                    "Conservación de razas de tiro tradicionales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de tiro",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "clydesdale",
                            nombre: "Clydesdale",
                            ficha: {
                                descripcion: "Raza escocesa de tiro pesado, fácilmente reconocible por sus extremidades con abundante pelo (cerneja) y su gran alzada. Fue histórico animal de tiro agrícola y hoy se usa en desfiles, publicidad y exhibiciones por su porte imponente.",
                                historia: "Originaria del valle del río Clyde, Lanarkshire, Escocia, desarrollada en el siglo XVIII cruzando yeguas locales con sementales flamencos, para trabajo agrícola e industrial pesado.",
                                origen: "Escocia",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/clydesdale.jpg",
                                cantidad_de_produccion: "Gran capacidad de tiro pesado; porte imponente; resistencia alta en trabajo continuo",
                                peso_machos: "800-950 kg",
                                peso_hembras: "700-850 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Tiro pesado agrícola e industrial",
                                    "Exhibición en desfiles y ferias",
                                    "Conservación de razas de tiro tradicionales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de tiro",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "belga_tiro",
                            nombre: "Belga (Brabant)",
                            ficha: {
                                descripcion: "Raza belga considerada una de las más fuertes y pesadas del mundo, usada tradicionalmente para arar y transportar cargas muy pesadas. Es de temperamento extremadamente calmo, lo que facilita su manejo pese a su gran tamaño.",
                                historia: "El caballo de tiro Belga o Brabant desciende de los antiguos caballos de guerra medievales flamencos, seleccionado desde el siglo XIX en el Brabante, Bélgica, como uno de los caballos de tiro más pesados y musculosos del mundo.",
                                origen: "Bélgica",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/belga.jpg",
                                cantidad_de_produccion: "Máxima capacidad de tiro entre razas equinas; gran fuerza bruta; velocidad muy baja",
                                peso_machos: "900-1100 kg",
                                peso_hembras: "800-950 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Tiro pesado agrícola e industrial",
                                    "Exhibición en desfiles y ferias",
                                    "Conservación de razas de tiro tradicionales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de tiro",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "shire",
                            nombre: "Shire",
                            ficha: {
                                descripcion: "Raza inglesa considerada la más alta del mundo entre los caballos de tiro, descendiente de los antiguos caballos de guerra medievales. Es extremadamente fuerte y se usa hoy en exhibiciones, cervecerías tradicionales y trabajo forestal ligero.",
                                historia: "Descendiente de los grandes caballos de guerra medievales ingleses ('Great Horse'), desarrollado en las Midlands inglesas, es una de las razas de tiro más altas y pesadas del mundo, usado históricamente para arrastrar cerveza en Londres.",
                                origen: "Inglaterra",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/shire.jpg",
                                cantidad_de_produccion: "Gran capacidad de tiro y porte; alzada superior a 1.75 m; resistencia alta",
                                peso_machos: "850-1100 kg",
                                peso_hembras: "750-900 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Tiro pesado agrícola e industrial",
                                    "Exhibición en desfiles y ferias",
                                    "Conservación de razas de tiro tradicionales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de tiro",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "suffolk_punch",
                            nombre: "Suffolk Punch",
                            ficha: {
                                descripcion: "Raza inglesa de capa alazana uniforme, la más antigua de las razas de tiro pesado británicas, seleccionada específicamente para trabajo agrícola continuo. Es compacta, muy musculosa y de gran resistencia al trabajo sostenido.",
                                historia: "Originaria del condado de Suffolk, Inglaterra, con registros desde el siglo XVI, es la raza de tiro pesado más antigua documentada de Gran Bretaña, siempre de color castaño ('chesnut').",
                                origen: "Inglaterra",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/suffolk_punch.jpg",
                                cantidad_de_produccion: "Excelente resistencia en trabajo agrícola continuo; buena capacidad de tiro; longevidad laboral alta",
                                peso_machos: "800-950 kg",
                                peso_hembras: "700-850 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Tiro pesado agrícola e industrial",
                                    "Exhibición en desfiles y ferias",
                                    "Conservación de razas de tiro tradicionales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de tiro",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "breton",
                            nombre: "Bretón (Breton)",
                            ficha: {
                                descripcion: "Raza francesa de tiro pesado de tamaño algo menor a otras razas de tiro europeas, versátil para trabajo agrícola, tiro de carruajes y, en menor medida, producción de carne en Francia. Es rústico y de buena longevidad.",
                                historia: "Originaria de Bretaña, Francia, desarrollada en el siglo XIX combinando razas locales con Percherón, Ardenés y Boulonnais para trabajo agrícola pesado.",
                                origen: "Francia",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/breton.jpg",
                                cantidad_de_produccion: "Buena capacidad de tiro; versatilidad de uso agrícola; resistencia media-alta",
                                peso_machos: "700-900 kg",
                                peso_hembras: "650-800 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Tiro pesado agrícola e industrial",
                                    "Exhibición en desfiles y ferias",
                                    "Conservación de razas de tiro tradicionales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "forraje",
                                    "concentrado"
                                ],
                                manejo: "Extensivo de tiro",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "equinos_recreacion",
                    nombre: "🐎 Recreación",
                    botones: [
                        {
                            id: "shetland",
                            nombre: "Pony Shetland",
                            ficha: {
                                descripcion: "Raza de pony escocés de las Islas Shetland, de tamaño muy reducido pero extraordinariamente fuerte y resistente para su tamaño. Es muy popular para la iniciación ecuestre de niños y como animal de compañía familiar.",
                                historia: "Originaria de las islas Shetland, al norte de Escocia, es uno de los ponis más pequeños y fuertes del mundo, adaptado durante siglos a duras condiciones climáticas insulares.",
                                origen: "Escocia (Islas Shetland)",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/shetland.jpg",
                                cantidad_de_produccion: "Ideal para monta infantil y recreación familiar; gran resistencia relativa a su tamaño",
                                peso_machos: "180-200 kg",
                                peso_hembras: "150-180 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Monta recreativa y turística",
                                    "Equitación para niños y principiantes (ponis)",
                                    "Exhibición y mascota"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "appaloosa",
                            nombre: "Appaloosa",
                            ficha: {
                                descripcion: "Raza estadounidense reconocida por su llamativo pelaje moteado, desarrollada originalmente por el pueblo Nez Percé. Es versátil, usada tanto en equitación recreativa como en trabajo ligero de rancho y exhibiciones.",
                                historia: "Desarrollada por el pueblo Nez Percé en la región del río Palouse, noroeste de EE.UU., a partir de caballos españoles introducidos en el siglo XVII, célebre por su capa moteada característica.",
                                origen: "Estados Unidos",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/appaloosa.jpg",
                                cantidad_de_produccion: "Buena versatilidad para monta recreativa y de rancho; resistencia media; pelaje distintivo moteado",
                                peso_machos: "450-550 kg",
                                peso_hembras: "400-500 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Monta recreativa y turística",
                                    "Equitación para niños y principiantes (ponis)",
                                    "Exhibición y mascota"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "pasto",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "paint_horse",
                            nombre: "Paint Horse",
                            ficha: {
                                descripcion: "Raza estadounidense de pelaje pinto (manchas blancas y de color), muy versátil para equitación recreativa, trabajo de rancho y disciplinas western. Comparte gran parte de su genética con el Quarter Horse.",
                                historia: "Desciende de caballos españoles de capa pinta cruzados con Quarter Horse, formalizada como raza en EE.UU. en 1962 (American Paint Horse Association), combinando conformación de Quarter Horse con manchas de color.",
                                origen: "Estados Unidos",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/paint_horse.jpg",
                                cantidad_de_produccion: "Buena versatilidad recreativa y deportiva western; temperamento manejable; pelaje pinto distintivo",
                                peso_machos: "450-550 kg",
                                peso_hembras: "400-500 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Monta recreativa y turística",
                                    "Equitación para niños y principiantes (ponis)",
                                    "Exhibición y mascota"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "pasto",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "falabella",
                            nombre: "Falabella (Caballo Miniatura)",
                            ficha: {
                                descripcion: "Raza argentina de caballo miniatura, una de las más pequeñas del mundo, desarrollada como animal de compañía y exhibición más que para monta. Es dócil, longevo y muy popular como mascota exótica.",
                                historia: "Desarrollada en Argentina a finales del siglo XIX e inicios del XX por la familia Falabella, a partir de pequeños caballos criollos con posible influencia de Shetland y Pura Sangre en miniatura; es una de las razas de caballo miniatura más reconocidas del mundo.",
                                origen: "Argentina",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/falabella.jpg",
                                cantidad_de_produccion: "Uso exclusivo como animal de compañía y exhibición; sin capacidad de monta por su tamaño reducido",
                                peso_machos: "35-50 kg",
                                peso_hembras: "30-45 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Monta recreativa y turística",
                                    "Equitación para niños y principiantes (ponis)",
                                    "Exhibición y mascota"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "welsh_pony",
                            nombre: "Welsh Pony",
                            ficha: {
                                descripcion: "Raza galesa de pony versátil, elegante y de buen temperamento, muy usada en equitación recreativa infantil y en disciplinas de salto y doma en categorías de pony. Es resistente y de fácil manejo.",
                                historia: "Originaria de las montañas de Gales, Reino Unido, con orígenes que se remontan a la época pre-romana, es un poni muy versátil usado tanto para monta infantil como para enganche.",
                                origen: "Gales (Reino Unido)",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/welsh_pony.jpg",
                                cantidad_de_produccion: "Buena aptitud para monta infantil y salto de pony; resistencia y agilidad notables",
                                peso_machos: "250-300 kg",
                                peso_hembras: "220-270 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Monta recreativa y turística",
                                    "Equitación para niños y principiantes (ponis)",
                                    "Exhibición y mascota"
                                ],
                                alimentacion: [
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "avena"
                                ],
                                manejo: "Extensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "morgan",
                            nombre: "Morgan",
                            ficha: {
                                descripcion: "Una de las primeras razas desarrolladas en Estados Unidos, versátil y de temperamento equilibrado, usada tanto para equitación recreativa como para trabajo ligero y exhibiciones de enganche. Es robusta y de gran resistencia.",
                                historia: "Descendiente de un único semental fundador, 'Figure' (luego llamado Justin Morgan), nacido en Massachusetts hacia 1789; es considerada la primera raza de caballo desarrollada en Estados Unidos.",
                                origen: "Estados Unidos",
                                especie: "Equino",
                                nombre_cientifico: "Equus ferus caballus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Perissodactyla",
                                    familia: "Equidae",
                                    genero: "Equus",
                                    especie: "Equus ferus caballus"
                                },
                                imagen: "img/equinos/morgan.jpg",
                                cantidad_de_produccion: "Excelente versatilidad recreativa y de enganche; buena resistencia y longevidad",
                                peso_machos: "400-500 kg",
                                peso_hembras: "380-450 kg",
                                esperanza_de_vida: "25-30 años",
                                periodo_gestacion: "Aproximadamente 340 días (11 meses)",
                                usos_principales: [
                                    "Monta recreativa y turística",
                                    "Equitación para niños y principiantes (ponis)",
                                    "Exhibición y mascota"
                                ],
                                alimentacion: [
                                    "heno",
                                    "avena",
                                    "pasto",
                                    "concentrado"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "aves",
            nombre: "🐔 Aves",
            botones: [
                {
                    id: "aves_postura",
                    nombre: "🥚 Postura",
                    botones: [
                        {
                            id: "leghorn",
                            nombre: "Leghorn (Legorna Blanca)",
                            ficha: {
                                descripcion: "Raza italiana liviana, la principal raza de postura comercial del mundo, seleccionada intensamente para producir huevos blancos en gran cantidad con bajo consumo de alimento. Es nerviosa pero de altísima eficiencia productiva.",
                                historia: "Originaria de la región de Livorno (Leghorn en inglés), Italia, exportada a Estados Unidos en el siglo XIX, donde fue intensamente seleccionada hasta convertirse en la raza base de la industria mundial de huevo blanco.",
                                origen: "Italia",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/leghorn.jpg",
                                cantidad_de_produccion: "300-320 huevos/año; huevo blanco; peso promedio 60-65 g",
                                peso_machos: "2.5-3 kg",
                                peso_hembras: "1.8-2.2 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de huevo para consumo",
                                    "Selección genética de líneas ponedoras",
                                    "Reproducción de planteles comerciales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Nervioso"
                            }
                        },
                        {
                            id: "hyline_brown",
                            nombre: "Hy-Line Brown",
                            ficha: {
                                descripcion: "Línea comercial de ponedoras de huevo rosado-marrón, desarrollada mediante cruzamientos genéticos especializados para maximizar la persistencia de postura y la calidad de cáscara. Es una de las líneas más usadas en granjas avícolas industriales.",
                                historia: "Híbrido comercial desarrollado por la empresa estadounidense Hy-Line International mediante cruzamiento de líneas puras, seleccionado para máxima producción de huevo marrón con alta persistencia de puesta.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/hyline_brown.jpg",
                                cantidad_de_produccion: "320-340 huevos/año; huevo marrón; peso promedio 62-65 g",
                                peso_machos: "2.5-2.8 kg",
                                peso_hembras: "1.9-2.1 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de huevo para consumo",
                                    "Selección genética de líneas ponedoras",
                                    "Reproducción de planteles comerciales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "lohmann_brown",
                            nombre: "Lohmann Brown",
                            ficha: {
                                descripcion: "Línea comercial alemana de gallinas ponedoras de huevo marrón, ampliamente utilizada a nivel mundial por su alta persistencia de postura, robustez y buena conversión alimenticia en sistemas intensivos de jaula o piso.",
                                historia: "Híbrido comercial desarrollado por la empresa alemana Lohmann Tierzucht, una de las principales genéticas avícolas del mundo, orientado a la producción intensiva de huevo marrón.",
                                origen: "Alemania",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/lohmann_brown.jpg",
                                cantidad_de_produccion: "310-330 huevos/año; huevo marrón; peso promedio 63-65 g",
                                peso_machos: "2.4-2.7 kg",
                                peso_hembras: "1.9-2.0 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de huevo para consumo",
                                    "Selección genética de líneas ponedoras",
                                    "Reproducción de planteles comerciales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "sussex",
                            nombre: "Sussex",
                            ficha: {
                                descripcion: "Raza inglesa antigua de buena producción de huevos y carne secundaria, de temperamento tranquilo y buena adaptación a sistemas de pastoreo libre. Es apreciada en producción orgánica y avicultura de traspatio.",
                                historia: "Una de las razas avícolas más antiguas de Inglaterra, originaria del condado de Sussex, con referencias desde la época romana, de doble propósito y muy usada en producción tradicional.",
                                origen: "Inglaterra",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/sussex.jpg",
                                cantidad_de_produccion: "220-260 huevos/año; huevo marrón claro; peso promedio 58-60 g",
                                peso_machos: "3.5-4 kg",
                                peso_hembras: "2.7-3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de huevo para consumo",
                                    "Selección genética de líneas ponedoras",
                                    "Reproducción de planteles comerciales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "minorca",
                            nombre: "Minorca",
                            ficha: {
                                descripcion: "Raza mediterránea originaria de las Islas Baleares, ligera y de excelente producción de huevos blancos de gran tamaño. Presenta una notable cresta grande y roja, siendo muy resistente al calor.",
                                historia: "Originaria de la isla de Menorca, España, es la más grande de las razas mediterráneas ligeras, reconocida por sus grandes orejillas blancas y huevos igualmente grandes.",
                                origen: "España (Islas Baleares)",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/minorca.jpg",
                                cantidad_de_produccion: "200-230 huevos/año; huevo blanco de gran tamaño; peso promedio 65-70 g",
                                peso_machos: "3.5-4 kg",
                                peso_hembras: "2.7-3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de huevo para consumo",
                                    "Selección genética de líneas ponedoras",
                                    "Reproducción de planteles comerciales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "ancona",
                            nombre: "Ancona",
                            ficha: {
                                descripcion: "Raza italiana ligera de plumaje moteado blanco y negro, buena productora de huevos blancos, rústica y resistente a diversos climas. Es una raza tradicional apreciada en avicultura de pequeña escala y conservación genética.",
                                historia: "Originaria de la región de las Marcas, Italia (puerto de Ancona), es una raza mediterránea ligera de plumaje moteado en blanco y negro, buena ponedora y muy rústica.",
                                origen: "Italia",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/ancona.jpg",
                                cantidad_de_produccion: "200-220 huevos/año; huevo blanco; peso promedio 55-58 g",
                                peso_machos: "2.5-3 kg",
                                peso_hembras: "2-2.3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de huevo para consumo",
                                    "Selección genética de líneas ponedoras",
                                    "Reproducción de planteles comerciales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        }
                    ]
                },
                {
                    id: "aves_carne",
                    nombre: "🍗 Carne",
                    botones: [
                        {
                            id: "broiler",
                            nombre: "Broiler",
                            ficha: {
                                descripcion: "Pollo de engorde híbrido de crecimiento extremadamente rápido, resultado de cruzamientos genéticos especializados (habitualmente Cornish x Plymouth Rock), diseñado para alcanzar peso de faena en muy pocas semanas con excelente conversión alimenticia.",
                                historia: "No es una raza tradicional sino un tipo comercial resultante del cruzamiento de líneas especializadas (con base Cornish y Plymouth Rock/White Rock), desarrollado desde mediados del siglo XX para producción intensiva de carne en ciclos muy cortos.",
                                origen: "Industrial",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/broiler.jpg",
                                cantidad_de_produccion: "Peso de faena en 35-42 días; rendimiento en canal 70-75%; conversión alimenticia 1.6-1.8",
                                peso_machos: "2-3 kg",
                                peso_hembras: "2-2.5 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de carne de pollo",
                                    "Engorde intensivo en ciclos cortos",
                                    "Cruzamientos comerciales de líneas broiler"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Tranquilo"
                            }
                        },
                        {
                            id: "cornish",
                            nombre: "Cornish",
                            ficha: {
                                descripcion: "Raza inglesa de constitución muy musculosa y pecho ancho, componente genético fundamental de las líneas comerciales de pollo de engorde (broiler) a nivel mundial, aportando la conformación cárnica característica.",
                                historia: "Originaria de Cornualles, Inglaterra, desarrollada en el siglo XIX cruzando gallos de pelea asiáticos (Malayo, Aseel) con razas inglesas; es la base genética masculina de casi todas las líneas comerciales de pollo de engorde del mundo.",
                                origen: "Inglaterra",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/cornish.jpg",
                                cantidad_de_produccion: "Excelente conformación muscular de pechuga; base genética de líneas broiler comerciales",
                                peso_machos: "3.5-4.5 kg",
                                peso_hembras: "2.5-3.5 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de carne de pollo",
                                    "Engorde intensivo en ciclos cortos",
                                    "Cruzamientos comerciales de líneas broiler"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Tranquilo"
                            }
                        },
                        {
                            id: "plymouth_rock_carne",
                            nombre: "Plymouth Rock",
                            ficha: {
                                descripcion: "Raza estadounidense de plumaje barrado, utilizada históricamente como componente materno en los cruzamientos que dieron origen al pollo broiler moderno, además de ser criada de forma pura para producción de carne y huevos.",
                                historia: "Desarrollada en EE.UU. a mediados del siglo XIX combinando varias razas (Dominique, Cochin, Java, entre otras); su variedad blanca se usó extensamente como línea materna en los primeros híbridos comerciales de carne.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/plymouth_rock.jpg",
                                cantidad_de_produccion: "Buen rendimiento cárnico; base materna de líneas broiler; producción de huevos secundaria (200 huevos/año)",
                                peso_machos: "3.5-4 kg",
                                peso_hembras: "2.7-3.2 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de carne de pollo",
                                    "Engorde intensivo en ciclos cortos",
                                    "Cruzamientos comerciales de líneas broiler"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "cobb500",
                            nombre: "Cobb 500",
                            ficha: {
                                descripcion: "Línea genética comercial de pollo de engorde de altísimo rendimiento, ampliamente utilizada en la industria avícola mundial por su excelente conversión alimenticia, rápido crecimiento y buena viabilidad en condiciones intensivas.",
                                historia: "Línea híbrida comercial desarrollada por la empresa Cobb-Vantress (EE.UU.), una de las genéticas de pollo de engorde más utilizadas en el mundo, seleccionada por conversión alimenticia y rendimiento de pechuga.",
                                origen: "Estados Unidos / Reino Unido",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/cobb500.jpg",
                                cantidad_de_produccion: "Peso de faena en 35-40 días; conversión alimenticia 1.5-1.7; rendimiento en canal 72-76%",
                                peso_machos: "2.5-3 kg",
                                peso_hembras: "2.2-2.6 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de carne de pollo",
                                    "Engorde intensivo en ciclos cortos",
                                    "Cruzamientos comerciales de líneas broiler"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Tranquilo"
                            }
                        },
                        {
                            id: "ross308",
                            nombre: "Ross 308",
                            ficha: {
                                descripcion: "Línea genética comercial de pollo de engorde de gran difusión mundial, seleccionada por su eficiencia productiva, buen rendimiento de pechuga y adaptación a diversos climas y sistemas de producción intensiva.",
                                historia: "Línea híbrida comercial desarrollada por Aviagen (Reino Unido), una de las genéticas de pollo de engorde líderes a nivel mundial junto con Cobb 500, seleccionada por crecimiento rápido y eficiencia.",
                                origen: "Reino Unido",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/ross308.jpg",
                                cantidad_de_produccion: "Peso de faena en 35-40 días; conversión alimenticia 1.5-1.7; excelente rendimiento de pechuga",
                                peso_machos: "2.5-3 kg",
                                peso_hembras: "2.2-2.6 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de carne de pollo",
                                    "Engorde intensivo en ciclos cortos",
                                    "Cruzamientos comerciales de líneas broiler"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "concentrado"
                                ],
                                manejo: "Intensivo",
                                temperamento: "Tranquilo"
                            }
                        },
                        {
                            id: "jersey_giant",
                            nombre: "Jersey Giant",
                            ficha: {
                                descripcion: "Raza estadounidense de gran tamaño, una de las más pesadas entre las razas de gallinas puras, criada tradicionalmente para producción de carne en granjas familiares antes del desarrollo de las líneas broiler modernas.",
                                historia: "Desarrollada en Nueva Jersey, EE.UU., a finales del siglo XIX combinando Java, Brahma y Langshan; es una de las razas de gallina más pesadas del mundo, originalmente concebida como sustituto del pavo.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/jersey_giant.jpg",
                                cantidad_de_produccion: "Gran tamaño corporal; crecimiento lento; carne de buena calidad en producción tradicional",
                                peso_machos: "5-6 kg",
                                peso_hembras: "3.5-4.5 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción de carne de pollo",
                                    "Engorde intensivo en ciclos cortos",
                                    "Cruzamientos comerciales de líneas broiler"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "granos",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "aves_doble",
                    nombre: "🐓 Doble propósito",
                    botones: [
                        {
                            id: "rhode_island_red",
                            nombre: "Rhode Island Red",
                            ficha: {
                                descripcion: "Raza estadounidense de plumaje rojizo intenso, una de las razas dobles propósito más populares del mundo por su equilibrio entre buena producción de huevos y carne. Es rústica, longeva y de fácil adaptación a sistemas de traspatio o semi-intensivos.",
                                historia: "Desarrollada en el estado de Rhode Island, EE.UU., a finales del siglo XIX combinando aves asiáticas (Malayo, Shanghai) con razas locales; es una de las razas de doble propósito más populares del mundo y ave estatal de Rhode Island.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/rhode_island_red.jpg",
                                cantidad_de_produccion: "250-280 huevos/año; huevo marrón; peso promedio 60-63 g; buen rendimiento cárnico secundario",
                                peso_machos: "3.8-4.3 kg",
                                peso_hembras: "2.7-3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción combinada de huevo y carne",
                                    "Crianza de traspatio y pequeña escala",
                                    "Conservación de razas patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "wyandotte",
                            nombre: "Wyandotte",
                            ficha: {
                                descripcion: "Raza estadounidense de plumaje vistoso y cuerpo compacto, buena productora de huevos y carne, muy resistente al frío gracias a su cresta pequeña tipo roseta. Es apreciada tanto en producción comercial como en avicultura ornamental.",
                                historia: "Desarrollada en el estado de Nueva York, EE.UU., en la década de 1870, reconocida por su plumaje laminado ('lacing') en numerosas variedades de color y su cuerpo compacto y redondeado.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/wyandotte.jpg",
                                cantidad_de_produccion: "200-240 huevos/año; huevo marrón; peso promedio 57-60 g; buena aptitud cárnica",
                                peso_machos: "3.5-4 kg",
                                peso_hembras: "2.5-3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción combinada de huevo y carne",
                                    "Crianza de traspatio y pequeña escala",
                                    "Conservación de razas patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "orpington",
                            nombre: "Orpington",
                            ficha: {
                                descripcion: "Raza inglesa de plumaje abundante y aspecto corpulento, muy apreciada por su docilidad extrema, buena producción de huevos y calidad de carne. Es una de las razas favoritas en avicultura familiar y de traspatio en todo el mundo.",
                                historia: "Originaria del pueblo de Orpington, Kent, Inglaterra, desarrollada por William Cook en la década de 1880; es grande, de plumaje abundante y muy popular como ave de traspatio de doble propósito.",
                                origen: "Inglaterra",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/orpington.jpg",
                                cantidad_de_produccion: "180-220 huevos/año; huevo marrón claro; peso promedio 58-60 g; buena aptitud cárnica",
                                peso_machos: "4-4.5 kg",
                                peso_hembras: "3-3.5 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción combinada de huevo y carne",
                                    "Crianza de traspatio y pequeña escala",
                                    "Conservación de razas patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "new_hampshire",
                            nombre: "New Hampshire",
                            ficha: {
                                descripcion: "Raza estadounidense derivada del Rhode Island Red, seleccionada para mejorar la precocidad y el rendimiento cárnico manteniendo buena producción de huevos. Es de crecimiento más rápido que su raza原genitora.",
                                historia: "Desarrollada en el estado de New Hampshire, EE.UU., a inicios del siglo XX a partir de líneas seleccionadas de Rhode Island Red, buscando mayor precocidad y rendimiento cárnico.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/new_hampshire.jpg",
                                cantidad_de_produccion: "220-250 huevos/año; huevo marrón; peso promedio 58-60 g; buena precocidad cárnica",
                                peso_machos: "3.5-4 kg",
                                peso_hembras: "2.5-3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción combinada de huevo y carne",
                                    "Crianza de traspatio y pequeña escala",
                                    "Conservación de razas patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "plymouth_rock_doble",
                            nombre: "Plymouth Rock Barrado",
                            ficha: {
                                descripcion: "Variedad de plumaje barrado en blanco y negro de la raza Plymouth Rock, tradicionalmente criada como ave de doble propósito en granjas familiares de Norteamérica, valorada por su rusticidad y equilibrio productivo.",
                                historia: "La variedad barrada (blanco y negro) es la forma original de la raza Plymouth Rock, desarrollada en Nueva Inglaterra, EE.UU., a mediados del siglo XIX; una de las razas americanas de doble propósito más extendidas históricamente.",
                                origen: "Estados Unidos",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/plymouth_rock_barrado.jpg",
                                cantidad_de_produccion: "200-230 huevos/año; huevo marrón claro; peso promedio 58 g; buena aptitud cárnica",
                                peso_machos: "3.5-4 kg",
                                peso_hembras: "2.7-3.2 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción combinada de huevo y carne",
                                    "Crianza de traspatio y pequeña escala",
                                    "Conservación de razas patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "australorp",
                            nombre: "Australorp",
                            ficha: {
                                descripcion: "Raza australiana derivada del Orpington negro, poseedora del récord mundial histórico de postura, con excelente producción de huevos y buena calidad de carne. Es muy resistente y de temperamento tranquilo.",
                                historia: "Desarrollada en Australia a inicios del siglo XX a partir de la Orpington negra inglesa, seleccionada intensamente por producción de huevos; en 1922-23 un grupo de australorps estableció un récord mundial de puesta.",
                                origen: "Australia",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/australorp.jpg",
                                cantidad_de_produccion: "250-300 huevos/año; huevo marrón; peso promedio 58-60 g; buena aptitud cárnica",
                                peso_machos: "3.8-4.3 kg",
                                peso_hembras: "2.7-3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Producción combinada de huevo y carne",
                                    "Crianza de traspatio y pequeña escala",
                                    "Conservación de razas patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje",
                                    "granos"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        }
                    ]
                },
                {
                    id: "aves_ornamentales",
                    nombre: "🦚 Ornamentales",
                    botones: [
                        {
                            id: "sedosa",
                            nombre: "Sedosa (Silkie)",
                            ficha: {
                                descripcion: "Raza china muy antigua de plumaje sedoso similar al pelo, piel y huesos de color negro azulado, criada principalmente con fines ornamentales y de exhibición. Es extremadamente dócil y muy apreciada como ave de compañía y para incubar huevos de otras especies.",
                                historia: "Raza muy antigua originaria de China, mencionada en escritos de Marco Polo en el siglo XIII, célebre por su plumaje semejante a la seda, piel y huesos de color negro azulado, y cinco dedos en cada pata.",
                                origen: "China",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/sedosa.jpg",
                                cantidad_de_produccion: "80-120 huevos/año; huevo crema pequeño; peso promedio 35-40 g; valor principalmente ornamental",
                                peso_machos: "1.3-1.8 kg",
                                peso_hembras: "1-1.3 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Exhibición y competencias avícolas",
                                    "Mascota y ornato",
                                    "Conservación de razas raras o patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "polaca",
                            nombre: "Polaca (Polish)",
                            ficha: {
                                descripcion: "Raza ornamental europea reconocida por su llamativo copete de plumas en la cabeza, criada principalmente para exhibición en concursos avícolas. Su producción de huevos y carne es secundaria frente a su valor estético.",
                                historia: "De origen incierto pese a su nombre, probablemente desarrollada en los Países Bajos, es reconocida por su llamativo penacho de plumas sobre la cabeza, criada principalmente como ave ornamental y de exhibición.",
                                origen: "Países Bajos / Polonia",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/polaca.jpg",
                                cantidad_de_produccion: "100-150 huevos/año; huevo blanco pequeño; peso promedio 45-50 g; valor principalmente ornamental",
                                peso_machos: "2-2.5 kg",
                                peso_hembras: "1.6-2 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Exhibición y competencias avícolas",
                                    "Mascota y ornato",
                                    "Conservación de razas raras o patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "cochinchina",
                            nombre: "Cochinchina (Cochin)",
                            ficha: {
                                descripcion: "Raza asiática de gran tamaño y plumaje muy abundante que cubre incluso las patas, criada principalmente con fines ornamentales y de exhibición por su aspecto voluminoso y esponjoso. Es extremadamente dócil y de movimientos lentos.",
                                historia: "Originaria de China (región que los occidentales llamaban Cochinchina), fue introducida en Europa hacia 1840 y causó una verdadera fiebre ('hen fever') en Inglaterra por su gran tamaño y abundante plumaje hasta las patas.",
                                origen: "China",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/cochinchina.jpg",
                                cantidad_de_produccion: "100-150 huevos/año; huevo marrón claro; peso promedio 50-55 g; valor principalmente ornamental",
                                peso_machos: "4.5-5 kg",
                                peso_hembras: "3.5-4 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Exhibición y competencias avícolas",
                                    "Mascota y ornato",
                                    "Conservación de razas raras o patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Muy dócil"
                            }
                        },
                        {
                            id: "sebright",
                            nombre: "Sebright",
                            ficha: {
                                descripcion: "Raza bantam (miniatura) inglesa de plumaje perfectamente orlado, desarrollada exclusivamente con fines ornamentales y de exhibición. Es una de las razas bantam más antiguas creadas deliberadamente por el hombre.",
                                historia: "Creada en Inglaterra a inicios del siglo XIX por Sir John Saunders Sebright mediante cruzamientos selectivos; es una de las primeras razas avícolas desarrolladas deliberadamente con fines ornamentales, de plumaje laminado.",
                                origen: "Inglaterra",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/sebright.jpg",
                                cantidad_de_produccion: "60-100 huevos/año; huevo blanco muy pequeño; peso promedio 30-35 g; valor exclusivamente ornamental",
                                peso_machos: "0.5-0.6 kg",
                                peso_hembras: "0.45-0.5 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Exhibición y competencias avícolas",
                                    "Mascota y ornato",
                                    "Conservación de razas raras o patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        },
                        {
                            id: "frizzle",
                            nombre: "Frizzle (Rizada)",
                            ficha: {
                                descripcion: "Raza (o mutación) ornamental caracterizada por sus plumas rizadas hacia afuera en lugar de lisas, lo que le da un aspecto único y llamativo en exhibiciones avícolas. Requiere mayor protección frente al frío y la lluvia por la menor cobertura de su plumaje.",
                                historia: "Caracterizada por una mutación genética que curva las plumas hacia afuera y hacia arriba en lugar de yacer lisas sobre el cuerpo; el rasgo se documenta desde el siglo XVI en Asia y se ha fijado en diversas razas ornamentales.",
                                origen: "Asia (difundida globalmente)",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/frizzle.jpg",
                                cantidad_de_produccion: "100-140 huevos/año; huevo marrón claro; peso promedio 50 g; valor principalmente ornamental",
                                peso_machos: "2.5-3 kg",
                                peso_hembras: "2-2.5 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Exhibición y competencias avícolas",
                                    "Mascota y ornato",
                                    "Conservación de razas raras o patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Dócil"
                            }
                        },
                        {
                            id: "fenix",
                            nombre: "Fénix (Phoenix)",
                            ficha: {
                                descripcion: "Raza ornamental alemana derivada de aves japonesas de cola larga, criada exclusivamente por la extraordinaria longitud de las plumas de la cola de los machos, que pueden alcanzar varios metros si no se cortan. Es de bajo valor productivo y alto valor estético.",
                                historia: "Desarrollada en Alemania en el siglo XIX a partir de la raza japonesa Onagadori, célebre por las plumas de la cola extremadamente largas de los machos, que en su forma original pueden alcanzar varios metros.",
                                origen: "Alemania (origen japonés)",
                                especie: "Aves",
                                nombre_cientifico: "Gallus gallus domesticus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Aves",
                                    orden: "Galliformes",
                                    familia: "Phasianidae",
                                    genero: "Gallus",
                                    especie: "Gallus gallus domesticus"
                                },
                                imagen: "img/aves/fenix.jpg",
                                cantidad_de_produccion: "60-100 huevos/año; huevo crema pequeño; peso promedio 40 g; valor exclusivamente ornamental",
                                peso_machos: "1.8-2.2 kg",
                                peso_hembras: "1.4-1.8 kg",
                                esperanza_de_vida: "5-8 años (vida productiva comercial: 1-2 años)",
                                periodo_incubacion: "Incubación de 21 días",
                                usos_principales: [
                                    "Exhibición y competencias avícolas",
                                    "Mascota y ornato",
                                    "Conservación de razas raras o patrimoniales"
                                ],
                                alimentacion: [
                                    "balanceado",
                                    "maíz",
                                    "forraje"
                                ],
                                manejo: "Semi-intensivo",
                                temperamento: "Activo"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "camelidos",
            nombre: "🦙 Camélidos",
            botones: [
                {
                    id: "fibra",
                    nombre: "🧶 Fibra",
                    botones: [
                        {
                            id: "alpaca",
                            nombre: "Alpaca",
                            ficha: {
                                descripcion: "Camélido sudamericano domesticado desde hace miles de años en los Andes. Es reconocido mundialmente por producir una de las fibras naturales más finas, cálidas y ligeras. Se adapta perfectamente a grandes altitudes y constituye una importante fuente de ingresos para las comunidades altoandinas.",
                                historia: "Domesticada hace unos 6000-7000 años en el altiplano andino de Perú a partir de la vicuña silvestre, fue criada por culturas preincaicas e incaicas principalmente por su fibra. Perú concentra más del 80% de la población mundial.",
                                origen: "Perú, Bolivia y Chile",
                                especie: "Camélido",
                                nombre_cientifico: "Vicugna pacos",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Vicugna",
                                    especie: "Vicugna pacos"
                                },
                                imagen: "img/camelidos/alpaca.jpg",
                                cantidad_de_produccion: "Fibra: 2-5 kg/año. Finura: 18-28 micras. Longitud de fibra: 8-15 cm. Excelente calidad textil.",
                                peso_machos: "60-80 kg",
                                peso_hembras: "50-70 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Producción de fibra textil fina",
                                    "Artesanía y exportación de fibra",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "pasto altoandino",
                                    "ichu",
                                    "forraje",
                                    "heno",
                                    "alfalfa",
                                    "sales minerales",
                                    "agua"
                                ],
                                manejo: "Extensivo en praderas altoandinas con esquila anual, suplementación mineral y control sanitario.",
                                temperamento: "Dócil, tranquilo y sociable."
                            }
                        },
                        {
                            id: "vicuna",
                            nombre: "Vicuña",
                            ficha: {
                                descripcion: "Es el camélido sudamericano silvestre que produce la fibra animal más fina del mundo. Vive en ecosistemas altoandinos y su fibra posee un enorme valor comercial. Su aprovechamiento se realiza mediante capturas controladas conocidas como 'chaccu'.",
                                historia: "Camélido silvestre andino, nunca completamente domesticado, protegido en Perú desde la época incaica mediante el 'chaccu', una captura comunitaria y esquila ritual seguida de liberación. Produce la fibra animal más fina y costosa del mundo.",
                                origen: "Perú, Bolivia, Chile y Argentina",
                                especie: "Camélido",
                                nombre_cientifico: "Vicugna vicugna",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Vicugna",
                                    especie: "Vicugna vicugna"
                                },
                                imagen: "img/camelidos/vicuna.jpg",
                                cantidad_de_produccion: "Fibra: 0.2-0.5 kg cada 2 años. Finura: 11-14 micras. Fibra extremadamente fina y exclusiva.",
                                peso_machos: "45-55 kg",
                                peso_hembras: "35-45 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Producción de fibra textil fina",
                                    "Artesanía y exportación de fibra",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "ichu",
                                    "gramíneas altoandinas",
                                    "pasto natural",
                                    "agua"
                                ],
                                manejo: "Silvestre con manejo conservacionista y esquila periódica autorizada.",
                                temperamento: "Muy nervioso y desconfiado."
                            }
                        },
                        {
                            id: "llama_lanuda",
                            nombre: "Llama Lanuda",
                            ficha: {
                                descripcion: "Variedad de llama criada principalmente por su producción de fibra además de su rusticidad. Produce una fibra de calidad intermedia utilizada para prendas, mantas y artesanías.",
                                historia: "Variedad de llama seleccionada por su mayor densidad y longitud de fibra ('lanuda'), criada en zonas altoandinas de Perú y Bolivia principalmente como productora de fibra, además de carga y carne.",
                                origen: "Andes de Perú y Bolivia",
                                especie: "Camélido",
                                nombre_cientifico: "Lama glama",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Lama",
                                    especie: "Lama glama"
                                },
                                imagen: "img/camelidos/llama_lanuda.jpg",
                                cantidad_de_produccion: "Fibra: 2-4 kg/año. Finura: 20-30 micras. Longitud: 10-20 cm.",
                                peso_machos: "120-160 kg",
                                peso_hembras: "100-140 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Producción de fibra textil fina",
                                    "Artesanía y exportación de fibra",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "ichu",
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "alfalfa"
                                ],
                                manejo: "Extensivo con esquila anual.",
                                temperamento: "Dócil y resistente."
                            }
                        }
                    ]
                },
                {
                    id: "carne",
                    nombre: "🥩 Carne",
                    botones: [
                        {
                            id: "llama_kara",
                            nombre: "Llama Kara",
                            ficha: {
                                descripcion: "Variedad de llama de pelo corto ampliamente utilizada para producción de carne y como animal de carga. Presenta rápido crecimiento, buena rusticidad y elevada adaptación a ecosistemas altoandinos.",
                                historia: "Ecotipo de llama de fibra corta y pelaje más ralo ('Kara' significa 'pelada' en quechua), tradicionalmente preferido como animal de carga por su menor peso de vellón y mayor resistencia física.",
                                origen: "Perú y Bolivia",
                                especie: "Camélido",
                                nombre_cientifico: "Lama glama",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Lama",
                                    especie: "Lama glama"
                                },
                                imagen: "img/camelidos/llama_kara.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 50-56 %. Carne magra, baja en colesterol y rica en proteínas.",
                                peso_machos: "120-180 kg",
                                peso_hembras: "100-150 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Producción de carne (incluye charqui)",
                                    "Uso secundario como animal de carga",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "ichu",
                                    "pasto natural",
                                    "forraje",
                                    "heno",
                                    "alfalfa"
                                ],
                                manejo: "Extensivo con suplementación durante épocas secas.",
                                temperamento: "Tranquilo."
                            }
                        },
                        {
                            id: "guanaco",
                            nombre: "Guanaco",
                            ficha: {
                                descripcion: "Camélido silvestre sudamericano caracterizado por su gran rusticidad y adaptación a ambientes extremos. Su carne es magra y de excelente calidad, aunque su aprovechamiento está sujeto a regulaciones de conservación.",
                                historia: "El camélido silvestre más extendido de Sudamérica y ancestro silvestre de la llama doméstica, distribuido desde Perú hasta Tierra del Fuego. Vive en manadas familiares lideradas por un macho.",
                                origen: "Argentina, Chile, Perú y Bolivia",
                                especie: "Camélido",
                                nombre_cientifico: "Lama guanicoe",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Lama",
                                    especie: "Lama guanicoe"
                                },
                                imagen: "img/camelidos/guanaco.jpg",
                                cantidad_de_produccion: "Carne con bajo contenido graso, alto contenido proteico y excelente rendimiento biológico.",
                                peso_machos: "90-140 kg",
                                peso_hembras: "80-120 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Producción de carne (incluye charqui)",
                                    "Uso secundario como animal de carga",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "pastos naturales",
                                    "gramíneas",
                                    "arbustos",
                                    "agua"
                                ],
                                manejo: "Silvestre bajo programas de conservación y manejo sostenible.",
                                temperamento: "Muy activo y desconfiado."
                            }
                        },
                        {
                            id: "llama_ccara",
                            nombre: "Llama Ccara",
                            ficha: {
                                descripcion: "Variedad de llama de pelo corto criada principalmente para producción de carne y como animal de trabajo. Destaca por su resistencia y adaptación a elevadas altitudes.",
                                historia: "Denominación quechua equivalente a 'Kara' (pelada), usada en Perú para el ecotipo de llama de fibra corta, criado principalmente por su capacidad de carga y su carne.",
                                origen: "Perú",
                                especie: "Camélido",
                                nombre_cientifico: "Lama glama",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Lama",
                                    especie: "Lama glama"
                                },
                                imagen: "img/camelidos/llama_ccara.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 50-55 %. Carne magra de excelente calidad nutricional.",
                                peso_machos: "130-170 kg",
                                peso_hembras: "100-140 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Producción de carne (incluye charqui)",
                                    "Uso secundario como animal de carga",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "ichu",
                                    "pasto",
                                    "heno",
                                    "forraje",
                                    "alfalfa"
                                ],
                                manejo: "Extensivo.",
                                temperamento: "Manso y resistente."
                            }
                        }
                    ]
                },
                {
                    id: "carga",
                    nombre: "🎒 Carga",
                    botones: [
                        {
                            id: "llama",
                            nombre: "Llama",
                            ficha: {
                                descripcion: "Principal animal de carga de los Andes desde épocas preincaicas. Posee gran resistencia física, capacidad para recorrer largas distancias y excelente adaptación a terrenos montañosos y climas extremos.",
                                historia: "Domesticada hace unos 4000-5000 años a partir del guanaco silvestre en los Andes centrales, fue el principal animal de carga de las civilizaciones preincaicas e incaicas, además de fuente de carne, fibra y estiércol combustible.",
                                origen: "Perú, Bolivia, Chile y Argentina",
                                especie: "Camélido",
                                nombre_cientifico: "Lama glama",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Lama",
                                    especie: "Lama glama"
                                },
                                imagen: "img/camelidos/llama.jpg",
                                cantidad_de_produccion: "Capacidad de carga: 25-40 kg. Recorridos de hasta 20 km diarios en terrenos accidentados.",
                                peso_machos: "130-180 kg",
                                peso_hembras: "100-150 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Transporte y carga en zonas altoandinas",
                                    "Producción de fibra como uso secundario",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "ichu",
                                    "pasto natural",
                                    "forraje",
                                    "heno",
                                    "alfalfa",
                                    "agua"
                                ],
                                manejo: "Extensivo con entrenamiento para carga, control sanitario y suplementación mineral.",
                                temperamento: "Dócil, inteligente y resistente."
                            }
                        },
                        {
                            id: "llama_qara",
                            nombre: "Llama Q'ara",
                            ficha: {
                                descripcion: "Variedad especializada para transporte debido a su menor cobertura de fibra y mayor desarrollo corporal. Es ampliamente utilizada por comunidades altoandinas para movilizar productos agrícolas y mercancías.",
                                historia: "Variante ortográfica quechua de 'Ccara/Kara' (pelada), referida al ecotipo de llama de fibra corta y pelaje ralo, criado principalmente como animal de carga en el altiplano.",
                                origen: "Perú y Bolivia",
                                especie: "Camélido",
                                nombre_cientifico: "Lama glama",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Artiodactyla (suborden Tylopoda)",
                                    familia: "Camelidae",
                                    genero: "Lama",
                                    especie: "Lama glama"
                                },
                                imagen: "img/camelidos/llama_qara.jpg",
                                cantidad_de_produccion: "Capacidad de carga: 30-40 kg durante largas jornadas en alta montaña.",
                                peso_machos: "140-180 kg",
                                peso_hembras: "110-150 kg",
                                esperanza_de_vida: "15-25 años",
                                periodo_gestacion: "Aproximadamente 335-360 días (11-12 meses)",
                                usos_principales: [
                                    "Transporte y carga en zonas altoandinas",
                                    "Producción de fibra como uso secundario",
                                    "Conservación de germoplasma andino"
                                ],
                                alimentacion: [
                                    "ichu",
                                    "pasto natural",
                                    "heno",
                                    "forraje"
                                ],
                                manejo: "Extensivo con entrenamiento desde edad temprana.",
                                temperamento: "Tranquilo y obediente."
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "conejos",
            nombre: "🐇 Conejos",
            botones: [
                {
                    id: "carne",
                    nombre: "🥩 Carne",
                    botones: [
                        {
                            id: "neozelandes",
                            nombre: "Neozelandés",
                            ficha: {
                                descripcion: "Raza considerada una de las más importantes para la producción comercial de carne en el mundo. Se caracteriza por su rápido crecimiento, excelente conversión alimenticia, elevada fertilidad y buena habilidad materna. Es ampliamente utilizada en sistemas intensivos y en programas de cruzamiento para mejorar el rendimiento cárnico.",
                                historia: "Pese a su nombre, fue desarrollada en Estados Unidos a inicios del siglo XX (no en Nueva Zelanda) a partir de conejos criollos americanos y belgian hare; hoy es la principal raza cunícola de carne a nivel mundial.",
                                origen: "Estados Unidos",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/neozelandes.jpg",
                                cantidad_de_produccion: "Ganancia diaria: 35-45 g/día. Peso al sacrificio: 2.3-2.8 kg a los 70-90 días. Rendimiento en canal: 55-60 %. Carne magra y de excelente calidad.",
                                peso_machos: "4.5-5.5 kg",
                                peso_hembras: "4.8-5.8 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de carne cunícola",
                                    "Cría intensiva en granjas",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "heno",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "cebada",
                                    "avena",
                                    "agua"
                                ],
                                manejo: "Intensivo o semiintensivo con alojamiento limpio, buena ventilación, agua permanente y control sanitario.",
                                temperamento: "Dócil y tranquilo."
                            }
                        },
                        {
                            id: "californiano",
                            nombre: "Californiano",
                            ficha: {
                                descripcion: "Raza altamente utilizada para producción de carne por su excelente eficiencia alimenticia, rápido crecimiento y buena conformación muscular. Presenta elevada prolificidad y gran capacidad materna.",
                                historia: "Desarrollada en California, EE.UU., en la década de 1920 cruzando Himalayo, Chinchilla y Nueva Zelanda Blanco, combina el patrón de color 'himalayo' con excelente conformación cárnica.",
                                origen: "Estados Unidos",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/californiano.jpg",
                                cantidad_de_produccion: "Ganancia diaria: 35-45 g/día. Rendimiento en canal: 56-60 %. Excelente calidad de carne.",
                                peso_machos: "4-5 kg",
                                peso_hembras: "4.5-5.5 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de carne cunícola",
                                    "Cría intensiva en granjas",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "agua"
                                ],
                                manejo: "Intensivo con programas reproductivos y sanitarios.",
                                temperamento: "Manso."
                            }
                        },
                        {
                            id: "flandes",
                            nombre: "Gigante de Flandes",
                            ficha: {
                                descripcion: "Una de las razas de mayor tamaño del mundo. Aunque inicialmente fue desarrollada para producción de carne, actualmente también se utiliza como reproductor y mascota debido a su carácter dócil.",
                                historia: "Una de las razas de conejo más antiguas y grandes del mundo, originaria de la región de Flandes (Bélgica), documentada desde el siglo XVI, criada históricamente tanto por su carne como por su piel.",
                                origen: "Bélgica",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/flandes.jpg",
                                cantidad_de_produccion: "Peso comercial elevado. Rendimiento en canal: 54-58 %. Carne de buena calidad.",
                                peso_machos: "6-8 kg",
                                peso_hembras: "6.5-9 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de carne cunícola",
                                    "Cría intensiva en granjas",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "heno",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "verduras",
                                    "agua"
                                ],
                                manejo: "Semiintensivo con amplio espacio por su gran tamaño.",
                                temperamento: "Muy dócil."
                            }
                        },
                        {
                            id: "chinchilla",
                            nombre: "Chinchilla",
                            ficha: {
                                descripcion: "Raza de doble aptitud desarrollada para carne y piel. Presenta rápido crecimiento, buena fertilidad y carne de excelente calidad, además de un pelaje muy apreciado.",
                                historia: "Desarrollada en Francia en 1913 por Monsieur J. Dybowski, buscando imitar el color y la suavidad del pelaje de la chinchilla silvestre sudamericana mediante selección de conejos comunes, sin relación genética con esta última.",
                                origen: "Francia",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/chinchilla.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 55-58 %. Buena calidad de piel y carne.",
                                peso_machos: "4-5 kg",
                                peso_hembras: "4.5-5.5 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de carne cunícola",
                                    "Cría intensiva en granjas",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "heno",
                                    "forraje",
                                    "alfalfa",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Semiintensivo.",
                                temperamento: "Activo y dócil."
                            }
                        },
                        {
                            id: "plateadochampana",
                            nombre: "Plateado de Champaña",
                            ficha: {
                                descripcion: "Raza francesa utilizada tanto para carne como para piel. Produce canales bien conformadas y posee un crecimiento uniforme con buena eficiencia alimenticia.",
                                historia: "Antigua raza francesa, con posibles orígenes en el siglo XVI en la región de Champaña, reconocida por su pelaje plateado que se desarrolla progresivamente desde un color oscuro al nacer.",
                                origen: "Francia",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/plateadochampana.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 54-57 %. Carne tierna y magra.",
                                peso_machos: "4.5-5.5 kg",
                                peso_hembras: "4.8-5.8 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de carne cunícola",
                                    "Cría intensiva en granjas",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "heno",
                                    "forraje",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Semiintensivo.",
                                temperamento: "Tranquilo."
                            }
                        },
                        {
                            id: "blancodehotot",
                            nombre: "Blanco de Hotot",
                            ficha: {
                                descripcion: "Raza criada originalmente para carne y piel. Se distingue por su pelaje blanco y el característico borde negro alrededor de los ojos. Posee buena fertilidad y crecimiento.",
                                historia: "Creada en Francia en la década de 1920 por Eugenie Bernhard en Hotot-en-Auge (Normandía), reconocida por su pelaje totalmente blanco con un círculo negro característico alrededor de cada ojo.",
                                origen: "Francia",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/blancodehotot.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 55 %. Carne de excelente calidad.",
                                peso_machos: "4-5 kg",
                                peso_hembras: "4.5-5 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de carne cunícola",
                                    "Cría intensiva en granjas",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "forraje",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Intensivo.",
                                temperamento: "Dócil."
                            }
                        }
                    ]
                },
                {
                    id: "pelo",
                    nombre: "🧶 Pelo",
                    botones: [
                        {
                            id: "angora",
                            nombre: "Angora",
                            ficha: {
                                descripcion: "Raza especializada en producción de fibra conocida por su abundante pelaje largo y sedoso. Su lana es una de las fibras animales más suaves y ligeras utilizadas en la industria textil.",
                                historia: "Originaria de Turquía (Anatolia), fue introducida en Europa occidental en el siglo XVIII, donde se popularizó como mascota de la nobleza francesa antes de desarrollarse como raza productora de fibra (lana de angora).",
                                origen: "Turquía",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/angora.jpg",
                                cantidad_de_produccion: "Fibra: 0.8-1.5 kg/año. Longitud: 6-12 cm. Fibra extremadamente fina y suave.",
                                peso_machos: "3.5-5 kg",
                                peso_hembras: "4-5.5 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de fibra (lana de angora) o pelaje ornamental",
                                    "Exhibición y competencias",
                                    "Mascota"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "forraje",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Requiere cepillado frecuente, esquila periódica y control de bolas de pelo.",
                                temperamento: "Muy dócil."
                            }
                        },
                        {
                            id: "rex",
                            nombre: "Rex",
                            ficha: {
                                descripcion: "Raza reconocida por su pelaje corto, extremadamente denso y aterciopelado. Su piel es muy apreciada y también puede aprovecharse para producción de carne.",
                                historia: "Surgida de una mutación genética espontánea en camadas de conejos comunes en Francia en 1919, que da un pelaje corto, denso y aterciopelado sin pelos guía largos, muy valorado en peletería.",
                                origen: "Francia",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/rex.jpg",
                                cantidad_de_produccion: "Pelaje muy fino y uniforme utilizado en peletería de alta calidad.",
                                peso_machos: "3.5-4.5 kg",
                                peso_hembras: "4-5 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Producción de fibra (lana de angora) o pelaje ornamental",
                                    "Exhibición y competencias",
                                    "Mascota"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "forraje",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Semiintensivo.",
                                temperamento: "Tranquilo."
                            }
                        }
                    ]
                },
                {
                    id: "mascota",
                    nombre: "🐰 Mascota",
                    botones: [
                        {
                            id: "holandes_enano",
                            nombre: "Holandés Enano",
                            ficha: {
                                descripcion: "Pequeña raza muy popular como mascota por su reducido tamaño, inteligencia y facilidad de adaptación al hogar. Requiere enriquecimiento ambiental y alimentación balanceada.",
                                historia: "Desarrollada en los Países Bajos desde la década de 1940 a partir de conejos silvestres holandeses pequeños; es una de las razas de conejo enano más pequeñas, criada principalmente como mascota.",
                                origen: "Países Bajos",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/holandes_enano.jpg",
                                cantidad_de_produccion: "Principalmente destinado a compañía y exhibición.",
                                peso_machos: "0.8-1.2 kg",
                                peso_hembras: "0.9-1.3 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Mascota y compañía",
                                    "Exhibición y competencias de conejos ornamentales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "verduras",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Doméstico con ejercicio diario y buena higiene.",
                                temperamento: "Activo, curioso y dócil."
                            }
                        },
                        {
                            id: "belier",
                            nombre: "Belier",
                            ficha: {
                                descripcion: "Raza muy apreciada por sus orejas caídas, comportamiento tranquilo y gran sociabilidad. Es una de las mascotas más populares en todo el mundo.",
                                historia: "Originaria de Francia, descendiente de conejos de orejas caídas desarrollados en Europa desde el siglo XIX (posiblemente derivados del English Lop), criada como mascota por su temperamento tranquilo y orejas largas y caídas.",
                                origen: "Francia",
                                especie: "Conejo",
                                nombre_cientifico: "Oryctolagus cuniculus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Lagomorpha",
                                    familia: "Leporidae",
                                    genero: "Oryctolagus",
                                    especie: "Oryctolagus cuniculus"
                                },
                                imagen: "img/conejos/belier.jpg",
                                cantidad_de_produccion: "Utilizado principalmente como animal de compañía y exhibición.",
                                peso_machos: "2.5-5 kg",
                                peso_hembras: "3-5.5 kg",
                                esperanza_de_vida: "5-10 años (vida productiva de la coneja: 2-3 años)",
                                periodo_gestacion: "28-31 días (promedio 30-31 días)",
                                usos_principales: [
                                    "Mascota y compañía",
                                    "Exhibición y competencias de conejos ornamentales"
                                ],
                                alimentacion: [
                                    "heno",
                                    "verduras",
                                    "alfalfa",
                                    "concentrado",
                                    "agua"
                                ],
                                manejo: "Doméstico con revisiones veterinarias periódicas.",
                                temperamento: "Muy dócil y cariñoso."
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "cuyes",
            nombre: "🐹 Cuyes",
            botones: [
                {
                    id: "carne",
                    nombre: "🥩 Carne",
                    botones: [
                        {
                            id: "criollo",
                            nombre: "Cuy Criollo",
                            ficha: {
                                descripcion: "Raza tradicional de los Andes criada desde tiempos preincaicos para producción de carne. Destaca por su rusticidad, buena adaptación a diversos sistemas de crianza y capacidad para aprovechar eficientemente los forrajes disponibles. Es ampliamente utilizada por pequeños y medianos productores.",
                                historia: "Domesticado hace unos 5000-6000 años en la región andina (actuales Perú, Bolivia y Ecuador) a partir del cuy silvestre (Cavia tschudii y especies afines), fue fuente clave de proteína y tuvo también uso ritual en culturas preincaicas.",
                                origen: "Perú",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/criollo.jpg",
                                cantidad_de_produccion: "Peso comercial: 0.8-1.2 kg. Rendimiento en canal: 65-70 %. Carne magra y de excelente calidad.",
                                peso_machos: "1.0-1.5 kg",
                                peso_hembras: "0.9-1.3 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Producción de carne (cuyicultura)",
                                    "Cría intensiva, semiintensiva o familiar",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "rye grass",
                                    "trébol",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "verduras",
                                    "agua"
                                ],
                                manejo: "Intensivo, semiintensivo y familiar con adecuado control sanitario.",
                                temperamento: "Dócil."
                            }
                        },
                        {
                            id: "peru",
                            nombre: "Perú",
                            ficha: {
                                descripcion: "Línea genética mejorada desarrollada por el INIA para producción intensiva de carne. Se caracteriza por su rápido crecimiento, elevada conversión alimenticia y excelente rendimiento en canal.",
                                historia: "Línea genética mejorada desarrollada por el Instituto Nacional de Innovación Agraria (INIA) del Perú mediante selección por precocidad y tamaño corporal, orientada a sistemas de crianza intensiva de carne.",
                                origen: "Perú",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/peru.jpg",
                                cantidad_de_produccion: "Peso comercial: 1.1-1.3 kg a los 75-90 días. Rendimiento en canal: 70-72 %.",
                                peso_machos: "1.4-1.8 kg",
                                peso_hembras: "1.2-1.5 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Producción de carne (cuyicultura)",
                                    "Cría intensiva, semiintensiva o familiar",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "cebada",
                                    "agua"
                                ],
                                manejo: "Intensivo.",
                                temperamento: "Tranquilo."
                            }
                        },
                        {
                            id: "inti",
                            nombre: "Inti",
                            ficha: {
                                descripcion: "Línea mejorada obtenida mediante selección genética para incrementar la producción de carne. Presenta alta prolificidad, buena fertilidad y rápido crecimiento.",
                                historia: "Línea genética mejorada peruana desarrollada por el INIA, seleccionada por prolificidad y buena conversión alimenticia, ampliamente difundida entre productores de la sierra peruana.",
                                origen: "Perú",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/inti.jpg",
                                cantidad_de_produccion: "Peso comercial: 1.0-1.2 kg. Rendimiento en canal: 69-71 %.",
                                peso_machos: "1.3-1.6 kg",
                                peso_hembras: "1.1-1.4 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Producción de carne (cuyicultura)",
                                    "Cría intensiva, semiintensiva o familiar",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "trébol",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "agua"
                                ],
                                manejo: "Intensivo y semiintensivo.",
                                temperamento: "Dócil."
                            }
                        },
                        {
                            id: "andina",
                            nombre: "Andina",
                            ficha: {
                                descripcion: "Línea genética mejorada orientada a sistemas comerciales. Posee buena velocidad de crecimiento, excelente fertilidad y gran adaptación a diferentes pisos ecológicos.",
                                historia: "Línea genética mejorada desarrollada en Perú, orientada a combinar buena velocidad de crecimiento con adaptabilidad a diferentes pisos altitudinales de la región andina.",
                                origen: "Perú",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/andina.jpg",
                                cantidad_de_produccion: "Rendimiento en canal: 68-71 %. Excelente conversión alimenticia.",
                                peso_machos: "1.3-1.7 kg",
                                peso_hembras: "1.1-1.5 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Producción de carne (cuyicultura)",
                                    "Cría intensiva, semiintensiva o familiar",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "forraje",
                                    "maíz",
                                    "concentrado",
                                    "verduras",
                                    "agua"
                                ],
                                manejo: "Semiintensivo e intensivo.",
                                temperamento: "Manso."
                            }
                        },
                        {
                            id: "inka",
                            nombre: "Inka",
                            ficha: {
                                descripcion: "Línea mejorada desarrollada para incrementar la productividad y la eficiencia reproductiva. Presenta elevada supervivencia de las crías y rápido crecimiento.",
                                historia: "Línea genética peruana mejorada mediante selección orientada a incrementar la supervivencia de crías y la eficiencia reproductiva del plantel.",
                                origen: "Perú",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/inka.jpg",
                                cantidad_de_produccion: "Peso comercial: 1.2 kg aproximadamente. Rendimiento en canal cercano al 70 %.",
                                peso_machos: "1.4-1.8 kg",
                                peso_hembras: "1.2-1.5 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Producción de carne (cuyicultura)",
                                    "Cría intensiva, semiintensiva o familiar",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "agua"
                                ],
                                manejo: "Intensivo.",
                                temperamento: "Dócil."
                            }
                        },
                        {
                            id: "mantaro",
                            nombre: "Mantaro",
                            ficha: {
                                descripcion: "Línea genética mejorada desarrollada en el Valle del Mantaro mediante selección por crecimiento, fertilidad y rendimiento cárnico. Presenta excelente adaptación a sistemas intensivos y semiintensivos.",
                                historia: "Línea genética mejorada desarrollada en la región del Valle del Mantaro (Junín, Perú), seleccionada por crecimiento, fertilidad y rendimiento en canal.",
                                origen: "Perú",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/mantaro.jpg",
                                cantidad_de_produccion: "Peso comercial: 1.1-1.3 kg. Rendimiento en canal: 69-72 %. Excelente conversión alimenticia.",
                                peso_machos: "1.4-1.8 kg",
                                peso_hembras: "1.2-1.5 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Producción de carne (cuyicultura)",
                                    "Cría intensiva, semiintensiva o familiar",
                                    "Reproducción y mejora genética"
                                ],
                                alimentacion: [
                                    "alfalfa",
                                    "rye grass",
                                    "trébol",
                                    "forraje",
                                    "concentrado",
                                    "maíz",
                                    "agua"
                                ],
                                manejo: "Intensivo con adecuado manejo reproductivo.",
                                temperamento: "Dócil."
                            }
                        }
                    ]
                },
                {
                    id: "pelo",
                    nombre: "🧶 Pelo",
                    botones: [
                        {
                            id: "peruano_pelo_largo",
                            nombre: "Peruano",
                            ficha: {
                                descripcion: "Raza ornamental reconocida por su abundante pelaje largo y sedoso. Es criada principalmente para exhibición y como mascota.",
                                historia: "Raza ornamental de cuy de pelo largo y sedoso, obtenida por selección de mutaciones de pelaje largo, criada principalmente para exhibición y como mascota; el nombre 'Peruano' es tradicional en la fancy internacional del cuy pese a su desarrollo fuera de dicho país.",
                                origen: "Reino Unido",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/peruano.jpg",
                                cantidad_de_produccion: "Pelaje largo, abundante y fino.",
                                peso_machos: "1.0-1.4 kg",
                                peso_hembras: "0.9-1.3 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Exhibición y competencias",
                                    "Mascota y ornato"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "verduras",
                                    "concentrado",
                                    "vitamina C",
                                    "agua"
                                ],
                                manejo: "Doméstico con cepillado frecuente.",
                                temperamento: "Muy dócil."
                            }
                        },
                        {
                            id: "abisinio",
                            nombre: "Abisinio",
                            ficha: {
                                descripcion: "Raza ornamental caracterizada por presentar numerosos remolinos de pelo distribuidos en todo el cuerpo. Muy utilizada en exposiciones y como mascota.",
                                historia: "Raza de cuy caracterizada por rosetas o remolinos de pelo distribuidos por todo el cuerpo, resultado de una mutación genética fijada mediante selección; muy popular en exposiciones internacionales como mascota.",
                                origen: "Reino Unido",
                                especie: "Roedor",
                                nombre_cientifico: "Cavia porcellus",
                                clasificacion_taxonomica: {
                                    reino: "Animalia",
                                    filo: "Chordata",
                                    clase: "Mammalia",
                                    orden: "Rodentia",
                                    familia: "Caviidae",
                                    genero: "Cavia",
                                    especie: "Cavia porcellus"
                                },
                                imagen: "img/cuyes/abisinio.jpg",
                                cantidad_de_produccion: "Pelaje corto con múltiples rosetas.",
                                peso_machos: "1.0-1.3 kg",
                                peso_hembras: "0.9-1.2 kg",
                                esperanza_de_vida: "4-8 años (vida productiva de 12-18 meses)",
                                periodo_gestacion: "59-72 días (promedio 63-68 días)",
                                usos_principales: [
                                    "Exhibición y competencias",
                                    "Mascota y ornato"
                                ],
                                alimentacion: [
                                    "heno",
                                    "alfalfa",
                                    "verduras",
                                    "concentrado",
                                    "vitamina C",
                                    "agua"
                                ],
                                manejo: "Doméstico con buena higiene y revisiones veterinarias.",
                                temperamento: "Curioso y dócil."
                            }
                        }
                    ]
                }
            ]
        }
    ]
};