// import user from (Foobar)
// health, wealth, u-mobility stats
// import {user} from './make-user-object.js';
import { getUser } from '../common/User State/api.js';
 

const user = getUser(); 

let healthState;
let wealthState;
let mobility;
function statusBar() {
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
    type: 'bar',
    label: 'Level of Success',
    data: {
        labels: ['Health', 'Wealth', 'Mobility'],
        datasets: [{
            label: 'Level of Success',
            fill: false, 
            data: [healthState, wealthState, mobility],
            backgroundColor: [
                'rgba(56, 162, 255, 0.2)',
                'rgba(108, 75, 94, 0.2)',
                'rgba(198, 111, 130, 0.2)',
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
            display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                
                }
            }]
        }
    }
});


