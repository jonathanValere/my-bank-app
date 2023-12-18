import Account from "./Account";
import Line from "./Line";
import Button from "../Button";
import datas from "../../datas.json";

const Accounts = () => {
  return (
    <main>
      <div className="container">
        {datas.map((element, index) => {
          return (
            <section key={index}>
              <div
                className="en-tete"
                style={{ backgroundColor: element.color }}
              >
                <Account title={element.name} balance={element.balance} />
              </div>
              <ul>
                {element.operations.map((operation, index) => {
                  return (
                    <Line
                      key={index}
                      date={operation.date}
                      description={operation.description}
                      amount={operation.amount}
                    />
                  );
                })}
              </ul>
              <Button>SEE MORE</Button>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Accounts;
