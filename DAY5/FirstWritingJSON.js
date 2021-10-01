let minimist= require("minimist");
let fs= require("fs");
let args = minimist(process.argv);

let teams=[
    {
        team: "India",
        rank: 1,
        matches: [
            {
                vs: "Australlia",
                result: "win"
            },
            {
                vs: "England",
                result: "win"
            }
        ]
    },
    {
        team:"Australlia",
        rank: 2,
        matches: [
            {
                vs: "India",
                result:"lose"
            },
            {
                vs: "England",
                result: "win"
            }
        ]
    },
    {
        team: "England",
        rank: 3,
        matches:[
            {
                vs: "Australlia",
                result: "lose"
            },
            {
                vs: "India",
                result: "lose"
            }
        ]
    }
]

//stringify converts JSO to JSON
//JSO can't be printed or saved

let json =JSON.stringify(teams);
fs.writeFileSync(args.dest, json, "utf-8");
