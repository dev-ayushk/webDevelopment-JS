//t1= read a file
//t2= calculate primes

//terminal cnmd to run: node --firsLackofCallback.js --source=f1.txt --dest.txt --n=50000
function isPrime(x){

    let isPrime= true;
    for(let div=2; div*div<=x; div++){
        if(x%div==0){
            isPrime= false;
            break;
        }
    }
}

let minimist= require("minimist");
let fs= require("fs");

let args= minimist(process.argv);
//task1 begins
let t1= Date.now();
let stext = fs.readFileSync(source.arg)
let t2= Date.now();
console.log("finishing task1 at" + t2%10000);
console.log(t2-t1);
//task1 ends

//task2 begins
let t3= Date.now();
let arr=[];
for(let i=2; i<args.n; i++){
    let isPrime= isPrime(i);
    if(isPrime== true){
        arr.push();
    }
}

let t4= Date.now();
console.log("finishing task2 at" + t4%10000);
console.log(t4-t3);

//task2 ends


// console.log(args.source);
// console.log(args.dest);
// console.log(args.n);