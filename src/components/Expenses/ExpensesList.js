import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <p className="expenses-list_fallback">No expenses found.</p>
    );
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => { // Parandatud muutuja nimi
        return <ExpenseItem expenseData={expense} key={expense.id} />;
      })}
    </ul>
  );
}

export default ExpensesList;
