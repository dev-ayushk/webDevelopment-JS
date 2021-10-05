//node 12_firstExcel.js --source=teams.json --dest=team.csv

let minimist= require("minimist");
let fs= require("fs");
let args= minimist(process.argv);
let excel = require("excel4node");

let teamJSON = fs.readFileSync(args.source, "utf-8");
let teams= JSON.parse(teamJSON);

let wb = new excel.Workbook;

for(let i=0; i<teams.lenght; i++){
    let sheet = wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("RANK");
    sheet.cell(1,2).number(teams[i].rank); 

    sheet.cell(2,1).string("VS");
    sheet.cell(2,2).string("Result");
    for(let j=0; j<teams[i].matches.length; j++){
        sheet.cell(j+3, 1).string(teams[i].matches.vs);
        sheet.cell(j+3, 2).string(teams[i].matches.result);
    }
}
wb.write(args.dest);
