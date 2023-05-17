import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { formatNumber, formatNumberToCurrency, noPhotoProductAvailable } from '../../util/util';

export const PropertyItemGrid = ({ property }) => {

    let publicUrl = process.env.PUBLIC_URL + '/';
    const navigate = useNavigate();

    const { id, titulo, proveedor, direccion, tipoPropiedad, descripcionCorta, moneda, precio, detallesPropiedad, imagenes } = property;

    const { principal } = imagenes;

    const handleClickProperty = () =>{
        navigate(`/property-details/${id}`);
    }
    return (
        <div className="col-md-4">
            <div className="single-product-wrap style-2" onClick={handleClickProperty} style={{cursor: 'pointer'}}>
                <div className="thumb">
                    <Link to={`/property-details/${id}`} style={{ display: 'block'}}>
                        {/* <img src={publicUrl + "assets/img/project/15.png"} alt="img" /> */}
                        <img className='thumb-img' src={publicUrl + `assets/img/product/${principal.landscape ?? noPhotoProductAvailable.landscape}`} alt="img" />
                    </Link>
                    <div className="product-wrap-details">
                        <div className="media">
                            <div className="author">
                                <img src={publicUrl + "assets/img/logos/" + proveedor.imagen} alt="img" />
                            </div>
                            <div className="media-body">
                                <h6><Link to={proveedor.urlProveedor}>{proveedor.nombreProveedor}</Link></h6>
                                <p><img src={publicUrl + "assets/img/icon/location-alt.png"} alt="img" />{direccion.ciudad}</p>
                            </div>
                            <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
                        </div>
                    </div>

                </div>
                <div className="product-details-inner">
                    <h4><Link to={`/property-details/${id}`}>{titulo}</Link></h4>
                    <ul className="meta-inner">
                        <li><img src={publicUrl + "assets/img/icon/location2.png"} alt="img" />{direccion.ciudad}</li>
                        {
                            tipoPropiedad.map(item => (<li key={item}><Link to="/property-details">{item}</Link></li>))
                        }
                    </ul>
                    <p>{descripcionCorta}</p>
                    <span className="price"> {moneda} {formatNumberToCurrency(precio)}</span>
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
