//first experience with array

let clargs= process.argv;  //defining variable to take arguments
let n = parseInt(clargs[2]); //converting a string into number and taking argument from 2nd index
let arr= []; //creating an array
for(let i=0; i<n; i++){
    
    let val = parseInt(clargs[i+3]);
    //finding the element of an array from CLI
    //why (i+3) written? -> at 0, node; 1, file_location; 2, arr_size
    //after 2, this for loop will help in inserting elements; hence 3 written
    
    arr.push(val); //Pushing the values to command line
    //or arr[i]= val
}
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);//Printing the array line by line
}

console.log(arr); //In this an array will be printed by 
console.log(arr.length);