import React, { Component } from "react";
// import Tracks from "../tracks/Tracks";
// import Search from "../tracks/Search";
import { Consumer } from '../../context';

export default class Tracks extends Component {
  render() {
    return (
    <Consumer>
        {value => {
            console.log(value);
            return <h1>Tracks</h1>
        }}
    </Consumer>
    )
  }
}
