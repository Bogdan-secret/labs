import React from 'react';

const Expenses = ({ items, onUpdateExpense, onDeleteExpense }) => {
    const handleUpdate = (id) => {
        const updatedTitle = prompt("Enter new title:");
        const updatedAmount = prompt("Enter new amount:");
        const updatedDate = prompt("Enter new date:");

        if (updatedTitle && updatedAmount && updatedDate) {
            const updatedExpense = {
                title: updatedTitle,
                amount: parseFloat(updatedAmount),
                date: new Date(updatedDate).toISOString(),
            };
            onUpdateExpense(id, updatedExpense);
        }
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
        if (confirmDelete) {
            onDeleteExpense(id);
        }
    };

    return (
        <div>
            <h3>Expenses List</h3>
            <ul>
                {items.map((expense) => (
                    <li key={expense.id}>
                        <div>
                            <span>{expense.title}</span> -
                            <span>{expense.amount}</span> -
                            <span>{new Date(expense.date).toLocaleDateString()}</span>
                        </div>
                        <button onClick={() => handleUpdate(expense.id)}>Edit</button>
                        <button onClick={() => handleDelete(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Expenses;
