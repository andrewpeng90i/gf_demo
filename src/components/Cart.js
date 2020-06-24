import React from "react";
import { connect } from "react-redux";
import { getAllItemFromCart } from "../data/reducers";

const navBarMapSateToProps = state => {
	return {
		totalItemNum: state.itemList.length
	}
};

export class nav_top_right_cart extends React.Component {
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

export default connect(navBarMapSateToProps, navBarCartDispatcher)(nav_top_right_cart);