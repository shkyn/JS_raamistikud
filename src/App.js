import './App.css';
import Expenses from './components/Expenses';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New Jeans',
      price: 99.99,
    },
  ];

  return (
    <div className='App'>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;