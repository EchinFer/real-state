import React, { useEffect } from 'react';
import { formatNumberToCurrency, noPhotoProductAvailable } from '../../util/util';
import { Sidebar } from './Sidebar';
import { MapComponent } from '../global-components/shared/MapComponent';




const PropertyDetailsPage = ({ property }) => {
	const { titulo, descripcion, precio, moneda, tipoPropiedad, imagenes, detallesPropiedad, direccion } = property;

	const { lat, long } = direccion

	let publicUrl = process.env.PUBLIC_URL + '/';
	useEffect(() => {
		const $ = window.$;
		$('body').addClass('body-bg');

	}, []);

	const txt1 = `Hola, quisiera hacer una consulta sobre la propiedad llamada '${titulo}'.`;
	const txt1encoded = encodeURIComponent(txt1);
	const link = `https://wa.me/595983263018?text=${txt1encoded}`;

	console.log(imagenes.secundarios.length);
	return <div className="property-page-area pd-bottom-90 ">
		<div className="container">
			<div className="property-details-top pd-bottom-70">
				<div className="property-details-top-inner">
					<div className="row">
						<div className="col-lg-7">
							<h3>{titulo}</h3>
							<p><img src={publicUrl + "assets/img/icon/location2.png"} alt="img" /> {direccion.ciudad}</p>
							<ul>
								{detallesPropiedad.habitaciones && <li>{detallesPropiedad.habitaciones} Habitaciones</li>}
								{detallesPropiedad.banos && <li>{detallesPropiedad.banos} {detallesPropiedad.banos > 1 ? 'Baños' : 'Baño'}</li>}
								{detallesPropiedad.habitaciones && <li>{detallesPropiedad.area}M²</li>}

							</ul>
						</div>
						<div className="col-lg-5 text-lg-right">
							<h4>{moneda} {formatNumberToCurrency(precio)}</h4>
							<div className="btn-wrap">
								{
									tipoPropiedad.map((item, index) => (<a key={index} className="btn btn-blue btn-sm" href="#">{item.toUpperCase()}</a>))
								}
							</div>
							{/* <ul>
								<li><img src={publicUrl + "assets/img/icon/1.png"} alt="img" />Marce 9 , 2020</li>
								<li><img src={publicUrl + "assets/img/icon/2.png"} alt="img" />4263</li>
								<li><img src={publicUrl + "assets/img/icon/3.png"} alt="img" />68</li>
							</ul> */}
						</div>
					</div>
				</div>
				<div className="product-thumbnail-wrapper">
					<div className="single-thumbnail-slider">
						{
							imagenes.secundarios.length > 0 ?
								imagenes.secundarios.map((imageItem, index) => (
									<div key={index} className="slider-item">
										<img src={publicUrl + `assets/img/project-single/${imageItem}`} alt="img" />
									</div>
								)) :
								<div className="slider-item">
									<img src={publicUrl + `assets/img/product/${noPhotoProductAvailable.portrait}`} alt="img" />
								</div>
						}

					</div>
					<div className="product-thumbnail-carousel">
						{
							imagenes.secundarios.length > 0 ?
								imagenes.secundarios.map((imageItem, item) => (
									<div key={item} className="single-thumbnail-item">
										<img src={publicUrl + `assets/img/project-single/${imageItem}`} alt="img" />
									</div>
								)) :
								<div className="single-thumbnail-item">
									<img src={publicUrl + `assets/img/product/${noPhotoProductAvailable.portrait}`} alt="img" />
								</div>
						}
					</div>
				</div>
			</div>
			<div className="row go-top">
				<div className="col-lg-8">
					<div className="single-property-details-inner">
						<div className="single-property-grid">
							<h4>Descripción</h4>
							<div className="row">
								<div className="col-md-12">
									{descripcion}
								</div>
							</div>
						</div>
						<div className="single-property-grid">
							<h4>Detalles propiedad</h4>
							<div className="row">
								<div className="col-md-6">
									<ul>
										{detallesPropiedad.habitaciones && <li>Habitaciones: {detallesPropiedad.habitaciones}</li>}
										{detallesPropiedad.totalambientes && <li>Total ambientes: {detallesPropiedad.totalambientes}</li>}
										{detallesPropiedad.cocina && <li>Cocina: {detallesPropiedad.cocina}</li>}
										{detallesPropiedad.clasePropiedad && <li>Clase: {detallesPropiedad.clasePropiedad}</li>}
									</ul>
								</div>
								<div className="col-md-6">
									<ul>
										{detallesPropiedad.salas && <li>Salas: {detallesPropiedad.salas}</li>}
										{detallesPropiedad.anoConstruccion && <li>Año construcción: {detallesPropiedad.anoConstruccion}</li>}
										{detallesPropiedad.area && <li>Area: {detallesPropiedad.area}M²</li>}
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="single-property-grid">
							<h4>Proparty Attachment</h4>
							<div className="row">
								<div className="col-sm-6">
									<a href="PDFLINK" download>
										<img src={publicUrl + "assets/img/icon/9.png"} alt="img" />
									</a>
								</div>
								<div className="col-sm-6 mt-2 mt-sm-0">
									<a href="PDFLINK" download>
										<img src={publicUrl + "assets/img/icon/9.png"} alt="img" />
									</a>
								</div>
							</div>
						</div> */}
						<div className="single-property-grid">
							<div className="property-actions">

								<a className='btn btn-dark text-light' href={link} target='_blank'><i className="fab fa-whatsapp"></i> Consultar</a>

							</div>
						</div>

						<div className="single-property-grid">
							<h4>Ubicación</h4>
							<div className="property-map">
								{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-57.576892!3d-25.361177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" /> */}
								<MapComponent latitude={lat} longitude={long} />
								{/* <PropertyMap /> */}
							</div>
						</div>

						{/* <div className="single-property-grid">
							<h4>Floor Plans</h4>
							<img src={publicUrl + "assets/img/project-single/6.png"} alt="img" />
						</div>
						<div className="single-property-grid">
							<h4>Intro Video</h4>
							<div className="property-video text-center" style={{ background: 'url(' + publicUrl + 'assets/img/project-single/8.png)' }}>
								<a className="play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" aria-hidden="true" /></a>
							</div>
						</div> */}
						{/* <div className="single-property-grid">
							<h4>Whats Nearby?</h4>
							<div className="media single-review-inner">
								<div className="media-left">
									<div className="thumb">
										<img src={publicUrl + "assets/img/project-single/9.png"} alt="img" />
									</div>
								</div>
								<div className="media-body align-self-center">
									<div className="row">
										<div className="col-md-8">
											<h5>Eureka/Harvey Milk Branch</h5>
											<p>consectetuLorem ipsum dolor sit amet</p>
										</div>
										<div className="col-md-4 text-md-right">
											<p className="ratting-title"><span>32</span> Reviews</p>
											<div className="ratting-inner">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="media single-review-inner">
								<div className="media-left">
									<div className="thumb">
										<img src={publicUrl + "assets/img/project-single/10.png"} alt="img" />
									</div>
								</div>
								<div className="media-body align-self-center">
									<div className="row">
										<div className="col-md-8">
											<h5>Milbaly Extension &amp; Academy</h5>
											<p>consectetuLorem ipsum dolor sit amet</p>
										</div>
										<div className="col-md-4 text-md-right">
											<p className="ratting-title"><span>32</span> Reviews</p>
											<div className="ratting-inner">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="media single-review-inner">
								<div className="media-left">
									<div className="thumb">
										<img src={publicUrl + "assets/img/project-single/11.png"} alt="img" />
									</div>
								</div>
								<div className="media-body align-self-center">
									<div className="row">
										<div className="col-md-8">
											<h5>Nilgao School</h5>
											<p>consectetuLorem ipsum dolor sit amet</p>
										</div>
										<div className="col-md-4 text-md-right">
											<p className="ratting-title"><span>32</span> Reviews</p>
											<div className="ratting-inner">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
						{/* <div className="single-property-grid">
							<h4>Page statistics</h4>
							<img src={publicUrl + "assets/img/project-single/7.png"} alt="img" />
						</div> */}
						{/* <form className="single-property-comment-form">
							<div className="single-property-grid bg-black">
								<div className="single-property-form-title">
									<div className="row">
										<div className="col-md-8">
											<h4>Post Your Comment</h4>
										</div>
										<div className="col-md-4 text-md-right">
											<div className="ratting-inner">
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
												<i className="fa fa-star" />
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6">
										<label className="single-input-inner style-bg">
											<span className="label">Enter Your Name</span>
											<input type="text" placeholder="Your name here...." />
										</label>
									</div>
									<div className="col-lg-6">
										<label className="single-input-inner style-bg">
											<span className="label">Enter Your MAil</span>
											<input type="text" placeholder="Your email here...." />
										</label>
									</div>
									<div className="col-12">
										<label className="single-input-inner style-bg">
											<span className="label">Enter Your Messege</span>
											<textarea placeholder="Enter your messege here...." defaultValue={""} />
										</label>
									</div>
									<div className="col-12 mb-4">
										<button className="btn btn-base radius-btn">Submit Now</button>
									</div>
								</div>
							</div>
						</form> */}
					</div>
				</div>

				{/* SIDEBAR------------------------------------------------------------------------------------------ */}
				{/* <Sidebar /> */}
			</div>
		</div>
	</div>
}

export default PropertyDetailsPage