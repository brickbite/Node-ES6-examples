export function arrayDim(arr, dims = 0) {
  if (Array.isArray.call(null, arr)) {
    dims++;
    arr.forEach((ele) => {
      dims = arrayDim(ele, dims);
    });
  }
  
  return dims;
};
