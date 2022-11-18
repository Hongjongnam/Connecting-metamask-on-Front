import { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min";

const useWeb3 = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    (async () => {
      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(address);
      console.log(address, "잘 나와야 합니다~");
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    })();
  }, []);
  return [web3, account];
};

export default useWeb3;
