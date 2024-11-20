// src/components/AddExpenseForm.js
import React, {useState} from 'react';

const AddExpenseForm = ({onAddExpense}) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newExpense = {
            title,
            amount: parseFloat(amount),
            date: new Date(date),
            id: Math.random().toString(),
        };

        onAddExpense(newExpense);
        setTitle('');
        setAmount('');
        setDate('');
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={() => setShowForm((prev) => !prev)}>
                {showForm ? 'Закрити форму' : 'Додати витрату'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Назва:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Сума:</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            min="0.01"
                        />
                    </div>
                    <div>
                        <label>Дата:</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Додати</button>
                </form>
            )}
        </div>
    );
};

export default AddExpenseForm;
