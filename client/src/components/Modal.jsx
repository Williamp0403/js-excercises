import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Level } from './Level';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export function ModalLevel ({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Level action={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth='xs'
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          {data.title} 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link className='w-full mx-2 mb-2' to={`/level/${data.level}`}>
            <button className='w-full font-bold bg-sky-700 rounded-md transition ease-in-out duration-300 hover:bg-sky-500 p-3 cursor-pointer'>Comenzar</button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function ModalLogout () {
  const { logout } = useAuth()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title='Cerrar sesión'>
        <IconButton onClick={handleClickOpen}>
          <LogoutIcon fontSize='large'/>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth='xs'
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          Cerrar sesión.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          ¿Estás seguro que desea cerrar sesión?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button 
            onClick={logout}
            className='w-full font-bold bg-red-700 rounded-md transition ease-in-out duration-300 hover:bg-red-500 p-2 cursor-pointer mx-3'
          >
            Cerrar sesión
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function ModalCompletedLevel () {
  const [open, setOpen] = React.useState(true)
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/game')
    setOpen(false)
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth='xs'
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          Felicidades!!.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Completaste este nivel.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button 
              onClick={handleClose}
              className='w-full font-bold bg-sky-700 rounded-md transition ease-in-out duration-300 hover:bg-sky-500 p-3 cursor-pointer m-2'
            >
              Continuar
            </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}