import React from "react";
import { connect } from "react-redux";
import { store } from "../data/store";
import { removeItemFromCart } from "../data/reducers"
import { Link } from "react-router-dom";

const mapStateToProps = state => {
	return {
		cartItemList: state.cartReducer.cartItemList
	};
};
const mapDispatchtoProps = dispatch => ({
	removeFromCart: (pid) => dispatch(removeItemFromCart(pid))
});

class ButtonRemoveFromCart extends React.Component {
	constructor(props) {
		super(props);
	}

	onRemoveFromCartClickHandler = () => {
		this.props.onClick(this.props.itemId);
	};

	render() {
		console.log(this.props);
		return (
			<div class="btn-remove-form-cart">
				<button onClick={this.onRemoveFromCartClickHandler}>Rmove from Cart</button>
			</div>
		);
	}
}
export class Cart extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const items = [];
		var totalPrice = 0;
		const totalItem = this.props.cartItemList.length;
	
		for(var index = 0; index < totalItem; index++)
		{
			var value = {};
			for(const key in this.props.cartItemList[index])
				value[key] = this.props.cartItemList[index][key];
			
			totalPrice += value.price;
			items.push(<li>
							<ul class="cart-item-ul-row" display="inline" list-stype="none">
								<li><Link to={value.url}><img with="50" height="80" src={value.imgsrc} alt={value.imgsrc} /></Link></li>
								<li><p>{value.designer}</p><p>{value.name}</p><p>{value.id}</p><p>{value.size}</p></li>
								<li>
									<p>{value.price}</p>
									<ButtonRemoveFromCart index={index} itemId={value.id} onClick={this.props.removeFromCart} />
								</li>
							</ul>
						</li>);
		}

		return (

			<div class="cart-Container">
				<ul class="cart-ul-center-col">
					{items}
					<p> {totalItem} Item(s) </p>
					<h4>TOTAL: ${totalPrice}</h4>
				</ul>				
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);
