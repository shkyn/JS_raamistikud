import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    
    return(
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense_control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" min="2024-11-12" max="2026-01-31"/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm