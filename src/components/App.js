import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Provider } from "react-redux";

class App extends React.Components {
  render() {
    <Provider>
      <div class="app_content">
        <Header className="app_header"/>
        <Main className="app_main">
        <Footer className="app_footer">
      </div>
    </Provider>
  };
}