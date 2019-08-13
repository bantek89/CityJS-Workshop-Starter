const brain = require('brain.js')
const data = require('./multiLabel')
const fs = require('fs')

const formattedData = data.map( x => {
    return {
        input: x.slice(0,9),
        output: x.slice(9)
    }
})

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3],     // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01   // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);
net.train(formattedData);

fs.writeFileSync('trained-net.js', `export default ${ net.toFunction().toString() };`);
console.log('all done');