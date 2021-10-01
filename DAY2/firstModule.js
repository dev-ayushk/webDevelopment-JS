//first experience with dependencies

//node is a compiler/ interpreter or [run time environment] which helps to run JS files.
//node is a platform
//npm: node package manager; libraries written in js are registered at npm
//these lib at npm have some pre written code so that we don't need to write code again and again

//npm install lib_name: library get downloaded from npm
//minimist gets installed folder by folder.

let parser= require("minimist");
let args = parser(process.argv);
console.log(args);

let name = args.name;
let age = args.age;
console.log(name);
console.log(age);

if(age>30 && age<40){
    console.log("your age is " + age + ".")
}
else if(age>40){
    console.log("haha")
}
else{
    console.log("old man");
}