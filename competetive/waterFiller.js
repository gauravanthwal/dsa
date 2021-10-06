const waterFiller = (nums) => {
  let maxArea = 0;
  for (let p1 = 0; p1 < nums.length; p1++) {
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      let hieght = Math.min(nums[p1], nums[p2]);
      let width = p2 - p1;
      let area = hieght * width;
      console.log(hieght+ ' x '+ width + ' = ' + area);

     maxArea = Math.max(area, maxArea)
    }
  }
  return console.log(maxArea);
};

const arr = [1, 4, 6, 4, 2, 9];
waterFiller(arr);
