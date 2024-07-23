import { obtenerDatos } from "./axios.js";
obtenerDatos().then((data) => {
  console.log( data);

let diaNaranja1= data.filter(data=> data.dia=="9/07/2024" && data.servicio=="NARANJA");

let diaNaranja2= data.filter(data=> data.dia=="10/07/2024" && data.servicio=="NARANJA");
console.log(diaNaranja2);

 
dibuGrafiNaranja1(diaNaranja1,diaNaranja2,'bar')
dibuGrafiNaranja2(diaNaranja2,diaNaranja2,'bar')

 
}).catch((error) => {
  console.log(error);
});
 
 
const asisNaranja = document.getElementById('myChart');
function dibuGrafiNaranja1(diaNaranja1,diaNaranja2,type){
          
new Chart(asisNaranja, {
              type: type,
              data: {
                labels: diaNaranja1.map(row => row.hora),
                datasets: [{
                  label: '9 Julio',
                  data: diaNaranja1.map(row => row.asistencia),
                  backgroundColor :'#9B3922',
                },
                {
                  label: '10 Julio',
                  data: diaNaranja2.map(row => row.asistencia),
                  backgroundColor :'Red',
                },
              ]
                
              },
              options: {
                plugins: {
                  // Changing the lagend colour
                  legend: {
                      labels: {
                          color: "white",
                      },
                  },
                  
              },
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks:{
                    color: "White",
                    beginAtZero : true
                    }
                  },
                  x: {
                    ticks:{
                    color: "White",
                    beginAtZero : true
                    }
                  }
                  
                }
              }
            });
          }

const preNaranja = document.getElementById('myChart2');         
function dibuGrafiNaranja2(diaNaranja2,prediccionNaranja,type){
          
            new Chart(preNaranja, {
              type: type,
              data: {
                labels: diaNaranja2.map(row => row.hora),
                datasets: [{
                  label: 'Asistencia',
                  data: diaNaranja2.map(row => row.asistencia),
                  backgroundColor :'#9B3922',
                },
                {
                  label: 'Prediccion',
                  data: diaNaranja2.map(row => row.predicion),
                  backgroundColor :'Red',
                },
              ]
                
              },
              options: {
                plugins: {
                  // Changing the lagend colour
                  legend: {
                      labels: {
                          color: "white",
                      },
                  },
                  
              },
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks:{
                    color: "White",
                    beginAtZero : true
                    }
                  },
                  x: {
                    ticks:{
                    color: "White",
                    beginAtZero : true
                    }
                  }
                  
                }
              }
            });
          }



