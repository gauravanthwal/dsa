const insertionSort = (arr) =>{
    
    for(var i = 1; i< arr.length; i++){
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr);
        
    }
    return arr;

}

const array = [5,4,3,2]
console.log(insertionSort(array));