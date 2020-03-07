import React from 'react';
import Cell from './Cell';

const Row = ({ rowNumber, cells, onDeleteClick, onUpdateCell }) => {
    return <div style={{ gridRow: rowNumber, gridColumn: 1, display: 'grid', gridTemplateColumns: `repeat(${cells.length + 1}, 100px)` }}>
        {cells.map((cell, index) => <Cell key={cell.key} value={cell.value} cellNumber={index + 1} onChange={value => onUpdateCell(cell.key, value)}></Cell>)}
        <img src={require('./../assets/delete.png')} style={{ width: '12px', margin: '7px 0 0 7px' }} title='Delete this row' onClick={onDeleteClick}></img>
    </div>;
};

export default Row;