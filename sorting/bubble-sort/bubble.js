// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         console.log(arr, arr[j], arr[j + 1]);
//         // SWAP
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log("One Pass Complete");
//   }
//   return arr;
// };

// Other solution
// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// Optimized Solution for bubble sort algorithm with noSwaps
const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log("One cycle completed");
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([7, 5, 4, 3, 2, -8]));

const Handlesubmit = async (e) => {
  e.preventDefault();
  let url = `http://excelvsto.mysitesworks.com/api/VideoAPI/GetVideoResource?urllink=${input}`;
  try {
    console.log(input);
    const res = await axios.get(url);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
