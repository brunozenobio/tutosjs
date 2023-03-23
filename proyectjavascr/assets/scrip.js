let result = document.getElementById("result");

function insertNumber(number) {
  result.value += number;
}
function insertOperator(operator) {
    result.value += operator;
  }
  
  function clearScreen() {
    result.value = "";
  }
  
  function backspace() {
    result.value = result.value.slice(0, -1);
  }
  
  


  function graficarCoseno(inicio, fin, paso, idCanvas) {
    const datos = [];
    for (let x = inicio; x <= fin; x += paso) {
      datos.push({
        x: x,
        y: result.value
      });
    }
  
    const config = {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Coseno',
            data: datos,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Gráfico del coseno'
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'x'
            }
          },
          y: {
            title: {
              display: true,
              text: 'cos(x)'
            }
          }
        }
      }
    };
  
    const ctx = document.getElementById("grafico").getContext('2d');
    const chart = new Chart(ctx, config);
  }



  graficarCoseno(-Math.PI, Math.PI, 0.1, 'grafico');