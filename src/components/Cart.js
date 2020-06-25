import React from "react";
import { connect } from "react-redux";
import { store } from "../data/store";
import { removeItemFromCart } from "../data/reducers"
import { Link } from "react-router-dom";

const mapStateToProps = state => {
	return (this.setState({
		cartItemList: state.cartReducer.cart.cartItemList,
		totalPrice: state.cartReducer.cart.cartItemList.reduce((res, item) => res + item["price"]),
		totalItem: state.cartReducer.cart.cartItemList.length
	}));
};
const mapDispatchtoProps = dispatch => ({
	onRemoveFromCartClickHandler: (index) => dispatch(removeItemFromCart(index))
});

export class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cartItemList: [],
			totalPrice: 0,
			totalItem: 0
		};

		this.onRemoveFromCartClickHandler = this.onRemoveFromCartClickHandler.bind(this);
	}
	onRemoveFromCartClickHandler() {

	};
	getCartStateFromStore() {
		const newCartItemList = store.getState().cartReducer.cart.cartItemList;
		const newTotalPrice = newCartItemList.reduce((res, item) => res + item["price"]);
		const newTotalItem = newCartItemList.length;

		this.setState({
			cartItemList: newCartItemList,
			totalPrice: newTotalPrice,
			totalItem: newTotalItem
		});
	};
	componentWillMount() {
		this.getCartStateFromStore();
	}
	render() {
		return (
			<div class="cart-Container">
				<ul class="cart-ul-center-col">
				{this.state.cartItemList.map((item, index) => {
					return (		
						<li>
							<ul class="cart-item-ul-row" display="inline" list-stype="none">
								<li><Link><img src={item.image} alt={item.image}/></Link></li>
								<li>
									<p> {item.designer} </p>
									<p> {item.name} </p>
									<p> {item.id} </p>
								</li>
								<li>
									<p> {item.price} </p>
									<p>
										<button onClick={this.onRemoveFromCartClickHandler({index})}>Rmove from Cart</button>
									</p>
								</li>
							</ul>
						</li>
					);	
				})}
				</ul>				
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart)