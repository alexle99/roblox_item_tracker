import "./App.css";
import { useState } from "react";
import { AccountButton } from "./components/AccountButton/AccountButton.js";
import { ItemButton } from "./components/ItemButton/ItemButton.js";
import { DropDown } from "./components/DropDownItems/DropDownItems.js";

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
      name: "qwerasdfffdfasdfasdfasdfa",
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
  const itemsList = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7"
  ];

  const accountClick = account => {
    setSelectedAccount(account);
  };

  const itemClick = item => {
    console.log("ITEMCLICKED: " + item);
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
          <div className="Items-header">
            <p className="Header" style={{ flex: 1 }}>
              Inventory
            </p>
            <DropDown items={itemsList} />
          </div>
          <div className="Items-grid">
            {selectedAccount.name !== undefined ? (
              selectedAccount.items.map(item => {
                return <ItemButton text={item} onClick={itemClick} />;
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
