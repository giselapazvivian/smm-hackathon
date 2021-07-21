import '../App.css'
import React, {useState} from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import escritorio from '../assets/img/g5.PNG'
import data from '../data/data.json';
import Desk from './Desk';

const SelectDesk = () => {
  
  const [salas, setSala] = useState(data.zonasDeTrabajo);
  console.log(salas);
  return (
    <div>
      <Navbar />
      <div className='titles'>
      <h3>selecciona Escritorio</h3></div>
      <Grid container justifyContent="space-around">
      <img src={escritorio} alt="escritorio" width="300px"/>
      <Typography variant="h6" color="secondary" align='center'>
      Selecciona un escritorio disponible
      </Typography>
      </Grid>
      
     <div>
     <h3>Escritorio</h3>
     {salas.map((sala) => (
     <Desk
       id={sala.id}
       nombre={sala.nombre}
       disponibilidad={sala.disponibilidad}
       // escritorio={escritorio}
       // setEscritorio={setEscritorio}
       setSala={setSala}
       
     /> ))}
     </div>
  </div>
  )
}

export default SelectDesk
