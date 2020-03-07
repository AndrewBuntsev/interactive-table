import React, { useState, useEffect } from 'react';
import NewRowButton from './NewRowButton';
import getId from './common/getId';
import Row from './Row';
import NewColumnButton from './NewColumnButton';
import DeleteColumnRow from './DeleteColumnRow';

const Table = ({ initialRowsNumber, initialColumnsNumber }) => {
    let [rows, setRows] = useState([]);
    let [columnsNumber, setColumnsNumber] = useState(initialColumnsNumber);

    const addRow = () => {
        const newRow = { key: getId(), cells: [] };
        for (let j = 0; j < columnsNumber; j++) {
            newRow.cells.push({ key: getId(), value: '' });
        }
        setRows([...rows, newRow]);
    };

    const deleteRow = (key) => {
        setRows(rows.filter(r => r.key != key));
    };

    const updateCell = (rowKey, cellKey, newValue) => {
        const rowsClone = JSON.parse(JSON.stringify(rows));
        rowsClone.find(row => row.key == rowKey).cells.find(cell => cell.key == cellKey).value = newValue;
        setRows(rowsClone);
    };

    const addColumn = () => {
        const rowsClone = JSON.parse(JSON.stringify(rows));
        rowsClone.forEach(row => {
            row.cells.push({ key: getId(), value: '' });
        });
        setColumnsNumber(columnsNumber + 1);
        setRows(rowsClone);
    };

    const deleteColumn = columnIndex => {
        const rowsClone = JSON.parse(JSON.stringify(rows));
        rowsClone.forEach(row => {
            row.cells.splice(columnIndex, 1);
        });
        setColumnsNumber(columnsNumber - 1);
        setRows(rowsClone);
    };

    useEffect(() => {
        const initialRows = [];
        for (let i = 0; i < initialRowsNumber; i++) {
            const newRow = { key: getId(), cells: [] };
            for (let j = 0; j < columnsNumber; j++) {
                newRow.cells.push({ key: getId().toString(), value: '' });
            }
            initialRows.push(newRow);
        }
        setRows(initialRows);
    }, []);

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: `${(columnsNumber + 1) * 100}px auto`,
        gridTemplateRows: `auto repeat(${rows.length}, auto)`,
        gridRowGap: '0px',
        gridColumnGap: '3px'
    };

    return <div style={containerStyle}>
        <DeleteColumnRow columnsNumber={columnsNumber} onClick={deleteColumn}></DeleteColumnRow>
        {rows.map((row, index) => {
            return <Row
                key={row.key}
                rowNumber={index + 2}
                cells={row.cells}
                onDeleteClick={() => deleteRow(row.key)}
                onUpdateCell={(cellKey, value) => updateCell(row.key, cellKey, value)} />;
        })}
        <NewRowButton rowsNumber={rows.length + 1} onClick={addRow}></NewRowButton>
        <NewColumnButton columnsNumber={columnsNumber} onClick={addColumn}></NewColumnButton>
    </div>;
};

export default Table;