"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// We can't assign userName to userInput unless its type is explicitly a string
if (typeof userInput === 'string') {
    userName = userInput;
}
// This function never produces a return value
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('An error occurred!', 500);
