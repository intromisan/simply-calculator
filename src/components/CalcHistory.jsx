import React from 'react';

const CalcHistory = props => {
    return (
        <div className='calc-history'>
            {props.history}
        </div>
    )
}

export default CalcHistory;