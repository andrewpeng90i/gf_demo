import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "../data/store";
import { BrowserRouter as Router, Route} from "react-router-dom";

class DebugRouter extends Router {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=> { 
      console.log('The last navigation action was ${action}', JSON.stringify(this.history, null,2));
    });
  }
}

export class App extends React.Component {
  render() {
  	console.log(store.getState());
  	return(
	    <Provider store={store}>
	      <div class="app-content eng">
	      	<DebugRouter>
		        <Header className="app-header" />
		        
		        <Route exact path ="/" component={Main} />
		        <Route exact path ="/en-us" component={Main} />
		        <Route exact path="/cart" component={Main} />

		        <Route exact path="/men" component={Main} />
		        <Route exact path="/women" component={Main} />
		        <Route exact path="/:gender/:prodcut/:designer" component={Main} />
		        <Route exact path="/:gender/:product/:designer/:name/:id" component={Main} />		        

		    </DebugRouter>
	      </div>
	    </Provider>
	);
  }
}
