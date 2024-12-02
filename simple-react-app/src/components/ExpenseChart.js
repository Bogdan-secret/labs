import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const ExpenseChart = ({ expenses }) => {
    const months = [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
    ];

    const monthlyExpenses = new Array(12).fill(0);

    expenses.forEach((expense) => {
        // Ensure `expense.date` is converted to a Date object
        const date = new Date(expense.date);
        if (!isNaN(date)) { // Check if the date is valid
            const month = date.getMonth();
            monthlyExpenses[month] += expense.amount;
        }
    });

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Витрати по місяцях',
                data: monthlyExpenses,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h3>Витрати по місяцях</h3>
            <Bar data={data} />
        </div>
    );
};

export default ExpenseChart;