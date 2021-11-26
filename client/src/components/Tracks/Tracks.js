import React, { Component } from "react";
// import Tracks from "../tracks/Tracks";
// import Search from "../tracks/Search";
import { Consumer } from '../../context';
import SingleTrack from '../SingleTrack/SingleTrack';

export default class Tracks extends Component {
  render() {
    return (
    <Consumer>
        {value => {
            // console.log(value);
            const {trackList, heading} = value;
            // console.log(trackList);
            // console.log(heading);
            if (trackList === undefined || trackList.length === 0) {
                return <p>Loading...</p>;
            } else {
                return (
                <React.Fragment>
                    <h3 className="text-center mb-4">{heading}</h3>
                    <div className="single-track">
                        {trackList.map(item => (
                            // console.log(item)
                            <SingleTrack  key={item.track.track_id} track={item.track}/>
                        ))}
                    </div>
                </React.Fragment>
                );
            }
        }}
    </Consumer>
    )
  }
}
