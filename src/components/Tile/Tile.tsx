import React from "react";
import { usetDataSet } from '../../context/DataSetContext';

interface TileProps {
  title: string;
  value: string;
}

const Tile = (props: TileProps) => {
  return (
    <div className="tile-item">
      <span className="tile-title">{props.title}</span>
      <span className="tile-value">{props.value}</span>
    </div>
  )
}

export default Tile;