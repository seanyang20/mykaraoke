// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />

        <Switch>
          <Route path="/" component={Hero} />
        </Switch>
  
    </div>
  );
}

export default App;
