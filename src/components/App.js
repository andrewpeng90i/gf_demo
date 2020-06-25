import React from "react";
import Header from "./Header";
import Main from "./Main";
//import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "../data/store";

export class App extends React.Component {
  render() {
  	console.log(store.getState());
  	return(
	    <Provider store={store}>
	      <div class="app-content">
	        <Header className="app-header" />
	        <Main className="app-main" />
	      </div>
	    </Provider>
	);
  }
}
