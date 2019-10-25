import React, { Component } from "react";
import './style.css'
import BoxerImages from './boxer-images'
import boxers from '../boxers.json'


class Main extends Component {
    state = {
        boxers: boxers,
        score: 0,
        topScore: 0
    }

    handleClick = (event) =>{
        // event.preventDefault();
        // console.log("clicked")
    }

    randomizeImages = (array) => {
        for (let i = 1; i < array.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return (array)
    }

    render() {
        // {console.log(this.state.boxers)}
        return (
            <div id='main'>
                <div id='instructor'>
                    <div id='click-header'>
                        <h3>Click on an image to earn points, but don't click on any more than once!</h3>


                    </div>
                </div>
                <div id="score">
                    <h1>Score:{this.state.score} | Top Score:{this.state.topScore}</h1>
                </div>
                <div id='image-content'>
                    {
                        this.randomizeImages(this.state.boxers).map(boxer => (
                            // console.log(boxer)
                            <BoxerImages
                                key={boxer.id}
                                id={boxer.id}
                                alt={boxer.alt}
                                src={boxer.src}
                                onClick ={this.handleClick()}
                                />
                        ))
                    }
                </div>
            </div >
        );
    }
}

export default Main;