"use strict";
var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log('Result: ' + num);
};
var combineValues;
combineValues = add;
var addHAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
console.log(combineValues(8, 8));
addHAndHandle(10, 20, function (result) { console.log(result); });
