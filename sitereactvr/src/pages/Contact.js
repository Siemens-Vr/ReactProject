import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Icon from '@mui/material/Icon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box className="content-container py-10 ml-10" sx={{alignItems:'center'}}>
      <Container maxWidth="md"x={{alignItems:'center'}}>
        {/* Contact Heading Section */}
        <Box className="mx-auto text-center" data-wow-delay="0.1s" sx={{ maxWidth: 500,
            padding: '50px 0',  // Padding around the section
            backgroundColor: 'white',  // Background color
            textAlign: 'center',
            alignContent:'center'
         }}>
            <Typography variant='h4'sx={{fontWeight:'bold',color:'#14183e'}}>CONTACT US</Typography>
          <Typography variant="h5" className="mb-4"
          sx={{ 
            marginTop: '10px',
            textAlign:'justify',
            fontFamily:'Open Sans,sans-serif',
            color:'#14183e',
            fontWeight:'bolder',
            alignContent:'center',}}>
            If You Have Any Query, 
          </Typography>
          <Typography variant="h5" className="mb-4"
          sx={{ 
            marginTop: '10px',
            textAlign:'justify',
            fontFamily:'Open Sans,sans-serif',
            color:'#14183e',
            fontWeight:'bolder',
            alignItems:'center',}}>
            Please Contact Us
          </Typography>
        </Box>

        {/* Contact Information Section */}
        <Box className="row justify-center mb-5"x={{alignItems:'center'}}>
          <Box className="col-lg-7x={{alignItems:'center'}}">
            <Box className="text-center" data-wow-delay="0.2s"x={{alignItems:'center'}}>
              <Typography variant="h4" className="mb-1 flex items-center justify-center"
              sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontFamily:'Open Sans,sans-serif',
                color:'blue',
                fontWeight:'bolder',
                alignItems:'center',}}>
                <LocationOnIcon className="mr-2" /> Nyeri, Kenya
              </Typography>
              <Typography variant="h5" className="mb-1 flex items-center justify-center"
              sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontFamily:'Open Sans,sans-serif',
                color:'blue',
                fontWeight:'bolder',
                alignItems:'center'}}>
                <PhoneIcon className="mr-2" /> +254716150627
              </Typography>
              <Typography variant="h5" className="mb-1 flex items-center justify-center"
              sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontFamily:'Open Sans,sans-serif',
                color:'blue',
                fontWeight:'bolder',
                alignItems:'center',}}>
                <EmailIcon className="mr-2" /> vr.africa@dkut.ac.ke
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
