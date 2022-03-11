import "./ItemButtons.css";

export const ItemButton = ({ text, onClick }) => {
  return (
    <div>
      <button className="Item" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
