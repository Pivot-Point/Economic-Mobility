// import user from (Foobar)
// health, wealth, u-mobility stats
// import {user} from './make-user-object.js';
import { getUser } from '../User State/api.js';
const user = getUser(); 

let healthState;
let wealthState;
let mobility;
function statusBar(fubaar) {
    const returnArray = [];
    // const barChartHorizontal = document.getElementById('bar-chart-horizontal');
    healthState = user.health;
    returnArray.push(healthState);
    wealthState = user.wealth;
    returnArray.push(wealthState);
    mobility = user.mobility;
    returnArray.push(mobility);
    return returnArray;
}
statusBar(user);
const ctx = document.getElementById('barChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['health', 'wealth', 'upward mobility'],
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
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                
                }
            }]
        }
    }
});


