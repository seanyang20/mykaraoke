import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Consumer from '../../context';

const apiKey = '400a847c3fba710765829132d1b9052b';

export default class Search extends Component {
    // state = {
    //     track: {},
    //     lyrics: {}
    // };



    render() {
   
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm sb-4">
                        Go Back
                    </Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by{' '}
                            <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className='card-text'>{lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    {/* <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0]}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>: {track.first_release_date}
                        </li>
                    </ul> */}
                </React.Fragment>
            )
        }
    }
