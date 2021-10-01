//npm init
//install minimist

let minimist= require("minimist");
let args= minimist(process.argv);

let s1= {
    name: "Ayush",
    lastName:"Kumar",
    age: 20
}   //here s1 is an object , name, lastName and age are their properties or data members.

console.log(s1.name);
console.log(s1.age);

let arrofobjects= [
    {
        name: "Smriti",
        age: 33

    },
    {
        name: "Sonali",
        age: 31
    }
]

//here arrofbject means all objects are present in array.

console.log(arrofobjects[0].age);
console.log(arrofobjects[1].name);