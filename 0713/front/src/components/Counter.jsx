import { useState } from "react";
import { useEffect } from "react";
import ABIandCA from "../contracts/Counter.json";

// props.web , props.account
const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [needFC, setNeedFC] = useState();

  // truffle deployed 필요
  // new web3.eth.Contract() // eth abi, address(ca)

  const increment = async () => {
    const result = await needFC.methods.increment().send({
      from: account,
    });
    if (!result) return;

    const current = await needFC.methods.current().call();
    setCount(current);
  };

  const decrement = async () => {
    const result = await needFC.methods.decrement().send({
      from: account,
    });
    if (!result) return;

    const current = await needFC.methods.current().call();
    setCount(current);
  };

  useEffect(() => {
    (async () => {
      if (needFC) return;

      //   const networkId = ABIandCA.networks[0].address;
      //   console.log("zz", networkId);
      const abi = ABIandCA.abi;
      const ca = ABIandCA.networks[1659183231236].address;
      //   console.log(ABIandCA);
      const deployed = new web3.eth.Contract(abi, ca); // 배포 1. abi, 2. ca
      //console.log(deployed);

      const count = await deployed.methods.current().call();
      //   console.log("asd", count);
      setCount(count);
      setNeedFC(deployed);
    })();
  }, []);

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
};

export default Counter;
