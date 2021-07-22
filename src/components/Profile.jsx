import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Navbar from './Navbar'
import Breadcrumbs from './Breadcrumb';

const Profile = () => {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <Breadcrumbs />
      <div className='titles'>
      <h3>Mi Perfil</h3>
      </div>
      <Button color="primary" 
      variant="outlined"
      disableElevation>
        BOTON
      </Button>
      <DeleteIcon color="primary"></DeleteIcon>
    </div>
  )
}

export default Profile
