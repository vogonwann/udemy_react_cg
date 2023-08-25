import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState([...props.expenses]);

  const expenses = props.expenses;

  const setFilterHandler = (filter) => {
    setFilter(filter);
    console.log(filteredExpenses);
    setFilteredExpenses(
      expenses.filter((e) => e.date.getFullYear().toString() === filter)
    );
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onSetFilterHandler={setFilterHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
