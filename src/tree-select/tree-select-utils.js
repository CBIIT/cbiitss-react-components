export const containsVal = (arr, val) => {
  let result = false;
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i].id ? arr[i].id : arr[i]) === val) {
      result = true;
    }
  }
  return result;
};

export const containsAllVals = (arr, vals) => {
  let result = true;
  for (var i = 0; i < vals.length; i++) {
    if (!containsVal(arr, vals[i].id ? vals[i].id : vals[i])) {
      result = false;
    }
  }
  return result;
};

export const removeVal = (arr, val) => {
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i].id ? arr[i].id : arr[i]) === val) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

export const removeAllVals = (arr, vals) => {
  for (var i = 0; i < vals.length; i++) {
    removeVal(arr, vals[i].id ? vals[i].id : vals[i]);
  }
  return arr;
};

export const flattenTree = (nodes) => {
  let children = [];
  nodes.forEach(addChildren);
  function addChildren(node) {
    children.push(node);
    if (node.children)
      node.children.forEach(addChildren);
  }
  return children;
}

