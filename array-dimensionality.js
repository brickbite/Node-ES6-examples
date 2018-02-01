export function arrayDim(arr, maxDims = 0) {
  if (arr.isArray()) {
    maxDims++;
    arr.forEach((ele) => {
      maxDims = arrayDim(ele, dims);
    });
  }
  
  return maxDims;
};
