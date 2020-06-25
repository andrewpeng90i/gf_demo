import React from "react";
import { store } from "../data/store";
import { Link } from "react-router-dom";

export class Shop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prodcutsToShow: []
		};
	}

	componentWillMount() {
		this.updateProducts();
	};

	updateProducts = () => {
		const params = {
				gender: this.props.gender, 
				designer: this.props.designer,
				category: this.props.category,
				name: this.props.name
			};
		//console.log(params.gender, params.designer, params.category, params.name);
		const stateProductList = store.getState().productReducer.products.allItemList;
		const filter = {};
		for(const key in params)
			if(params[key] !== '')
				filter[key] = params[key];

		const productList = stateProductList.filter( product => {
											for (const key in filter) {
													//console.log(key, product[key], filter[key]);
													if(product[key] === undefined || 
														filter[key] !== product[key])
														return false;
												}
												return true;
											});
		//console.log(productList);
		this.setState({prodcutsToShow: productList});
		
	};

	render() {
		//console.log(this.state);
		const items = [];

		for(const [index, value] of this.state.prodcutsToShow.entries()) {
			const url = "/" + value.gender + "/product/" + value.designer_str + 
						"/" + value.name_str + "/" + value.id;
			console.log(value.images[0]);
			//const src_rq = require(value.images[0]);
			items.push(<li><Link to={url}><img src={value.images[0]} alt={value.name} with="190" height="255" /></Link></li>);
			//items.push(<li><Link to={url}>{value.name}</Link></li>);
		}
		console.log(items);
		return(
			<div class="shop-Container">
				<ul>
					{items}
				</ul>
			</div>
			
		);
	}
}
