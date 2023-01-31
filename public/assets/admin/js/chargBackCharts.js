let chargBackVSSalexValues = [
    'Success sale',
    'Charge back'
  ];
let chargBackVSSaleyValues = [91.85, 8.15];
let chargBackVSSalebarColors = [
    '#FF4069',
    '#FFC234'
];
new Chart("chargBackVSSale", {
    type: "doughnut",
    data: {
      labels: chargBackVSSalexValues,
      datasets: [{
        backgroundColor: chargBackVSSalebarColors,
        data: chargBackVSSaleyValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production"
      }
    }
});

//Representments Chart
let representmentsyValues = [228,191,73,0,0,0];
let representmentsbarColors = [
    '#89043D',
    '#1C3041',
    '#B2ABF2',
    '#18F2B2',
    '#3DDC97',
    'red',
];
new Chart("representments", {
    type: "doughnut",
    data: {
    //   labels: xValues,
      datasets: [{
        backgroundColor: representmentsbarColors,
        data: representmentsyValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production"
      }
    }
});

//BillingCycleGraph Chart
let BillingCycleGraphxValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
let BillingCycleGraphyValues = [380,0,30,220,0];
let BillingCycleGraphbarColors = '#FF4069';

new Chart("BillingCycleGraph", {
  type: "bar",
  data: {
    labels: BillingCycleGraphxValues,
    datasets: [{
        label: 'Billing Cycle',
        backgroundColor: BillingCycleGraphbarColors,
        data: BillingCycleGraphyValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

//RefundTypesGraphs Chart
var ctx = document.getElementById('RefundTypesGraphs').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [89,400],
            label: 'Full refund',
            backgroundColor: [
              'green',
              '#EFEEEE'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        cutoutPercentage: 50,
    }
});

//PartialRefund Chart
var ctx = document.getElementById('PartialRefund').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [13,400],
            label: 'Partial refund',
            backgroundColor: [
              '#ff9701',
              '#EFEEEE'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        cutoutPercentage: 50,
    }
});
//NoRefund Chart
var ctx = document.getElementById('NoRefund').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [380,60],
            label: 'Partial refund',
            backgroundColor: [
              '#1C3041',
              '#EFEEEE',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        cutoutPercentage: 50,
    }
});

//Retrievals Chart
var RetrievalsxValues = ['Retrievals', 'Sales'];
var RetrievalsyValues = [6274,3098];
var RetrievalsbarColors = ['#FF4069','#5366cc'];

new Chart("Retrievals", {
  type: "bar",
  data: {
    labels: RetrievalsxValues,
    label: 'Billing Cycle',
    datasets: [{
      backgroundColor: RetrievalsbarColors,
      data: RetrievalsyValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});