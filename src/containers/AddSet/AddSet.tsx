import React, { useState } from "react";
import { usetDataSet } from "../../context/DataSetContext";

const AddSet = () => {
  const { dataSet, setDataSet } = usetDataSet();
  const [newSet, setNewset] = useState("");

  function adddNewSet() {
    setDataSet([ ...dataSet, Number(newSet) ]);
    setNewset("");
  }

  return (
    <div className="row">
      <span className="common-title">Add new set:</span>
      <input 
        type="number" 
        onChange={(e) => setNewset(e.target.value)} 
        value={newSet}
      />
      <button 
        type="button" 
        className="refresh-dataset-button" 
        onClick={(e) => adddNewSet()}
      >Add new set</button>
    </div>
  )
}

export default AddSet;