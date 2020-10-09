const brain = require('brain.js');
const net = new brain.NeuralNetwork();

/* XOR gate logic train and test

      0 0 = 0
      0 1 = 1
      1 0 = 1
      1 1 = 0 */

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
],
  {
    iterations: 20000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 4000,
    learningRate: 0.3,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 10,
    timeout: Infinity,
  }
);

const outputOne = net.run([0, 0]);
const outputTwo = net.run([0, 1]);
const outputThree = net.run([1, 0]);
const outputFour = net.run([1, 1]);

console.log(outputOne);
console.log(outputTwo);
console.log(outputThree);
console.log(outputFour);
