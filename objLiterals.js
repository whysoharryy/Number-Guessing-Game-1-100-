//Contains key-value pairs, Objects are collection of properties (unordered)
//Js converts every key & value to strings
const student={         //Const keyword here works similar to array
    name :"Sreehari",
    male : true,
    age  : 19,
    lang : ["C++","Java","python"]
};
console.log(student["name"]);       //Any syntax would work
// console.log(student.name);
// console.log(typeof(student));   Object

//To change,add and delete key:value pairs
student.age=20;
student["city"]="Thane";
//student.city="Thane";
delete student.male;
console.log(student);

//Objects of Objects : For storing Multiple Information
const classInfo={
    Harry : {
        PRN : "124A1104",
        ptr : 9.8
    },
    Praveen : {
        PRN : "124A1102",
        ptr : 9.2
    },
    Mayank  : {
        PRN : "124A10082",
        ptr : 7.9
    }
};
console.log("Mayank PRN:",classInfo.Mayank.PRN);

//Array Of Objects
const details=[
    {
        name:"Sreehari",
        PRN : "124A1104",
    },
    {
        name:"Praveen",
        PRN : "124A1102"
    },
    {
        name:"Mayank",
        PRN: "124A10082"
    }
];
console.log(details[0],details[1],details[2]);

//To change,add and delete key:value pairs
details[0].PRN="124A1103";
details[1].ptr=9.2;
delete details[2].PRN;
console.log("\nArray Of Objects:",details); 



