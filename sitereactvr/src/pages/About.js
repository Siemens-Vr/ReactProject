import React from 'react';
import Button from '@mui/material/Button';
import {Toolbar, Box, Tooltip,Grid, Typography} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imgabout from '../assets/video/vmvideo.mp4';
import vidAR from '../assets/video/vmvideo.mp4';
import prof from '../assets/video/Prof.-Eng.-Jean-Bosco-Byiringiro.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const accordionItemsLeft = [
  {
      title: 'What is Virtual Mechatronics',
      content: (
          <>
              <p>Virtual Mechatronics is an online platform that offers interactive simulations and educational resources in the field of mechatronics, which integrates mechanical engineering, electrical engineering, computer science, and control engineering.</p>
          </>
      ),
  },
];
const accordionItemsLeft1 =[    
  {
      title: 'What kind of simulations that virtual Mechatronics offer?',
      content: (
          <>           
              <p>We offer a wide range of simulations covering topics such as robotics, automation, control systems, sensors and actuators, and more. Users can interact with virtual models, test designs, and learn about real-world applications.</p>
          </>
      ),
  },
];
const accordionItemsLeft2 =[    
  {
      title: 'Can i use Virtual Mechatronics for educational purposes ?',
      content: (
          <>            
              <p>Yes, Virtual Mechatronics is an excellent educational tool. Teachers can incorporate our simulations into their curriculum to enhance learning in mechatronics and related subjects.</p>
          </>
      ),
  },
];
const accordionItemsLeft3 =[    
  {
      title: 'Who can benefit from virtual Mechatronics ?',
      content: (
          <>
              <p>Virtual Mechatronics is designed for students, educators, researchers, and professionals interested in mechatronics, robotics, and related fields. Whether you're a beginner or an expert, there's something for everyone.</p>
          </>
      ),
  },
];

const accordionItemsRight = [
  {
      title: 'What is Virtual Reality?',
      content: (
          <>
              <p>Virtual reality (VR) is a technology that immerses users in a computer-generated environment, allowing them to interact with and experience a simulated reality</p>
          </>
      ),
  },
];
const accordionItemsRight1 = [
  {
      title: 'How does virtual reality work',
      content: (
          <>
              <p>Virtual reality works by creating a 3D environment using computer-generated graphics or capturing real-world environments through 360-degree cameras</p>
         </>
      ),
  },
];
const accordionItemsRight2 = [
  {
      title: 'Can anyone use virtual reality',
      content: (
          <>
              <p>Virtual reality can be enjoyed by people of all ages, though certain experiences may be more suitable for different age groups.</p>
         </>
      ),
  },
];
const accordionItemsRight3 = [
  {
      title: 'What are the benefits of virtual reality',
      content: (
          <>
              <p>Virtual reality offers numerous benefits, including immersive and engaging experiences, enhanced learning and training opportunities, therapeutic applications for healthcare, increased accessibility to remote locations or experiences, and new forms of entertainment and creativity.</p>
         </>
      ),
  },
];


const About = () => {
    return (
      <div>
        <div className="content">
            {/* Home Section */}
            <Box className="container-fluid mt-8" sx={{textAlign: 'center', maxWidth: '1200px', margin: '0 auto'}}>
                    <Box className="home-section"
                        sx={{ 
                            padding: '50px 0',
                            backgroundColor: 'white',
                            textAlign: 'center',
                        }}
                    >
                    <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{padding:'20px 0px'}}>
                        <Grid item xs={12} md={6}>
                        <Box className="about-img" sx={{display: 'flex', justifyContent: 'center'}}>
                            <Toolbar>
                                <Tooltip title="home" >
                                    <video className='img-fluid rounded-lg shadow-lg' autoPlay loop muted playsInline 
                                    src={imgabout}
                                    alt="home"
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        marginRight: '10px',
                                        objectFit:'contain',
                                        overflowClipMargin:'content-box',
                                        overflow:'clip',
                                        pointerEvents: 'none'
                                       }}/>
                                     </Tooltip>
                                     </Toolbar>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" className="mb-4"
                             sx={{ 
                                justifyContent:'center',
                                textAlign:'justify',
                                fontFamily:'Open Sans,sans-serif',
                                color:'#14183e',
                                fontWeight:'bold',}}>
                                Virtual Mechatronics Lab
                            </Typography>
                            <Typography className="mb-4"
                              sx={{
                                textAlign: 'justify', 
                                fontSize: '18px', 
                                color: 'rgb(85,85,85)',
                                fontWeight: 'normal', 
                                lineHeight: '1.5', 
                                fontFamily: 'sans-serif',
                                justifyContent:'centre',
                            }}>
                                We are a pioneering Virtual Mechatronics Lab at Dedan Kimathi, specializing in merging virtual reality with mechatronics engineering.
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: 'justify', 
                                fontSize: '18px', 
                                color: 'rgb(85,85,85)',
                                fontWeight: 'normal', 
                                lineHeight: '1.5', 
                                fontFamily: 'sans-serif',
                                justifyContent:'centre',
                            }}>
                                By bridging the gap between physical limitations and mechatronics facilities, we make advanced engineering accessible through immersive virtual experiences. 
                            </Typography>
                            <Typography className="mt-4 mb-4"
                              sx={{
                                textAlign: 'justify', 
                                fontSize: '18px', 
                                color: 'rgb(85,85,85)',
                                fontWeight: 'normal', 
                                lineHeight: '1.5', 
                                fontFamily: 'sans-serif',
                                justifyContent:'centre',
                            }}>
                            Discover a new realm of innovation and hands-on learning with us.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
        <div className="content">
            {/* Home Section */}
            <Box className="container-fluid mt-8" sx={{backgroundColor: 'rgba(244,247,254,255)'}}>
                <Box  className="home-section"
                sx={{ 
                            
                    textAlign: 'center',
                    maxWidth:'1200px',
                    margin: '0 auto',
                    marginleft:'120px',
                
                }}>
                    <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={5} sx={{position:'relative'}}>
                    <Typography variant="h3" className="mb-4 mt-4" sx={{color:'#14183e', fontWeight:'bold', textAlign:'center'}}>
                                Virtual Reality
                            </Typography>
                            <Typography className="mb-4"
                             sx={{
                                textAlign: 'justify', 
                                fontSize: '18px', 
                                color: 'rgb(85,85,85)',
                                fontWeight: 'normal', 
                                lineHeight: '1.5', 
                                justifyContent:'center',
                                fontFamily: 'sans-serif',
                                marginTop:'20px', marginBottom:'20px',
                            }}>
                                We revolutionize mechatronics education through virtual reality, simulating real-world environments and machinery for an interactive, hands-on experience. Our advanced VR technology lets users explore, design, and test mechatronic systems in a fully immersive digital space, enhancing creativity and technical skills. Join us in bridging theoretical knowledge and practical application, shaping the future of engineering education.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="about-img" >
                            <Toolbar>
                                <Tooltip title="home" >
                                <Typography variant="h4" className="mb-4 mt-4" sx={{color:'#14183e', fontWeight:'bold', textAlign:'justify', marginBottom:'20px'}}>
                               New Approach to Teaching Students Using AR
                            </Typography>
                                    <video className='img-fluid rounded-lg shadow-lg' autoPlay loop muted playsInline 
                                    src={vidAR}
                                    alt="home"
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        marginRight: '10px',
                                        objectFit:'contain',
                                        overflowClipMargin:'content-box',
                                        overflow:'clip',
                                        pointerEvents: 'none'
                                       }}/>
                                     </Tooltip>
                                     </Toolbar>

                            </Box>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Box>
        </div>
        {/* Accordion */}
        <Box className="container-fluid bg-gray-100 py-12">
                <Box className="container mx-auto text-center" style={{color:'#ffffff'}}
                sx={{         
                    textAlign: 'center',
                    maxWidth:'1200px',
                    margin: '0 auto',
                    marginleft:'120px',
                }}>
                    <Typography variant="h4" className="mb-4 mt-4" sx={{color:'#14183e', fontWeight:'bold', textAlign:'center',marginTop:'40px'}}>
                               Frequently Asked <br/>
                               Questions
                            </Typography>
                    <Grid container spacing={5}sx={{padding:'20px', marginBottom:'50px'}}>
                        <Grid item xs={12} md={6}>
                            <AccordionComponent items={accordionItemsLeft} />
                            <AccordionComponent items={accordionItemsLeft1} />
                            <AccordionComponent items={accordionItemsLeft2} />
                            <AccordionComponent items={accordionItemsLeft3} />
                        
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <AccordionComponent items={accordionItemsRight} />
                            <AccordionComponent items={accordionItemsRight1} />
                            <AccordionComponent items={accordionItemsRight2} />
                            <AccordionComponent items={accordionItemsRight3} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
             <div className="content">
            {/* Home Section */}
            <Box className="container-fluid mt-8"sx={{backgroundColor: 'rgba(244,247,254,255)'}}>
                <Box  className="home-section"
               sx={{           
                textAlign: 'center',
                maxWidth:'1200px',
                margin: '0 auto',
                marginleft:'120px',
                height:'100%'
            }}>
                    <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} md={5}>
                            <Typography variant="h4" className="mb-4"
                             sx={{ 
                                marginTop: '10px',
                                marginLeft:'50px',
                                textAlign:'justify',
                                fontFamily:'Open Sans,sans-serif',
                                color:'#14183e',
                                fontWeight:'bold'}}>
                                Meet Our Experienced Team Members
                            </Typography>
                            <Typography className="mb-4"
                                sx={{
                                    marginTop: '20px',
                                    textAlign: 'justify',
                                    fontSize: '20px',
                                    color: 'rgb(85,85,85)',
                                    fontWeight: 'normal',
                                    padding: '0 20px',
                                    lineHeight: '1.5',
                                    fontFamily: 'sans-serif',
                                }}>
                               Our team has a pool of highly qualified academic and technical staff who specialize in merging virtual reality with mechatronic engineering
                            </Typography>
                            <Button variant="contained" color="primary" className="rounded-full px-6 py-2" sx={{borderRadius: '9999px',marginRight:'10px'}}> 
                                Read More
                            </Button>
                        </Grid>
                        
                        <Grid item xs={12} md={5}>
                            <Box className="about-img" sx={{marginBottom:'40px', marginTop:"40px"}} >
                            <Toolbar sx={{ justifyContent: 'center', display: 'flex' }}> {/* Center the entire toolbar content */}
      <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        {/* Avatar with centered alignment */}
        <Avatar
          alt="Remy Sharp"
          src={prof} // Ensure the image source is valid
          sx={{ width: 100, height: 100, marginBottom: '20px' }} // Adds margin to separate from content
        />
        
        {/* Card content */}
        <CardContent sx={{ textAlign: 'center' }}> {/* Center text alignment */}
          <Typography variant="h6" component="div">
            Prof. Eng. Jean Bosco Byiringiro
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Director
          </Typography>
        </CardContent>
        
        {/* Card actions */}
        <CardActions sx={{ justifyContent: 'center' }}> {/* Centers buttons */}
        <Button variant="contained" color="primary" className="rounded-full px-6 py-2" sx={{borderRadius: '9999px',marginRight:'10px'}}>
                                Biography
                            </Button>
        </CardActions>
      </Card>
    </Toolbar>


     </Box>
    </Grid>                   
    </Grid>
</Box>
</Box>
        </div>
             {/* Testimonial Section */}
             <Box className="container-xxl py-12">
                <Box className="container mx-auto"
                 sx={{           
                    textAlign: 'center',
                    maxWidth:'1200px',
                    margin: '0 auto',
                    marginleft:'120px',
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" className="mb-4"sx={{ color: '#14183e', fontWeight:'bold', marginTop:'40px' }}>
                                What Our Clients Say!
                            </Typography>
                            <Typography className="mb-4"
                             sx={{
                                marginTop: '20px',
                                textAlign: 'justify',
                                fontSize: '20px',
                                color: 'rgb(85,85,85)',
                                fontWeight: 'normal',
                                padding: '0 20px',
                                lineHeight: '1.5',
                                fontFamily: 'sans-serif',
                            }}>
                                The virtual mechatronics lab has had the great pleasure of engaging with sponsors and partners. Here are the words they have to say.
                            </Typography>
                            <Button variant="contained" color="primary" className="rounded-full px-6 py-2" sx={{borderRadius: '9999px',marginRight:'10px',marginTop:'20px', marginBottom:'20px', textAlign:'justify'}}>
                                Read More
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={7}>
                        <Grid item xs={12} md={7}>
                            <Box
                                className="border-l-4 border-primary pl-4"
                                sx={{ 
                                    padding: '50px 0',  // Padding around the section
                                    backgroundColor: 'white',  // Background color
                                    textAlign: 'left',  // Align text to the left
                                }}
                            >
                                {/* Quotation Icon */}
                                <i
                                    className="fa fa-quote-left fa-2x text-primary mb-3"
                                    style={{ color: '#1363c6', float: 'left', marginRight: '10px' }}  // Move the icon to the left and make it blue
                                ></i>

                                {/* Quotation Text */}
                                <Typography 
                                    variant="h5" 
                                    className="italic text-gray-700"
                                    sx={{ 
                                        marginTop: '10px',
                                        textAlign: 'justify',
                                        fontFamily: 'Open Sans, sans-serif',
                                        color: 'rgb(85, 85, 85)',
                                        fontWeight: 'normal',
                                        padding: '0 20px',
                                    }}
                                >
                                    Partnering with a Virtual Mechatronics Lab can be a powerful way to achieve various business goals.
                                </Typography>

                                {/* Profile Picture and Details */}
                                <Box 
                                    className="flex items-center mt-4"
                                    sx={{
                                        display: 'flex',  // Use flexbox to align items horizontally
                                        alignItems: 'center',  // Vertically align items in the center
                                    }}
                                >
                                    <img
                                        className="w-16 h-16"
                                        src={prof}
                                        alt="Prof. Eng. Jean Bosco"
                                        style={{
                                            borderRadius: '50%',
                                            width: '64px', 
                                            height: '64px',  
                                            objectFit: 'cover',  
                                            marginRight: '10px',  
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="h6" sx={{ color: '#14183e', fontWeight:'bold' }}>Prof. Eng. Jean Bosco</Typography>
                                        <Typography variant="body1">University Professor</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
  
    );
};

const AccordionComponent = ({ items }) => (
    <>
      {items.map((item, index) => (
        <Accordion 
          key={index} 
          sx={{
            boxShadow: 'none',
            border: 'none',
            backgroundColor: 'white',
            '&.Mui-expanded': {
              backgroundColor: 'rgba(244,247,254,255)',
            },
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: 'rgba(244,247,254,255)',
              fontSize: '1.25rem',
              '& .MuiAccordionSummary-content': {
                marginBottom: 0,
              },
              padding: '20px',
              '&.Mui-expanded': {
                bgcolor: '#1363c6',
                color: 'white',
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: '20px',
              backgroundColor: 'white',
              textAlign: 'justify',
            }}
          >
            <Box component="div">
              <Typography variant="body1" component="div">
                {item.content}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );

export default About;