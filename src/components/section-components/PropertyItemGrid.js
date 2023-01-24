import React from 'react'
import { Link } from 'react-router-dom'

export const PropertyItemGrid = ({ property }) => {

    let publicUrl = process.env.PUBLIC_URL + '/';


    const { titulo, proveedor, direccion, tipoPropiedad, descripcionCorta, moneda, precio, detallesPropiedad, imagenes } = property;

    const { principal } = imagenes;
    // {
    //     id: 1,
    //     titulo: "Duplex a estrenar",
    //     direccion: {
    //         ciudad: "Villa elisa",
    //         barrio: "",
    //         ubicacion: {
    //             lat: "",
    //             long: ""
    //         }
    //     },
    //     descripcion: "Duplex de 80 M2 de Construcción y de terreno mide 6 metros de frente por 14 metros de Fondo. Planta Baja en frente estacionamiento para 2 vehículos con portón basculante no incluye el motor, living /comedor, cocina con un mueble , baño social, atrás un pequeño patio y un fregadero de ropas. Planta Alta : dos dormitorios, un baño familiar, balcón en frente, ciudad de Villa Elisa.",
    //     detallesPropiedad: {
    //         habitaciones: "2",
    //         totalambientes: "6",
    //         cocina: "1",
    //         salas: "1",
    //         anoConstruccion: "2021",
    //         clasePropiedad: "Vivienda unifamilar",
    //         area: "80"
    //     },
    //     imagenes: [
    //         "url"
    //     ],
    //     precio: 285000000,
    //     moneda: "PYG",
    //     tipoPropiedad: [
    //         "venta"
    //     ],
    //     proveedor: {
    //         nombreProveedor: "Sunset Realty",
    //         imagen: "",
    //         urlProveedor: ""
    //     }
    // }


    return (
        <div className="col-md-6">
            <div className="single-product-wrap style-2">
                <div className="thumb">
                    {/* <img src={publicUrl + "assets/img/project/15.png"} alt="img" /> */}
                    <img src={publicUrl + "assets/img/product/" + principal.landscape} alt="img" />
                    <div className="product-wrap-details">
                        <div className="media">
                            <div className="author">
                                <img src={publicUrl + "assets/img/author/" + proveedor.imagen} alt="img" />
                            </div>
                            <div className="media-body">
                                <h6><Link to="/property-details">{proveedor.nombreProveedor}</Link></h6>
                                <p><img src={publicUrl + "assets/img/icon/location-alt.png"} alt="img" />{direccion.ciudad}</p>
                            </div>
                            <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
                        </div>
                    </div>
                </div>
                <div className="product-details-inner">
                    <h4><Link to="/property-details">{titulo}</Link></h4>
                    <ul className="meta-inner">
                        <li><img src={publicUrl + "assets/img/icon/location2.png"} alt="img" />{direccion.ciudad}</li>
                        {
                            tipoPropiedad.map(item => (<li key={item}><Link to="/property-details">{item}</Link></li>))
                        }
                    </ul>
                    <p>{descripcionCorta}</p>
                    <span className="price"> {moneda} {Intl.NumberFormat('de-DE').format(precio)}</span>
                </div>
                <div className="product-meta-bottom style-2">
                    <span>{detallesPropiedad.habitaciones} <span>Habitaciones</span></span>
                    <span className="border-none">{detallesPropiedad.banos} <span>Baño</span></span>
                    <span>{detallesPropiedad.area} <span>M²</span></span>
                </div>
            </div>
        </div>
    )
}
