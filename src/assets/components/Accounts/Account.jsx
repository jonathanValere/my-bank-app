import Line from "./Line";

const Account = ({ title, balance }) => {
  return (
    <>
      <span>{title}</span>
      <span className="amount">{balance}€</span>
    </>
  );
};

export default Account;
