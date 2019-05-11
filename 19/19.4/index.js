//1
const hello = "Hello";
const world = "World";
const helloWorld = `${hello} ${world}`;
console.log("1: ",hello, world);
//2
const multiply = (a=1,b=1) => a*b;
console.log("2: ", multiply(5));
//3 
const average = (...args) => args.reduce((a,b)=>a+b)/args.length;
console.log("3: ",average(1, 3, 6, 6));
//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("4: ", average(...grades));
//5
const [, , first , ,last] = [1, 4, 'Iwona', false, 'Nowak']
console.log("5: ", "first:", first, "last:", last)