import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export class Home extends React.Component {
	render(){
		console.log("reandering Home");
		return (
			<div class="homePage-container">
				<div class="home-shop-row">
					<ul class="home-shop-row-ul-50-50">
						<li><Link to="/men">SHOP MEN</Link></li>
						<li><Link to="/women">SHOP WOMEN</Link></li>
					</ul>
				</div>

				<div class="home-article-row-50-50">
					<ul>
						<li><Link to="/en-us"><img src={"/images/home_article_1.jpg"} alt="BLM"/></Link></li>
						<li><Link to="/en-us"><img src={"/images/home_article_2.jpg"} alt="Fashion"/></Link></li>
					</ul>
				</div>
			</div>
		);
	}
}