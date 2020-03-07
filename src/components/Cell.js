import React from 'react';

const Cell = ({ cellNumber, value, onChange }) => {
    return <div style={{ gridRow: 1, gridColumn: cellNumber }}>
        <input style={{ width: '98%' }} value={value} onChange={e => onChange(e.target.value)}></input>
    </div>;
};

export default Cell;