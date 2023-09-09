import React from 'react';
import ExpenseForm from './ExpenseForm'; // Corrected typo in component name
import './NewExpense.css';

const NewExpense = ({ onExpenseDataSave }) => {
  // Function to save expense data received from ExpenseForm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    
    // Pass the expenseData to the parent component using the provided prop function
    onExpenseDataSave(expenseData);
  };

  return (
    <div>
      {/* Use descriptive prop names */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
