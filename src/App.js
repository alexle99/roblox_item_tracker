import "./App.css";
import { useState } from "react";

const AccountButton = ({ text, onClick }) => {
  return (
    <button className="Account-button" onClick={onClick}>
      {text}
    </button>
  );
};

const Item = ({ text }) => {
  return <p className="Item">{text}</p>;
};

function App() {
  const [accounts, setAccounts] = useState([
    { name: "asdf", items: ["asdfasdfasdf", "fafafafafafaf"] },
    { name: "zxcv", items: ["zxcvzxcvzxcv", "zvzvzvzvzvzvz"] },
    { name: "qwer", items: ["qwerqwerqwer", "qrqrqrqrqrqrq"] }
  ]);
  const [selectedAccount, setSelectedAccount] = useState({});

  const accountClick = account => {
    // console.log(`Selected Amount: ${selectedAccount.name === undefined}`);
    setSelectedAccount(account);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Item Tracker</h1>
      </div>
      <div className="Main-content">
        <div className="Account-list">
          {accounts.map(account => {
            return (
              <AccountButton
                key={account.name}
                text={account.name}
                onClick={() => accountClick(account)}
              />
            );
          })}
        </div>
        <div className="Items-grid">
          {selectedAccount.name !== undefined ? (
            selectedAccount.items.map(item => {
              return <Item text={item} />;
            })
          ) : (
            <p>chicken</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
