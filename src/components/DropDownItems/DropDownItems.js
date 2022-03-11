import "./DropDownItems.css";
import { useState, useRef, useEffect } from "react";

const AddItem = ({ opened, onClick }) => {
  return (
    <div>
      <button
        className="Add-Item-Button"
        onClick={onClick}
        style={{ background: opened ? "red" : "rgb(30, 30, 30)" }}
      >
        {opened ? "Cancel" : "Add Item"}
      </button>
    </div>
  );
};

const ItemList = ({ items, onClick }) => {
  return (
    <div className="Dropdown-List">
      {items.map((item, i) => {
        return (
          <li key={i} className="List-item" onClick={() => onClick(item)}>
            {item}
          </li>
        );
      })}
    </div>
  );
};

export const DropDown = ({ items }) => {
  const [open, setOpen] = useState(false);
  const drop = useRef(null);

  const addItemClick = e => {
    setOpen(!open);
  };

  const handleOutsideClick = e => {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const itemClicked = text => {
    console.log("ITEM: " + text);
  };

  return (
    <div ref={drop} className="Dropdown">
      <AddItem opened={open} onClick={addItemClick} />
      {open && <ItemList items={items} onClick={itemClicked} />}
    </div>
  );
};

export default DropDown;
