import "./App.css";
import { useState } from "react";

const AccountButton = ({ text, onClick }) => {
  return (
    <button className="Account-button" onClick={onClick}>
      <p className="Account-text">{text}</p>
    </button>
  );
};

const Item = ({ text }) => {
  return (
    <div className="Item">
      <p className="Item-text">{text}</p>
    </div>
  );
};

function App() {
  const [accounts, setAccounts] = useState([
    {
      name: "fdsa",
      items: [
        "asdfasdf",
        "fafafafaf",
        "fjfjjfjfjfjfjjf",
        "fjfjjfowiejfowiefjoiwejf",
        "wwwwwwwwwwwww",
        "zzzzzzzzzz",
        "d",
        "zzzzzzzzzz",
        "zzzzzzzzzz",
        "fffffffffffffffffffffffffffffffffffffff",
        "zzzzzzzzzz",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo",
        "oooooooooooooooooo"
      ]
    },
    {
      name: "qwerasdffa",
      items: [
        "qwerqwer",
        "qrqrqrqrqr",
        "qwerqwer",
        "qrqrqrqrqr",
        "qwerqwer",
        "qrqrqrqrqr",
        "qwerqwer",
        "qrqrqrqrqr",
        "qwerqwer",
        "qrqrqrqrqr"
      ]
    },
    {
      name: "zxcvasdfasdfasdfasdf",
      items: ["zxcvzxcv", "zvzvzvzvzv"]
    },
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
      name: "fdsa",
      items: ["asdfasdf", "fafafafaf"]
    },
    {
      name: "qwerasdffa",
      items: ["qwerqwer", "qrqrqrqrqr"]
    },
    {
      name: "qwerasdffa",
      items: ["qwerqwer", "qrqrqrqrqr"]
    },
    {
      name: "qwerasdffa",
      items: ["qwerqwer", "qrqrqrqrqr"]
    },
    {
      name: "qwerasdffa",
      items: ["qwerqwer", "qrqrqrqrqr"]
    }
  ]);
  const [selectedAccount, setSelectedAccount] = useState({});

  const accountClick = account => {
    // console.log(`Selected Amount: ${selectedAccount.name === undefined}`);
    setSelectedAccount(account);
  };

  return (
    <div className="App">
      <div className="App-header">Item Tracker</div>
      <div className="Main-content">
        <div className="Account-bar">
          <p className="Header">Accounts</p>
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
        </div>
        <div style={{ borderLeft: "1px white solid" }}></div>
        <div className="Items">
          <p className="Header">Items</p>
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
    </div>
  );
}

export default App;
