import React from 'react';



class KeyBoardEvent extends React.Component{
    state = {displayText: ''};
    handleEnter = (e) => {
        // alert(e.key);
        if(e.key === 'Enter'){
            alert('You have entered: ' + this.state.displayText);
        }
        else if (e.key === 'Escape'){
            // alert('Esc key hit');
            this.setState({displayText:''}); 

        }
        e.preventDefault();
    }
    handleOnKeyUp = (e) => {
        this.setState({displayText:e.target.value}); 
        // this.props.handleOnKeyUp(e);
        this.handleEnter(e);
        e.preventDefault();
    }
    render(){
        
        return(
            <div>Type anything in the textbox.  You can also type enter for some action.

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
