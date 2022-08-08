const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const ABIandCA = require("../../contracts/Counter.json");

exports.increment = async (req, res) => {
  console.log("인크리");
  console.log(req.body);
};

exports.decrement = async (req, res) => {
  const { from } = req.body;
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8545")
  );

  const txCount = await web3.eth.getTransactionCount(from);

  const networkId = await web3.eth.net.getId();
  const ca = ABIandCA.networks[networkId].address;
  const abi = ABIandCA.abi;
  const deployed = new web3.eth.Contract(abi, ca);
  const data = await deployed.methods.decrement().encodeABI();

  let txObject = {
    nonce: txCount,
    from,
    to: ca,
    data,
  };

  res.json(txObject);
};
