import React from 'react';


const DeleteColumnRow = ({ columnsNumber, onClick }) => {
    const columns = [];
    for (let columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
        const img = <img src={require('./../assets/delete.png')} style={{ width: '12px', margin: '7px 0 0 7px', gridColumn: columnIndex + 1 }} title='Delete this column' onClick={() => onClick(columnIndex)}></img >;
        columns.push(img);
    }
    return <div style={{ gridRow: 1, gridColumn: 1, display: 'grid', gridTemplateColumns: `repeat(${columnsNumber}, 100px)`, justifyItems: 'center' }}>
        {columns}
    </div>;
};

export default DeleteColumnRow;