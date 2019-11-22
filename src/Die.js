import React, { Component } from 'react'
 import './Die.css'

class Die extends Component{
    render(){
    let num = this.props.value;
        return(
            <div className="die">
                <i className={`fas fa-dice-${num} fa-5x
                ${this.props.rolling 
                ? "animated wobble"
                :""}`}>
                </i>
            </div>
        )
    }
}

export default Die