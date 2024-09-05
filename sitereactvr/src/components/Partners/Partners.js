import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SIFA from "../../assets/img/logos/SIFA FC.png"
import AU from "../../assets/img/logos/AU_LOGO_ENGLISH_CMYK.png"
import AUDA from "../../assets/img/logos/AUDA-NEPAD_LOGO_EN.png"
import GERMANY from "../../assets/img/logos/BMZ Logo.png"
import EU from "../../assets/img/logos/EN Co-funded by the EU_PANTONE.jpg"
import KFW from "../../assets/img/logos/KfW_LOGO.png"
import SWS from "../../assets/img/SSF_Logo_transparent_RGB.png"
import TVETA from "../../assets/img/TVETA.png"
import ARSO from "../../assets/img/ARSO-LOGO-2-pr.jpg"
import FESTO from "../../assets/img/FESTO.png"
import SIEMENS from "../../assets/img/SIEMENS.png"


const Partners = () => {
    const logos = [
        { src : SIFA, alt: 'Sponsor 1' },
        { src : AU, alt: 'Sponsor 4' },
        { src : AUDA, alt: 'Sponsor 5' },
        { src : GERMANY, alt: 'Sponsor 2' },
        { src : EU, alt: 'Sponsor 4' },
        { src : KFW, alt: 'Sponsor 3' },
        { src : SWS, alt: 'Sponsor 3' },
        { src : TVETA, alt: 'Sponsor 3' },
        { src : ARSO, alt: 'Sponsor 3' },
        { src : FESTO, alt: 'Sponsor 3' },
        { src : SIEMENS, alt: 'Sponsor 3' },

    ]
  return (
    <Box className="bg-light py-5">
      <Box className="container" sx={{backgroundColor:'rgba(244,247,254,255)'}}>
        <Typography variant="h4" sx={{ color: '#1363C6', textAlign: 'center', fontWeight:'bold' }}>

          Partners
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="center" className="sponsor-logos mt-5">
            
          {logos.map((logo, index) => (
            <Grid item key={index} className="col-auto">
              <img
                src={logo.src}
                alt={logo.alt}
                className="sponsor-logo"
                style={{
                  width: '150px',
                  margin: '20px 30px',
                  padding: '50px 0',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Partners;
