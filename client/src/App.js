// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import {Provider} from './context';

function App() {
  return (
    <div className="App">
      <Provider>
      <Header />

        <Switch>
          <Route path="/" component={Hero} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
