"use strict";

//1
var hello = "Hello";
var world = "World";
var helloWorld = hello + " " + world;
console.log("1: ", hello, world);
//2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log("2: ", multiply(5));
//3 
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};
console.log("3: ", average(1, 3, 6, 6));
//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("4: ", average.apply(undefined, grades));
//5
var _ref = [1, 4, 'Iwona', false, 'Nowak'],
    first = _ref[2],
    last = _ref[4];

console.log("5: ", "first:", first, "last:", last);
