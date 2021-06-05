"use strict";
var a = {
    b: 'wrong'
};
// console.log(a.b); // error! b does not exist in object 'a'
var c = {
    d: 'hello'
};
// console.log(c.d);
var e = {
    f: 10,
};
// e.g = 12 // wrong
// if you want to add future key to object you have to use this syntax: 
var g = {
    'h': 'cool'
};
// console.log(g.h);
var tuple = [12, 'sd']; // explicitly declare length
var tupleMinimum = [1, 2, 3]; // minimum 1 number MUST 
var readOnly = [true, false, 'hello']; // cant modifiy it
// readOnly.push(4) // cant do
readOnly.slice(2); // can do
// 1. For each of these values, what type will TypeScript infer?
// a. let a = 1042 // number
// b. let b = 'apples and oranges' // string
// c. const c = 'pineapples' // pineapples
// d. let d = [true, true, false] // boolean[]
// e. let e = {type: 'ficus'} // {type:'ficus'} !! -> {type:string}
// f. let f = [1, false] // (boolean | string)[]
// g. const g = [3] // number[]
// h. let h = null // null !! -> any
// 2. Why does each of these throw the error it does?
// a.
// let i: 3 = 3
// i = 4 // Error TS2322: Type '4' is not assignable to type '3'.
//* explicitly type 3 and try to assign 4
// b.
// let j = [1, 2, 3]
// j.push(4)
// j.push('5') // Error TS2345: Argument of type '"5"' is not
// assignable to parameter of type 'number'.
//* cant push string to number array
// c.
// let k: never = 4 // Error TSTS2322: Type '4' is not assignable
// to type 'never'.
//* never is return funtion type
// d.
// let l: unknown = 4
// let m = l * 2 // Error TS2571: Object is of type 'unknown'.
//* unknown is not a number
//page 60
var myArr = [
    { name: 'hello', age: 20 },
    { name: 'hellox', age: 12 },
    { name: 'helloxs', age: 24 },
];
var mySecondArr = [
    { name: 'hello', age: 240, nested: [1, 2, 'string'] },
    { name: 'hellox', age: 122, data: { balagan: true } },
    { name: 'helloxs', age: 245, hasPropetry: true },
];
var myStrings = [
    { name: 'hello', age: '240', nested: [1, 2, 'string'] },
    { name: 'hellox', age: '122', data: { balagan: true } },
    { name: 'helloxs', age: '245', hasPropetry: true },
];
function sortYoungest(items) {
    return items.sort(function (a, b) { return a.age - b.age; })[0];
}
var v = sortYoungest(myArr);
console.log('v:', v);
var v2 = sortYoungest(mySecondArr);
console.log('v2:', v2);
var v3 = sortYoungest(myStrings);
console.log('v3:', v3);
