import React from 'react';

const ExpenseDate = (props) => {
    const date = new Date(props.date);

    if (isNaN(date)) {
        return <div>Invalid date</div>; 
    }

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;
