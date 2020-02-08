import { getUser } from '../User State/api.js';
// get user from local storage
const user = getUser(); 

// initiate states
let healthState;
let wealthState;
let mobility;

// push user's health, wealth and mobility states into array
export default function statusBar() {
    const returnArray = [];
    healthState = user.health;
    returnArray.push(healthState);
    wealthState = user.wealth;
    returnArray.push(wealthState);
    mobility = user.mobility;
    returnArray.push(mobility);
    return returnArray;
}

// show user's states in horizontal bar chart
statusBar(user);
const ctx = document.getElementById('barChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['health', 'wealth', 'mobility'],
        datasets: [{
            label: 'How is life going?',
            data: [healthState, wealthState, mobility],
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
            }]
        }
    }
});