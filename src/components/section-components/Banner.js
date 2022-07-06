import { Link } from 'react-router-dom';


import React from 'react'

const Banner = () => {

	const publicUrl = process.env.PUBLIC_URL + '/';

	return (
		<div className="banner-area banner-area-3 banner-area-bg" style={{ background: 'url(' + publicUrl + 'assets/img/banner/3.png)' }}>

			<div className="container-fluid">
				<div className="banner-slider owl-carousel">
					<div className="item">
						<div className="banner-area-inner">
							<div className="banner-img-inner">
								<img src={publicUrl + "assets/img/product/casas/casa1.png"} />
							</div>
							<div className="row justify-content-center banner-desc">
								<div className="container banner-meta-inner">
									<div className='banner-meta'>
										<h4>Triplex ¡A estrenar!</h4>
										<img src={publicUrl + "assets/img/icon/location.png"} alt="img" />
										<span>Villa Elisa</span>
										<div className="btn btn-blue">₲ 345,000,000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="main-search-area">
				<div className="container">
					<form className="main-search-inner">
						<div className="row custom-gutters-10">
							<div className="col-md-3">
								<div className="single-select-inner">
									<select>
										<option>Ubicación</option>
										<option value={1}>Villa Elisa</option>
										<option value={2}>Ñemby</option>
										<option value={3}>Lambare</option>
										<option value={3}>San Lorenzo</option>
									</select>
								</div>
							</div>
							<div className="col-md-3">
								<div className="single-select-inner">
									<select>
										<option>Tipo de propiedad</option>
										<option value={1}>Casa</option>
										<option value={2}>Duplex</option>
										<option value={3}>Terreno</option>
										<option value={3}>Departamento</option>
									</select>
								</div>
							</div>
							<div className="col-md-3">
								<div className="single-select-inner">
									<select>
										<option>Precio</option>
										<option value={1}>50,000,000</option>
										<option value={2}>100,000,000</option>
										<option value={3}>150,000,000</option>
									</select>
								</div>
							</div>
							<div className="col-md-3">
								<Link className="btn btn-base w-100" to="/property-grid"><i className="fa fa-search mr-1" /> Buscar</Link>
							</div>
						</div>
					</form>
				</div>
			</div> */}
		</div>
	)
}


export default Banner;