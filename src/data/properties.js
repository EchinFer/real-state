export const properties = [
    {
        id: 1,
        titulo: "Duplex a estrenar",
        direccion: {
            ciudad: "Villa elisa",
            barrio: "",
            ubicacion: {
                lat: "",
                long: ""
            }
        },
        descripcion: "Duplex de 80 M2 de Construcción y de terreno mide 6 metros de frente por 14 metros de Fondo. Planta Baja en frente estacionamiento para 2 vehículos con portón basculante no incluye el motor, living /comedor, cocina con un mueble , baño social, atrás un pequeño patio y un fregadero de ropas. Planta Alta : dos dormitorios, un baño familiar, balcón en frente, ciudad de Villa Elisa.",
        descripcionCorta: "Duplex de 80 M2 de Construcción y de terreno mide 6 metros de frente por 14 metros de Fondo.",
        detallesPropiedad: {
            habitaciones: 2,
            totalambientes: 6,
            cocina: 1,
            salas: 1,
            banos: 1,
            anoConstruccion: 2021,
            clasePropiedad: "Vivienda unifamilar",
            area: 80
        },
        imagenes:{
            principal:{
                portrait: "exampleProduct.png",
                landscape: "exampleProductLandscape.png" //412 * 290
            },
            secundarios: [
                "exampleProduct.png"
            ]
        }, 
        precio: 285000000,
        moneda: "PYG",
        tipoPropiedad: [
            "En venta"
        ],
        proveedor: {
            nombreProveedor: "Sunset Realty",
            imagen: "logo-sunset.png",
            urlProveedor: ""
        }
    }
];