import React from 'react';

import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <Table initialRowsNumber={3} initialColumnsNumber={4}></Table>
    </div>
  );
}

export default App;
