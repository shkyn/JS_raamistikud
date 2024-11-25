import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023'); // Algväärtus

  // Funktsioon, mis uuendab valitud aasta
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filtreeritud kulutused vastavalt valitud aastale
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      {/* Lisame ExpensesFilter komponendi */}
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      <Card className='expenses'>
        {filteredExpenses.length === 0 ? (
          <p text="white">No expenses found for {filteredYear}.</p>
        ) : (
          filteredExpenses.map((expense, index) => (
            <ExpenseItem key={index} data={expense} />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
