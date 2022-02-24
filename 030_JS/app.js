//   let hi = 'hi';
// let hi;
// let age = 32;
// alert(hi);
// setTimeout(() => {
//   alert(hi + '23');
// }, 400);
// hi = 're';
// alert(hi);
// alert(age);
// 30less
// alert('hi');
// console.log('2323');
// const user = { name: 'Max', age: '30' }; // userName , userAge, logics = user {}
// console.log(user);
// lession 31day

// const job = { title: 'developer', place: 'SPb', salary: 2500 };
// function alertJobSalary() {
//   alert(job.salary);
// }
// alertJobSalary();
//
// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseTitle = '100 days of code';
let coursePrice = 10;
let courseGoals = ['boost hard skills', 'fortify basics', 'alternative solution'];

// 2) Output ("alert") the three variable values

// alert(courseTitle + coursePrice + courseGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter

const course = { title: courseTitle, price: coursePrice, goals: courseGoals };
console.log(course.title, course.price, course.goals);

// 4) Also output the second element in your "main goals" variable

// alert(course.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

// function getGoal(arrGoals, index) {
function getListItem(array, arrayIndex) {
  return array[arrayIndex];
}

// 6) Execute your custom command from (5) and output ("alert") the result

// let secondGoal = getGoal(course.goals, 1);
// alert(secondGoal);

const person = {
  name: 'Timur', // property
  greet() {
    // method
    console.log('hi ');
    return;
  },
};
let test = console.log('23');
console.log(person.greet());

// mathematics operations
let result = 100;
// console.log(10 + 4); // 14 - integer
// console.log(10 - 4); // 6
// console.log(10 * 4); // 40
// console.log(10 / 4); // 2.5  float
// console.log(10 % 4); // 2 remined 10 => 4*2 => 2
// console.log(10 % 3); // 1 remined 10 => 3*3 => 1

result++;
result--;
result += 5;
result -= 5;
result /= 5;
result *= 5;
result %= 5; /// all time = 0  ^^
console.log(result);

console.log('Max' + 'Schwarz'); // 'MaxSchwarz'
console.log('Max' - 'ax'); // M? no => NaN
console.log('22' - {}); // NaN
console.log('22' + {}); // '22[object Object]'
console.log('22' - []); // 22
console.log('22' - '10'); // 12
console.log('22' + '10'); // '2210'
