const linearSearch = (arr, num) =>{
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
}
console.log(linearSearch([1,2,5,7,8,98,23], 25))