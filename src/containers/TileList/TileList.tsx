import React, { useCallback } from "react";
import Tile from "../../components/Tile";
import { getMean, getMedian, getMode, getStandardDeviation } from "../../utils";
import { usetDataSet } from "../../context/DataSetContext";
const TileList = () => {
  const { dataSet } = usetDataSet();
  const mean = getMean(dataSet);
  const median = getMedian(dataSet);
  const mode = getMode(dataSet);
  const standardDev = getStandardDeviation(dataSet);

  return (
    <div className="tile-list">
      <Tile title="Mean" value={mean.toString()} />
      <Tile title="Median" value={median.toString()} />
      <Tile title="Standard deviation" value={standardDev.toString()} />
      <Tile title="Mode" value={mode.toString()} />
    </div>
  )
}

export default TileList;