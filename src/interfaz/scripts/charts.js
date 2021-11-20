// TODO: Agregar funcion que maneja por gasto

// TODO: agregar funcion que maneja historial

// Manejar la grafica del reporte por categorias
/*
export function drawCategoryChart(username, expenses, incomes) {
  const data = {
    // Aca van los labels de las categorias
    labels: [
      'Gastos',
      'Ingresos',
    ],
    datasets: [{
      label: 'Balance',
      // Aca van los valores de
      data: [expenses, incomes],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(46,139,87)',
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
          text: 'Balance ' + username,
        },
      },
    },
  };
  new Chart(
    document.getElementById('categoryReport'),
    config,
    );
} */

// Funcion para graficar el reporte de balance
export function drawBalanceChart(username, expenses, incomes) {
  const data = {
    // Aca van los labels de las categorias
    labels: [
      'Gastos',
      'Ingresos',
    ],
    datasets: [{
      label: 'Balance',
      // Aca van los valores de
      data: [expenses, incomes],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(46,139,87)',
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
          text: 'Balance ' + username,
        },
      },
    },
  };
  new Chart(
      document.getElementById('balanceHome'),
      config,
  );
}
