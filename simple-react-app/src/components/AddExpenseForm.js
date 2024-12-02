import React, { useState } from 'react';
import { db, collection, addDoc } from '../database/firebase'; // Import Firestore functions

const AddExpenseForm = ({ onAddExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newExpense = {
            title,
            amount: parseFloat(amount),
            date: new Date(date).toISOString(),
        };

        try {
            // Save the expense to Firestore
            const docRef = await addDoc(collection(db, 'expenses'), newExpense);
            console.log('Document written with ID: ', docRef.id);

            // Optionally call the onAddExpense callback passed from the parent component
            if (onAddExpense) {
                onAddExpense(newExpense);
            }

            // Reset the form
            setTitle('');
            setAmount('');
            setDate('');
            setShowForm(false);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div>
            <button onClick={() => setShowForm((prev) => !prev)}>
                {showForm ? 'Close Form' : 'Add Expense'}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <button type="submit">Add</button>
                </form>
            )}
        </div>
    );
};

export default AddExpenseForm;
