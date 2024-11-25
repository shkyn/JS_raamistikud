import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';  // Õige import


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024'); // Algväärtus

  // Funktsioon, mis uuendab valitud aasta
  const filterChangeHandler = (year) => {
    console.log("Year data in Expenses.js: " + year);
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == filteredYear;
  });

  return (
    <Card className="expenses">

      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList expenses={filteredExpenses} /> 
    </Card>
  );
}

export default Expenses;
