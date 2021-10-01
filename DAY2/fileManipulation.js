let minimst= require("minimist");
let args= minimst(process.argv);

//terminal command for running files, there you give names to source and dest files.
//node fileManipulation.js --source=f1.txt --dest=f2.txt

let fs= require("fs"); //fs is a library present in node itself, so no need to present

//read from source file
let stext= fs.readFileSync(args.source, "utf-8"); //utf-8 means text form mei read kiya

//below 2 commands will tell you the file name.
console.log(args.source);
console.log(args.dest);

//console.log(dtext);

//read from source and capitalise it
let dtext= stext.toUpperCase();

//write those capital letter in a new file
fs.writeFileSync(args.dest, dtext, "utf-8")

// let words = stext.split(" ");
// for (let i=0; i<words.length; i++){
//     console.log(i);
// }



