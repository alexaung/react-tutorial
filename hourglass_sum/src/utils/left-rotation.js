const determineIndex = ({ index, length, rotation }) => {
    if (index - rotation < 0) {
      return length - (rotation - index);
    } else {
      return index - rotation;
    }
  };
  
  export const leftRotation = (n, d, a) => {
    let result = Array(n).fill(0);
  
    a.forEach((item, index) => {
      result[determineIndex({ index, length: n, rotation: d })] = item;
    });
  
    return result.reduce((acc, item) => acc.concat(`${item} `), "");
  };
  