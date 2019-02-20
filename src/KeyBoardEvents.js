import React from 'react';



class KeyBoardEvent extends React.Component{
    state = {displayText: ''};
    handleOnKeyUp = (e) => this.setState({displayText:e.target.value});
    render(){
        
        return(
            <div>test

                <p >{this.state.displayText}</p>
                <input type='text' onKeyUp={this.handleOnKeyUp} ></input>
            </div>
            // <div>test<input type='text' onKeyUp={this.handleOnKeyUp(this)}></input><span >{this.state.displayText}</span></div>
        )
    }
}

export default KeyBoardEvent;
