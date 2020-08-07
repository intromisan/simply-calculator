import React from 'react';

import Button from './UI/Button'

const Interface = props => {

    const rows = [['C', '/'], [7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']]

    return (
        <div className='interface'>
            {rows.map((row, i) =>
                <div
                    key={i + 1}
                    className='row'
                >
                    {row.map(char =>
                        <Button
                            key={char}
                            type={char}
                            clicked={props.clickButton} 
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default Interface;