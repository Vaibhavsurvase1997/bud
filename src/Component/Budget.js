import React from "react";
const Budget = ({ Bamount, handleBamount, handleSubmitBudget }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6" style={{ marginLeft: "0 50px" }}>
          <form onSubmit={handleSubmitBudget}>
            <label htmlFor="Bamount">Budget Amount</label>
            <input
              type="number"
              className="form-control"
              id="Bamount"
              name="Bamount"
              value={Bamount}
              onChange={handleBamount}
            />
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                display: "flex",
              }}
              type="submit"
              className="btn"
              onClick={handleSubmitBudget}
            >
              ADD BUDGET
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Budget;
