import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button
          className="btn"
          style={{ color: "white", backgroundColor: "black", display: "flex" }}
          onClick={clearItems}
        >
          CLEAR
          {/* <MdDelete className="btn-icon" /> */}
        </button>
      )}
    </>
  );
};

export default ExpenseList;
