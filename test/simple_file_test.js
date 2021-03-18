const fs = require('fs');

const testFunction = (introduction) => {
  const test = `This is an introduction string: ${introduction}`;
  console.log(test);
};

testFunction('Hello World');

// This is a test async function that does things
const asyncTestFunction = async () => fs.readdirSync(process.cwd());

asyncTestFunction()
  .then((result) => {
    console.log(result);
  });

const testFunctionToo = (object) => {
  object.test = 'new value';
};

const testVar = {
  test_var: testFunctionToo,
  async_test: asyncTestFunction,
};

console.log(testVar.length);
