import { obtenerDatos } from "./axios.js";
obtenerDatos().then((data) => {
  console.log( data);
  let diaNutricion1= data.filter(data=> data.dia=="9/07/2024" && data.servicio=="NUTRICION");
  let diaNutricion2= data.filter(data=> data.dia=="10/07/2024" && data.servicio=="NUTRICION" );
  
  dibuGrafiNutricion1(diaNutricion1,diaNutricion2,'bar')
  dibuGrafiNutriciona2(diaNutricion2,'bar')

}).catch((error) => {
  console.log(error);
});

const asisNutri = document.getElementById('myChart3');
function dibuGrafiNutricion1(diaNutricion1,diaNutricion2,type){
                                        
                                          new Chart(asisNutri, {
                                            type: type,
                                            data: {
                                              labels: diaNutricion1.map(row => row.hora),
                                              datasets: [{
                                                label: '9 Julio',
                                                data: diaNutricion1.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: '10 Julio',
                                                data: diaNutricion2.map(row => row.asistencia),
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
const preNutri= document.getElementById('myChart4');         
function dibuGrafiNutriciona2(diaNutricion2,type){
                                        
                                          new Chart(preNutri, {
                                            type: type,
                                            data: {
                                              labels: diaNutricion2.map(row => row.hora),
                                              datasets: [{
                                                label: 'Asistencia',
                                                data: diaNutricion2.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: 'Prediccion',
                                                data: diaNutricion2.map(row => row.predicion),
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
