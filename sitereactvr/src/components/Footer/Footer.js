import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Tooltip } from '@mui/material';


const Footer = () => {
  return (
    <Box 
      className="footer" 
      sx={{ 
        backgroundSize: 'contain', 
        padding: '40px 20px',
        backgroundColor: '#14183e',
        textDecoration: '#FFFFFF' ,
      }}
    >
      <Grid container spacing={5}>
        <Grid item md={6} lg={3}>
          <Tooltip title="Logo">
            <Typography variant="h4" sx={{ color: '#FFFFFF' }}className="mb-3 text-white">
              Virtual Mechatronics
            </Typography>
          </Tooltip>
          <Typography mb={0} sx={{ color: 'rgba(255,255,255,.5)' }}>Unlocking the potential: Virtually</Typography>
        </Grid>
        <Grid item md={6} lg={3}>
          <Typography variant="h5" sx={{ color: '#FFFFFF' }} fontFamily={'Font Awesome 5 Free'} className="mb-4 ">Get in touch</Typography>
          <Typography  sx={{color:'rgba(255,255,255,.5)'}}>
            <i  className="fa fa-map-marker-alt me-3"></i>
            <a href="map:Nyeri-Kenya" style={{color: 'rgba(255,255,255,.5'}}>Nyeri,Kenya</a>
          </Typography>
          <Typography  sx={{color:'rgba(255,255,255,.5)'}}>
            <i className="fa fa-phone-alt me-3"></i> 
            <a href="tel:+25416115027" style={{ color: 'rgba(255,255,255,.5)' }}>+25416115027</a>
          </Typography>
          <Typography  sx={{color:'rgba(255,255,255,.5)'}}>
            <i  className="fa fa-envelope me-3"></i> 
            <a href="mailto:vr.africa@dkut.ac.ke" style={{ color: 'rgba(255,255,255,.5)' }}>vr.africa@dkut.ac.ke</a>
          </Typography>
          <Box sx={{ display: 'flex', pt: 2 }} fontFamily={'Font Awesome 5 Free'}>
              <Button  
                className="btn btn-social"
                href='https://vml.dkut.ac.ke'
                sx={{
                  color: 'rgba(255,255,255,.5)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '40px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '.3s',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#1DA1F2', // Twitter blue color
                  },
                  '&:hover .fab': {
                    color: '#1DA1F2',
                  }
                }}
              >
                <i className={"fab fa-twitter"}></i>
              </Button>
              <Button 
                className="btn btn-social"
                href='https://vml.dkut.ac.ke'
                sx={{
                  color: 'rgba(255,255,255,.5)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '40px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '.3s',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#4267B2', // Facebook blue color
                  },
                  '&:hover .fab': {
                    color: '#4267B2',
                  }
                }}
              >
                <i className={"fab fa-facebook"}></i>
              </Button>
              <Button 
                className="btn btn-social"
                href='https://vml.dkut.ac.ke'
                sx={{
                  color: 'rgba(255,255,255,.5)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '40px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '.3s',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: 'rgba(255, 0, 0, 1)' // youtube color
                  },
                  '&:hover .fab': {
                     color: 'rgba(255, 0, 0, 1)'
                  }
                }}
              >
                <i className={"fab fa-youtube"}></i>
              </Button>
              <Button  
                className="btn btn-social"
                href='https://vml.dkut.ac.ke'
                sx={{
                  color: 'rgba(255,255,255,.5)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '40px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '.3s',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#C13584', // Instagram blue color
                  },
                  '&:hover .fab': {
                    color: '#C13584',
                  }
                }}
              >
                <i className={"fab fa-instagram"}></i>
              </Button>
              <Button 
                className="btn btn-social"
                href='https://vml.dkut.ac.ke'
                sx={{
                  color: 'rgba(255,255,255,.5)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '40px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '.3s',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#0077B5', // LinkedIn blue color
                  },
                  '&:hover .fab': {
                    color: '#0077B5',
                  }
                }}
              >
                <i className={"fab fa-linkedin"}></i>
              </Button>
          </Box>
        </Grid>
        <Grid item md={6} lg={3}>
  <Typography variant="h6" sx={{ color: '#FFFFFF', textTransform: 'none', }} className="mb-4">
    Popular Links
  </Typography>
  {[
    { label: 'About Us', url: '/about' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms and Conditions', url: '/terms' },
    { label: 'Career', url: '/career' },
  ].map((link, index) => (
    <Button 
      key={index} 
      className="btn btn-link" 
      href={link.url}
      sx={{
        color: 'rgba(255,255,255,.5)',
        display: 'block',
        marginBottom: '10px',
        padding: 0,
        textTransform:'none',
        textAlign: 'left',
        transition: '.3s',
        '&::before': {
          content: '"\\f105"',
          fontFamily: '"Font Awesome 5 Free"',
          fontWeight: 900,
          marginRight: '10px',
                },
        '&:hover': {
          color: '#FFFFFF',
          letterSpacing: '1px',
        },
      }}
    >
      {link.label}
    </Button>
  ))}
</Grid>
        <Grid item md={6} lg={3}>
          <Typography variant="h5"sx={{ color: '#FFFFFF', textTransform: 'none', }} className="mb-4 ">Our Projects</Typography>
            {[
               { label: 'Virtual Reality', url: '/projects/vr' },
               { label: 'Virtual Mechatronics', url: '/projects/mechatronics' },
               { label: 'Designs', url: '/projects/designs' },
               { label: 'Trainings', url: '/projects/trainings' },
              ].map((project, index) => (
              <Button 
              key={index}
              className="btn btn-link" 
              href={project.url}
              sx={{
                color: 'rgba(255,255,255,.5)',
                display: 'block',
                marginBottom: '10px',
                padding: 0,
                textTransform:'none',
                textAlign: 'left',
                transition: '.3s',
                '&::before': {
                  content: '"\\f105"',
                  fontFamily: '"Font Awesome 5 Free"',
                  fontWeight: 900,
                  marginRight: '10px',
                },
              '&:hover': {
                 color: '#FFFFFF',
                 letterSpacing: '1px',
               },
              }}
            >
              {project.label}
            </Button>
          ))}
        </Grid>
      </Grid>
      <Box className="copyright" sx={{ mt: 4, padding: '25px 0', fontSize: '16px', borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <Typography variant="body2" align="left"sx={{color:'#FFFFF'}}>
          © 
          <a href="#" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }} className="border-bottom">Virtual Mechatronics,  All Rights Reserved.</a> 
        </Typography>
        <Box className="footer-menu" sx={{ display: 'flex', justifyContent: 'right', mt: 2 }}>
          {['Home', 'Cookies', 'Help'].map((item, index) => (
            <Button 
              key={index} 
              href="#" 
              sx={{ 
                color: 'rgba(255,255,255,.5)', 
                marginRight: index !== 2 ? '15px' : 0,
                paddingRight: index !== 2 ? '15px' : 0,
                borderRight: index !== 2 ? '1px solid rgba(255,255,255,.1)' : 'none',
                '&:hover': {
                  color: '#FFFFFF',
                }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
