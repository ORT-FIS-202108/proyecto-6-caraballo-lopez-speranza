// Funcion de grafica por dates
export function drawCharByDate(user, userData) {
  const lineData = {
    labels: userData[0],
    datasets: [{
      label: 'Gastos por fecha',
      data: userData[1],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };
  const lineConfig = {
    type: 'line',
    data: lineData,
  };
  new Chart(
      document.getElementById('byDateReport'),
      lineConfig,
  );
}

// Manejar la grafica del reporte por categorias
export function drawChartBarCategory(user, userData) {
  const barData = {
    // Aca van los labels de las categorias
    labels: userData[0],
    datasets: [{
      label: 'Categorias',
      // Aca van los valores de
      data: userData[1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    }],
  };
  const barConfig = {
    type: 'bar',
    data: barData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  new Chart(
      document.getElementById('categoryReport'),
      barConfig,
  );
} 

// Funcion para graficar el reporte de balance
export function drawBalanceChart(user, userData) {
  const data = {
    // Aca van los labels de las categorias
    labels: [
      'Gastos',
      'Ingresos',
    ],
    datasets: [{
      label: 'Balance',
      // Aca van los valores de
      data: [userData[0], userData[1]],
      backgroundColor: [
        'rgb(255, 99, 132, 0.4)',
        'rgb(46,139,87, 0.4)',
      ],
      hoverOffset: 2,
    }],
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'El balance del usuario ' + user.name + ' es $' + user.balance,
          fullsize: true,
        },
      },
    },
  };
  new Chart(
      document.getElementById('balanceHome'),
      config,
  );
}
