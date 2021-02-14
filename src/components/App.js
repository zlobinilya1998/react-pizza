import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

import "../assets/main.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/main">
            <div>Main</div>
          </Route>
          <Route exact path="/shop">
            <div>Shop</div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
