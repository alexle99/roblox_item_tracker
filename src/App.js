import "./App.css";
import { useState } from "react";

const AccountButton = ({ text, onClick }) => {
  return (
    <button className="Account-button" onClick={onClick}>
      <div className="Button-text">{text}</div>
    </button>
  );
};

const Item = ({ text }) => {
  return <p className="Item">{text}</p>;
};

function App() {
  const [accounts, setAccounts] = useState([
    {
      name: "fdsa",
      items: ["asdfasdf", "fafafafaf"]
    },
    {
      name: "qwerasdffa",
      items: ["qwerqwer", "qrqrqrqrqr"]
    },
    {
      name: "zxcvasdfasdfasdfasdf",
      items: ["zxcvzxcv", "zvzvzvzvzv"]
    },
    {
      name: "wert",
      items: ["wertwert", "wtwtwtwtwt"]
    },
    {
      name: "sdfg",
      items: ["sdfgsdfg", "sgsgsgsgsg"]
    }
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
          <p className="Account-list-header">Accounts</p>
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
