const express = require("express");
const app = express();
const cors = require("cors");
const Web3 = require("web3");
// const router = require("./routes/index.js");
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const CounterContract = require("./contracts/Counter.json");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/decrement", async (req, res) => {
  const { from } = req.body; // metamask 연결된 ca값
  console.log(from);
  console.log(CounterContract);
  const nonce = await web3.eth.getTransactionCount(from);
  const networkId = await web3.eth.net.getId();
  console.log(networkId);
  const ca = CounterContract.networks[networkId].address;
  const abi = CounterContract.abi;

  // methods 호출하기 위한 deployed
  const deployed = new web3.eth.Contract(abi, ca);
  const data = await deployed.methods.decrement().encodeABI();

  let txObject = {
    nonce,
    from,
    to: ca,
    data,
  };

  res.json(txObject);
});

app.listen(3005, (req, res) => {
  console.log("back server On");
});
