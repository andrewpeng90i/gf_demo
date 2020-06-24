import React from "react";
import nav_top_right_cart from "./cart";


export default class nav_top_left extends React.Component {
	render() {
		const className = "nav_top_left span7";

		return (
			<div class={className}>
				<ul><a id="men_link" href="/men">Men</a></ul>	
				<ul><a id="women_link" href="/women">Women</a></ul>
			</div>
		);
	};
}

export default class nav_top_mid extends React.Component {
	render() {
		const className = "nav_top_mid span2";

		return (
			<div class={className}>
				<a id="logo_home_text_link" href="/">G-Fashion</a>
			</div>
		);
	};

}
class nav_top_right_language extends React.Component {
	state = {
		isShown: false;
	};
	mouseEnterHandler = () => {this.setState({isShown : true})};
	mouseLeaveHandler = () => {this.setState({isShown : false})};

	render() {
		className = "nava_top_right_language";
		menu_className = "nava_top_right_menu" + this.state.isShown ? " show" : "";

		<div class={className}><a id="nav_language" href="/en-us">English</a></div>
		<div class={menu_className}>
			<ul>
				<li><a id="nav_menu_zh-cn" href="/zh-cn">中文</a></li>
			</ul>
		</div>
	};
}

export default class nav_top_right extends React.Component {
	render() {
		const className = "nava_top_right span7";

		return (
			<div class={className}>
				<ul><nav_top_right_language id="nav_language"/>/ul>
				<ul><nav_top_right_cart/></ul>
			</div>
		);
	};
}