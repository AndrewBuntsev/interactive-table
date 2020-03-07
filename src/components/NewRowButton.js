import React from 'react';

const buttonStyle = {
    marginTop: '5px'
};

export default ({ rowsNumber, onClick }) => {
    return <button style={{ ...buttonStyle, gridRow: rowsNumber + 1, gridColumn: 1, width: '100px' }} onClick={onClick}>+ New Row</button>
};
