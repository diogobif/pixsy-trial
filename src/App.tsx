import React, { useState } from 'react';
import './assets/css/main.css';
import AddSet from './containers/AddSet';
import DataSetDisplay from './containers/DataSetDisplay';
import TileList from './containers/TileList';
import { DataSetContext } from './context/DataSetContext';
import { generateRandomDataset } from './utils';

export default function App() {
  const init = generateRandomDataset();
  const [dataSet, setDataSet] = useState(init.data);
  
  return (
    <DataSetContext.Provider value={{ dataSet, setDataSet }}>
      <div className="container">
        <div className="content">
          <DataSetDisplay />
          <AddSet />
          <TileList />
        </div>
      </div>
    </DataSetContext.Provider>
  )
}