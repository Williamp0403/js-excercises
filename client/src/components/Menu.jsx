import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import Logout from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext';
import { ModalProgress } from './Modal';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  const nameParts = name.split(' ');
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: nameParts.length > 1 
      ? `${nameParts[0][0]}${nameParts[1][0]}` 
      : `${nameParts[0][0]}`,
  };
}

export function AccountMenu({ name , username}) {
  const { logout } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar {...stringAvatar(name)} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <div>
            <h4 className="font-bold">{name}</h4>
            <h5 className="font-semibold text-sm text-gray-300">{username}</h5>
          </div>
        </MenuItem>
        <Divider />
        <ModalProgress/>
        <MenuItem onClick={logout} sx={{ color: '#dc2626', fontWeight: 'bold' }}>
          <ListItemIcon sx={{ color: '#dc2626' }}>
            <Logout />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
