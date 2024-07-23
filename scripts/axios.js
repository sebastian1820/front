const obtenerDatos = async ()=>{
    try {
             const datos = await axios.get("https://gim-4qgp.onrender.com/api/dia")
                
        return datos.data; 
          
    } catch (error) {
        console.log(error)
        return null;
    }
    };
   export { obtenerDatos };
   
   //export  default obtenerDatos;