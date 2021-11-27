import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const apiKey = "400a847c3fba710765829132d1b9052b";

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TRACKS':
            return {
                ...state,
                trackList: action.payload,
                heading: 'Search Results'
            };
            default:
                return state;
    }
}

export class Provider extends Component {
  state = {
    trackList: [],
    heading: "Trending Tracks",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ trackList: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
