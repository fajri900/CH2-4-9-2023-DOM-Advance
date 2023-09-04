// let student1 = {
//   name: "ale",
//   age: 28,
//   prorammingLanguange: ["PHP", "C++", "C#", "Golang", "Javascript", "Java"],
// };
// let student2 = {
//   name: "yoga",
//   age: 55,
//   prorammingLanguange: ["PHP", "C++", "C#", "Golang", "Javascript", "Java"],
// };
// let student3 = {
//   name: "fadhlan",
//   age: 8,
//   prorammingLanguange: ["PHP", "C++", "C#", "Golang", "Javascript", "Java"],
// };

// construktur function
function StudentsFSW(name, age, prorammingLanguange) {
  this.name = name;
  this.age = age;
  this.prorammingLanguange = prorammingLanguange;
}

// inisialisasi object
var student1 = new StudentsFSW("hafizh", 20, ["java"]);
var student2 = new StudentsFSW("Adrian", 40, ["javascript"]);
var student3 = new StudentsFSW("Diki", 18, ["Physical"]);

console.log(student2);
