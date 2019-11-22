import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: "one",
            dice2: "one",
            rolling: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let arr = ['one', 'two', 'three', 'four', 'five', 'six'];
        let idx = Math.floor(Math.random() * arr.length);
        let idx2 = Math.floor(Math.random() * arr.length);
        this.setState({ dice1: arr[idx], dice2: arr[idx2], rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <div className='RollDice-Die'>
                    <Die value={this.state.dice1} rolling={this.state.rolling}/>
                    <Die value={this.state.dice2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>
                {
                    this.state.rolling
                    ? 'Rolling...' 
                    : 'Role Dice'
                }</button>
            </div>
        )
    }
}

export default RollDice