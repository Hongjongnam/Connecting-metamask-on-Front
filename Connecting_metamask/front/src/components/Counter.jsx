import { useState, useEffect } from "react";
import ABIandCA from "../contracts/Counter.json";

// props.web , props.account
const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState(null);

  // truffle deployed 필요
  // new web3.eth.Contract() // eth abi, address(ca)

  const increment = async () => {
    const result = await deployed.methods.increment().send({
      from: account,
    });
    if (!result) return;

    const current = await deployed.methods.current().call();
    setCount(current);
  };

  const decrement = async () => {
    const result = await deployed.methods.decrement().send({
      from: account,
    });
    if (!result) return;

    const current = await deployed.methods.current().call();
    setCount(current);
  };

  useEffect(() => {
    (async () => {
      // if (deployed) return;
      //   const networkId = ABIandCA.networks[0].address;
      const abi = ABIandCA.abi;
      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      const ca = ABIandCA.networks[networkId].address;
      const deployed = new web3.eth.Contract(abi, ca); // 배포 1. abi, 2. ca
      //console.log(deployed);

      const count = await deployed.methods.current().call();
      //   console.log("asd", count);
      setCount(count);
      setDeployed(deployed);
    })();
  }, [web3.eth.Contract, web3.eth.net]);

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
};

export default Counter;
