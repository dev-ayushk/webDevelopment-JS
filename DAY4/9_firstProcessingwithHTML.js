//npm install jsdom
//node file_name.js --source=download.html

let minimist= require("minimist");
let fs= require("fs");
let jsdom= require("jsdom");

//use of jsdom: will load html and prepare the dom for programmer just like a browser window have

let args= minimist(process.argv);
fs.readFile(args.source, "utf-8", function(err, html){

    let dom = new jsdom.JSDOM(html);
    let document= dom.window.document;

    let descs= document.querySelectorAll("div match-info >  div.description");
    //from above line, we will get all div's with class description whose parent is a div with class match-info

    for(let i=0; i<descs.length; i++){
        console.log(descs[i].textContent);
    }
})
