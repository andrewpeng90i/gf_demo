import React from "react";
import { connect } from "react-redux";
import { getAllItemFromCart } from "../data/reducers";

export class NavTopLeft extends React.Component {
	render() {
		const className = "NavTopLeft span7";

		return (
			<div class={className}>
				<ul><a id="men-link" href="/men">Men</a></ul>	
				<ul><a id="women-link" href="/women">Women</a></ul>
			</div>
		);
	}
}

export class NavTopMid extends React.Component {
	render() {
		const className = "nav-top-mid span2";

		return (
			<div class={className}>
				<a id="logo-home-text-link" href="/">G-Fashion</a>
			</div>
		);
	}

}
class NavTopRightLanguage extends React.Component {
	state = {
		isShown: false
	};
	mouseEnterHandler = () => {this.setState({isShown : true})};
	mouseLeaveHandler = () => {this.setState({isShown : false})};

	render() {
		const className = "NavTopRightLanguage";
		const menu_className = "NavTopRightMenu" + this.state.isShown ? " show" : "";
		return (
			<div>
				<div class={className}><a id="nav_language" href="/en-us">English</a></div>
				<div class={menu_className}>
					<ul>
						<li><a id="nav-menu-zh-cn" href="/zh-cn">中文</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

const navBarMapSateToProps = state => {
	return {
		totalItemNum: state.itemList.length
	}
};

export class NavTopRightCart extends React.Component {
	render() {
		const text = "Shopping Cart (" + this.props.totalItemNum + ")";
		return (
			<div>
				<a href="/cart">{text}</a>
			</div>
		);
	}
}


const navBarCartDispatcher = dispatch => {
	return { getAllItemFromCart : () => dispatch(getAllItemFromCart())};
};

export default connect(navBarMapSateToProps, navBarCartDispatcher)(NavTopRightCart);
export  class NavTopRight extends React.Component {
	render() {
		const className = "nava-top-right span7";

		return (
			<div class={className}>
				<ul><NavTopRightLanguage id="nav-language"/></ul>
				<ul><NavTopRightCart id="nav-top-cart"/></ul>
			</div>
		);
	}
}