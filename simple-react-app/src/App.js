import React, {useState, useEffect} from 'react';
import {getExpenses, addExpense, updateExpense, deleteExpense} from './services/ExpenseService';
import Expenses from './components/Expenses';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseChart from './components/ExpenseChart';
import Loader from './components/Loader';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [filteredYear, setFilteredYear] = useState('2024');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            setLoading(true);
            const fetchedExpenses = await getExpenses();
            setExpenses(fetchedExpenses);
            setLoading(false);
        };

        fetchExpenses();
    }, []);

    const addExpenseHandler = async (expense) => {
        try {
            const isDuplicate = expenses.some(
                (existingExpense) =>
                    existingExpense.title === expense.title &&
                    existingExpense.amount === expense.amount &&
                    existingExpense.date === expense.date
            );

            if (isDuplicate) {
                alert("This expense has already been added.");
                return;
            }

            const newExpense = await addExpense(expense);

            setExpenses(prevExpenses => [...prevExpenses, newExpense]);
        } catch (error) {
            console.error("Error adding expense: ", error);
        }
    };

    const updateExpenseHandler = async (id, updatedExpense) => {
        try {
            const updated = await updateExpense(id, updatedExpense);
            setExpenses((prevExpenses) =>
                prevExpenses.map((expense) =>
                    expense.id === id ? updated : expense
                )
            );
        } catch (error) {
            console.error("Error updating expense: ", error);
        }
    };

    const deleteExpenseHandler = async (id) => {
        try {
            await deleteExpense(id);
            setExpenses((prevExpenses) =>
                prevExpenses.filter((expense) => expense.id !== id)
            );
        } catch (error) {
            console.error("Error deleting expense: ", error);
        }
    };

    const filteredExpenses = expenses.filter(
        (expense) => new Date(expense.date).getFullYear().toString() === filteredYear
    );

    return (
        <div className="App">
            <h2>Мої витрати</h2>
            <ExpenseFilter selectedYear={filteredYear} onYearChange={setFilteredYear}/>
            <AddExpenseForm onAddExpense={addExpenseHandler}/>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <ExpenseChart expenses={filteredExpenses}/>
                    <Expenses
                        items={filteredExpenses}
                        onUpdateExpense={updateExpenseHandler}
                        onDeleteExpense={deleteExpenseHandler}
                    />
                </>
            )}
        </div>
    );
}

export default App;
