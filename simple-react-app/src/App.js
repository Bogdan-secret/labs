import React, { useState } from 'react';
import Expenses from './components/Expenses';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState([
        { id: '1', title: 'Їжа', amount: 200, date: new Date(2024, 0, 1) },
        { id: '2', title: 'Проїзд', amount: 50, date: new Date(2024, 0, 2) },
    ]);
    const [filteredYear, setFilteredYear] = useState('2024');

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const filteredExpenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <div className="App">
            <h2>Мої витрати</h2>
            <ExpenseFilter selectedYear={filteredYear} onYearChange={setFilteredYear} />
            <AddExpenseForm onAddExpense={addExpenseHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <Expenses items={filteredExpenses} />
        </div>
    );
}

export default App;
