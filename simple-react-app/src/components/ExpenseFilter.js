import React from 'react';

const ExpenseFilter = ({selectedYear, onYearChange}) => {
    return (
        <div>
            <label>Фільтрувати за роком:</label>
            <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;
