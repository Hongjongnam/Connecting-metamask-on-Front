import AppleShop from "./components/AppleShop";
import UseWeb3 from "./hooks/UseWeb3";

const App = () => {
  const [web3, account] = UseWeb3();
  console.log(web3);
  if (!account) return <> 연결하세요 </>;
  return (
    <div>
      <h2>사과앱</h2>
      <AppleShop web3={web3} account={account} />
    </div>
  );
};

export default App;
