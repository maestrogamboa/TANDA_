import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import "./css/landing.css"


export default function Landing() {

  let navigate = useNavigate()
  function loginRouteChange(){
    navigate("/Dashboard")
  }

  function singpURouteChange(){
    navigate("/Signup")
  }

  return (
    <div>
      <Grid container className='main-grid' alignItems="center" justifyContent="center" spacing={12}>
        <Grid item sm={5} md={4}>
          <h1 className="main-title">TANDA</h1>
        </Grid>
        <Grid item sm={5} lg={4}>
            <Card sx= {{justifyContent: 'center', textAlign:'center' }}>
              <CardContent>
              <Grid container spacing={3}>
              <Grid xs={12} sm={12} item>
                  <TextField placeholder="Correo electrónico o número de teléfono" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Contraseña" variant="outlined" fullWidth required />
                </Grid>
                </Grid>
                
              </CardContent>
              <Grid xs={12} sm={12} item sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Button sx={ {m:'1rem 1rem .8rem', backgroundColor:'#59D436', alignContent:'center'}} size='small' variant="contained" onClick={() => loginRouteChange()}>Iniciar sesion</Button>
                <h6 className='login-forgotPassword'>¿Has olvidado la contraseña?</h6>
                <div className='register-button'></div>
                <Button sx={ {m:'1rem', border:'2px solid #59D436', fontWeight:'600', color:'black'}}size='small' onClick={() => singpURouteChange()}> Registrar Tanda!</Button>

                </Grid>
                
            </Card>
        </Grid> 
      </Grid>

    </div>
  )
}

