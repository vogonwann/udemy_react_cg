import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState([...props.expenses]);

  let filterInfoText = "2019, 2021 & 2022";
  if (filter === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filter === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filter === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }

  const expenses = props.expenses;

  const setFilterHandler = (filter) => {
    setFilter(filter);
    console.log(filteredExpenses);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onSetFilterHandler={setFilterHandler} />
        Excluded data for: {filterInfoText}
        {[...props.expenses]
          .filter((e) => e.date.getFullYear().toString() === filter)
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </>
  );
};

export default Expenses;
