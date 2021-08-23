import React, { useCallback } from "react";
import { usetDataSet } from "../../context/DataSetContext";
import { generateRandomDataset, sortAsc } from "../../utils";

const DataSetDisplay = () => {
  const { dataSet, setDataSet } = usetDataSet();

  const refreshDataSet = useCallback(() => {
    const newset = generateRandomDataset();
    setDataSet(newset.data)
  } , []);

  return (
    <div className="row">
      <span className="common-title">Dataset:</span>
      <div className="dataset-display">
        <span>{sortAsc(dataSet).join(", ")}</span>
      </div>
      <button type="button" className="refresh-dataset-button" onClick={() => refreshDataSet()}>Refresh dataset</button>
    </div>
  )
}

export default DataSetDisplay;