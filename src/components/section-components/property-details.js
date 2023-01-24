import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';




const PropertyDetailsPage = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'
	useEffect(() => {
		const $ = window.$;
		$('body').addClass('body-bg');

	}, []);

	return <div className="property-page-area pd-bottom-90 ">
		<div className="container">
			<div className="property-details-top pd-bottom-70">
				<div className="property-details-top-inner">
					<div className="row">
						<div className="col-lg-7">
							<h3>Duplex a estrenar</h3>
							<p><img src={publicUrl + "assets/img/icon/location2.png"} alt="img" /> Villa Elisa </p>
							<ul>
								<li>2 Habitaciones</li>
								<li>Baño</li>
								<li>80M²</li>
							</ul>
						</div>
						<div className="col-lg-5 text-lg-right">
							<h4>PYG 285.000.000</h4>
							<div className="btn-wrap">
								<a className="btn btn-blue btn-sm" href="#">COMPRA</a>
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
						<div className="slider-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/7.jpg"} alt="img" />
						</div>
						<div className="slider-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/2.jpg"} alt="img" />
						</div>
						<div className="slider-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/3.jpg"} alt="img" />
						</div>
						<div className="slider-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/4.jpg"} alt="img" />
						</div>
						<div className="slider-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/5.jpg"} alt="img" />
						</div>
					</div>
					<div className="product-thumbnail-carousel">
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/1.jpg"} alt="img" />
						</div>
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/2.jpg"} alt="img" />
						</div>
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/3.jpg"} alt="img" />
						</div>
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/4.jpg"} alt="img" />
						</div>
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/5.jpg"} alt="img" />
						</div>
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/2.jpg"} alt="img" />
						</div>
						<div className="single-thumbnail-item">
							<img src={publicUrl + "assets/img/project-single/villa-elisa/3.jpg"} alt="img" />
						</div>
					</div>
				</div>
			</div>
			<div className="row go-top">
				<div className="col-lg-8">
					<div className="single-property-details-inner">
						<h4>Descripción</h4>
						<p>
							Duplex de 80 M2 de Construcción y de terreno mide 6 metros de frente por 14 metros de Fondo. Planta Baja en frente estacionamiento para 2 vehículos con portón basculante no incluye el motor, living /comedor, cocina con un mueble , baño social, atrás un pequeño patio y un fregadero de ropas. Planta Alta : dos dormitorios, un baño familiar, balcón en frente, ciudad de Villa Elisa .</p>
						<p></p>
						<div className="single-property-grid">
							<h4>Detalles propiedad</h4>
							<div className="row">
								<div className="col-md-6">
									<ul>
										<li>Habitaciones: 2</li>
										<li>Total ambientes: 6</li>
										<li>Cocina: 1</li>
										<li>Clase: Vivienda unifamiliar</li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul>
										<li>Salas: 1</li>
										<li>Año construcción: 2021</li>
										<li>Area: 80M²</li>
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
							<h4>Ubicación</h4>
							<div className="property-map">
								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-57.576892!3d-25.361177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
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
				<Sidebar />
			</div>
		</div>
	</div>
}

export default PropertyDetailsPage