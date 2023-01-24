import React from 'react'

export const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <aside className="sidebar-area">
                {/* <div className="widget widget-author text-center">
							<h4 className="widget-title">About Me</h4>
							<div className="thumb">
								<img src={publicUrl + "assets/img/agent/1.png"} alt="img" />
							</div>
							<div className="details">
								<h5>Sandara Mrikon</h5>
								<p>Lorem ipsum dolor amet, Lore ipsum dolor sit amet, consectetur et  eiLorem ipsum dolor sit amet</p>
								<ul>
									<li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
									<li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
									<li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
									<li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
								</ul>
							</div>
						</div> */}
                {/* <div className="widget widget-category">
							<h5 className="widget-title">Category</h5>
							<ul>
								<li><a href="#">Design <span>26</span></a></li>
								<li><a href="#">Villa House <span>20</span></a></li>
								<li><a href="#">Business <span>21</span></a></li>
								<li><a href="#">Global World <span>31</span></a></li>
								<li><a href="#">Technology <span>12</span></a></li>
								<li><a href="#">Ui Design <span>12</span></a></li>
							</ul>
						</div> */}
                <div className="widget widget-place">
                    <h5 className="widget-title">Lugares</h5>
                    <ul>
                        <li>Villa Elisa <span>7</span></li>
                        <li>Ñemby <span>3</span></li>
                        <li>Lambare <span>1</span></li>
                        <li>San Lorenzo <span>1</span></li>
                    </ul>
                </div>
                {/* <div className="widget widget-news">
							<h5 className="widget-title">Popular Feeds</h5>
							<div className="single-news-wrap media">
								<div className="thumb">
									<img src={publicUrl + "assets/img/blog/5.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h6><Link to="/blog-details">Dolor eorem ipsum sit amet Lorem ipsum</Link></h6>
									<p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
								</div>
							</div>
							<div className="single-news-wrap media">
								<div className="thumb">
									<img src={publicUrl + "assets/img/blog/6.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h6><Link to="/blog-details">Responsive Web And Desktop Develope</Link></h6>
									<p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
								</div>
							</div>
							<div className="single-news-wrap media">
								<div className="thumb">
									<img src={publicUrl + "assets/img/blog/7.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h6><Link to="/blog-details">Admin Web is Django Highlig Models</Link></h6>
									<p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
								</div>
							</div>
						</div> */}
                {/* <div className="widget widget-tags">
							<h5 className="widget-title">Popular Tags</h5>
							<div className="tagcloud">
								<Link to="/blog">Popular</Link>
								<Link to="/blog">Art</Link>
								<Link to="/blog">Business</Link>
								<Link to="/blog">Design</Link>
								<Link to="/blog">Creator</Link>
								<Link to="/blog">CSS</Link>
								<Link to="/blog">Planing</Link>
								<Link to="/blog">Creative</Link>
							</div>
						</div> */}
            </aside>
        </div>
    )
}
