import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import auth0 from 'auth0-js';
import "./css/landing.css"


export default function Landing({webAuthLogIn}) {

  const [entercode, setEnterCode] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  var webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_DOMAIN,
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: 'http://localhost:3000/dashboard',
    responseType: 'token'
  });



  function startLogin() {
    webAuthLogIn.passwordlessStart({
      connection: 'sms',
      send: 'link',
      phoneNumber: `+1${phoneNumber}`

    }, function (err, res) {
      // handle errors or continue
      console.log(err)
    }

    )
    setEnterCode(true)
  };


  async function verifyLogin() {

    const tanda = await fetch(`http://localhost:3070/api/tanda`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });
    if (tanda){
      console.log(tanda)
      webAuthLogIn.passwordlessLogin({
        connection: 'sms',
        phoneNumber: `+1${phoneNumber}`,
        verificationCode: verificationCode
      }, function (err, res) {
        console.log(err)
      }
      );
    }
    else{
      console.log('Please Register')
    }

  }

  let navigate = useNavigate()
  function loginRouteChange() {
    navigate("/Dashboard")
  }

  function singpURouteChange() {
    navigate("/Signup")
  }

  return (
    <div>
      <Grid container className='main-grid' alignItems="center" justifyContent="center" spacing={12}>
        <Grid item sm={5} md={4}>
          <h1 className="main-title">TANDA</h1>
        </Grid>
        {!entercode ? <Grid item sm={5} lg={4}>
          <Card sx={{ justifyContent: 'center', textAlign: 'center' }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder=" Número de teléfono" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} fullWidth required />
                </Grid>

              </Grid>

            </CardContent>
            <Grid xs={12} sm={12} item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Button sx={{ m: '1rem 1rem .8rem', backgroundColor: '#59D436', alignContent: 'center' }} size='small' variant="contained" onClick={() => startLogin()}>Iniciar sesion</Button>
              <div className='register-button'></div>
              <Button sx={{ m: '1rem', border: '2px solid #59D436', fontWeight: '600', color: 'black' }} size='small' onClick={() => singpURouteChange()}> Registrar Tanda!</Button>

            </Grid>

          </Card>
        </Grid>
         :
          <Grid item sm={5} lg={4}>
          <Card sx={{ justifyContent: 'center', textAlign: 'center' }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Codigo" variant="outlined" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} fullWidth required />
                </Grid>

              </Grid>

            </CardContent>
            <Grid xs={12} sm={12} item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Button sx={{ m: '1rem 1rem .8rem', backgroundColor: '#59D436', alignContent: 'center' }} size='small' variant="contained" onClick={() => verifyLogin()}>Verificar Codigo</Button>
              <div className='register-button'></div>
              <Button sx={{ m: '1rem', border: '2px solid #59D436', fontWeight: '600', color: 'black' }} size='small' onClick={() => startLogin()}> Resend code</Button>

            </Grid>

          </Card>
        </Grid>}
      </Grid>

    </div>
  )
}

