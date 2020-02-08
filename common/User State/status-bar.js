import statusArray from './user-status.js';
import { getUser } from '../User State/api.js';

// get user from local storage
const user = getUser();

// pass user object into array and store as variable
const userStats = statusArray(user);

// show user's states in horizontal bar chart
const ctx = document.getElementById('barChart').getContext('2d');

// use query params to determine chart direction
const searchParams = new URLSearchParams(window.location.search);
const pageId = searchParams.get('id');

let chartType = 'horizontalBar';
if (!pageId) {
    chartType = 'bar';
}

const myChart = new Chart(ctx, {
    type: chartType,
    data: {
        labels: ['Health', 'Wealth', 'Mobility'],
        datasets: [{
            label: 'Rating',
            data: userStats,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Socio-Economic Mobility'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 150,

                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 150,

                }
            }]
        }
    }
});

export { myChart };