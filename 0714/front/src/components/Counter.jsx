import { useState, useEffect } from "react";
import axios from "axios";
import ABIandCA from "../contracts/Counter.json";

// props.web , props.account
const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [needFC, setNeedFC] = useState();

  // truffle deployed 필요
  // new web3.eth.Contract() // eth abi, address(ca)

  const increment = async () => {
    // front 에서 tx일으켜 increment 함수실행
    const result = await needFC.methods.increment().send({
      from: account,
    });
  };

  const decrement = async () => {
    // back 서버를 통해 tx를 일으켜 decrement 함수실행
    // api 요청 할 수 있는 작업
    const response = await axios.post("http://localhost:3005/api/decrement", {
      from: account,
    });
    console.log("back에서 응답받은 데이터값", response.data);

    // metamask에 던지는 코드
    await web3.eth.sendTransaction(response.data);
  };

  useEffect(() => {
    (async () => {
      if (needFC) return;

      const networkId = await web3.eth.net.getId();
      console.log("networkId", networkId);
      const abi = ABIandCA.abi;
      const ca = ABIandCA.networks[networkId].address;
      console.log("ca값", ca);
      //   console.log(ABIandCA);
      const deployed = new web3.eth.Contract(abi, ca); // 배포 1. abi, 2. ca
      //console.log(deployed);

      const count = await deployed.methods.current().call();
      //   console.log("asd", count);

      // 두가지 인자값 1. logs 2. 어디 contract의 log를 찍을거냐

      web3.eth
        .subscribe("logs", { address: ca }) //
        .on("data", (log) => {
          // 1. []안 요소마다 객체 2. parsing할 데이터 log.data
          const params = [{ type: "uint256", name: "count" }];

          const value = web3.eth.abi.decodeLog(params, log.data);
          setCount(value.count);
        });

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
