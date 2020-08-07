import React from 'react';

const Button = props => {
    return (
        <button 
            onClick={() => props.clicked(props.type)}            
            className={props.type === 0 || props.type === 'C' || props.type === '/' ? 'zero' : props.type === '=' ? 'bg-red' : ''} >
            {props.type}
        </button>
    )
}

export default Button;