import React, { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Kasutame edit-form

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Kui andmed on sisestatud, siis need saadetakse ülemisele komponendile
    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Kutsume props kaudu ülesse funktsiooni, et andmed üles saata
    props.onAddExpense(expenseData);

    // Peidame vormi pärast lisamist
    setIsEditing(false);

    // Läheb tagasi algseisundisse
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const startEditingHandler = () => {
    setIsEditing(true); // Kuvame vormi
  };

  const cancelHandler = () => {
    setIsEditing(false); // Peidame vormi, kui Cancel on vajutatud
    // Läheb tagasi algseisundisse
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="new-expense__add-button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={cancelHandler} className="alternative">
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpense;
