import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../data/reducers";
import { store } from "../data/store";

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => {
	return {
		addToCart : (designer, name, ss, id, price, image, url) => dispatch(addItemToCart(designer, name, ss, 
																						id, price, image, url))
	}
};

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
			selectedSize: "",
			url: ""
		};
		this.onChooseSizeChangeHandler = this.onChooseSizeChangeHandler.bind(this);
		this.onAddToCartClickHandler = this.onAddToCartClickHandler.bind(this);
		//this.addToCart = this.addToCart.bind(this);
		
		//console.log(this.props.addToCart);
	}

	onChooseSizeChangeHandler = (e) => {
		this.setState({selectedSize: e.target.value});
	};

	onAddToCartClickHandler = (e) => {
		//console.log(this.props);
		console.log(this.state);
		e.preventDefault();
		this.props.addToCart(this.state.designer, this.state.name, this.state.selectedSize,
							this.state.id, this.state.price, this.state.images[0], this.state.url);
	};

	
	updateProductState() {
		const params = {
			name_str: this.props.name,
			designer_str: this.props.designer,
			id: this.props.id
		};

		//console.log(params);
		const stateProductList = store.getState().productReducer.allItemList;
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

		//console.log(product);
		newState["name"] = product["name"];
		newState["designer"] = product["designer"];
		newState["sizes"] = product["size"];
		newState["description"] = product["description"];
		newState["images"] = product["images"];
		newState["price"] = product["price"];
		newState["id"] = product["id"];
		newState["selectedSize"] = product["size"][0];
		newState["url"] = "/" + product["gender"] + "/prodcut/" + product["designer_str"] + "/" +
							product["name_str"] + "/" + product["id"]; 

		this.setState(newState);
	};
	componentWillMount() {
		this.updateProductState();
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
							<select class="prodcut-size-select" onChange={this.onChooseSizeChangeHandler} 
																value={this.state.selectedSize}>
								{this.state.sizes.map((size, idx) => <option value={size}>{size}</option>)}
							</select>
						</p>
						<p>
							<button onClick={this.onAddToCartClickHandler}> Add To Cart</button> 
						</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);


