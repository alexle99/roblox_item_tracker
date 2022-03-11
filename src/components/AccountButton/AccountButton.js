import "./AccountButton.css";

export const AccountButton = ({ text, onClick }) => {
  return (
    <div>
      <button className="Account-Button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
