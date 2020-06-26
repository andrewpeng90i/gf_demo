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
		if(pathname === "/en-us" || pathname === "/zh-cn" || pathname === "/") {
			className = "home";
		}
		else if(pathname === "/cart") {
			className = "cart-detail";
		}

		else if (pathname === "/men") {
			className = "shop-men";
		}
		else if (pathname === "/women") {
			className = "shop-women";
		}
		else if (product !== undefined && designer !== undefined && 
					productName !== undefined && productId !== undefined) {
			className = "prodcut-detail";
		}

		console.log(className);

		if(className === "home") {
			return (
				<div class="main-container">
					<Home class={className} />
				</div>
			);
		}
		else if(className === "shop-men" ) {
			return (
				<div class="main-container">
					<Shop class={className} gender="men" designer="" category="" name="" />
				</div>
			);
		}
		else if(className === "shop-women") {
			return (
				<div class="main-container">
					<Shop class={className} gender="women" designer="" category="" name="" />
				</div>
			);
		}
		else if(className === "cart-detail") {
			return (
				<div class="main-container">
					<Cart class={className} />
				</div>
			);
		}
		else if(className === "prodcut-detail") {
			return (
				<div class="main-container">
					<Product class={className} gender={gender} product={product} designer={designer} 
												name={productName} id={productId} / >
				</div>
			);
		}
	}
}