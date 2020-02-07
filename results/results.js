// import user from (Foobar)
// health, wealth, u-mobility stats
// import {user} from './make-user-object.js';
export const user = {
    name: 'john',
    race: 'white',
    gender: 'male',
    region: 'south',
    wealth: 50,
    health: 15,
    uMobility: 130,
};

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
    mobility = user.uMobility;
    returnArray.push(mobility);
    return returnArray;
}
statusBar(user);
var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
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


