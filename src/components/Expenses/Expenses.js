import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");

  const expenses = props.expenses;

  const setFilterHandler = (filter) => {
    setFilter(filter);
    console.log(filter);
  };
  return (
    <>
      <ExpensesFilter onSetFilterHandler={setFilterHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </>
  );
};

export default Expenses;
