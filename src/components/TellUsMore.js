import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './css/tellus.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from "react-router-dom";


const theme = createTheme();

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};

theme.typography.h6 = {
  fontSize: '.8rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
};

theme.TextField = {
  fontSize: '.2rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  }

}

const spanish = true

export default function TellUsMore() {

  let navigate = useNavigate()

  function nextRouteChange(){
    navigate("/addparticipants")
  }

  const [periodicidad, setperiocidad] = React.useState('');

  const handleChange = (event) => {
    setperiocidad(event.target.value);
  };

  if (spanish) {
    return (
      <div className="App">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom sx={{ maxWidth: '650px' }} variant="h4" align="left">
                Nesecitamos los detalles de tu Tanda!
              </Typography>
            </ThemeProvider>

          </Box>
        </Box>

        <Grid sx={{ padding: '3rem' }}>
          <Card classname="main-card" sx={{ boxShadow: 10 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 500 }}>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4} md={6} marginLeft='3rem'>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h6" align="left">
                        Fech de inicio/fecha de pago para el siguiente participante.
                      </Typography>
                    </ThemeProvider>

                  </Grid>

                  <Grid xs={6} sm={4} md={4} marginLeft="3rem" item>
                    <TextField type='date' sx={{ maxWidth: '150px' }} inputProps={{
                      style: {
                        padding: 3
                      }
                    }} placeholder="" variant="outlined" fullWidth required />

                  </Grid>

                  <Grid item xs={12} sm={4} md={6} marginLeft='3rem'>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h6" align="left">
                        Monto total
                      </Typography>
                    </ThemeProvider>

                  </Grid>
                  <Grid item xs={6} sm={4} md={4} marginLeft="3rem">
                    <TextField type="number" sx={{ maxWidth: '150px' }} inputProps={{
                      style: {
                        padding: 3
                      }
                    }} placeholder="" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={4} md={6} marginLeft='3rem' mt='1.4rem'>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h6" align="left">
                        Periodicidad
                      </Typography>
                    </ThemeProvider>

                  </Grid>
                  <Grid item xs={6} sm={4} md={4} marginLeft="3rem">
                    <FormControl sx={{mt:1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Periocidad</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={periodicidad}
                        label="periodicidad"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={10}>Semanal</MenuItem>
                        <MenuItem value={20}>Quincenal</MenuItem>
                        <MenuItem value={30}>Mensual</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: '7rem' }}>
                    <Button sx={{ maxWidth: '400px', backgroundColor: '#59D436' }} type="submit" variant="contained" color="primary" fullWidth onClick={() => nextRouteChange()}>Siguiente</Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

      </div>
    )
  }
  return (
    <div className="App">
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <ThemeProvider theme={theme}>
            <Typography gutterBottom sx={{ maxWidth: '450px' }} variant="h4" align="left">
              We will manage your tanda.
            </Typography>
            <Typography gutterBottom sx={{ maxWidth: '450px' }} variant="h4" align="left">
              Tell us more about it!
            </Typography>
          </ThemeProvider>

        </Box>
      </Box>

      <Grid sx={{ padding: '3rem' }}>
        <Card className='form-card' sx={{ boxShadow: 10 }} >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 500 }}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={6} marginLeft='3rem'>
                  <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h6" align="left">
                      Please input the date of when the next person will get paid.
                    </Typography>
                  </ThemeProvider>

                </Grid>
                <Grid item xs={6} sm={4} md={4} marginLeft="3rem">
                  <TextField type="date" sx={{ maxWidth: '150px' }} inputProps={{
                    style: {
                      padding: 3
                    }
                  }} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} md={6} marginLeft='3rem' item>
                  <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h6" align="left" >
                      Please input the date of when the last person in the tanda will get paid.
                    </Typography>
                  </ThemeProvider>

                </Grid>
                <Grid xs={6} sm={4} md={4} marginLeft="3rem" item>
                  <TextField type='date' sx={{ maxWidth: '150px' }} inputProps={{
                    style: {
                      padding: 3
                    }
                  }} placeholder="" variant="outlined" fullWidth required />

                </Grid>

                <Grid item xs={12} sm={4} md={6} marginLeft='3rem'>
                  <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h6" align="left">
                      If the tanda has already started, please let us know what number will the next payout be?
                    </Typography>
                  </ThemeProvider>

                </Grid>
                <Grid item xs={6} sm={4} md={4} marginLeft="3rem">
                  <TextField type="number" sx={{ maxWidth: '150px' }} inputProps={{
                    style: {
                      padding: 3
                    }
                  }} placeholder="" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={4} md={6} marginLeft='3rem'>
                  <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h6" align="left">
                      What is the amount each participant will contribute each month?
                    </Typography>
                  </ThemeProvider>

                </Grid>
                <Grid item xs={6} sm={4} md={4} marginLeft="3rem">
                  <TextField type="currency" sx={{ maxWidth: '150px' }} inputProps={{
                    style: {
                      padding: 3
                    }
                  }} placeholder="" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: '3rem' }}>
                  <Button sx={{ maxWidth: '400px', backgroundColor: '#59D436' }} type="submit" variant="contained" color="primary" fullWidth onClick={() => nextRouteChange()}>Siguiente</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}