let minimist= require("minimist");
let fs= require("fs");
let args= minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err,json){
    if(err){
        console.log(err);
    }
    else{
        //JSON se waapis JSO banana hoga
        let teams= JSON.parse(json);
        //JSON to JSO so that you can manipulate data using JSON.parse()
        console.log(teams[2].matches[1]);
    }
})