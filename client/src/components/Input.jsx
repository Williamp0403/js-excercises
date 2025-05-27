import * as React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function Input({ type, name, label, register, errors }) {
  return (
      <TextField 
        error={!!errors}
        className='w-full' 
        label={label} 
        name={name}
        type={type}
        {...register(name) }
        variant="outlined" 
        helperText={errors?.message}
      />
  );
}

export function InputPassword ({ name, label, register, errors }) { 
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return ( 
    <FormControl sx={{ width: '100%' }} variant="outlined" error={!!errors}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput 
        name={name} 
        {...register(name)} 
        type={showPassword ? 'text' : 'password'}
        endAdornment={ 
          <InputAdornment position="end">
            <IconButton 
              aria-label={ showPassword ? 'Ocultar la contraseña' : 'Mostrar la contraseña' }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {errors?.message && (
        <FormHelperText>{errors.message}</FormHelperText>
      )}
    </FormControl>
  );
}


