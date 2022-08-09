import { useEffect, useState } from "react";
import AppleShopContract from "../contracts/AppleShop.json";

const AppleShop = ({ web3, account }) => {
  const [apple, setApple] = useState(0);
  const [deployed, setDeployed] = useState();

  const buy = async () => {
    await deployed.methods.buyApple().send({
      from: account,
      to: "0x36Cca591e91981cb6ADE3619a899eaBB8AACDC75",
      value: web3.utils.toWei("1", "ether"),
    });
  };

  const sell = async () => {
    const eth = web3.utils.toWei("1", "ether");
    await deployed.methods.sellApple(eth).send({
      from: account,
      to: "0x36Cca591e91981cb6ADE3619a899eaBB8AACDC75",
    });
  };

  useEffect(() => {
    (async () => {
      if (!web3) return;

      const instance = await new web3.eth.Contract(
        AppleShopContract.abi,
        "0x36Cca591e91981cb6ADE3619a899eaBB8AACDC75"
      );
      const currentApple = await instance.methods.getApple().call();
      setApple(currentApple);
      setDeployed(instance);
    })();
  }, []);

  return (
    <div>
      <div>사과가격 : 1 ETH</div>
      <div>내가가진 사과 : {apple}</div>
      <button onClick={buy}>구매하기</button>
      <div>사과 판매가격</div>
      <button onClick={sell}>환불</button>
    </div>
  );
};

export default AppleShop;
