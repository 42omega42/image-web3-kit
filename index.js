const style_handleron = require('style-handleron');
const image_web3_kit = require('image-web3-kit');
const jquery = require('jquery');
const ethereumjs_util = require('ethereumjs-util');
const helmet = require('helmet');
const bluebird = require('bluebird');
const jsonwebtoken = require('jsonwebtoken');
const pg = require('pg');
const sequelize = require('sequelize');
const cors = require('cors');
const enzyme = require('enzyme');
const webpack_cli = require('webpack-cli');
const ethers = require('ethers');
const debug = require('debug');
const moment = require('moment');
const node_sass = require('node-sass');
const async = require('async');
const socket.io = require('socket.io');
const react_redux = require('react-redux');
const bcrypt = require('bcrypt');

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

// Listen for new blocks mined on the Ethereum network
web3.eth.subscribe('newBlockHeaders', (err, block) => {
  if (!err) {
    console.log('New block:', block);
  } else {
    console.error('Error subscribing to new blocks:', err);
  }
});

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello from main thread' });
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
} else {
  parentPort.postMessage('Hello from worker thread');
}

const https = require('https');
https.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS');
}).listen(443);

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Logging from foo');

// Generate a random alphanumeric string of a specified length
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log('Random String:', generateRandomString(10));

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});
server.listen(3000);