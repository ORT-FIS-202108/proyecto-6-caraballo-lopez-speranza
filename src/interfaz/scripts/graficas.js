// Manejar la grafica de la Home


// Manejar la grafica del reporte por categorias por mes

const data = {
  // Aca van los labels de las categorias
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    label: 'Reporte agregado de gasto',
    // Aca van los valores de
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
    ],
    hoverOffset: 4,
  }],
};
// para home usar doughnut | para reporte por categoria y fecha 
const config = {
  type: 'doughnut',
  data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config,
);
