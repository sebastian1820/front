import { obtenerDatos } from "./axios.js";
obtenerDatos().then((data) => {
  console.log( data);
  let diakick1= data.filter(data=> data.dia=="9/07/2024" && data.servicio == "KICKBOX");
  let diabox2= data.filter(data=> data.dia=="10/07/2024" && data.servicio == "KICKBOX");

  console.log(diakick1);

  
  dibuGrafikick1(diakick1,diabox2,'bar')
  dibuGrafikick2(diabox2,'bar')

}).catch((error) => {
  console.log(error);
});

const asisNutri = document.getElementById('myChart3');
function dibuGrafikick1(diakick1,diabox2,type){
                                        
                                          new Chart(asisNutri, {
                                            type: type,
                                            data: {
                                              labels: diakick1.map(row => row.hora),
                                              datasets: [{
                                                label: '9 Julio',
                                                data: diakick1.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: '10 Julio',
                                                data: diabox2.map(row => row.asistencia),
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
function dibuGrafikick2(diabox2,type){
                                        
                                          new Chart(preNutri, {
                                            type: type,
                                            data: {
                                              labels: diabox2.map(row => row.hora),
                                              datasets: [{
                                                label: 'Asistencia',
                                                data: diabox2.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: 'Prediccion',
                                                data: diabox2.map(row => row.predicion),
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
