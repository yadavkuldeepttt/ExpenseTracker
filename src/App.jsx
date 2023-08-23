import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionHistory from "./Components/TransactionHistory";
import GlobalState from "./Context/GlobalState";

function App() {
  return (
    <>
      <GlobalState>
        <Header />

        <div className="container-box">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
          <TransactionHistory />
        </div>
      </GlobalState>
    </>
  );
}

export default App;
