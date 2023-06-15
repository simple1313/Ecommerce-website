import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'

var Footer=()=>

{
	useEffect(()=>
{
  AOS.init({duration:1000})
},[])
    return(
        < >
		<div data-aos="zoom-in">
        <div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>Model Town,Jalandhar.</span></li>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+917894789513</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/contact">Contact Us</Link></li>
					

					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link target="#" to="/subcategories?catid=647c65a3baed10d866f71b03">Laptop</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link  target="#"to="/subcategories?catid=647c65b7baed10d866f71b06">Mobile Phones</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link  target="#" to="/subcategories?catid=647c7d6c4c4d0bdc79f7ed2b">Cameras</Link></li>
					
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/homepage">Store</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/cart">My Cart</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/login">Login</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="signup">Create Account</Link></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		

		
	</div>	
	<div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src="images/card.png" alt=" " className="img-responsive"/>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
</div>
        </>
    )
}
export default Footer;