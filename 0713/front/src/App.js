import useWeb3 from "./hooks/useWeb3";
import Counter from "./components/Counter";

const App = () => {
  const [web3, account] = useWeb3();
  if (!account) return;

  return (
    <div>
      <span> Account : {account}</span>
      <Counter web3={web3} account={account} />
    </div>
  );
};

export default App;
