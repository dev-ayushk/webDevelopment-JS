//printing output

console.log("Ayush is good")

//declaration of variable

let i=10;
console.log( "Here type of i is "+ typeof(i));
console.log(i);
i='a';
console.log("Here i is " + i + " and it's type is "+ typeof(i));
console.log(i);

//Taking input from command line

let args= process.argv;
console.log("at 0 "+ args[0]);
console.log(typeof(args[2])); //here when you will give integer input, it will show string. 
console.log("at 1 "+ args[1]);
console.log("at 2 "+ args[2]);
console.log("at 3 "+ args[3]);

//Using parseInt, we can convert the string into integer.

//If-else condition.js

//let args= process.argv;
let n = parseInt(args[2]); //using parseInt, converted the argument into integer

if(n%2==0){
    console.log(n + " is even")
}
else{
    console.log(n + " is odd")
}

//loop to find prime numbers
for (let i=1; i<=n; i++){
    for(let div=2; div * div<=n; div++){
        if(i%div==0){
            console.log
        }
    }
}