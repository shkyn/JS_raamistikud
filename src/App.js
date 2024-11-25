import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense"

const DYMMY_EXPNESES = [
  {
    id: "id1",
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2024, 10, 12),
    title: 'New Jeans',
    price: 99.99,
  },
  {
    id: "id3",
    date: new Date(2024, 0, 25),
    title: "New bag",
    price: 139.99
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPNESES);
  const [isEditing, setIsEditing] = useState(false);  // Uus muutuja vormi hallamiseks

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
    setIsEditing(false); // Pärast andmete lisamist suletakse vorm
  };

  const startEditingHandler = () => {
    setIsEditing(true); // Avab vormi
  };

  const stopEditingHandler = () => {
    setIsEditing(false); // Suletakse vorm, kui Cancel nupp vajutatakse
  };

  return (
    <div className="App">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (
        <NewExpense
          onAddExpense={addExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
