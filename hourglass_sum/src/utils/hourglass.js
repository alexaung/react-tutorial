"use strict";

// Complete the hourglassSum function below.
export function hourglassSum(arr) {
  let sums = [];
  arr.forEach((element, index) => {
    element.forEach((element, innerIndex) => {
      //   if (element !== 0) {
      if (index < 4) {
        //   We have a probability of having an hourglass
        if (innerIndex < 4) {
          // Probability of having an hourglass
          const sum =
            arr[index][innerIndex] +
            arr[index][innerIndex + 1] +
            arr[index][innerIndex + 2] +
            arr[index + 1][innerIndex + 1] +
            arr[index + 2][innerIndex] +
            arr[index + 2][innerIndex + 1] +
            arr[index + 2][innerIndex + 2];
          sums.push(sum);
        }
      }
      //   }
    });
  });
  return sums.reduce((acc, sum) => (sum > acc ? sum : acc));
}
