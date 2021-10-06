// Find the sum of Two Numbers Problem

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const numberToFind = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == numberToFind) {
        return console.log("we found it", arr[i], arr[j]);
      }
    }
  }

  return console.log("none of them");
};

const array = [2, 4, 5, 7, 9, 13, 45];
twoSum(array, 11);
