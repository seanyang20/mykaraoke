import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Consumer}  from '../../context';

const apiKey = '400a847c3fba710765829132d1b9052b';

export default class Search extends Component {
    state = {
        trackTitle: ''
    };

    onChange = (event) => {
        console.log("inside onchange fr search");
        this.setState({[event.target.name]: event.target.value});
    }


    render() {
   
            return (
                <div>
                <Consumer>
                    {value => {
                        return (
                            <div className="card card-body mb-4 p-4">
                                <h1 className="display-4 text-center">
                                    <i className="fas fa-music" />Search for a Song
                                </h1>
                                <p className="lead text-center">Get the lyrics for any song</p>
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form=control-lg"
                                            placeholder="Song title..."
                                            name="trackTitle"
                                            value={this.state.trackTitle}
                                            onChange={this.onChange}
                                            />
                                       
                                    </div>
                                    <button
                                        className="btn btn-primary btn-lg btn-block mb-5"
                                        type="submit">
                                    Get Track Lyrics
                                    </button>
                                </form>
                            </div>
                        )
                    }}
                </Consumer>
                </div>
            )
        }
    }
