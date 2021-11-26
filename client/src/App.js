// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import {Provider} from './context';
import Lyrics from "./components/Lyrics/Lyrics";

function App() {
  return (
    <div className="App">
      <Provider>
      <Header />

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/lyrics/track/:id" component={Lyrics} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
