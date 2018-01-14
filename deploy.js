const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'alley clump celery worth soft until desk evidence indoor genre buyer bring',
  'https://rinkeby.infura.io/WCDTmDbf8qzgqQS9qYdT'
);
const INITIAL_MESSAGE = 'Hi there!';
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attemting to deploy from account ', accounts[0])

 const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [ INITIAL_MESSAGE ] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to ', result.options.address);
};

deploy();