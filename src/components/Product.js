import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../data/reducers";
import { store } from "../data/store";

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => ({
	onClick : () => dispatch(addItemToCart(this.state.name, this.state.name, this.state.selectedSize, 
											this.state.id, this.state.price, this.state.images[0]))
});

export class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			designer: "",
			sizes: [],
			description: "",
			images: [],
			id:"",
			price: 0,
			selectedSize: ""
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onChangeHandler = (e) => {
		this.setState(...this.state, {selectedSize: this.state.sizes[e.target.value]});
	};

	onClickHandler = () => {

	};
	updateProduct() {
		const params = {
			name_str: this.props.name,
			designer_str: this.props.designer,
			id: this.props.id
		};

		//console.log(params);
		const stateProductList = store.getState().productReducer.products.allItemList;
		const newState = {};
		const filter = {};

		for(const key in params)
			if(params[key] !== '')
				filter[key] = params[key];

		var product = stateProductList.filter( p => {
											for (const key in filter) {
													//console.log(key, p[key], filter[key]);
													if(p[key] === undefined || 
														filter[key] !== p[key])
														return false;
												}
												return true;
											});
		product = product[0];

		console.log(product);
		newState["name"] = product["name"];
		newState["designer"] = product["designer"];
		newState["sizes"] = product["size"];
		newState["description"] = product["description"];
		newState["images"] = product["images"];
		newState["price"] = product["price"];
		newState["id"] = product["id"];
		newState["selectedSize"] = "";

		this.setState(newState);
	};
	componentWillMount() {
		this.updateProduct();
	};

	render() {
		return (
			<div class="product-container">
				<ul class="product-ul-33-33-33">
					<li class="product-li-33">
						<p> {this.state.designer} </p>
						<p> {this.state.name} </p>
						<p> {this.state.id} </p>
						<p> {this.state.description} </p>
					</li>

					<li class="product-li-33">
						<ul class="product-image-ul">
							{this.state.images.map((imagesrc, idx) => <li><img src={imagesrc} alt={imagesrc}/></li>)}
						</ul>
					</li>

					<li class="product-li-33">
						<p> Price: {this.state.price} </p>
						<p>
							<select class="prodcut-size-select" onChange={this.onChangeHandler} 
																value={this.state.selectedSize}>
								{this.state.sizes.map((size, idx) => <option value={size}>{size}</option>)}
							</select>
						</p>
						<p>
							<button class="prodcut-add-to-cart" onClick={this.onClickHandler}> Add to cart</button>
						</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Product)

