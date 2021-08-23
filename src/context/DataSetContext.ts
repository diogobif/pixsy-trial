import { createContext, useContext } from "react"

export type DataSetType = {
  dataSet: number[];
  setDataSet: (newSet: number[]) => void;
}

export const DataSetContext = createContext<DataSetType>({
  dataSet: [],
  setDataSet: () => {},
});

export const usetDataSet = () => useContext(DataSetContext);