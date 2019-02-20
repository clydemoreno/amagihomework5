import React from 'react';
function DisplayComponent(props) {
    return (
        <div>
            <p>
                <span>I'm in a different component</span>
            </p>
            <p>
                {props.displayText}
            </p>
        </div >
    )
}

export default DisplayComponent;