import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

let moneyFormatter = (num) => {
  let p = num.toFixed(2).split(".");
  return (
    "$" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
};
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
      
        <span>
          {sign}
          {moneyFormatter(transaction.amount)}
     
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="deletebtn">
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
