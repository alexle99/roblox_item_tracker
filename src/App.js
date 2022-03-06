import "./App.css";

const AccountBox = ({ text }) => {
  const handleClick = () => {
    console.log("ASDF " + text);
  };
  return (
    <div className="Account-box" onClick={handleClick}>
      <p>{text}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Accounts</h1>
      </div>
      <div className="Main-content">
        <AccountBox text="asdf" />
        <AccountBox text="zxcv" />
        <AccountBox text="qwer" />
        <AccountBox text="wert" />
        <AccountBox text="sdfg" />
        <AccountBox text="xcvb" />
        <AccountBox text="cvbn" />
        <AccountBox text="zxcv" />
        <AccountBox text="qwer" />
        <AccountBox text="wert" />
        <AccountBox text="sdfg" />
        <AccountBox text="xcvb" />
        <AccountBox text="cvbn" />
        <AccountBox text="zxcv" />
      </div>
    </div>
  );
}

export default App;
