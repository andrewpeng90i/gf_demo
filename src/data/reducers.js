
import { combineReducers } from 'redux'

const CART_ADD_ITEM = "CART_ADD_ITEM";
const CART_DEL_ITEM = "CART_DEL_ITEM";
const CART_INC_ITEM_NUM = "CART_INC_ITEM_NUM";
const CART_DEC_ITEM_NUM = "CART_DEC_ITEM_NUM";
const CART_CUS_ITEM_NUM = "CART_CUS_ITEM_NUM";
const CART_UPDATE_CURRENT_ITEM = "CART_UPDATE_CURRENT_ITEM";
const CART_GET_ALL_ITEM = "CART_GET_ALL_ITEM";
const MAIN_GET_ALL_PRODUCTS = "MAIN_GET_ALL_PRODUCTS";

const defaultState = {
	products: {
		allItemList: [
		{
			gender: "men",
			category: "clothing",
			type: "shirt",
			designer: "Maison Margiela",
			designer_str: "Maison_Margiela",
			price: 288,
			name: "White Oversized Logotype T-Shirt",
			name_str: "White_Oversized_Logotype_T_Shirt",
			id: "201168M213121",
			images: [ "/images/m_shirt_1.jpg", "/images/m_shirt_2.jpg"],
			description: "Half sleeve cotton jersey t-shirt in white. Rib knit crewneck collar.  \
						Logo printed in black at chest.Supplier color: White \
						Body: 100% cotton. Trim: 94% cotton, 6% elastane. Made in Italy."
		},

		{
			gender: "men",
			category: "bags",
			type: "tote",
			designer: "A.P.C.",
			designer_str: "A_P_C",
			price: 310,
			name: "Indigo Denim Axelle Tote",
			name_str: "Indigo_Denim_Axelle_Tote",
			id: "202252M172083",
			images: [ "/images/m_bag_1.jpg", "/images/res/m_bag_2.jpg"],
			description: "Japanese denim tote in indigo. Twin carry handles at top. \
						Logo printed in white at face. Buffed calfskin trim in black at base. \
						Textile logo patch and zippered pocket at interior. Unlined. Contrast stitching in tan. \
						Approx. 15\" length x 15.5\" height x 5\" width. Supplier color: Indigo Textile, calfskin. Imported."
		},

		{
			gender: "women",
			category: "clothing",
			type: "shirt",
			designer: "Loewe",
			designer_str: "Loewe",
			price: 790,
			name: "Blue & White Striped Oversized Leaning Shirt", 
			name_str: "Blue_and_White_Striped_Oversized_Leaning_Shirt",
			id: "201677F109213",
			images: [ "/images/f_shirt_1.jpg", "/images/res/f_shirt_2.jpg"],
			description: "Long sleeve panelled lightweight cotton poplin shirt featuring alternating stripes in tones \
						of blue and white. White poplin panelling throughout. Asymmetric tuxedo wing collar and panelling \
						at front. Button closure at front. Mother-of-pearl hardware. Supplier color: Baby blue/White \
 						100% cotton. Made in Italy."
		}

		],

		allDesginerList: {
			men : ["Maison_Margiela", "A_P_C"],
			women: ["Loewe"]
		},

		allCategoryList: {
			men : ["bags, shirt"],
			women: ["shirt"]
		}
	},

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

export const addItemToCart = (series, type, size, id, price, imgsrc) => ({
							type: CART_ADD_ITEM,
							payload: {series, type, size, id, price, imgsrc}
});

export const removeItemFromCart = idx => ({
							type: CART_ADD_ITEM,
							payload: idx
});

export const updateCurrentBrowsingItem = ({series = "", type = "", size="", id="", price="", imgsrc=""} = {}) => ({
							type: CART_UPDATE_CURRENT_ITEM,
							payload: {series, type, size, id, price, imgsrc}
});

export const getAllItemFromCart = () => ({
							type: CART_GET_ALL_ITEM,
							payload: ""
});

export const getProducts = (p_gender, p_designer, p_category, p_type, p_id) => ({
							type: MAIN_GET_ALL_PRODUCTS,
							payload: { 
								gender: p_gender, 
								designer: p_designer, 
								category: p_category, 
								type: p_type,
								id: p_id
							}
});

export const productReducer = (state = defaultState, action) => {
	console.log(action.type, action.payload);
	switch(action.type) {
		case MAIN_GET_ALL_PRODUCTS:
			const filter = {};
			for(const key in action.payload)
				if(action.payload[key] !== '')
					filter[key] = action.payload[key];

			return Object.assign({}, state, {
				products: state.products.allItemList.filter((filter, item) => {
					for (const key in filter) {
						if(item[key] === undefined || filter[key] !== item[key])
							return false;
					}
					return true;
				})
			});
		default: return state;
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
				cartItemList: state.cartItemList.filter(item => item !== action.payload)
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
	productReducer,
	cartReducer,
	userReducer
});