const { Blockchain, Transaction }  = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('fd1631da0a52fc9e653d490758be54e328657564df1d27c41da6073faa2bc24f')
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);

tx1.signTransaction(myKey);
myCoin.addTransaction(tx1)


console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);


console.log("\nBalance of robert is ", myCoin.getBalanceOfAddress(myWalletAddress));

myCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', myCoin.isChainValid());