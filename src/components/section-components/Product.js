import React from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../../data/properties';
import { currency, formatNumberToCurrency, noPhotoProductAvailable } from '../../util/util';

const Product = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	const lastProperties = properties.filter(property => property.destacado == true).slice(0, 3);

	return (
		<div className="product-area pd-top-118 pd-bottom-90 go-top">
			<div className="container">
				<div className="section-title text-center">
					<h6>Ofrecemos las mejores propiedades inmobiliarias</h6>
					<h2>La mejor casa para ti</h2>
				</div>
				<div className="row justify-content-center">
					{
						lastProperties.map(item => (
							<div key={item.id} className="col-lg-4 col-md-6">
								<div className="single-product-wrap">
									<Link to={`/property-details/${item.id}`}>
										<div className="thumb">
											<img src={publicUrl + `assets/img/product/${item.imagenes.principal.portrait ?? noPhotoProductAvailable.portrait}`} alt="img" />
											{
												item.tipoPropiedad.map((tipoPropiedad, index) => (
													<span key={index} className='cat'>{tipoPropiedad}</span>
												))
											}

										</div>
									</Link>
									<div className="product-wrap-details">
										<div className="media">
											<div className="author">
												<img src={publicUrl + `assets/img/logos/${item.proveedor.imagen}`} alt="img" />
											</div>
											<div className="media-body">
												<h6><Link to={item.proveedor.urlProveedor}>{item.proveedor.nombreProveedor}</Link></h6>
												<p><img src={publicUrl + "assets/img/icon/location-alt.png"} alt="img" />{item.direccion.ciudad}</p>
											</div>
											<a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
										</div>
										<div className="product-meta">
											<span className="price">{currency.symbol} {formatNumberToCurrency(item.precio)}</span>
											<div className="float-right d-inline-block">
												<ul>
													<li><img src={publicUrl + "assets/img/icon/triangle.png"} alt="img" />{item.detallesPropiedad.area} M²</li>
													<li><img src={publicUrl + "assets/img/icon/bed.png"} alt="img" />{item.detallesPropiedad.habitaciones}</li>
													{/* <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li> */}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Product;
