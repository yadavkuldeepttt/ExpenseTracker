import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  let handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);

    setText("");
    setAmount(0);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form_control">
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            name="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form_control">
          <label htmlFor="amount">Amount</label>
          <br />
          <small>(Negative - expense , Positive - income)</small>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
