import React from 'react';
import { Button, Container, Typography, Grid, Box, Toolbar } from '@mui/material';
import { FaRobot, FaGraduationCap, FaPowerOff, FaBrain } from 'react-icons/fa';
import ws1 from '../assets/img/worldskill/pic1.png';
import Pic1 from '../assets/img/pic1.png'
import pic2 from '../assets/img/project1.png';
import pic3 from '../assets/img/project2.png';
import ws2 from '../assets/img/worldskill/Untitled design (1).png';
import ws3 from '../assets/img/worldskill/DeKUT-team-after-the-Closing-Ceremony.png'
import ws4 from '../assets/img/worldskill/Pic.png';
import ws5 from '../assets/img/worldskill/Pic2.png';
import ws6 from '../assets/img/worldskill/Untitled design.png';
import Worldskill1 from '../assets/img/worldskill/worldskillphoto.png'
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   imageWrapper: {
//     position: 'relative',
//     width: '100%',
//     overflow: 'hidden',
//   },
//   image: {
//     display: 'block',
//     width: '100%',
//     height: 'auto',
//   },
//   descriptionOverlay: {
//     position: 'absolute',
//     bottom: '0',
//     left: '0',
//     width: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     color: 'white',
//     textAlign: 'center',
//     padding: '10px',
//     transform: 'translateY(100%)',
//     transition: 'transform 0.3s ease-in-out',
//   },
//   imageWrapperHover: {
//     '&:hover $descriptionOverlay': {
//       transform: 'translateY(0)',
//     },
//   },
// });
const services = [
  {
    icon: <FaRobot size={32} />,
    title: 'Virtual Reality',
    description: 'Explore and interact with 3D worlds through advanced simulations, opening new possibilities for education, entertainment, and innovation.',
    link: '#'
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: 'Virtual Mechatronics',
    description: 'Virtual Mechatronics is a cutting-edge platform that bridges the physical and digital worlds of engineering.',
    link: '#'
  },
  {
    icon: <FaPowerOff size={32} />,
    title: 'Robotic Automation',
    description: 'Technology that makes it easy to build, deploy, and manage robots that emulate humans actions interacting with digital systems and software.',
    link: '#'
  },
  {
    icon: <FaBrain size={32} />,
    title: 'Virtual Design',
    description: 'Creation of immersive, computer-generated environments for various industries.',
    link: '#'
  }
];


const WorldSkills = () => {
  return (
    <>
      {/* About Start */}
      <Container className="py-1">
        <Box className="text-center mx-auto max-w-md wow fadeIn" data-wow-delay="0.1s"
           sx={{ 
            padding: '50px 0',  // Padding around the section
            backgroundColor: 'white',  // Background color
            textAlign: 'center',  // Center the content
        }} >
          <Button variant="outlined" color="primary" className="rounded-full px-3 mb-3"
          sx={{ 
              borderColor: 'grey.400', // Set border color to grey
              borderRadius: '9999px', // Make the button fully rounded
              color: 'primary.main',
          }} 
            >
            WORDSKILLS
          </Button>
        </Box>
        <Grid container spacing={5} alignItems="center">
          <Grid item lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <Box className="overflow-hidden rounded-lg">
                <Toolbar>
                    <Toolbar tittle="Worldskill">
                    <img className="w-full h-auto" 
                    src={ws1}
                    alt="worldskills"
                    style={{
                        width:'100%',
                        height:'100%',
                        marginRight:'10px',
                        objectFit:'contain',
                        overflowClipMargin:'content-box',
                            }} />
                    </Toolbar>
                </Toolbar>
              
            </Box>
          </Grid>
          <Grid item lg={6} className="wow fadeIn" data-wow-delay="0.5s">
            <Typography variant="h4" className="mb-4"sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontFamily:'Open Sans,sans-serif',
                color:'#14183e',
                fontWeight:'bold',}}>Worldskills Competition</Typography>
            <Typography className="mb-4"
             sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontSize:'16px',
                fontFamily:'Open Sans,sans-serif',
                color:'rgb(85,85,85)',
                fontWeight:'400',
                padding:'0 20px',
                lineHeight:'24px'}}>
              The WorldSkills International competition is the peak vocational skills competition for young people across the world. It was started in Spain in 1950 and is currently in 85 countries all over the world.
            </Typography>
            <Typography className="mb-4"
            sx={{ 
                marginTop: '10px',
                textAlign:'justify',
                fontSize:'16px',
                fontFamily:'Open Sans,sans-serif',
                color:'rgb(85,85,85)',
                fontWeight:'400',
                padding:'0 20px',
                lineHeight:'24px'}}>
              On 13th October 2020, WorldSkills Kenya (WSK) was ratified as the 84th state to host skills competitions. Kenya is preparing to participate in the upcoming competition organized by WorldSkills International (WSI).
            </Typography>
             <Grid container spacing={3}>
            <Grid item sm={6}>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                Global vocational Competition
              </Typography>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                Worldskills Kenya
              </Typography>
            </Grid>
            
            <Grid item sm={6}>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                Tvet Training
              </Typography>
              <Typography className="flex items-center mt-2" sx={{ display: 'flex', alignItems: 'center', color: '#14183e', fontWeight: 'bold' }}>
                <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                Competent Instructors
              </Typography>
            </Grid>
          </Grid>

            <Box className="flex items-center mt-4">
              <Button variant="contained" color="primary" className="rounded-full px-4 mr-3" component="a" href="https://sites.google.com/view/worldskills-fair/home" target="_blank" rel="noopener noreferrer" sx={{borderRadius: '9999px',marginRight:'10px'}}>
                Read More
              </Button>
              <Button variant="contained" color="primary" className="rounded-full px-4 mr-3" component="a" href="https://worldskills.org/" target="_blank" rel="noopener noreferrer" sx={{borderRadius: '9999px',marginRight:'10px'}}>
                Visit Worldskills
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* About End */}

      <Box className="bg-light py-12"
      sx={{ 
        padding: '50px 0',  // Padding around the section
        backgroundColor: 'rgba(244,247,254,255)',  // Background color
        textAlign: 'center',  // Center the content
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6} data-wow-delay="0.5s">
            <Box className="btn btn-sm border rounded-pill text-primary px-3 mb-3"
            sx={{ 
              borderColor: 'grey.400', // Set border color to grey
              borderRadius: '9999px', // Make the button fully rounded
              color: 'primary.main',
          }}>
              WorldSkills 1
            </Box>

            <Typography variant="body1" className="mb-4"
            sx={{ 
              marginTop: '10px',
              textAlign:'justify',
              fontSize:'16px',
              fontFamily:'Open Sans,sans-serif',
              color:'rgb(85,85,85)',
              fontWeight:'400',
              padding:'0 20px',
              lineHeight:'24px'}}>
              To organize successful Mechatronics skills competitions World Skills Kenya has selected Prof.Eng. Jean Bosco Byiringiro (Ph.D, Reg. Eng.) to champion mechatronics skills both locally and internationally through preparing excellent competitors at Siemens Mechatronics Centre.
            </Typography>

            <Typography variant="body1" className="mb-4"
            sx={{ 
              marginTop: '10px',
              textAlign:'justify',
              fontSize:'16px',
              fontFamily:'Open Sans,sans-serif',
              color:'rgb(85,85,85)',
              fontWeight:'400',
              padding:'0 20px',
              lineHeight:'24px'}}>
              Cash-for-houses.org utilizes advanced technologies to expedite sales and ensure customer satisfaction:
            </Typography>

            <Grid container spacing={3}>
             <Grid item xs={12} sm={6}>
                <Typography className="flex items-center mt-2"  sx={{ color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                  Advanced tech: Cutting-edge, industry-leading tools.
                </Typography>
                <Typography className="flex items-center mt-2" sx={{ color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                  Experienced staff: Handle every inquiry stage.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography className="flex items-center mt-2" sx={{ color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                  Guaranteed sale: Profit or full refund.
                </Typography>
                <Typography className="flex items-center mt-2" sx={{ color: '#14183e', fontWeight: 'bold' }}>
                  <i className="fa fa-check" style={{ color: 'blue', marginRight: '8px', fontWeight: '900' }}></i>
                  Simplified selling: Customer satisfaction assured.
                </Typography>
              </Grid>
              </Grid>


            <Box className="flex items-center mt-4">
              <Button
                variant="contained"
                className="rounded-pill px-4 me-3"
                href="https://www.cash-for-houses.org/iowa/cash-for-my-house-winterset-ia/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                SX={{borderRadius: '9999px'}}
                
              >
                Read More
              </Button>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} data-wow-delay="0.1s">
            <Box className="about-img">
              <img
                className="img-fluid"
                src={Worldskill1}
                alt="Worldskills"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
      {/* Artists Section */}
      <Container className="py-5"sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'white',  // Background color
                    textAlign: 'center',  // Center the content
                }}>
                  <Typography variant='h4'sx={{fontWeight:'bold',color:'#14183e'}}>WorldSkills 2</Typography>
                  <Grid container spacing={5} justifyContent="center">
                    <Grid item lg={5} xs={12}>
                      <Box className="relative overflow-hidden mb-8" sx={{ borderRadius: '9999px' }}>
                        <img src={ws2} alt="Worldskill 1" className="w-full rounded-lg" />
                        <Box className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 py-2 px-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <Typography variant="body1" className="text-light">Speech</Typography>
                        </Box>
                      </Box>

                      <Box className="relative overflow-hidden mb-8">
                        <img src={ws4} alt="Worldskills Participants 1" className="w-full rounded-lg" sx={{ borderRadius: '9999px' }} />
                        <Box className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 py-2 px-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <Typography variant="body1" className="text-light">Worldskills Participants 1</Typography>
                        </Box>
                      </Box>

                      <Box className="relative overflow-hidden mb-8">
                        <img src={ws5} alt="Worldskills Participants" className="w-full rounded-lg" sx={{ borderRadius: '9999px' }} />
                        <Box className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 py-2 px-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <Typography variant="body1" className="text-light">Worldskills Participants</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item lg={5} xs={12}>
                      <Box className="relative overflow-hidden mb-8">
                        <img src={ws3} alt="Worldskills Participants" className="w-full rounded-lg" sx={{ borderRadius: '9999px' }} />
                        <Box className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 py-2 px-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <Typography variant="body1" className="text-light">Worldskills Participants and the Instructors</Typography>
                        </Box>
                      </Box>

                      <Box className="relative overflow-hidden mb-8">
                        <img src={ws1} alt="Worldskills" className="w-full rounded-lg" sx={{ borderRadius: '9999px' }} />
                        <Box className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 py-2 px-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <Typography variant="body1" className="text-light">Worldskills Participants and the Instructors</Typography>
                        </Box>
                      </Box>

                      <Box className="relative overflow-hidden mb-8">
                        <img src={ws6} alt="Jean Bosco Addressing Participants" className="w-full rounded-lg" sx={{ borderRadius: '9999px' }} />
                        <Box className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 py-2 px-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <Typography variant="body1" className="text-light">Prof Eng. Jean Bosco Addressing the Participants</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>

      </Container>
      
        <Box className="bg-light mt-5 py-5"
              sx={{ 
                padding: '50px 0',  // Padding around the section
                backgroundColor: 'rgba(244,247,254,255)',  // Background color
                textAlign: 'center',  // Center the content
              }}>
              <Grid container spacing={5} alignItems="center">
                <Grid item lg={12}>
                  <Grid container spacing={4}>
                    {services.map((service, index) => (
                      <Grid item md={3} key={index}>
                        {/* Increased box size */}
                        <Box className="flex flex-col items-center text-center rounded-lg p-8 bg-white shadow-md hover:shadow-lg transition-all duration-300 group"
                          sx={{
                            backgroundColor: 'white',  // Default box background
                            width: '100%',  // Set default width
                            height: '400px',  // Increased height
                            padding: '40px',  // Increased padding for more space
                            borderRadius:'20px',
                            position: 'relative',
                            color: 'black',  // Default text color
                            transition: 'background-color 0.3s ease, transform 0.3s ease',  // Smooth transitions
                            '&:hover': {
                  backgroundColor: '#1363c6',  // Box background on hover
                  transform: 'scale(1.05)',  // Increase box size on hover
                  transition: 'background-color 0.3s ease, transform 0.3s ease',}
                          }}
                        >
                          {/* Icon */}
                          <Box
                            sx={{
                              position: 'absolute',  // Absolute positioning within the box
                              top: '5px',  // Adjust as needed
                              left: '50%',
                              transform: 'translateX(-50%)',  // Center the icon horizontally
                              backgroundColor: 'rgba(244,247,254,255)',  // Icon background same as box
                              color: '#1363c6',  // Icon color blue
                              padding: '20px',  // Increased padding for icon
                              borderRadius: '50%',
                              transition: 'background-color 0.3s ease, color 0.3s ease',
                              zIndex: 1,  // Ensure icon stays above the background color
                              '.group:hover &': {
                                 backgroundColor: 'white',  // Change background to white on hover
                  }
                            }}
                          >
                            {service.icon}
                          </Box>
                          <Box sx={{ pt: '80px' }}> {/* Increased padding top to avoid overlap */}
                            {/* Increased font size */}
                            <Typography variant="h5" className="mb-3"
                              sx={{
                                fontSize: '1.5rem',  // Increased font size
                                zIndex: 1, 
                                color:'#14183e', 
                                fontWeight: 'bold', // Ensure the typography text is above the hover effect
                                '.group:hover &': {  // Change text color to white on hover
                                      color: 'white',
                                  },
                              }}
                            >
                              {service.title}
                            </Typography>
                            {/* Increased description font size */}
                            <Typography className="mb-3" sx={{ zIndex: 1, fontFamily:'Font Awesome 5 Free', fontSize:'18px', fontWeight:'normal',
                              '.group:hover &': {  // Change text color to white on hover
                      color: 'white',
                                   },
                             }}>
                              {service.description}
                            </Typography>
                            {/* Button with consistent size */}
                            <Button variant="contained mt-4"
                              sx={{
                                backgroundColor: 'rgba(244,247,254,255)',  // Button background default
                                color: '#1363c6',  // Button text color default
                                border: '2px solid #1363c6',  // Add a border for consistency
                                zIndex: 1,
                                borderColor: 'white',
                                borderRadius: '9999px',
                                padding: '10px 20px',  // Increased button padding for a bigger button
                                fontSize: '1rem',  // Increased button font size
                                '&::before': {
                                  content: '""',  // Create the pseudo-element
                                  position: 'absolute',
                                  width: '35px',
                                  height: '35px',
                                  top: '0',
                                  left: '0',
                                  borderRadius: '35px',  // Rounded corner for pseudo-element
                                  backgroundColor: 'rgba(244,247,254,255)',  // Background before hover
                                  transition: 'width 0.5s ease', 
                                  transitonBehavior:'normal',
                                  transitionDuration:'0.5s',
                                  transitionTimingFunction:'ease',
                                  transitionDelay:'0s',
                                  transitionProperty:'all',
                                  zIndex: '-1',  // Behind the button content
                                },
                                '&:hover::before': {
                                width: '100%',  // Full width on hover
                                backgroundColor: 'white',  // Change to white background on hover
                              },
                              '&:hover': {
                                color: '#1363c6',  // Keep the text color blue on hover
                              },
                            }}
                              href={service.link}
                            >
                              Read More
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>


       {/* Projects Section */}
       <Box className="container-fluid bg-gray-100 py-12">
                <Box className="container mx-auto text-center"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'light grey',  // Background color
                    textAlign: 'center',  // Center the content
                }}>
                <Button 
                        variant="outlined" 
                        sx={{ 
                            borderColor: 'grey.400', // Set border color to grey
                            borderRadius: '9999px', // Make the button fully rounded
                            color: 'primary.main',
                        }} 
                        className="px-6 py-2 mb-8"
                    >
                    Projects
                    </Button>
                    <Typography variant="h4" className="mb-8" sx={{ color: '#14183e', fontWeight:'bold' }}>
                        Explore Our Recent 
                        <br></br>Projects
                    </Typography>
                    <Grid container spacing={4}>
                        <ProjectItem1
                        imgSrc={Pic1}
                         title="Robotic Automation"
                         description="Management of software robots that emulate human actions interacting with digital systems and software."
                         />
                      
                        <ProjectItem1
                             imgSrc={pic2} //alt:"Virtual Reality"
                            title="Virtual Reality"
                            description="Explore and interact with 3D worlds through advanced simulations."
                        />
                        <ProjectItem1
                            imgSrc={pic3}
                            title="Virtual Mechatronics"
                            description="Our innovative simulations and tools empower users to explore mechatronics."
                        />
                    </Grid>
                </Box>
            </Box>
    </>
  );
};
const ProjectItem1 = ({ imgSrc, title, description }) => (
    <Grid item xs={12} md={4}>
        <Box 
            className="relative overflow-hidden rounded-lg shadow-lg mb-4"
            sx={{position: 'relative', 
                margin: '24px', 
                marginLeft:'24px', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                transition: 'transform 0.3s ease-in-out',  
                '&:hover': {
                    transform: 'scale(1.05)', 
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                }

             }} 
        >
            <img 
                className="w-full h-56 object-cover" 
                src={imgSrc} 
                alt={title} 
                style={{ opacity: 0.7, height:'100%',  objectFit: 'cover',
                }} 
            />
           <Box 
                className="absolute inset-0"
                sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 255, 0))',  
                    display: 'flex',  
                    flexDirection: 'column',  
                    justifyContent: 'center',  
                    alignItems: 'center', 
                    color: 'white',  
                    textAlign: 'center',  
                    '&:hover': {
                    transform: 'scale(1.05)', 
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                }
                }}
            >
                <Typography 
                    variant="h6" 
                    sx={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Dark grey translucent background
                        padding: '2px 4px',  // Add padding to the title
                        borderRadius: '4px',  // Curved margins
                        display: 'inline-block',  // Ensure the background fits the text
                        marginBottom: '8px',
                        marginLeft:'0px',
                        textAlign:'justify',  // Space below the title
                    }}
                >
                    {title}
                </Typography>
                <br></br>
                <Typography 
                    variant="body2" 
                    sx={{ 
                        color: '#ffffff',  // Darker font color for description
                        fontSize: '20px',  // Increase font size to 16px
                        marginBottom: '18px',
                        fontWeight:'700',
                        textAlign:'justify',
                        marginLeft:'0px'
                    }}
                >
                    {description}
                </Typography>
                <br></br>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ 
                        borderRadius: '50%',  // Make the button circular
                        minWidth: '50px',  // Minimum width to keep it circular
                        height: '50px',  // Height to match the width
                        marginLeft: '0px',  // Move the button to the left a little
                        marginRight: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'justify',
                    }}
                >
                    <i className="fa fa-arrow-right"></i>
                </Button>
            </Box>
        </Box>
    </Grid>
);
export default WorldSkills;
