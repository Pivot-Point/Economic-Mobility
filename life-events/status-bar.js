

// const results = JSON.parse(localStorage.getItem('status'));
//do we want this in an array? or as independent objects with variables?

const health = [];
const wealth = [];
const mobility = [];
const labels = [status];
// //grabbing the thing results
// results.forEach(thing => {
//     status.push(thing.status);
function buildChart(labels, values, chartTitle) {
// });
//what is ctx again?
const ctx = document.getElementById('status').getContext('2d');
//where is chart defined?

new Chart (ctx, {
    type: 'horizontalBar',
    data: {
        
        labels: labels,
        datasets: [{
            data: [94, 27, 46],
            backgroundColor: ['red', 'blue', 'yellow'],
            borderColor: ['black'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
    
    title: {
        display: true,
        text: 'The Status of your life'
        
    }
});
// new Chart(document.getElementById("bar-chart-horizontal"), {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Health", "Wealth", "Mobility"],
//         datasets: [
//             {
//                 label: "User Status",
//                 backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
//                 data: [2478,5267,734,784,433]
//             }
//         ]
//     },
//     options: {
//         legend: { display: false },
//         title: {
//             display: true,
//             text: 'The Status of your life'
//         }
//     }
// });