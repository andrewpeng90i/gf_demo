import React from "react";
import { connect } from "react-redux";
import { getAllItemFromCart } from "../data/reducers";
import "./NavBar.css";

export class NavTopLeft extends React.Component {
	render() {
		//const className = "NavTopLeft span7";

		return (
			<ul class="nav-ul-row">
				<li><a id="nav-men-link" href="/men">Men</a></li>
				<li><a id="nav-women-link" href="/women">Women</a></li>
			</ul>
		);
	}
}

export class NavTopMid extends React.Component {
	render() {
		//const className = "nav-top-mid span2";

		return (
				<a class="nav-logo" href="gfashion.com">
					<img class="nav-logo" id="nav-logo-link" 
						src="https://pbs.twimg.com/media/EaaaEB-U4AAVrYd?format=jpg&name=medium" 
						alt="GFashion" />
				</a>
		);
	}

}
class NavTopRightLanguage extends React.Component {
	state = {
		toShow: false
	};
	mouseEnterHandler = () => {this.setState({toShow: true})};
	mouseLeaveHandler = () => {this.setState({toShow: false})};

	render() {
		//const className = "header-nav-language";
		const menu_className = this.state.toShow ? "header-nav-lan-menu show" : "header-nav-lan-menu hide";
		return (
				<ul class="nav-ul-lan-col">
						<li onMouseEnter={this.mouseEnterHandler.bind(this)} 
							onMouseLeave={this.mouseLeaveHandler.bind(this)}>
							<a id="nav_language" href="/en-us">English</a>
						</li>
					<div class={menu_className} onMouseEnter={this.mouseEnterHandler.bind(this)} 
												onMouseLeave={this.mouseLeaveHandler.bind(this)}>
						<li><a id="nav-menu-zh-cn" href="/zh-cn">中文</a></li>
					</div>
				</ul>
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
				<a href="/cart">{text}</a>
		);
	}
}


const navBarCartDispatcher = dispatch => {
	return { getAllItemFromCart : () => dispatch(getAllItemFromCart())};
};

export default connect(navBarMapSateToProps, navBarCartDispatcher)(NavTopRightCart);

export  class NavTopRight extends React.Component {
	render() {
		//const className = "header-nav-right span7";

		return (
			<ul class="nav-ul-row">
				<li><NavTopRightLanguage class="header-nav-language"/></li>
				<li><NavTopRightCart class="header-nav-cart"/></li>
			</ul>	
		);
	}
}