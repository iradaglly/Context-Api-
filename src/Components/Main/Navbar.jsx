import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useBasketContext } from '../../Context/BasketContext';


function Navbar() {
  const{basket} = useBasketContext();
  return (
    <AppBar position="static" style={{ backgroundColor: ' #c19ac5' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-evenly' }}>

          <Typography
            variant="h6"
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#7b6cdb',
              textDecoration: 'none',

            }}
          >APP BAR</Typography>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >

            <Typography >
              <Link style={{ color: '#7b6cdb', textDecoration: 'none', fontSize: "17px", fontWeight: "bold" }} to='/'> Home </Link>
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography>
              <Link style={{ color: '#7b6cdb', textDecoration: 'none', fontSize: "17px", fontWeight: "bold" }} to='/basket'> Basket Page<span style={{fontWeight:'bold',color:'indianred',marginLeft:"10px"}}>{basket.length}</span> </Link>
            </Typography>
          
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar