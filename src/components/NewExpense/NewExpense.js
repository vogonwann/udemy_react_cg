import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelExpenseDataHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpanseData={saveExpenseDataHandler}
          onCancelExpense={cancelExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
