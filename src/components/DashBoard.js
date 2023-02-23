import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper"
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./css/dashboard.css"


function DashBoard() {

  let navigate = useNavigate()

  function editListHandler(){
    navigate("/addparticipants")

  }
    return (
        <div>
          <div className='nav'>
          <Typography  sx={{ mt: '2rem', letterSpacing:'0.2rem', fontSize:'1.5rem', fontWeight:'600'}} gutterBottom variant="h4" align="center"  color={'#59D436'}>
       TANDA
       </Typography>
       <Button sx={{ maxWidth:'400px', border:'1px solid #59D436', backgroundColor:'white', color:'#59D436', alignContent:'center', mt:'2rem'}} type="submit" > Cerrar Session
</Button>
     
          </div>
          
            <Grid container  sx={{height:"100vh", display:'flex', flexDirection:'row', justifyContent:'space-around'}} >

           
                <Grid item sm={9} sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <Grid item sm={12} md={12} sx={{ margin:'2rem 4rem 1rem'}}>
                <Card sx= {{justifyContent: 'center', textAlign:'center' }}>
                    
              <CardContent>
                <h2 className='status'>Proxima persona en recibir</h2>
                <p>Edgard Gamboa</p>
              </CardContent>
             
            </Card>
                    </Grid>
                    <div className='secondStatus-Button'>
                <Button sx={{ maxWidth:'400px', mr:'4rem', border:'2px solid #59D436', fontWeight:'600', color:'black', alignContent:'right'}}type="submit" >       Editar Fecha
</Button>
                </div>
                <Grid item sm={12} md={12} sx={{ margin:'1rem 4rem 2rem'}}>
                
                <Card sx= {{justifyContent: 'center', textAlign:'center' }}>
                    
                    <CardContent>
                      <h2 className='status'>Fecha de siguiente pago</h2>
                      <p>Noviembre 16, 2023</p>
                    </CardContent>
                   
                  </Card>
                </Grid>
                <div className='thirdStatus-Button'>
                <Button sx={{ maxWidth:'400px', mr:'4rem', border:'2px solid #59D436', fontWeight:'600', color:'black', alignContent:'right'}} onClick={() => editListHandler()}>       Editar Lista
</Button>
                </div>
              
     
                <Grid item sm={12} md={12} sx={{ margin:'1rem 4rem 2rem'}}>
                <Card sx= {{justifyContent: 'center', textAlign:'center' }}>
                    
                    <CardContent>
                      <h2 className="status" style={{marginTop:'0'}}>Siguiente persona en la lista</h2>
                      <p>Samantha Martinez</p>
                    </CardContent>
                   
                  </Card>
                    </Grid>
                </Grid>
                
               
                
            </Grid>

        </div>
    )
}

export default DashBoard
