
import { combineReducers } from 'redux'

const CART_ADD_ITEM = "CART_ADD_ITEM";
const CART_DEL_ITEM = "CART_DEL_ITEM";
const CART_INC_ITEM_NUM = "CART_INC_ITEM_NUM";
const CART_DEC_ITEM_NUM = "CART_DEC_ITEM_NUM";
const CART_CUS_ITEM_NUM = "CART_CUS_ITEM_NUM";
const CART_UPDATE_CURRENT_ITEM = "CART_UPDATE_CURRENT_ITEM";
const CART_GET_ALL_ITEM = "CART_GET_ALL_ITEM";


export const addItemToCart = ({series = '', type = '', size='', id='', price='', imgsrc=''} = {}) => ({
							type: CART_ADD_ITEM,
							payload: {series, type, size, id, price, imgsrc}
});

export const removeItemFromCart = idx => ({
							type: CART_ADD_ITEM,
							payload: idx
});

export const updateCurrentBrowsingItem = ({series = '', type = '', size='', id='', price='', imgsrc=''} = {}) => ({
							type: CART_UPDATE_CURRENT_ITEM,
							payload: {series, type, size, id, price, imgsrc}
});

export const getAllItemFromCart = () => ({
							type: CART_GET_ALL_ITEM,
							payload: ""
});

const defaultState = {
	cart: {
		cartItemList: [],

		curItem: {
			designer: "",
			type: "",
			size: "",
			id: "",
			price: "",
			imgsrc: ""
		},
	},

	user: {
		name : ""
	}
};

export const cartReducer = (state = defaultState, action) => {
	switch(action.type){
		case CART_ADD_ITEM:
			return Object.assign({}, state, {
				cartItemList: state.cartItemList.concat(action.payload)
			});

		case CART_DEL_ITEM:
			return Object.assign({}, state, {
				cartItemList: state.cartItemList.filter(idx => idx !== action.payload)
			});

		case CART_UPDATE_CURRENT_ITEM:
			return Object.assign({}, state, {
				curItem: action.payload
			});

		case CART_GET_ALL_ITEM:
			return Object.assign({}, state.cartItemList);

		default: return state;
	}
};

export const userReducer = (state = defaultState, action) => {
	switch(action.type) {
		default: return state;
	}
};
					   
export const reducer = combineReducers({
	cartReducer,
	userReducer,
});