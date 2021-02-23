import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Logo from "./Logo";
import Cart from "./Cart";

import "../assets/main.scss";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Logo />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/main">
            <div>Main</div>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
