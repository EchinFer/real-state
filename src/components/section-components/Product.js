import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	
	return (
		<div className="product-area pd-top-118 pd-bottom-90 go-top">
			<div className="container">
				<div className="section-title text-center">
					<h6>Ofrecemos las mejores propiedades inmobiliarias</h6>
					<h2>La mejor casa para ti</h2>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-product-wrap">
							<Link to="/property-details">
								<div className="thumb">
									<img src={publicUrl + "assets/img/product/exampleProduct.png"} alt="img" />
									<span className='cat'>Para vender</span>
								</div>
							</Link>
							<div className="product-wrap-details">
								<div className="media">
									<div className="author">
										<img src={publicUrl + "assets/img/logos/logo-sunset.svg"} alt="img" />
									</div>
									<div className="media-body">
										<h6><Link to="/property">Sunset Realty</Link></h6>
										<p><img src={publicUrl + "assets/img/icon/location-alt.png"} alt="img" />Villa Elisa</p>
									</div>
									<a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
								</div>
								<div className="product-meta">
									<span className="price">₲ 285.000.000</span>
									<div className="float-right d-inline-block">
										<ul>
											<li><img src={publicUrl + "assets/img/icon/triangle.png"} alt="img" />80 M²</li>
											<li><img src={publicUrl + "assets/img/icon/bed.png"} alt="img" />2</li>
											{/* <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-product-wrap">
							<Link to="/property-details">
								<div className="thumb">
									<img src={publicUrl + "assets/img/product/exampleProduct.png"} alt="img" />
									<span className='cat'>Para vender</span>
								</div>
							</Link>
							<div className="product-wrap-details">
								<div className="media">
									<div className="author">
										<img src={publicUrl + "assets/img/logos/logo-sunset.svg"} alt="img" />
									</div>
									<div className="media-body">
										<h6><Link to="/property">Sunset Realty</Link></h6>
										<p><img src={publicUrl + "assets/img/icon/location-alt.png"} alt="img" />Villa Elisa</p>
									</div>
									<a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
								</div>
								<div className="product-meta">
									<span className="price">₲ 285.000.000</span>
									<div className="float-right d-inline-block">
										<ul>
											<li><img src={publicUrl + "assets/img/icon/triangle.png"} alt="img" />80 M²</li>
											<li><img src={publicUrl + "assets/img/icon/bed.png"} alt="img" />2</li>
											{/* <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-product-wrap">
							<Link to="/property-details">
								<div className="thumb">
									<img src={publicUrl + "assets/img/product/exampleProduct.png"} alt="img" />
									<span className='cat'>Para vender</span>
								</div>
							</Link>
							<div className="product-wrap-details">
								<div className="media">
									<div className="author">
										<img src={publicUrl + "assets/img/logos/logo-sunset.svg"} alt="img" />
									</div>
									<div className="media-body">
										<h6><Link to="/property">Sunset Realty</Link></h6>
										<p><img src={publicUrl + "assets/img/icon/location-alt.png"} alt="img" />Villa Elisa</p>
									</div>
									<a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
								</div>
								<div className="product-meta">
									<span className="price">₲ 285.000.000</span>
									<div className="float-right d-inline-block">
										<ul>
											<li><img src={publicUrl + "assets/img/icon/triangle.png"} alt="img" />80 M²</li>
											<li><img src={publicUrl + "assets/img/icon/bed.png"} alt="img" />2</li>
											{/* <li><img src={publicUrl+"assets/img/icon/wall.png"} alt="img" />1026 sq ft</li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;
