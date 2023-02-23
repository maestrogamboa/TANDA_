import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './css/signup.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

export default function Signup() {

  let navigate = useNavigate()
  function participantRouteChange(){
    navigate("/signup")
  }

  function adminRouteChange(){
    navigate("/tellusmore")
  }
  
    return (
        <div className="App"> 
        <ThemeProvider theme={theme}>
        <Typography  sx={{ mt: '2rem'}} gutterBottom variant="h4" align="center">
        Registrarte
       </Typography>
        </ThemeProvider>
      
      <Grid sx={{padding:'3rem'}}>
        <Card className='main-card' sx={{boxShadow:10}} >
          <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', minHeight:500}}> 
            <form>
              <Grid container spacing={7}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="phone" placeholder="Enter phone number" label="Phone Number" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sx={{display:'flex', justifyContent:'center',  mt:'1rem'}}>
                  <Button sx={{ maxWidth:'400px', backgroundColor:'#59D436',  m:'1rem'}}type="submit" variant="contained" color="primary" fullWidth onClick={() => adminRouteChange()}>Registrate como Organizador</Button>
                  <Button sx={{ maxWidth:'400px', m:'1rem', border:'2px solid #59D436', fontWeight:'600', color:'black'}}type="submit"  fullWidth>Registrarte como Participante</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    )
}
