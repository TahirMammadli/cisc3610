// Fetch the data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    createDoughnutChart(data.doughnutData);
    createBarChart(data.barData);
  });

// Function to create the doughnut chart
function createDoughnutChart(data) {
  const ctx = document.getElementById('doughnutChart').getContext('2d');

  const labels = data.map(d => d.label);
  const values = data.map(d => d.value);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1
        }
      ]
    }
  });
}

// Function to create the horizontal bar chart
function createBarChart(data) {
  const ctx = document.getElementById('barChart').getContext('2d');

  const labels = data.map(d => d.label);
  const values = data.map(d => d.value);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Values',
          data: values,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        x: {
          beginAtZero: true
        }
      },
      indexAxis: 'y'
    }
  });
}
