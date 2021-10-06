// const factorial = (num) =>{
//     if(num === 1) return 1;
//     return num * factorial(num - 1)
// }

// console.log(factorial(5));

const factorial = (num) =>{
    let facto = 1;
    for(let i = num; i >= 1; i--){
        facto *= i;
    }
    return facto;
}

console.log(factorial(3));


     