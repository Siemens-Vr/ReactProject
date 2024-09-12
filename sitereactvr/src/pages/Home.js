import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Toolbar} from '@mui/material';
import { Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imgAbout from '../assets/video/WhatsApp Video 2024-05-17 at 04.36.08_7d9da5de.mp4';
import imgHome from '../assets/video/WhatsApp Video 2024-05-17 at 03.45.14_e18a017b.mp4';
import choose from '../assets/img/sifa/IMG-20240519-WA0010.jpg';
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
                <Typography variant="h6" fontWeight="500">High-Fidelity Simulations:</Typography>
                <p>Utilize advanced simulation techniques to model complex physical phenomena with high accuracy.
                    This includes multi-physics and fluid dynamics aspects.</p>
                <Typography variant="h6" fontWeight="500">Real-Time Simulations:</Typography>
                <p>Implement real-time simulation capabilities for dynamic testing of mechatronic systems.
                    Real-Time simulationallows immediate design and control strategy development.</p>
            </>
        ),
    },
];
const accordionItemsLeft1 =[    
    {
        title: 'Digital Twin Technology',
        content: (
            <>
                <Typography variant="h6" fontWeight="500">Dynamic Digital Twins:</Typography>
                <p>Create dynamic digital twins that reflect real-time data from physical systems.
                These virtual models continuously update based on sensor inputs, providing a real-time representation of
                system performance and behavior.</p>
                <Typography variant="h6" fontWeight="500">Predictive Analytics:</Typography>
                <p>Use digital twins combined with predictive analytics to forecast system performance
                 and maintenance needs. This enables proactive adjustments and optimizations based on predicted future
                 states</p>
            </>
        ),
    },
];
const accordionItemsLeft2 =[    
    {
        title: 'Advanced Virtual Reality (VR) Integration',
        content: (
            <>
                <Typography variant="h6" fontWeight="500">Immersive Design Environments:</Typography>
                <p>Develop advanced VR environments where engineers and designers can
                    interact with high-fidelity virtual models of mechatronic systems. These environments offer detailed
                    visualizations and simulations of complex interactions.</p>
                <Typography variant="h6" fontWeight="500">Haptic Feedback:</Typography>
                <p>Incorporate haptic feedback into VR simulations to provide tactile sensations that mimic
                    real-world interactions. This enhances the realism of virtual interactions with mechanical components and
                    systems.</p>
            </>
        ),
    },
];
const accordionItemsLeft3 =[    
    {
        title: 'Artificial Intelligence (AI) and Machine Learning',
        content: (
            <>
                <Typography variant="h6" fontWeight="500">AI-Driven Design Optimization:</Typography>
                <p>Use AI algorithms to automatically optimize designs based on predefined
                    criteria. Machine learning models can analyze vast amounts of data to identify design improvements and
                    predict system behavior.</p>
                <Typography variant="h6" fontWeight="500">Intelligent Control Systems:</Typography>
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
                <Typography variant="h6" fontWeight="500">Multi-Domain Integration:</Typography>
                <p>Simulate and test the integration of mechatronic systems across multiple
                    domains (mechanical, electrical, software) in a unified virtual environment. This approach helps in
                    identifying integration issues and ensuring seamless operation.</p>
                <Typography variant="h6" fontWeight="500">Automated Testing and Validation:</Typography>
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
                <Typography variant="h6" fontWeight="500">Virtual Collaboration Platforms:</Typography>
                <p>Use collaborative VR platforms to enable real-time interaction among distributed teams.</p>
                <Typography variant="h6" fontWeight="500">Cross-Disciplinary Collaboration:</Typography>
                <p>Facilitate collaboration between experts from different fields in integrated virtual environments.</p>
            </>
        ),
    },
];
const accordionItemsRight1 = [
    {
        title: 'Advanced Human-Machine Interaction (HMI) Testing',
        content: (
            <>
                <Typography variant="h6" fontWeight="500">Advanced Human-Machine Interaction (HMI) Testing:</Typography>
                <p>Conduct detailed simulations of human-machine interactions to evaluate
                    user experience and ergonomics. Advanced VR environments allow for the testing of various user
                    interfaces and control systems.</p>
                    <Typography variant="h6" fontWeight="500">Behavioral Analysis:</Typography>
                <p>Analyze user behavior and interactions within virtual environments to identify areas
                    for improvement in system design and usability.</p>
           </>
        ),
    },
];
const accordionItemsRight2 = [
    {
        title: 'Integration with Internet of Things (IoT)',
        content: (
            <>
                <Typography variant="h6" fontWeight="500">IoT-Enhanced Simulations:</Typography>
                <p>Incorporate IoT data into virtual simulations to simulate real-world interactions
                    between mechatronic systems and their environment. This allows for more accurate testing of systems
                    that rely on networked sensors and devices</p>
                    <Typography variant="h6" fontWeight="500">Remote Monitoring and Control:</Typography>
                <p>Use virtual environments to monitor and control IoT-enabled
                    mechatronic systems remotely. This provides a way to interact with and manage systems in real-time from
                    any location.</p>
           </>
        ),
    },
];
const accordionItemsRight3 = [
    {
        title: 'Scalability and Adaptability',
        content: (
            <>
                <Typography variant="h6" fontWeight="500">Modular Simulation Frameworks:</Typography>
                <p> Develop modular simulation frameworks that can be easily scaled and
                    adapted to different types of mechatronic systems and applications. This approach allows for flexibility
                    and efficiency in simulation and testing.</p>
                    <Typography variant="h6" fontWeight="500">Customizable Virtual Environments:</Typography>
                <p>Create customizable virtual environments that can be tailored to
                specific project requirements, allowing for more focused and relevant simulations.</p>
           </>
        ),
    },
];


const VirtualMechatronicsLab = () => {
    return (
        <div className="content">
            {/* Home Section */}
            <Box className="container-fluid mt-8">
                <Box  className="home-section"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'white',  // Background color
                    textAlign: 'center',  // Center the content
                }}
            >
                <Button 
                        variant="outlined" 
                        sx={{ 
                            borderColor: 'grey.400', // Set border color to grey
                            borderRadius: '9999px', // Make the button fully rounded
                            color: 'primary.main',
                        }} 
                        className="px-6 py-2 mb-8"
                    >
                        HOME
                    </Button>
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
                                color:'black)',
                                fontWeight:'bold',}}>
                                Virtual Mechatronics Lab
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
                                Our lab leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems.
                            </Typography>
                            <Typography
                             sx={{ 
                                marginTop: '10px',
                                textAlign:'justify',
                                fontSize:'16px',
                                fontFamily:'Open Sans,sans-serif',
                                color:'rgb(85,85,85)',
                                fontWeight:'400',
                                padding:'0 20px',
                                lineHeight:'24px'}}>
                                This innovative approach significantly enhances the design, development, and deployment processes, resulting in more efficient, effective, and groundbreaking solutions in the field of mechatronics.
                            </Typography>
                            <Typography className="mt-4 mb-4"
                             sx={{ 
                                marginTop: '10px',
                                textAlign:'justify',
                                fontSize:'16px',
                                fontFamily:'Open Sans,sans-serif',
                                color:'rgb(85,85,85)',
                                fontWeight:'400',
                                padding:'0 20px',
                                lineHeight:'24px'}}>
                            The lab embodies the cutting edge of technological 
                        integration, pushing the boundaries of what is possible in mechatronic 
                        system design and
                            </Typography>
                            <Typography className="mt-4 mb-4"
                             sx={{ 
                                marginTop: '10px',
                                textAlign:'justify',
                                fontSize:'16px',
                                fontFamily:'Open Sans,sans-serif',
                                color:'rgb(85,85,85)',
                                fontWeight:'400',
                                padding:'0 20px',
                                lineHeight:'24px'}}>
                                Integration of Virtual Reality and Digital Technologies
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* More About Section */}
            <Box className="container-fluid bg-gray-100 py-12">
                <Box className="container mx-auto text-center"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'rgba(244,247,254,255)',  // Background color
                    textAlign: 'center',  // Center the content
                }}>
                    <Button variant="contained" backgroundColorcolor="#1363c6" className="rounded-fulls text-white px-6 py-2 mb-8" sx={{ borderRadius: '9999px',}}>
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
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Virtual Reality Section */}
            <Box className="container-fluid py-12">
                <Box className="container mx-auto"
                sx={{ 
                    padding: '10px 0px',  // Padding around the section
                    backgroundColor:'white',  // Background color
                    // textAlign: 'center',  // Center the content
                }}>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={6} sx={{position:'relative'}}>
                        <Button 
                        variant="outlined" 
                        sx={{ 
                            position:'absolute',
                            top:'0px',
                            borderColor: 'grey.400', // Set border color to grey
                            borderRadius: '9999px', // Make the button fully rounded
                            color: 'primary.main',
                            marginTop:'0px',
                        }} 
                        className="px-6 py-2 mb-8"
                    >
                        Virtual Reality
                    </Button>
                            <Typography className="mb-4"
                            sx={{ 
                                marginTop: '10px',
                                textAlign:'justify',
                                fontSize:'16px',
                                fontFamily:'Open Sans,sans-serif',
                                color:'rgb(85,85,85)',
                                fontWeight:'400',
                                padding:'0 20px',
                                lineHeight:'24px'}} >
                               Virtual Reality immerses you in computer-generated environments, seamlessly blending the physical and digital worlds.
                                Explore and interact with 3D worlds through advanced simulations, opening new possibilities for education, entertainment,
                                 and innovation.
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
                                Why Study Virtual Reality in Dekut?
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Typography className="flex items-center"sx={{ color: '#14183e', fontWeight:'bold',fontFamily:'Font Awesome 5 Free'}}>
                                        <i className="fa fa-check text-primary mr-2"style={{ color: 'blue', fontWeight:'900' }}></i>
                                        Accessibility for students
                                    </Typography>
                                    <Typography className="flex items-center mt-2" sx={{ color: '#14183e', fontWeight:'bold' }}>
                                        <i className="fa fa-check mr-2" style={{ color: 'blue' , fontWeight:'900'}}></i> 
                                        Enhance STEM Education
                                        </Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className="flex items-center"sx={{ color: '#14183e', fontWeight:'bold' }}>
                                        <i className="fa fa-check text-primary mr-2"style={{ color: 'blue', fontWeight:'900' }}></i>
                                        Enhanced Training
                                    </Typography>
                                    <Typography className="flex items-center mt-2"sx={{ color: '#14183e', fontWeight:'bold ' }}>
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
                    Why choose Us
                    </Button>
                    <Typography variant="h3" className="mb-4" sx={{textDecoration:'#FFFFFF'}}>
                    Experience Mechatronics Excellence
                    </Typography>
                    <Typography className="mb-4"
                    sx={{
                        textDecoration:'#FFFFFF',
                        textAlign:'justify', // Justify text
                        padding:'0px 20px' // Add horizontal padding
                    }}>
                    We lead in virtual mechatronics solutions, blending VR, robotics, and automation with unparalleled expertise. Choose us for seamless experiences, optimized processes, and transformative solutions, propelling your business into the future. tempor
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
                        <i className="fa fa-users text-white"
                            style={{
                            fontSize: '24px',
                            marginRight: '16px', // Ensure space between icon and text
                            color: '#ffffff',
                            fontWeight: 'bold'
                            }}
                        ></i>
                        <Box className="ms-3">
                            <Typography variant="h2" className="text-white mb-0" data-toggle="counter-up">
                            <AnimatedNumber endNumber={9999} /> {/* Animated number here */}
                            </Typography>
                            <Typography className="text-white mb-0">
                            Happy students
                            </Typography>
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
                        <i className="fa fa-check text-white" style={{ fontSize: '24px', marginRight: '16px' }}></i>
                        <Box>
                            <Typography variant="h2" className="text-white mb-0" data-toggle="counter-up">
                            <AnimatedNumber endNumber={9999} /> {/* Animated number here */}
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
                    <img className="img-fluid rounded-lg shadow-lg" src={choose} alt="img" />
                </Grid>
                </Grid>
            </Box>
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
                        <ProjectItem
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

            {/* Testimonial Section */}
            <Box className="container-xxl py-12">
                <Box className="container mx-auto"
                sx={{ 
                    padding: '50px 0',  // Padding around the section
                    backgroundColor: 'white',  // Background color
                    textAlign: 'center',  // Center the content
                }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={5}>
                        <Button 
                        variant="outlined" 
                        sx={{ 
                            borderColor: 'grey.400', // Set border color to grey
                            borderRadius: '9999px', // Make the button fully rounded
                            color: 'primary.main',
                            padding:'0 20px'
                        }} 
                        className="px-6 py-2 mb-8"
                    >
                       Testimonials
                    </Button>
                            <Typography variant="h4" className="mb-4"sx={{ color: '#14183e', fontWeight:'bold' }}>
                                What Our Sponsors &
                                <br></br>
                                 Partners Say!
                            </Typography>
                            <Typography className="mb-4"
                             sx={{ 
                                marginTop: '10px',
                                textAlign:'justify',
                                fontSize:'18px',
                                fontFamily:'Open Sans,sans-serif',
                                color:'rgb(85,85,85)',
                                fontWeight:'400',
                                padding:'0 20px',
                                lineHeight:'24px'}}>
                                The virtual mechatronics lab has had the great pleasure of engaging with sponsors and partners. Here are the words they have to say.
                            </Typography>
                            <Button variant="contained" color="primary" className="rounded-full px-6 py-2" sx={{borderRadius: '9999px',marginRight:'10px'}}>
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
    <div>
        {items.map((item, index) => (
            <Accordion 
                key={index} 
                sx={{
                    boxShadow: 'none', // Remove box shadow
                    '&:before': {
                        display: 'none',
                        textAlign:'justify' // Remove the default divider line at the top
                    },
                    border: 'none', // Remove border
                    backgroundColor: 'rgba(244,247,254,255)', // Background color to match the parent Box
                    '&.Mui-expanded': {
                        backgroundColor: 'rgba(244,247,254,255)', 
                        textAlign:'justify'// Ensure expanded background matches
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        borderBottom: 'none', // Remove border from summary
                        '& .MuiAccordionSummary-content': {
                            marginBottom: 0, // Adjust content spacing if needed
                        },
                        bgcolor: 'transparent', // Default background color
                        '&.Mui-expanded': {
                            bgcolor: '#1363c6', // Background color when expanded
                            color: 'white', // Optional: change text color to white when expanded
                        },
                    }}
                >
                    <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: '0 16px 16px', // Adjust padding if needed
                        backgroundColor: 'rgba(244,247,254,255)', // Background color for the details section
                    }}
                >
                    {item.content}
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
);


const FeatureList = () => (
    <>
        {[
            'Unmatched expertise in virtual mechatronics education',
            'Immersive learning experiences through innovative integration',
            'Streamlined processes for enhanced educational efficiency',
        ].map((feature, index) => (
            <Typography key={index} variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'flex-start' }}>
                <Box 
                    sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main', 
                        borderRadius: '50%', 
                        width: 32, 
                        height: 32, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mr: 3 // Increase margin right for more spacing between icon and text
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









export default VirtualMechatronicsLab;
