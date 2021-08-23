function generateRandomNumber(max: number = 9999, min: number = 1):number {
  return Math.floor(Math.random()*(max-min+1)+min);
}

export function generateRandomDataset(): number[] {
  const dataSetSize = generateRandomNumber(20, 1);
  const dataSet: number[] = [];

  while(dataSet.length < dataSetSize) {
    dataSet.push(generateRandomNumber(99999, 1))
  }

  return dataSet;
}

export function getMean(dataSet: number[]): number {
  if (!dataSet.length)
    return 0

  const sumOfElements = dataSet.reduce((acc, currValue) => acc += currValue , 0);
  return sumOfElements/dataSet.length;
}

export function getMedian(dataSet: number[]): number {
  if (!dataSet.length)
    return 0

  const sortedDataset = dataSet.sort((a,b) => a -b);
  const middleIndex = Math.floor(sortedDataset.length / 2);

  if (sortedDataset.length % 2 === 0) {
    return (sortedDataset[middleIndex - 1] + sortedDataset[middleIndex]) / 2;
  }

  return sortedDataset[middleIndex];
}

export function getStandardDeviation(dataSet: number[]):number {
  if (!dataSet.length)
    return 0

  const dataMean = getMean(dataSet);
  const deviationArr = dataSet.map((currValue) => Math.pow((currValue - dataMean), 2));
  return Math.sqrt(getMean(deviationArr));
}

interface countItem {
  counting: number;
  index: number;
}

export function getMode(dataSet: number[]): number[] {
  if (!dataSet.length)
    return []

  let counts: countItem[] = [], maxIndex = 0;

  for (let i = 0; i < dataSet.length; i++) {
    if (counts[dataSet[i]]) {
      counts[dataSet[i]].counting = counts[dataSet[i]].counting + 1
    } else {
      counts[dataSet[i]] = { index: dataSet[i], counting: 1 }
    }

    if (counts[dataSet[i]].counting > maxIndex) {
      maxIndex = counts[dataSet[i]].counting;
    }
  }

  return counts.filter(el => el.index === maxIndex).map(el => el.index);
}
