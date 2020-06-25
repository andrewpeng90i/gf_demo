import React from "react";
import Header from "./Header";
import Main from "./Main";
//import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "../data/store";
import 

export class App extends React.Component {
  render() {
  	console.log(store.getState());
  	return(
	    <Provider store={store}>
	      <div class="app-content eng">
	      	<Router>
		        <Header className="app-header" />

		        <Route exact path="/men" component={Main} />
		        <Route exact path="/women" component={Main} />
		        <Route exact path="/cart" component={Main} />
		        <Route path="/product/:designer/:name/:id" component={Main} />
		        <Route path="/prodcut/:designer" component={Main}>
		    </Router>
	      </div>
	    </Provider>
	);
  }
}
