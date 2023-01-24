import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../../data/properties';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';
import { PropertyItemGrid } from './PropertyItemGrid';
import { Sidebar } from './Sidebar';

const PropertyPage = () => {

	useEffect(() => {
		const $ = window.$;

		$('body').addClass('body-bg');

	}, []);

	let publicUrl = process.env.PUBLIC_URL + '/'



	return <>
		<Navbar />
		<div className="blog-page-area pd-top-120 go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{/* Buscador */}
						<div className="product-search-inner bg-main">
							<div className="row custom-gutters-20">
								<div className="col-md-3 align-self-center">
									<h5>21 Propiedades</h5>
								</div>
								<div className="col-md-6 mt-2 mt-md-0">
									<div className="widget-search">
										<div className="single-search-inner">
											<input type="text" placeholder="Buscar por palabra clave" />
											<button><i className="la la-search" /></button>
										</div>
									</div>
								</div>
								<div className="col-md-3 mt-2 mt-md-0 align-self-center">
									<div className="single-select-inner">
										<select value={"none"}>
											<option value="none" disabled hidden>
												Ordenar por
											</option>
											<option value={1}>Villa Elisa</option>
											<option value={2}>Ñemby</option>
											<option value={2}>Lambare</option>
											<option value={2}>San Lorenzo</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						{/* Grid de propiedades */}
						<div className="row">
							{
								properties.map(
									item => (<PropertyItemGrid key={item.id} property={item} />)
								)
							}

						</div>
						<div className="pagination-area text-center mt-4">
							<ul className="pagination">
								<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
								<li className="page-item active"><a className="page-link" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item"><a className="page-link" href="#">...</a></li>
								<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
							</ul>
						</div>
					</div>
					<Sidebar />
				</div>
			</div>
		</div>
		<Footer />
	</>

}

export default PropertyPage