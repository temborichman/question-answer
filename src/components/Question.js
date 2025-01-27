import React from 'react'

const Question = ( props ) => {

    const style = {
        border: '4px purple solid',
        textAlign: 'center',
        margin: '50px',
    };

    return (
        <div onClick={props.click}
        style={style}>
            <p>{props.question}</p>    
        </div>
    );
};

export default Question
