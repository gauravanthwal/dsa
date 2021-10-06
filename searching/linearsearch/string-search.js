// naive solution for searching a word inside a string (not good and efficient)
const searchString = (long, short) =>{
    let count = 0;
    for(let i = 0; i< long.length; i++){
        for(let j = 0; j< short.length; j++){
            if(short[j] !== long[i + j]){
                break;
            }
            if(j === short.length - 1){
                count ++;
            }
        }
    }
    return count;
}
const str = 'wowomgzomg';
console.log(searchString(str, 'omg'));