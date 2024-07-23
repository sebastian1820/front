import { obtenerDatos } from "./axios.js";
obtenerDatos().then((data) => {
  console.log( data);
  let dia1= data.filter(data=> data.dia=="9/07/2024" && data.servicio=="FISIOTERPIA");
  let dia2= data.filter(data=> data.dia=="10/07/2024" && data.servicio=="FISIOTERPIA");
  
  dibuGrafiFisio1(dia1,dia2,'bar')
  dibuGrafiFisio2(dia2,'bar')

}).catch((error) => {
  console.log(error);
});

const asisNutri = document.getElementById('myChart3');
function dibuGrafiFisio1(dia1,dia2,type){
                                        
                                          new Chart(asisNutri, {
                                            type: type,
                                            data: {
                                              labels: dia1.map(row => row.hora),
                                              datasets: [{
                                                label: '9 Julio',
                                                data: dia1.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: '10 Julio',
                                                data: dia2.map(row => row.asistencia),
                                                backgroundColor :'Red',
                                              },
                                            ]
                                              
                                            },
                                            options: {
                                              plugins: {
                                               
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
function dibuGrafiFisio2(dia2,type){
                                        
                                          new Chart(preNutri, {
                                            type: type,
                                            data: {
                                              labels: dia2.map(row => row.hora),
                                              datasets: [{
                                                label: 'Asistencia',
                                                data: dia2.map(row => row.asistencia),
                                                backgroundColor :'#9B3922',
                                              },
                                              {
                                                label: 'Prediccion',
                                                data: dia2.map(row => row.predicion),
                                                backgroundColor :'Red',
                                              },
                                            ]
                                              
                                            },
                                            options: {
                                              plugins: {
                                               
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
