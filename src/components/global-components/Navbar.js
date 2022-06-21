import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let imgattr = 'logo'
	let anchor = '#'
	return (
		<div className="navbar-area navbar-area-1">
			{/* navbar top start */}
			<div className="navbar-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 text-lg-left text-center">
							<ul>
								{/* <li><p><img src={publicUrl + "assets/img/icon/location.png"} alt="img" /> 420 Love Sreet 133/2 flx City</p></li> */}
								<li><p><img src={publicUrl + "assets/img/icon/phone.png"} alt="img" /> +595 983 263 018</p></li>
								<li><p><img src={publicUrl + "assets/img/icon/envelope.png"} alt="img" />info.sunset@gmail.com</p></li>
							</ul>
						</div>
						<div className="col-lg-4">
							<ul className="topbar-right text-lg-right text-center">
								<li>
									<Link className="ml-0" to="/sign-up">Registrarse</Link>
									<Link to="/sign-in">Iniciar Sesión</Link>
								</li>
								<li className="social-area">
									<a href="https://www.facebook.com/#/"><i className="fab fa-facebook-f" aria-hidden="true" target="_blank" /></a>
									<a href="https://www.twitter.com/#/"><i className="fab fa-twitter" aria-hidden="true" target="_blank" /></a>
									<a href="https://www.instagram-plus.com/#/"><i className="fab fa-instagram" aria-hidden="true" target="_blank" /></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg">
				<div className="container nav-container">
					<div className="responsive-mobile-menu">
						<button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-left" />
							<span className="icon-right" />
						</button>
					</div>
					<div className="logo">
						<Link to="/"><img src={publicUrl + "assets/img/logos/logo-sunset.svg"} alt="img" /> SUNSET REALTY</Link>
					</div>
					<div className="nav-right-part nav-right-part-mobile">
						<ul>
							{/* <li><a className="search" href="#"><i className="fa fa-search" /></a></li> */}
							{/* <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li> */}
						</ul>
					</div>
					<div className="collapse navbar-collapse" id="dkt_main_menu">
						<ul className="navbar-nav menu-open text-center">
							<li>
								<Link to="/">Inicio</Link>
							</li>
							<li className="menu-item-has-children current-menu-item">
								<Link to="/properties">Propiedades</Link>
								<ul className="sub-menu">
									<li><Link to="/#">Venta</Link></li>
									<li><Link to="/#">Alquiler</Link></li>
								</ul>
							</li>
							<li><Link to="/contact">Contacto</Link></li>
						</ul>
					</div>
					<div className="nav-right-part nav-right-part-desktop">
						<ul>
							<li><a className="search" href="#"><i className="fa fa-search" /></a></li>
							{/* <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li> */}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
};

export default Navbar;
