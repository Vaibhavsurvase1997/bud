import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Budget from "./Budget";
import Header from "./Header";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
const initialBudget = localStorage.getItem("budget")
  ? JSON.parse(localStorage.getItem("budget"))
  : [];
function Home() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState();
  const [Bamount, setBamount] = useState("");
  const [budget, setBudget] = useState(initialBudget);
  const [remaining, setRemaining] = useState();
  const [expense, setExpense] = useState();
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("called");
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [expenses, budget]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  const handleBamount = (e) => {
    let Bamount = e.target.value;
    if (Bamount === "") {
      setBamount(Bamount);
    } else {
      setBamount(parseInt(Bamount));
    }
  };

  const handleSubmitBudget = (e) => {
    e.preventDefault();
    setBudget(parseInt(Bamount));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        console.log("edit false");
      } else {
        const singleExpense = { id, charge, amount };
        setExpenses([...expenses, singleExpense]);
        const totall = expenses.reduce((acc, curr) => {
          return (acc += curr.amount);
        }, 0);
        console.log("edit true");
      }
      setCharge("");
      setAmount("");
    } else {
    }
  };

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
  };

  const clearItems = () => {
    setExpenses([]);
  };

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
    <Header/>
      <h1 style={{ color: "black" }}>BUDGET CALCULATOR</h1>
      <main className="App">
        <Budget
          Bamount={Bamount}
          handleBamount={handleBamount}
          handleSubmitBudget={handleSubmitBudget}
        />
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <br />
      <main>
        <h1 style={{ color: "black" }}>
          TOTAL BUDGET : <span className="total">{budget}</span>
        </h1>
        <h1 style={{ color: "black" }}>
          TOTAL SPENDING :{" "}
          <span className="total">
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
          </span>
        </h1>
        <h1 style={{ color: "black" }}>
          REMAINING :{" "}
          <span className="total">
            {budget -
              expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}
          </span>
        </h1>
      </main>
    </>
  );
}
export default Home;
