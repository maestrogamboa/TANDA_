import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './css/addparticipants.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, Form } from 'react-bootstrap';
import Media from 'react-media'
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

export default function AddParticipants() {
  const [data, setData] = useState([{ firstName: 'John', lastName: 'Doe', payDate: '3/1/2023', phone: '555-555-1212' }, { firstName: 'Jane', lastName: 'Doe', payDate: '3/1/2023', phone: '555-555-1213' },]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [payDate, setPayDate] = useState('');
  const [phone, setPhone] = useState('');

  const handleDelete = (index) => {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  };

  const handleAdd = () => {
    setData([...data, { firstName, lastName, payDate, phone }]);
    setFirstName('');
    setLastName('');
    setPayDate('');
    setPhone('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex === -1) {
      setData([...data, { firstName, lastName, payDate, phone }]);
    } else {
      const newData = [...data];
      newData[editingIndex] = { firstName, lastName, payDate, phone };
      setData(newData);
      setEditingIndex(-1);
    }
    setFirstName('');
    setLastName('');
    setPayDate('');
    setPhone('');
  };

  const renderRow = (row, index) => (
    <tr key={index}>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.payDate}</td>
      <td>{row.phone}</td>
      <td>
        <Button variant="danger" onClick={() => handleDelete(index)}>
          Remover
        </Button>
      </td>
    </tr>
  );

  const renderRowMobile= (row, index) => (
    
    <Card  sx={{marginBottom:'1rem', marginLeft:'3rem', marginRight:'2rem'}}>
      <CardContent >
        
      <Grid item xs={12} sx={{display:'flex', justifyContent:'space-evenly'}}>

      <tr key={index}>
      <tr>{`Participant Number ${index + 1}`}</tr>
      <tr>{row.firstName}</tr>
      <tr>{row.lastName}</tr>
      <tr>{row.payDate}</tr>
      <tr>{row.phone}</tr>
      
    </tr>
    
        <Button variant="danger" onClick={() => handleDelete(index)}>
          Remover
        </Button>
    
    
    </Grid>
      </CardContent>
    </Card>
    
  );

  const [periodicidad, setperiocidad] = React.useState('');

  const handleChange = (event) => {
    setperiocidad(event.target.value);
  };

  let navigate = useNavigate()

  function nextRouteChange(){
    navigate("/dashboard")
  }

  return (
    <div className="App">

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <ThemeProvider theme={theme}>
            <Typography gutterBottom sx={{ maxWidth: '650px' }} variant="h4" align="left">
              Porfavor añadir los participantes
            </Typography>
          </ThemeProvider>

        </Box>
      </Box>


      <Media query="(min-width:630px">
        {matches => {
          return matches ?
            <>
              <Grid sx={{ padding: '3rem' }}>
                <Card sx={{ boxShadow: 10 }} className="Participants-MainForm" >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space=between', height: 'fit-content' }}>
                    <form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} marginLeft='3rem'>
                          <div className="Participants-mainDiv">

                          <div className="Participants-mainWrapper">

                          
                          <Table className='Participants-table' responsive="xs" striped bordered hover wrapperClasses="table-responsive">
                            <thead >
                              <tr>
                                <th>Primer Nomber</th>
                                <th>Apellido</th>
                                <th>Fecha de pago</th>
                                <th>Numero de Teléfono</th>

                              </tr>
                            </thead>
                            <tbody>
                              {data.map((row, index) => renderRow(row, index))}
                            </tbody>
                          </Table>
                          </div>
                          </div>

                        </Grid>

                      </Grid>
                    </form>
                  </CardContent>
                </Card>

                <Grid item  xs={12} sm={12} md={12} sx={{display:'flex', justifyContent:'center', heihgt:'1rem', mt:'3rem'}}>
                <Card className='ParticipantsForm-Card' sx={{boxShadow:10}} >
          <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', minHeight:200}}> 
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} sm={12} item>
                  <TextField  label="Primer Nombre" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField  label="Apellido" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField type="email"  label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField type="phone"  label="Numero de Teléfono" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sx={{display:'flex', justifyContent:'center',  mt:'1rem'}}>
    
                  <Button sx={{ maxWidth:'400px', mb:'1rem', border:'2px solid #59D436', fontWeight:'600', color:'black'}}type="submit"  fullWidth>añadir</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
          
              </Grid>
              <Grid item xs={12} sx={{ marginTop:'2rem', display:'flex', justifyContent:'center'}}>

                <Button sx={{ maxWidth: '200px', backgroundColor: '#59D436' }} type="submit" variant="contained" color="primary" fullWidth onClick={() => nextRouteChange()}>Siguiente</Button>
                </Grid>
              </Grid>
             
            </>

            :

            <>
            <Grid container spacing={4} sx={{ display: 'flex', flexDirection:'column' ,justifyContent:'center', marginTop:'2rem'}}>
          
                
                  {data.map((row, index) => renderRowMobile(row, index))}
              
              
              <Grid item xs={12} sx={{marginLeft:'3rem', marginRight:'3rem', display:'flex', justifyContent:'center'}}>
              <Card sx={{boxShadow:10}} style={{ maxWidth: 200, padding: "20px 5px", margin: "0 auto" }} >
          <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', minHeight:200}}> 
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} sm={12} item>
                  <TextField  label="Primer Nombre" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField  label="Apellido" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField type="email"  label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField type="phone"  label="Numero de Teléfono" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sx={{display:'flex', justifyContent:'center',  mt:'1rem'}}>
    
                  <Button sx={{ maxWidth:'400px', m:'1rem', border:'2px solid #59D436', fontWeight:'600', color:'black'}}type="submit"  fullWidth>añadir</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
              
              </Grid>
              <Grid item xs={12} sx={{marginLeft:'3rem', marginRight:'3rem', display:'flex', justifyContent:'center'}}>
                <Button onClick={handleSubmit} type="submit">Submit</Button>


              </Grid>
              </Grid>
            </>
        }}
      </Media>

    </div>
  )
}