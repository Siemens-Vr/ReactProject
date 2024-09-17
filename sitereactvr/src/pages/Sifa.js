import React from 'react';
import { Container, Grid, Button, Typography, Box, Card, CardContent } from '@mui/material';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn,  FaBook, FaBrain, FaIndustry, FaVrCardboard } from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import vid1 from '../assets/video/photos.mp4';
import sifa from '../assets/video/sifa.jpg';
import choose from '../assets/img/sifa/IMG-20240519-WA0010.jpg';
import { useSpring, animated } from '@react-spring/web';
// import { useSpring, animated } from 'react-spring';

// Utility to combine TailwindCSS and MUI classes
const useStyles = () => ({
  contentContainer: 'py-1',
  aboutImg: 'rounded-lg overflow-hidden',
  serviceItem: 'border border-gray-300 p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg',
  serviceIcon: 'bg-gray-200 rounded-full p-4 transition-colors duration-300 ease-in-out hover:bg-gray-300',
  btnSquare: 'flex items-center justify-center h-24 w-24',
});
const services = [
  {
    icon: <FaBook size={32} />,
    title: 'Certification Programs',
    description:'Provides Siemens-certified mechatronics training, ensuring that students meet international industry standards.',
    link: '#'
  },
  {
    icon: <FaBrain size={32} />,
    title: 'Technical Expertise',
    description: 'Offer hands-on training in mechatronics, integrating mechanical engeneering, electronics, and computer science.',
    link: '#'
  },
  {
    icon: <FaIndustry size={32} />,
    title: 'Industry Alignment',
    description: 'Ensuring that the training is ligned with the latest technological advancements and industry needs, enhancing the employability of graduates.',
    link: '#'
  },
  {
    icon: <FaVrCardboard size={32} />,
    title: 'Advanced Technology',
    description: 'Utilizes advanced technologies and tools to provide an immersive learning experience for students.',
    link: '#'
  }
];
const accordionItems = [
  {
      title: 'Comprehensive Skills Development',
      content: (
          <>
              <Typography variant="h6" fontWeight="500">SIFA Framework:</Typography>
              <p>Provides the overarching structure and support for vocational and technical training across Africa.</p>
              <Typography variant="h6" fontWeight="500">Siemens Centre:</Typography>
              <p>Delivers high-quality mechatronics training and Certification, ensuring that students gain relevant, industry-standard skills.</p>
          </>
      ),
  },
];
const accordionItems1 = [
  {
      title: 'Industry-Related Training',
      content: (
          <>
              <Typography variant="h6" fontWeight="500">Alignment with Market Needs:</Typography>
              <p>Ensures that training programs meet the current and future needs of the job market, improving graduatesâ€™ employability and readiness for modern roles.</p>
          </>
      ),
  },
];
const accordionItems2 = [
  {
      title: 'Enhanced Learning Experience',
      content: (
          <>
              <Typography variant="h6" fontWeight="500">Integration of Technology:</Typography>
              <p>Combines traditional hands-on training with innovative virtual reality experiences, providing a well-rounded education that prepares students for the evolving technological landscape.</p>
          </>
      ),
  },
];
const accordionItems3 = [
  {
      title: 'Economic and Regional Development',
      content: (
          <>
              <Typography variant="h6" fontWeight="500">Boosting Employability:</Typography>
              <p>By equipping young people with relevant skills, the initiative contributes to economic growth and addresses unemployment challenges in the region.</p>
              <Typography variant="h6" fontWeight="500">Setting Standards:</Typography>
              <p>Demonstrates how integrating advanced technologies and international standards into educational programs can enhance their quality and impact..</p>
          </>
      ),
  },
];

const Sifa = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      {/* sifa */}
      <Container className="py-1">
      <Typography variant='h4'sx={{fontWeight:'bold',color:'#14183e'}}>SIFA</Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item lg={6}>
            <div className={classes.aboutImg}>
              <video className="w-full h-auto" autoPlay loop muted>
                <source src={vid1} type="video/mp4" style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h4" gutterBottom sx={{
              marginTop: '10px', textAlign: 'justify', fontFamily: 'sans-serif',
              color: '#14183e', fontWeight: 'bold',
            }}>
              Skill Initiative for Africa
            </Typography>
            <Typography paragraph sx={{
              marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
              fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
            }}>
              The Skills Initiative for Africa (SIFA) is a strategic effort led by the African Union Commission (AUC) and the African Union Development Agency (AUDA-NEPAD), with support from the German Government and the European Union.
            </Typography>
            <Typography paragraph sx={{
              marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
              fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'Open sans, sans-serif',
            }}>
              This initiative aims to enhance the occupational prospects of young people in Africa by improving vocational and technical training.
            </Typography>
            <Grid container spacing={3}>
              <Grid item sm={6}>
                <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold', fontFamily: 'Open sans,sans-serif' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i> Strategic Leadership
                </Typography>
                <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i> International support
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i> Focus on Technical Training
                </Typography>
                <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i> Key Facilities
                </Typography>
              </Grid>
            </Grid>
            <Box className="mt-4" sx={{padding: '10px',}}>
              <Button variant="contained" color="primary" className="rounded-pill px-4 me-3" href="https://skillsafrica.org/" target="_blank" rel="noopener noreferrer" sx={{ borderRadius: '9999px', marginRight: '20px' }}>
                Read More
              </Button>
              <Button variant="outlined" color="primary" className="me-3" href="https://web.facebook.com/SIFAAfrica/" target="_blank" rel="noopener noreferrer" sx={{ 
                borderRadius: '50%', 
                padding: '10px', 
                width: '58px', 
                height: '58px', 
                marginRight: '10px',
                '&:hover': {
                    backgroundColor: '#0077B5',
                    color: '#ffffff', // Facebook blue color
                  },
                  '&:hover .fab': {
                    color: '#4267B2',
                  } }}>
                <FaFacebookF />
              </Button>
              <Button variant="outlined" color="primary" className="me-3" href="https://x.com/SIFA_FC?mx=2" target="_blank" rel="noopener noreferrer" sx={{ 
                borderRadius: '50%', 
                padding: '10px', 
                width: '58px', 
                height: '58px',  
                marginRight: '10px',
                '&:hover': {
                    backgroundColor: '#0077B5',
                    color: '#ffffff', // Twitter blue color
                  },
                  '&:hover .fab': {
                    color: '#1DA1F2',
                  } }}>
                <FaTwitter />
              </Button>
              <Button variant="outlined" color="primary" className="me-3" href="https://www.youtube.com/@SIFA_FC" target="_blank" rel="noopener noreferrer" sx={{
                borderRadius: '50%', 
                padding: '10px', 
                width: '58px', 
                height: '58px',  
                marginRight: '10px',
                '&:hover': {
                    backgroundColor: '#0077B5',
                    color: '#ffffff' // youtube color
                  },
                  '&:hover .fab': {
                     color: 'rgba(255, 0, 0, 1)'
                  } }}>
                <FaYoutube />
              </Button>
              <Button variant="outlined" color="primary" href="https://www.linkedin.com/company/skills-initiative-for-africa/" target="_blank" rel="noopener noreferrer" sx={{ 
                borderRadius: '50%', 
                padding: '10px', 
                width: '58px',
                height: '58px',  
                marginRight: '10px',
                '&:hover': {
                    backgroundColor: '#0077B5',
                    color: '#ffffff', // LinkedIn blue color
                  },
                  '&:hover .fab': {
                    color: '#0077B5',
                  } }}>
                <FaLinkedinIn />
              </Button>
            </Box>
          </Grid>
        </Grid>
        </Container>
        <Box className="mx-auto text-center mb-3" style={{ maxWidth: '900px', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" className="text-primary px-3 mb-3" style={{ borderRadius: '9999px', width: '100%' }}>
            How the Siemens Mechatronics Certification Centre and the Advanced Virtual Reality Lab at Dedan Kimathi University of Technology fit into this initiative
          </Button>
        </Box>
{/* Purpose */}
      <Container className="py-5">
        <Grid container spacing={5} alignItems="center">
          <Grid item lg={6}>
            <Button variant="outlined" className="text-primary px-3 mb-3" style={{ borderRadius: '9999px',marginTop: '20px'  }}>Purpose</Button>
            <Typography variant="h4" gutterBottom
            sx={{marginTop: '10px',
              textAlign:'justify',
              fontFamily:'Open Sans,sans-serif',
              color:'#14183e',
              fontWeight:'bold',
          }}>Skills Initiative for Africa (SIFA)</Typography>
            <Typography paragraph
            sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontSize:'18px',
                color:'rgb(85,85,85)',
                fontWeight:'normal',
                padding:'0 20px',
                lineHeight:'1.5',
                fontFamily: 'Open sans, sans-serif',}}>
              SIFA is designed to address the skills gap in Africa by strengthening technical and vocational education
              and training. The initiative aims to enhance the employability of young Africans and align educational
              outcomes with the demands of the job market.
            </Typography>
            <Typography paragraph
            sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontSize:'18px',
                color:'rgb(85,85,85)',
                fontWeight:'normal',
                padding:'0 20px',
                lineHeight:'1.5',
                fontFamily: 'Open sans, sans-serif',}}>Key Stakeholders:</Typography>
            <Grid container spacing={3}>
              <Grid item sm={6}>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center',fontFamily: 'Open sans, sans-serif', color: '#14183e', fontWeight: 'bolder',fontSize:'14px' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                African Union Commision (AUC)
              </Typography>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bolder',fontSize:'14px' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                African Union Development Agency(AUDA-NEPAD)
              </Typography>
              </Grid>
              <Grid item sm={6}>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bolder',fontSize:'14px' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                German Government
              </Typography>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bolder',fontSize:'14px' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                European Union
              </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <img src={sifa} alt="SIFA" className="w-full h-auto" />
          </Grid>
        </Grid>
      </Container>
{/* roles */}
      <Box sx={{ 
          backgroundColor: 'rgba(244,247,254,255)',  // Full background color
          width: '100%',  // Ensure the Box takes the full width
          }}>
      <Container className="bg-light py-5 mt-5"
        sx={{ 
          padding: '50px 0',
          backgroundColor: 'rgba(244,247,254,255)',
          textAlign: 'center',
        }}>
        <Grid container spacing={5} alignItems="center">
          {/* Left side - Typography */}
          <Grid item lg={5}>
            <Button variant="outlined" className="text-primary px-3 mb-3" style={{ borderRadius: '9999px' }}>
              Role
            </Button>
            <Typography variant="h4" gutterBottom
              sx={{
                marginTop: '10px',
                textAlign: 'justify',
                fontFamily: 'Open Sans,sans-serif',
                color: '#14183e',
                fontWeight: 'bold',
                lineHeight:'1.5',
              }}>
              Siemens Mechatronics Certification Centre
            </Typography>
            <Typography paragraph
              sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontSize:'18px',
                color:'rgb(85,85,85)',
                fontWeight:'normal',
                padding:'0 20px',
                lineHeight:'1.5',
                fontFamily: 'Open sans, sans-serif',
              }}>
              The Siemens Mechatronics Certification Centre at Dedan Kimathi University of Technology is a crucial
              component of SIFA, offering specialized training in mechatronics.
            </Typography>
            <Button variant="contained" color="primary" className="rounded-pill px-4" href="service.html" style={{ borderRadius: '9999px' }}>
              Read More
            </Button>
          </Grid>

          {/* Right side - Grid with services */}
          <Grid item lg={7}sx={{borderRadius: '9999px'}}>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item md={6} lg={6} key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center text-center rounded-lg p-8 bg-white shadow-md hover:shadow-lg transition-all duration-300 group"
                      sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: '400px',
                        padding: '40px',
                        borderRadius: '20px',
                        position: 'relative',
                        color: 'black',
                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#1363c6',
                          transform: 'scale(1.05)',
                        }
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '5px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'rgba(244,247,254,255)',
                          color: '#1363c6',
                          padding: '30px',
                          borderRadius: '50%',
                          zIndex: 1,
                          '.group:hover &': {
                            backgroundColor: 'white',
                          }
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box sx={{ pt: '80px' }}>
                        <Typography variant="h5" className="mb-3"
                          sx={{
                            fontSize: '1.5rem',
                            zIndex: 1,
                            color: '#14183e',
                            fontWeight: 'bold',
                            '.group:hover &': {
                              color: 'white',
                            },
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography className="mb-3" sx={{ zIndex: 1, fontFamily: 'Font Awesome 5 Free', fontSize: '18px', fontWeight: 'normal',
                          '.group:hover &': { color: 'white' },
                        }}>
                          {service.description}
                        </Typography>
                        <Button variant="contained mt-4"
                          sx={{
                            backgroundColor: 'rgba(244,247,254,255)',
                            color: '#1363c6',
                            border: '2px solid #1363c6',
                            zIndex: 1,
                            borderColor: 'white',
                            borderRadius: '9999px',
                            padding: '10px 20px',
                            fontSize: '1rem',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              width: '35px',
                              height: '35px',
                              top: '0',
                              left: '0',
                              borderRadius: '35px',
                              backgroundColor: 'rgba(244,247,254,255)',
                              transition: 'width 0.5s ease',
                              zIndex: '-1',
                            },
                            '&:hover::before': {
                              width: '100%',
                              backgroundColor: 'white',
                            },
                            '&:hover': {
                              color: '#1363c6',
                            },
                          }}
                          href={service.link}
                        >
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Box>
         {/* Features */}
          <Box className="container-fluid bg-primary text-white py-12">
            <Box className="container mx-auto" sx={{ 
                padding: '50px 20px',  // Add horizontal padding to move content away from margin
                backgroundColor: '#1363c6',  // Background color
                textAlign: 'center',
                color:'#FFFFFF'
            }}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} className="mb-8" sx={{backgroundColor:'transparent',textDecoration:'#FFFFFF',position:'relative'}} >
                  <Button 
                    variant="outlined" 
                    sx={{ 
                        position: 'absolute',
                        top: '0px',
                        borderColor: '#ffffff', // Set border color to grey
                        borderRadius: '9999px', // Make the button fully rounded
                        color: '#ffffff' // Set button text color
                    }} 
                    className="px-6 py-2 mb-8"
                  >
                    Features
                  </Button>
                  <Typography variant="h3" className="mb-4" sx={{textDecoration:'#FFFFFF'}}>
                    Advanced Virtual Reality Lab
                  </Typography>
                  <Typography className="mb-4"
                    sx={{
                      textDecoration:'#FFFFFF',
                      textAlign:'justify', // Justify text
                      padding:'0px 20px' // Add horizontal padding
                    }}>
                    The Advanced Virtual Reality Lab at Dedan Kimathi University of Technology enhances the training provided by integrating virtual reality technology into the curriculum.
                  </Typography>

                  <FeatureList />
                  
                  <Grid container spacing={4} pt={3}>
                    <Grid item xs={12} sm={6}>
                      <Box className="d-flex align-items-center rounded p-3"
                        sx={{
                          background: 'rgba(256, 256, 256, 0.1)',
                          flexDirection: 'row',
                          gap: 2, // Space between icon and text
                          justifyContent: 'flex-start' // Align items to start of row
                        }}
                      >
                        <Box
                            className="d-flex align-items-center rounded p-3"
                            sx={{ background: 'rgba(256, 256, 256, 0.1)', flexDirection: 'row', alignItems: 'center' }}
                        >
                            <i className="fa fa-users text-white" style={{ fontSize: '24px', marginRight: '16px' }}></i>
                            <Box>
                            <Typography variant="h2" className="text-white mb-0">
                                <AnimatedNumber endNumber={9999} /> {/* Ensure you're passing a number */}
                            </Typography>
                            <Typography className="text-white mb-0">
                                Happy students
                            </Typography>
                            </Box>
                        </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box
                        className="d-flex align-items-center rounded p-3"
                        sx={{ 
                          background: 'rgba(256, 256, 256, 0.1)', 
                          flexDirection: 'row', 
                          alignItems: 'center'
                        }}
                      >
                        <Box
                            className="d-flex align-items-center rounded p-3"
                            sx={{ background: 'rgba(256, 256, 256, 0.1)', flexDirection: 'row', alignItems: 'center' }}
                        >
                            <i className="fa fa-check text-white" style={{ fontSize: '24px', marginRight: '16px' }}></i>
                            <Box>
                            <Typography variant="h2" className="text-white mb-0">
                                <AnimatedNumber endNumber={9999} /> {/* Ensure you're passing a number */}
                            </Typography>
                            <Typography className="text-white mb-0">
                                Project Complete
                            </Typography>
                            </Box>
                        </Box>
                        </Box>
                    </Grid>
  
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="text-center md:text-right">
                  <img className="img-fluid rounded-lg shadow-lg" src={choose} alt="img" />
                </Grid>
              </Grid>
            </Box>
          </Box>

            {/* integration and impact */}
            <Box className="container-fluid bg-gray-100 py-12" sx={{
                display: 'flex',  // Use flexbox to align items
                justifyContent: 'center',  // Center horizontally
                alignItems: 'center',  // Center vertically
                backgroundColor: 'white',
                padding: '50px 0',  // Padding around the section
              }}>
                <Box className="container mx-auto text-center"
                sx={{ 
                  textAlign: 'center',  // Center the content
                  display: 'flex',  // Flexbox for inner content
                  flexDirection: 'column',  // Stack elements vertically
                  justifyContent: 'center',  // Center horizontally
                  alignItems: 'center',  // Center vertically
                  padding: '50px 0',  // Padding around the section
                }}>
            
                    <Button variant="contained" backgroundColorcolor="#1363c6" className="rounded-fulls text-white px-6 py-2 mb-8" sx={{ borderRadius: '9999px', fontSize:'24px'}}>
                        INTEGRATION AND IMPACT
                    </Button>
                    <Grid container spacing={5}sx={{padding:'20px', backgroundColor: 'white', 
                        // padding: '10px', 
                        justifyContent: 'center',  // Center the grid items horizontally
                        alignItems: 'center',  // Center the grid items vertically
                     
                    }} >
                        <Grid item xs={12} md={6}>
                            <AccordionComponent items={accordionItems} />
                            <AccordionComponent items={accordionItems1} />
                            <AccordionComponent items={accordionItems2} />
                            <AccordionComponent items={accordionItems3} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

    </div>
  );
};
const FeatureList = () => (
  <>
      {[
          'Immersive Simulations: Uses virtual reality to create interactive and immersive simmulations of mechatronics systems and processes.',
          'Hands-0n Training: Provides practical, experiental learning opportunities without the need for physical equipment.',
          'Innovative Learning: Incorprates advanced VR technology into education, preparing students for future roles in industries.',
      ].map((feature, index) => (
          <Typography key={index} variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 ,marginLeft:'50px', justifyContent: 'flex-start'}}>
              <Box 
                  sx={{ 
                      bgcolor: 'white', 
                      color: '#1363C6', 
                      borderRadius: '50%', 
                      width: 32, 
                      height: 32, 
                      marginLeft:'18px',
                      display: 'flex',  
                      justifyContent: 'center', 
                      mr: 3 // Margin right for spacing between icon and text
                  }}
              >
                  <i className="fa fa-check"></i>
              </Box>
              <Box sx={{ flex: 1 }}>
              {feature}
              </Box>
          </Typography>
          
      ))}
  </>
);
const AnimatedNumber = ({ endNumber }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: endNumber },
    config: { duration: 4000 },
  });

  return (
    <animated.span>
      {number.to(n => n.toFixed(0))}
    </animated.span>
  );
};

const AccordionComponent = ({ items }) => (
  <div>
      {items.map((item, index) => (
          <Accordion 
              key={index} 
              sx={{
                  boxShadow: 'none', // Remove box shadow
                  border: 'none',  // Remove border
                  backgroundColor: 'white',  // Background color
                  '&.Mui-expanded': {
                      backgroundColor: 'rgba(244,247,254,255)',  // Background color when expanded
                  },
                  // Increase accordion size
                  width: '100%',  // Set to full width
                  marginBottom: '20px',  // Add spacing between accordions
              }}
          >
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                      backgroundColor: 'rgba(244,247,254,255)',  // Background color for the title
                      fontSize: '1.25rem',  // Increase font size
                      '& .MuiAccordionSummary-content': {
                          marginBottom: 0,  // Adjust content spacing
                      },
                      // Increase accordion title size
                      padding: '20px',  // Increase padding for a larger clickable area
                      '&.Mui-expanded': {
                          bgcolor: '#1363c6',  // Background color when expanded
                          color: 'white',  // Change text color to white when expanded
                      },
                  }}
              >
                  <Typography sx={{ fontWeight: 'bold', textAlign: 'justify' }}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails
                  sx={{
                      padding: '20px',  // Adjust padding for larger details area
                      backgroundColor: 'white',  // Background color for details
                      textAlign: 'justify',  // Ensure text is justified
                  }}
              >
                  <Typography>{item.content}</Typography>
              </AccordionDetails>
          </Accordion>
      ))}
  </div>
);



export default Sifa;