import { obtenerDatos } from "./axios.js";
obtenerDatos().then((data) => {
  console.log( data);
  let diaEstudiante1= data.filter(data=> data.dia=="9/07/2024"&&data.servicio=="ESTUDIANTE");
  let diaEstudiante2= data.filter(data=> data.dia=="10/07/2024"&&data.servicio=="ESTUDIANTE");
  
  dibuGrafiEstudiante1(diaEstudiante1,diaEstudiante2,'bar')
  dibuGrafiEstudiante2(diaEstudiante2,'bar')

}).catch((error) => {
  console.log(error);
});

const asisNutri = document.getElementById('myChart');
function dibuGrafiEstudiante1(diaEstudiante1,diaEstudiante2,type){
                                        
                                          new Chart(asisNutri, {
                                            type: type,
                                            data: {
                                              labels: diaEstudiante1.map(row => row.hora),
                                              datasets: [{
                                                label: '9 Julio',
                                                data: diaEstudiante1.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: '10 Julio',
                                                data: diaEstudiante2.map(row => row.asistencia),
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
const preNutri= document.getElementById('myChart2');         
function dibuGrafiEstudiante2(diaEstudiante2,type){
                                        
                                          new Chart(preNutri, {
                                            type: type,
                                            data: {
                                              labels: diaEstudiante2.map(row => row.hora),
                                              datasets: [{
                                                label: 'Asistencia',
                                                data: diaEstudiante2.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: 'Prediccion',
                                                data: diaEstudiante2.map(row => row.predicion),
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
