import React from 'react';
import Expenses from './components/Expenses';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.67,
      date: new Date(2023, 5, 12),
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 799.99,
      date: new Date(2023, 11, 10),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 1, 20),
    },
  ];

  return (
      <div className="App">
        <h2>Let's get started!</h2>
        <Expenses items={expenses} />
      </div>
  );
}

export default App;
