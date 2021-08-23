import { getMean, getMedian, getStandardDeviation, getMode } from './index';

describe('Testing the mean function', () => {
  it('should return a number', () => {
    expect(typeof(getMean([]))).toBe('number');
  });

  it ("getMean([2,4,6,8]) should return 5", () => {
    expect(getMean([2,4,6,8])).toBe(5);
  });
  
  it ("getMean([]) should return 0", () => {
    expect(getMean([])).toBe(0);
  });
});

describe('Testing the Median funcion', () => {
  it('should return a number', () => {
    expect(typeof(getStandardDeviation([]))).toBe('number');
  });

  it("getMedian([1,2,3,4,5,6]) should return 3.5", () => {
    expect(getMedian([1,2,3,4,5,6])).toBe(3.5)
  });
  
  it("getMedian([1,4,2,9,7]) should return 4", () => {
    expect(getMedian([1,4,2,9,7])).toBe(4)
  });

  it ("getMedian([]) should return 0", () => {
    expect(getMedian([])).toBe(0);
  });
});

describe('Testing the standard deviation function', () => {
  it('getMedian should return a number', () => {
    expect(typeof(getMean([]))).toBe('number');
  });

  it("getStandardDeviation([2,4,4,4,5,5,7,9]) should return 2", () => {
    expect(getStandardDeviation([2,4,4,4,5,5,7,9])).toBe(2)
  });

  it ("getStandardDeviation([]) should return 0", () => {
    expect(getStandardDeviation([])).toBe(0);
  });
});

describe('Testing the mode function', () => {
  it('getMode should return a array of numbers', () => {
    expect(typeof(getMean([]))).toBe('number');
  });

  it("getMode([1,2,2,3,4,7,9]) should return [2]", () => {
    expect(getMode([1,2,2,3,4,7,9])).toEqual([2])
  });

  it ("getMode([]) should return empty array", () => {
    expect(getMode([])).toEqual([]);
  });
});