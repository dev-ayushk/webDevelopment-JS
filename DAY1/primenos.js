let args = process.argv
let n = parseInt(args[2]);

for (let i=1; i<=n; i++){

    let isprime= "true";
    for(let div=2; div<i; div++){
        if(i%div==0){
            isprime = "false";
            //console.log(i);
            break;
            
        }
    }
    if(isprime== "true"){
        console.log(i);
    }
}