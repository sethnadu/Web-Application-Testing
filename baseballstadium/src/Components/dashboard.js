import React from "react";
import Display from "./display.js";
import Styled from "styled-components";

const Container = Styled.div `
    display: flex;
    width: 500px;
    height: 500px;
    margin: 30px auto auto auto;
    flex-direction: column;
    justify-content: space-evenly;

`

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            balls: 0,
            strikes: 0,
            fouls: 0,
        }
    }

    handleBallSubmit = ball =>{
        if(this.state.balls < 3) {
        this.setState(ball => {
           return {balls: ball.balls + 1} 
        })
        } else if (this.state.balls > 2) {
        return ( alert("The batter has been walked"),
          this.setState({
                balls: 0,
                strikes: 0,
                fouls: 0
            })
         )}
    }
    handleStrikeSubmit = strike => {
        if( this.state.strikes < 2) {
            this.setState(strike => {
                return {strikes: strike.strikes + 1} 
         })
       } else if(this.state.strikes > 1) {
           return (alert("The batter has been struck out"),
            this.setState({
                balls: 0,
                strikes: 0,

           })
       )} 
    }
    handleFoulSubmit = foul => {
        if(this.state.strikes < 2) {
            this.setState(foul => {
                return {strikes: foul.strikes + 1}
            })
        } else if (this.state.strikes > 2) {
            return this.state.strikes
        }
    }
    handleHitSubmit = () => {
            this.setState({
                balls: 0,
                strikes: 0,
                fouls: 0
            })
        }
    
    
    
    render() {
        return (
            <Container>
                 <h2>At Bat</h2>
                <Display balls = {this.state.balls} strikes = {this.state.strikes} />
                <div>
                <button onClick ={this.handleBallSubmit}>Ball</button>
                <button onClick ={this.handleStrikeSubmit}>Strike</button>
                <button onClick ={this.handleFoulSubmit}>Foul</button>
                <button onClick ={this.handleHitSubmit}>Hit</button>
                </div>
            </Container>
        )
    }


}

export default Dashboard;