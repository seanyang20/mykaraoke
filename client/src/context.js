import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
const apiKey = '400a847c3fba710765829132d1b9052b';

export class Provider extends Component {
    state = {
        trackList: [
            {track: {trackName: 'abc'}},
            {track: { trackName: 'xyz'}}
        ],
        heading: 'Trending Tracks'
    };

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
            .then(res => {
                console.log(res.data);
                this.setState({trackList: res.data.message.body.track_list});
            })
            .catch(err => console.log(err));
    }

    render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
    }
}

export const Consumer = Context.Consumer;