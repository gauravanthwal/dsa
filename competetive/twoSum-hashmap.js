const findTwoSum = (nums, target) => {
  const numsMap = {};

  console.log(numsMap);
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal >= 0) {
      return console.log([currentMapVal, p]);
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
};

const array = [8, 2, 5, 9, 13, 45];
findTwoSum(array, 11);
