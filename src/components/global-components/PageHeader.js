import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({headertitle, subheader}) => {
	let HeaderTitle = headertitle;
	let publicUrl = process.env.PUBLIC_URL + '/'
	let Subheader = subheader ? subheader : HeaderTitle;

	return (
		<div className="breadcrumb-area bg-overlay-2" style={{ backgroundImage: 'url("' + publicUrl + 'assets/img/other/1154405.webp")' }}>
			<div className="container">
				<div className="breadcrumb-inner">
					<div className="section-title text-center">
						<h2 className="page-title">{HeaderTitle}</h2>
						<ul className="page-list">
							<li><Link to="/">Inicio</Link></li>
							<li>{Subheader}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}


export default PageHeader;