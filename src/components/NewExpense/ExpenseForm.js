import "./ExpenseForm.css"
import { Fragment, useRef, useState } from "react"
import Error from "../UI/Error"

const ExpenseForm = (props) => {
  const [error, setError] = useState(null)
  console.log(error)

  const titleInputRef = useRef()
  const amountInputRef = useRef()
  const dateInputRef = useRef()

  const errorHandler = () => {
    setError(null)
  }

  const submitHandler = (event) => {
    const enteredTitle = titleInputRef.current.value
    const enteredAmount = amountInputRef.current.value
    const enteredDate = dateInputRef.current.value

    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    if(enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 || enteredDate.trim().length == 0){
      setError({
        title: "Invalid input",
        message: "Please enter a valid title or amount or date (non-empty values)"
      })
      
    }

    props.onSaveExpenseData(expenseData)
    props.onCancel()
    titleInputRef.current.value = ""
    amountInputRef.current.value = ""
    dateInputRef.current.value = ""

    props.onAddExpense(expenseData);
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                id="title"
                ref={titleInputRef}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                id="amount"
                ref={amountInputRef}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date" min="2023-01-01" max="2025-01-31"
                id="date"
                ref={dateInputRef}
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
      </div>
    </Fragment>
  );
};

export default NewExpense;
