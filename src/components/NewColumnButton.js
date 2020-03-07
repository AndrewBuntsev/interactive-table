import React from 'react';

const buttonStyle = {
    marginTop: '5px'
};

export default ({ onClick }) => {
    return <button style={{ ...buttonStyle, gridRow: '1 / span 2', gridColumn: 2, width: '120px', height: '23px' }} onClick={onClick}>+ New Column</button>
};
