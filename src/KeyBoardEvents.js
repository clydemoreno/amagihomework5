import React from 'react';



class KeyBoardEvent extends React.Component{
    state = {displayText: ''};
    handleOnKeyUp = (e) => {
        this.setState({displayText:e.target.value}); 
        // this.props.handleOnKeyUp(e);
    }
    render(){
        
        return(
            <div>test

                <p >
                    <span>I'm in a local component</span>
                </p>
                <p>
                    {this.state.displayText}
                </p>
                <input type='text' onKeyUp={this.handleOnKeyUp} onKeyPress={this.props.handleOnKeyUp}  ></input>
            </div>
            // <div>test<input type='text' onKeyUp={this.handleOnKeyUp(this)}></input><span >{this.state.displayText}</span></div>
        )
    }
}

export default KeyBoardEvent;
