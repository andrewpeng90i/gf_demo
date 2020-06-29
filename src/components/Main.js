import React from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import Product from "./Product";
import Home from "./Home";

export default class Main extends React.Component {

	render() {
		console.log(this.props.location.pathname);
		const pathname = this.props.location.pathname;

		const gender = this.props.match.params.gender
		const product = this.props.match.params.product
		const designer = this.props.match.params.designer;
		const productName = this.props.match.params.name;
		const productId = this.props.match.params.id;

		console.log(pathname, designer, productName, productId);

		var className = "";
		switch(pathname) {
			
			case "/en-us":
			case "/zh-cn":
			case "/":
				className = "home";
				break;

			case "/cart":
				className = "cart-detail";
				break;

			case "/men":
				className = "shop-men";
				break;

			case "/women":
				className = "shop-women";
				break;

			default:
				break;
		}
		if (product !== undefined && designer !== undefined && 
					productName !== undefined && productId !== undefined) {
			className = "product-detail";
		}

		console.log(className);

		switch(className) {

			case "home": 
				return (
					<div class="main-container">
						<Home class={className} />
					</div>
				);

			case "shop-men": 
				return (
					<div class="main-container">
						<Shop class={className} gender="men" designer="" category="" name="" />
					</div>
				);
	
			case "shop-women":
				return (
					<div class="main-container">
						<Shop class={className} gender="women" designer="" category="" name="" />
					</div>
				);

			case "cart-detail":
				return (
					<div class="main-container">
						<Cart class={className} />
					</div>
				);

			case "product-detail":
				return (
					<div class="main-container">
						<Product class={className} gender={gender} product={product} designer={designer} 
													name={productName} id={productId} / >
					</div>
				);
		}
	}
}