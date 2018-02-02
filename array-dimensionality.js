export function arrayDim(arr, dims = 0) {
  if (Array.isArray.call(null, arr)) {
    dims++;
    let tempDim = dims;
    arr.forEach((ele) => {
      dims = Math.max(dims, arrayDim(ele, tempDim));
    });
  }
  
  return dims;
};
