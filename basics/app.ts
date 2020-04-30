let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// We can't assign userName to userInput unless its type is explicitly a string
if (typeof userInput === 'string') {
    userName = userInput;
}

// This function never produces a return value
const generateError = (message: string, code: number): never => {
  throw {message, errorCode: code};
};

generateError('An error occurred!', 500);