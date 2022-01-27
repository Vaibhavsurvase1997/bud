import React from "react";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6" style={{ margin: "-110px 380px" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="expense">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={charge}
              onChange={handleCharge}
            />
            <label htmlFor="amount">Amount you spent</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmount}
            />
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                display: "flex",
              }}
              type="submit"
              className="btn"
            >
              {edit ? "edit" : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
