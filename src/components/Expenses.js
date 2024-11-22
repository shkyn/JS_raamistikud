import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "./Card"

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.items.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;