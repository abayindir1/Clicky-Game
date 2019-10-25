import React, { Component } from "react";
import './style.css'
import BoxerImages from './boxer-images'
import boxers from '../boxers.json'


class Main extends Component {
    state = {
        boxers: boxers,
        clicked: [],
        score: 0,
        topScore: 0,
        message: "Click on an image to earn points, but don't click on any more than once!"
    }

    handleClick = (id) => {
        console.log("clicked")
        this.randomizeImages(this.state.boxers)
        if (this.state.clicked.includes(id)) {
            this.endGame()
            // console.log("bum")
            
        } else {
            this.state.clicked.push(id);
            // console.log(this.state.clicked)
            this.correctClick()
            console.log(this.state.score)
            console.log(this.state.topScore)
            
        }
    }

    correctClick = () =>{
        this.setState({
            score: this.state.score + 1,
            message: "Good punch champ!"
        })
        this.randomizeImages(this.state.boxers)
    }
    
    endGame = () =>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.setState({
            clicked:[],
            topScore: this.state.score,
            score: 0,
            message: `You already clicked that one, try again champ!`
        })
        if(this.state.topScore > this.state.score){
            this.setState({
                topScore: this.state.topScore,
            }) 
        }
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
                        <h3>{this.state.message}</h3>

                    <h1>Score:{this.state.score} | Top Score:{this.state.topScore}</h1>

                    </div>
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
                                shuffleImages={this.handleClick}
                            />
                        ))
                    }
                </div>
            </div >
        );
    }
}

export default Main;