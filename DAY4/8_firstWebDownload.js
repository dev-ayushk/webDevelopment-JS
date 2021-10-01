let minimist= require("minimist");
let fs= require("fs");
let axios= require("axios"); //library for downloading html
let args = minimist(process.argv);
let iPromisetoDownload= axios.get(args.url); //this variable is promising to fetch data from url
iPromisetoDownload.then(function(response){ 

    let html = response.data; //in html, data will get stored
    fs.writeFileSync(args.dest, html, "utf-8"); //now a new file and html will get stored in the form of text


}).catch(function(err){ //if url is wrong then it will show error
    console.log(errorfound);
})