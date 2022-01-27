import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Budget from "./Budget";
import Header from "./Header";
import Add from "./Add.css";
function Home(){



    return (
      <>
      <Header/>
        <h1 style={{ color: "black" }}>BUDGET CALCULATOR</h1>
        <div class="row">
  <div class="column"  float= "left"
  width= "25%"
  padding= "0 10px">
    <div class="card"></div>
  </div>
  <div class="column">
    <div class="card">..</div>
  </div>
  <div class="column">
    <div class="card">..</div>
  </div>
  <div class="column">
    <div class="card">..</div>
  </div>
</div>
      
    </>
  );
}
export default Home;
