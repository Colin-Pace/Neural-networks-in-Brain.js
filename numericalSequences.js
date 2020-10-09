const brain = require('brain.js');
const net = new brain.recurrent.LSTMTimeStep();

net.train(
  [
    [1, 2, 3],
    [2, 3, 4],
  ],
  {
    iterations: 10000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 1000,
    learningRate: 0.3,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 10,
    timeout: Infinity,
  }
);

const output = net.run([2, 3]);
console.log(output);
