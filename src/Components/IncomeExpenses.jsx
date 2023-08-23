import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div>
      <div className="incomeexpense">
        <div className="income">
          <h4>INCOME</h4>
          <h2 className="plus">{moneyFormatter(income)}</h2>
        </div>

        <div className="expense">
          <h4>EXPENSE</h4>
          <h2 className="minus">{moneyFormatter(expense)}</h2>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
