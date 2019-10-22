import React, { Component } from "react";
import './style.css'
import BoxerImages from './boxer-images'
import boxers from '../boxers.json'


class Main extends Component {
    state = {
        boxers: boxers
    }

    render() {
        return (
            <div id='main'>
                <div id='instructor'>
                    <div id='click-header'>
                    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                    </div>
                </div>

                <div id='image-content'>
                    {
                        this.state.boxers.map(boxer => (
                            <BoxerImages
                                key={boxer.id}
                                id={boxer.id}
                                alt={boxer.name}
                                src={boxer.image}
                                clicked={boxer.clicked} />
                        ))
                    }
                </div>
            </div >
        );
    }
}

export default Main;