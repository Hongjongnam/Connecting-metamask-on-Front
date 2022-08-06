// const { promisePool } = require("../../db");
// const { alertmove } = require("../../utils/alertmove.js");
// const { createToken } = require("../../utils/jwt.js");
// const { decodePayload } = require("../../utils/jwt.js");
// const jwt = require("jsonwebtoken");
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const ABIandCA = require("../../../truffle/build/contracts/Counter.json");

exports.increment = async (req, res) => {
  const { from } = req.body;
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8545")
  );

  const txCount = await Web3.eth.getTransactionCount(from);
  const networkId = await Web3.eth.net.getId();
  const ca = ABIandCA.networks[networkId].address;
  const abi = ABIandCA.abi;
  const deployed = new web3.eth.Contract(abi, ca);
  const data = await deployed.methods.increment().encodeABI();

  // console.log(from);

  // const web3 = await new Web3();
  // console.log(web3);
  // // new Web3.providers.HttpProvier("http://127.0.0.1:8545")
  let txObject = {
    nonce: txCount,
    from,
    to: ca,
    data,
  };

  res.json(txObject);
};

exports.decrement = async (req, res) => {
  console.log("디크리");
  console.log(req.body);
};
