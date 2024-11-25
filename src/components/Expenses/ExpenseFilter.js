import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        const selectedYear = event.target.value;
        console.log('Year changed in ExpensesFilter:', selectedYear);
        props.onChangeFilter(selectedYear); // Edasta valik Expenses-le
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {/* Valiku väärtus tuleb Expenses-st */}
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
