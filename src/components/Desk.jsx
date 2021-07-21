import React from 'react';

// import Button from '@material-ui/core/Button';


const Desk = ({id, escritorio, disponibilidad, setSala}) => {
  
    return ( 
        <div>
         <div key={id}>
        
        {/* {/* <Button color="primary" 
        variant="outlined"
        > {nombre}
        </Button> */}
        <ul> 
      <li>{id}</li>
      escritorio
      <li>Disponibilidad: {disponibilidad}</li>
      </ul>
      </div>
     <div>
     <li>Disponibilidad: {disponibilidad}</li>
         
</div>
</div>
    );
  };
 
    

        
export default Desk