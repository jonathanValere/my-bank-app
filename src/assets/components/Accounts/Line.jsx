const Line = ({ date, description, amount }) => {
  return (
    <li>
      <span>{date}</span>
      <div className="operation">
        <span>{description}</span>
        <span className="amount">{amount} €</span>
      </div>
    </li>
  );
};

export default Line;
