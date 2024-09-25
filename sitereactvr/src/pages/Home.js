import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imgAbout from '../assets/video/WhatsApp Video 2024-05-17 at 04.36.08_7d9da5de.mp4';
import imgHome from '../assets/video/WhatsApp Video 2024-05-17 at 03.45.14_e18a017b.mp4';
import choose from '../assets/img/sifa/IMG-20240519-WA0010.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/img/pic1.png'
import pic2 from '../assets/img/project1.png';
import pic3 from '../assets/img/project2.png';
import prof from '../assets/video/Prof.-Eng.-Jean-Bosco-Byiringiro.png'
import { useSpring, animated } from '@react-spring/web';




const accordionItemsLeft = [
    {
        title: 'Integration of Advanced Simulation Technologies',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">High-Fidelity Simulations:</Typography>
                <Typography variant="body1" >Utilize advanced simulation techniques to model complex physical phenomena with high accuracy.
                    This includes multi-physics and fluid dynamics aspects.</Typography>
                <Typography variant="body1" fontWeight="bold">Real-Time Simulations:</Typography>
                <Typography variant="body1" >Implement real-time simulation capabilities for dynamic testing of mechatronic systems.
                    Real-Time simulationallows immediate design and control strategy development.</Typography>
            </>
        ),
    },
];
const accordionItemsLeft1 =[    
    {
        title: 'Digital Twin Technology',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">Dynamic Digital Twins:</Typography>
                <Typography variant='body1'>Create dynamic digital twins that reflect real-time data from physical systems.
                These virtual models continuously update based on sensor inputs, providing a real-time representation of
                system performance and behavior.</Typography>
                <Typography variant="body1" fontWeight="bold">Predictive Analytics:</Typography>
                <Typography variant='body1'>Use digital twins combined with predictive analytics to forecast system performance
                 and maintenance needs. This enables proactive adjustments and optimizations based on predicted future
                 states</Typography>
            </>
        ),
    },
];
const accordionItemsLeft2 =[    
    {
        title: 'Advanced Virtual Reality (VR) Integration',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">Immersive Design Environments:</Typography>
                <Typography variant='body1'>Develop advanced VR environments where engineers and designers can
                    interact with high-fidelity virtual models of mechatronic systems. These environments offer detailed
                    visualizations and simulations of complex interactions.</Typography>
                <Typography variant="body1" fontWeight="bold">Haptic Feedback:</Typography>
                <Typography variant='body1'>Incorporate haptic feedback into VR simulations to provide tactile sensations that mimic
                    real-world interactions. This enhances the realism of virtual interactions with mechanical components and
                    systems.</Typography>
            </>
        ),
    },
];
const accordionItemsLeft3 =[    
    {
        title: 'Artificial Intelligence (AI) and Machine Learning',
        content: (
            <>
                <Typography variant="h6" fontWeight="bold">AI-Driven Design Optimization:</Typography>
                <p>Use AI algorithms to automatically optimize designs based on predefined
                    criteria. Machine learning models can analyze vast amounts of data to identify design improvements and
                    predict system behavior.</p>
                <Typography variant="h6" fontWeight="bold">Intelligent Control Systems:</Typography>
                <p>Implement AI-based control strategies within virtual simulations to refine and
                    optimize control algorithms for mechatronic systems. AI can help in developing adaptive controls that
                    respond to varying operational conditions.</p>
            </>
        ),
    },
];
const accordionItemsLeft4 =[    
    {
        title: 'Enhanced System Integration and Testing',
        content: (
            <>
                <Typography variant="h6" fontWeight="bold">Multi-Domain Integration:</Typography>
                <p>Simulate and test the integration of mechatronic systems across multiple
                    domains (mechanical, electrical, software) in a unified virtual environment. This approach helps in
                    identifying integration issues and ensuring seamless operation.</p>
                <Typography variant="h6" fontWeight="bold">Automated Testing and Validation:</Typography>
                <p>Develop automated testing frameworks within virtual environments
                to systematically evaluate system performance and validate compliance with specifications.</p>
            </>
        ),
    },
];
const accordionItemsRight = [
    {
        title: 'Collaborative Virtual Workspaces',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">Virtual Collaboration Platforms:</Typography>
                <Typography variant='body1'>Use collaborative VR platforms to enable real-time interaction among distributed teams.</Typography>
                <Typography variant="body1" fontWeight="bold">Cross-Disciplinary Collaboration:</Typography>
                <Typography variant='body1'>Facilitate collaboration between experts from different fields in integrated virtual environments</Typography>
            </>
        ),
    },
];
const accordionItemsRight1 = [
    {
        title: 'Advanced Human-Machine Interaction (HMI) Testing',
        content: (
            <>
                <Typography variant="body" fontWeight="bold">Advanced Human-Machine Interaction (HMI) Testing:</Typography>
                <Typography variant='body1'>Conduct detailed simulations of human-machine interactions to evaluate
                    user experience and ergonomics. Advanced VR environments allow for the testing of various user
                    interfaces and control systems.</Typography>
                    <Typography variant="h6" fontWeight="bold">Behavioral Analysis:</Typography>
                <Typography variant='body1'>Analyze user behavior and interactions within virtual environments to identify areas
                    for improvement in system design and usability.</Typography>
           </>
        ),
    },
];
const accordionItemsRight2 = [
    {
        title: 'Integration with Internet of Things (IoT)',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">IoT-Enhanced Simulations:</Typography>
                <Typography variant='body1'>Incorporate IoT data into virtual simulations to simulate real-world interactions
                    between mechatronic systems and their environment. This allows for more accurate testing of systems
                    that rely on networked sensors and devices</Typography>
                    <Typography variant="body1" fontWeight="bold">Remote Monitoring and Control:</Typography>
                <Typography variant='body1'>Use virtual environments to monitor and control IoT-enabled
                    mechatronic systems remotely. This provides a way to interact with and manage systems in real-time from
                    any location.</Typography>
           </>
        ),
    },
];
const accordionItemsRight3 = [
    {
        title: 'Augmented Reality (AR) Integration',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">AR for Maintenance and Training:</Typography>
                <Typography variant='body1'> Combine AR with virtual mechatronics to enhance maintenance and training processes. AR can overlay virtual information onto physical systems, providing real-time guidance and interactive training experiences.</Typography>
                    <Typography variant="body1" fontWeight="bold">AR Visualization of Virtual Models:</Typography>
                <Typography variant='body1'>Use AR to visualize virtual models and simulations in the context of the physical environment. This can help in understanding how virtual designs translate into real-world applications.</Typography>
           </>
        ),
    },
];
const accordionItemsRight4 = [
    {
        title: 'Scalability and Adaptability',
        content: (
            <>
                <Typography variant="body1" fontWeight="bold">Modular Simulation Frameworks:</Typography>
                <Typography variant='body1'> Develop modular simulation frameworks that can be easily scaled and
                    adapted to different types of mechatronic systems and applications. This approach allows for flexibility
                    and efficiency in simulation and testing.</Typography>
                    <Typography variant="body1" fontWeight="bold">Customizable Virtual Environments:</Typography>
                <Typography variant='body1'>Create customizable virtual environments that can be tailored to
                specific project requirements, allowing for more focused and relevant simulations.</Typography>
           </>
        ),
    },
];



const VirtualMechatronicsLab = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-primary text-white text-center p-4'>
            {/* Home Section */}
            <motion.div
      initial={{y: 20 }} // Initial state: hidden
      animate={{ y: 0  }} // Animated state: visible
      transition={{ duration: 1 }} // Animation duration
    >
            <Box className="container-fluid mt-8" sx={{textAlign: 'center',}}>
                <Box  className="home-section"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'white',  // Background color
                    textAlign: 'center',  // Center the content
                }}
            >
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box className="about-img" >
                            <Toolbar>
                                <Tooltip title="home" >
                                    <video className='img-fluid rounded-lg shadow-lg' autoPlay loop muted playsInline 
                                    src={imgHome}
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
                                marginTop: '10px',
                                textAlign:'justify',
                                fontFamily:'Open Sans,sans-serif',
                                color:'#14183e',
                                fontWeight:'bold'}}>
                                Virtual Mechatronics Lab
                            </Typography>
                            <Typography className="mb-4"
                             sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                                Our lab leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems.
                            </Typography>
                            <Typography
                             sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                                This innovative approach significantly enhances the design, development, and deployment processes, resulting in more efficient, effective, and groundbreaking solutions in the field of mechatronics.
                            </Typography>
                            <Typography className="mt-4 mb-4"
                             sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                            The lab embodies the cutting edge of technological 
                        integration, pushing the boundaries of what is possible in mechatronic 
                        system design and Integration of Virtual Reality and Digital Technologies.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </motion.div>
            {/* More About Section */}
            <motion.div
      initial={{ y: 30}} // Initial state: hidden
      animate={{ y: 0 }} // Animated state: visible
      transition={{ duration: 3 }} // Animation duration
    >
            <Box className="container-fluid bg-gray-100 py-12">
                <Box className="container mx-auto text-center"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'rgba(244,247,254,255)',  // Background color
                    textAlign: 'center',  // Center the content
                }}>
                    <Button variant="contained"  className="rounded-fulls text-white px-6 py-2 mb-8" sx={{ borderRadius: '9999px',backgroundColor:'#1363c6'}}>
                        Here is a deep dive into the aspects of our virtual mechatronics Lab
                    </Button>
                    <Grid container spacing={5}sx={{padding:'20px'}}>
                        <Grid item xs={12} md={6}>
                            <AccordionComponent items={accordionItemsLeft} />
                            <AccordionComponent items={accordionItemsLeft1} />
                            <AccordionComponent items={accordionItemsLeft2} />
                            <AccordionComponent items={accordionItemsLeft3} />
                            <AccordionComponent items={accordionItemsLeft4} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <AccordionComponent items={accordionItemsRight} />
                            <AccordionComponent items={accordionItemsRight1} />
                            <AccordionComponent items={accordionItemsRight2} />
                            <AccordionComponent items={accordionItemsRight3} />
                            <AccordionComponent items={accordionItemsRight4} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </motion.div>
            {/* Virtual Reality Section */}
            <motion.div
      initial={{ y: 40 }} // Initial state: hidden
      animate={{ y: 0 }} // Animated state: visible
      transition={{ duration: 5 }} // Animation duration
    >
            <Box className="container-fluid py-12">
                <Box className="container mx-auto"
                sx={{ 
                    padding: '10px 0px',  // Padding around the section
                    backgroundColor:'white',  // Background color
                    // textAlign: 'center',  // Center the content
                }}>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={6} sx={{position:'relative'}}>
                        <Typography variant="h3" className="mb-4" sx={{color:'#14183e', fontWeight:'bold'}}>
                        Virtual Reality
                        </Typography>
                            <Typography className="mb-4"
                            sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                               Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
                                Explore and interact with 3D worlds through advanced simulations, opening new possibilities for education, entertainment,
                                 and innovation.
                            </Typography>
                            <Typography className="mb-4"
                            sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                                Why Study Virtual Reality in Dekut?
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Typography className="flex items-center"sx={{ color: '#14183e', fontWeight:'bold',fontFamily:'Font Awesome 5 Free', fontSize:'20px'}}>
                                        <i className="fa fa-check text-primary mr-2"style={{ color: 'blue', fontWeight:'900' }}></i>
                                        Accessibility for students
                                    </Typography>
                                    <Typography className="flex items-center mt-2" sx={{ color: '#14183e', fontWeight:'bold', fontSize:'20px' }}>
                                        <i className="fa fa-check mr-2" style={{ color: 'blue' , fontWeight:'900'}}></i> 
                                        Enhance STEM Education
                                        </Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className="flex items-center"sx={{ color: '#14183e', fontWeight:'bold', fontSize:'20px' }}>
                                        <i className="fa fa-check text-primary mr-2"style={{ color: 'blue', fontWeight:'900' }}></i>
                                        Enhanced Training
                                    </Typography>
                                    <Typography className="flex items-center mt-2"sx={{ color: '#14183e', fontWeight:'bold ', fontSize:'20px' }}>
                                        <i className="fa fa-check text-primary mr-2"style={{ color: 'blue', fontWeight:'900' }}></i>
                                        Personalized Learning
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="about-img">
                            <Toolbar>
                                <Tooltip title="about" >
                                    <video className='img-fluid rounded-lg shadow-lg' autoPlay loop muted playsInline 
                                    src={imgAbout}
                                    alt="about"
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
           </motion.div>
           {/* Features */}
           <motion.div
      initial={{ y: 50 }} // Initial state: hidden
      animate={{ y: 0  }} // Animated state: visible
      transition={{ duration: 7 }} // Animation duration
    >
           <Box className="container-fluid bg-primary text-white py-12">
      <Box className="container mx-auto" 
        sx={{ 
          padding: '50px 20px',  
          backgroundColor: '#1363c6',  
          textAlign: 'center',
          color:'#FFFFFF'
      }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} className="mb-8">
            <Typography 
              variant="button" 
              className="btn btn-sm border rounded-pill text-white px-3 mb-3"
              sx={{ 
                position: 'relative',
                top: '0px',
                color: '#FFFFFF', 
                fontWeight: 'bold'
              }}
            >
              Why Choose Us
            </Typography>
            <Typography variant="h3" className="mb-4" sx={{ textDecoration:'#ffffff' }}>
              Experience Mechatronics Excellence
            </Typography>
            <Typography className="mb-4"
              sx={{
                marginTop: '10px', 
                textAlign: 'justify', 
                fontSize: '18px', 
                color: '#FFFFFF',
                fontWeight: 'normal', 
                padding: '0 20px', 
                lineHeight: '1.5', 
                fontFamily: 'sans-serif'
              }}
            >
              We lead in virtual mechatronics solutions, blending VR, robotics, and automation with unparalleled expertise. Choose us for seamless experiences, optimized processes, and transformative solutions, propelling your business into the future.
            </Typography>

            {/* Feature List Integrated Directly */}
            <Box className="d-flex align-items-center mb-3">
                <Typography variant="body1" sx={{ flex: 1, color: '#FFFFFF' }}>
              <i className="fa fa-check btn-sm-square bg-white text-primary rounded-circle me-3"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                borderRadius: '50%', 
                width: 32, 
                height: 32, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: 1, 
              }}></i>
                Unmatched expertise in virtual mechatronics education
              </Typography>
            </Box>

            <Box className="d-flex align-items-center mb-3">
              <Box 
                className="btn-sm-square bg-white text-primary rounded-circle me-3" 
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main', 
                  borderRadius: '50%', 
                  width: 32, 
                  height: 32, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: 1, 
                }}
              >
              </Box>
              <Typography variant="body1" sx={{ flex: 1, color: '#FFFFFF' }}>
              <i className="fa fa-check"></i>
                Immersive learning experiences through innovative integration
              </Typography>
            </Box>

            <Box className="d-flex align-items-center mb-3">
              <Box 
                className="btn-sm-square bg-white text-primary rounded-circle me-3" 
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main', 
                  borderRadius: '50%', 
                  width: 32, 
                  height: 32, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: 1, 
                }}
              >
              </Box>
              <Typography variant="body1" sx={{ flex: 1, color: '#FFFFFF' }}>
              <i className="fa fa-check"></i>
                Streamlined processes for enhanced educational efficiency
              </Typography>
            </Box>

            <Grid container spacing={4} pt={3}>
              <Grid item xs={12} sm={6}>
                <Box className="d-flex align-items-center rounded p-3"
                  sx={{
                    background: 'rgba(256, 256, 256, 0.1)',
                    flexDirection: 'row',
                    gap: 2, 
                    justifyContent: 'flex-start' 
                  }}
                >
                  <i className="fa fa-users text-white"
                    style={{
                      fontSize: '24px',
                      marginRight: '16px', 
                      color: '#FFFFFF',
                      fontWeight: 'bold'
                    }}
                  ></i>
                  <Box className="ms-3">
                    <Typography variant="h2" className="text-white mb-0" data-toggle="counter-up">
                      <AnimatedNumber endNumber={9999} /> 
                    </Typography>
                    <Typography className="text-white mb-0">
                      Happy students
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="d-flex align-items-center rounded p-3"
                  sx={{ 
                    background: 'rgba(256, 256, 256, 0.1)', 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    justifyContent: 'start'
                  }}
                >
                  <i className="fa fa-check text-white" style={{ fontSize: '24px', marginRight: '16px' }}></i>
                  <Box>
                    <Typography variant="h2" className="text-white mb-0" data-toggle="counter-up">
                      <AnimatedNumber endNumber={9999} /> 
                    </Typography>
                    <Typography className="text-white mb-0">
                      Project Complete
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="text-center md:text-right">
            <img className="img-fluid rounded-lg shadow-lg" src={choose} alt="Mechatronics" />
          </Grid>
        </Grid>
      </Box>
    </Box>
    </motion.div>
    
            {/* Projects Section */}
            <motion.div
      initial={{ y:60 }} // Initial state: hidden
      animate={{ y: 0  }} // Animated state: visible
      transition={{ duration: 9 }} // Animation duration
    >
            <Box className="container-fluid bg-gray-100 py-12">
                <Box className="container mx-auto text-center"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'light grey',  // Background color
                    textAlign: 'center',  // Center the content
                }}>
                    <Typography variant="h4" className="mb-8" sx={{ color: '#14183e', fontWeight:'bold' }}>
                        Explore Our Recent 
                        <br></br>Projects
                    </Typography>
                    <Grid container spacing={4}>
                        <ProjectItem sx={{padding:'50px,0'}}
                        imgSrc={pic1}
                         title="Robotic Automation"
                         description="Management of software robots that emulate human actions interacting with digital systems and software."
                         />
                      
                        <ProjectItem
                             imgSrc={pic2} //alt:"Virtual Reality"
                            title="Virtual Reality"
                            description="Explore and interact with 3D worlds through advanced simulations."
                        />
                        <ProjectItem
                            imgSrc={pic3}
                            title="Virtual Mechatronics"
                            description="Our innovative simulations and tools empower users to explore mechatronics."
                        />
                    </Grid>
                </Box>
            </Box>

        </motion.div>
            {/* Testimonial Section */}
            <motion.div
      initial={{ y: 70 }} // Initial state: hidden
      animate={{ y:0 }} // Animated state: visible
      transition={{ duration: 11 }} // Animation duration
    >
            <Box className="container-xxl py-12" alignContent={'center'}>
            <Box
                className="container mx-auto"
                sx={{
                padding: '50px 0', // Padding around the section
                backgroundColor: 'white', // Background color
                textAlign: 'center', // Center the content
                }}
            >
                <Grid container spacing={5}>
                {/* Left Grid (Text) */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                    borderRight: { md: '2px solid #ddd' }, // Add border on the right of the left grid for larger screens
                    paddingRight: '20px', // Add padding to the right to give space before the border
                    }}
                >
                    <Typography
                    variant="h4"
                    className="mb-4"
                    sx={{ color: '#14183e', fontWeight: 'bold' }}
                    >
                    What Our Sponsors & <br />
                    Partners Say!
                    </Typography>
                    <Typography
                    className="mb-4"
                    sx={{
                        marginTop: '10px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        color: 'rgb(85,85,85)',
                        fontWeight: 'normal',
                        padding: '0 20px',
                        lineHeight: '1.5',
                        fontFamily: 'sans-serif',
                    }}
                    >
                    The virtual mechatronics lab has had the great pleasure of engaging with sponsors and partners. Here are the words they have to say.
                    </Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    className="rounded-full px-6 py-2"
                    sx={{ borderRadius: '9999px', marginRight: '10px' }}
                    >
                    Read More
                    </Button>
                </Grid>

                {/* Right Grid (Testimonial) */}
                <Grid item xs={12} md={7}>
                <Grid item xs={12} md={7}>
                    <Box
                    className="border-l-4 border-primary pl-4"
                    sx={{
                        padding: '50px 0', // Padding around the section
                        backgroundColor: 'white', // Background color
                        textAlign: 'left', // Align text to the left
                    }}
                    >
                    {/* Quotation Icon */}
                    <i
                        className="fa fa-quote-left fa-2x text-primary mb-3"
                        style={{
                        color: '#1363c6',
                        float: 'left',
                        marginRight: '10px',
                        }} // Move the icon to the left and make it blue
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
                        display: 'flex', // Use flexbox to align items horizontally
                        alignItems: 'center', // Vertically align items in the center
                        }}
                    >
                        <img
                        className="w-20 h-20" // Increase size here
                        src={prof}
                        alt="Prof. Eng. Jean Bosco"
                        style={{
                            borderRadius: '50%',
                            width: '80px', // Increase width
                            height: '80px', // Increase height
                            objectFit: 'cover',
                            marginRight: '10px',
                        }}
                        />
                        <Box>
                        <Typography
                            variant="h6"
                            sx={{ color: '#14183e', fontWeight: 'bold' }}
                        >
                            Prof. Eng. Jean Bosco
                        </Typography>
                        <Typography variant="body1">University Professor</Typography>
                        </Box>
                    </Box>
                    </Box>
                </Grid>
                </Grid>
                </Grid>
            </Box>
            </Box>
            </motion.div>

        </div>
        
    );
};

const AccordionComponent = ({ items }) => (
    <div>
        {items.map((item, index) => (
            <Accordion 
                key={index} 
                sx={{
                    boxShadow: 'none', 
                    '&:before': {
                        display: 'none',
                        textAlign:'justify' 
                    },
                    border: 'none', 
                    backgroundColor: 'rgba(244,247,254,255)', 
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(244,247,254,255)', 
                        textAlign:'justify'
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        borderBottom: 'none', 
                        '& .MuiAccordionSummary-content': {
                            marginBottom: 0, 
                        },
                        bgcolor: 'transparent', 
                        '&.Mui-expanded': {
                            bgcolor: '#1363c6', 
                            color: 'white', 
                        },
                    }}
                >
                    <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: '0 16px 16px', 
                        backgroundColor: '#ffffff',
                    }}
                >
                    {item.content}
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
);


// const FeatureList = () => (
//     <>
//       {[
//         'Unmatched expertise in virtual mechatronics education',
//         'Immersive learning experiences through innovative integration',
//         'Streamlined processes for enhanced educational efficiency',
//       ].map((feature, index) => (
//         <Box 
//           key={index} 
//           className="d-flex align-items-center mb-3"
//           sx={{ 
//             display: 'flex', 
//             alignItems: 'center', 
//             mb: 2, 
//             justifyContent: 'flex-start' 
//           }}
//         >
//           <Box 
//             className="btn-sm-square bg-white text-primary rounded-circle me-3" 
//             sx={{ 
//               bgcolor: 'white', 
//               color: 'primary.main', 
//               borderRadius: '50%', 
//               width: 32, 
//               height: 32, 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center', 
//               marginRight: 1, 
//             }}
//           >
//             <i className="fa fa-check"></i>
//           </Box>
//           <Typography variant="body1" sx={{ flex: 1, color: '#FFFFFF' }}>
//             {feature}
//           </Typography>
//         </Box>
//       ))}
//     </>
//   );
  
  
const AnimatedNumber = ({ endNumber }) => {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: endNumber },
      config: { duration: 2000 },
    });
  
    return (
      <animated.span>
        {/* number.to(n => n.toFixed(0)) ensures the spring value is properly rendered */}
        {number.to(n => n.toFixed(0))}
      </animated.span>
    );
  };



const ProjectItem = ({ imgSrc, title, description }) => (
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
                        marginLeft:'-40px',
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
                        marginLeft:'20px',
                        alignText:'center',
                        marginRight:'20px',
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
                        marginLeft: '20px',  // Move the button to the left a little
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

export default VirtualMechatronicsLab;
