import { useState, useEffect } from "react";
import Web3 from "web3/dist/web3.min";

const UseWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const jongs = async () => {
      // account를 가져오자 ( metamask 연결 확인 )
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(account);

      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    };

    jongs();
  }, []);

  return [web3, account];
};

export default UseWeb3;
