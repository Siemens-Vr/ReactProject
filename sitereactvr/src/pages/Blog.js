import React from 'react';
import { Button,Typography, Grid, Box } from '@mui/material';
// import { FaCheck } from 'react-icons/fa';
import Pic1 from '../assets/img/pic1.png'
import pic2 from '../assets/img/project1.png';
import pic3 from '../assets/img/project2.png';


const Blog = () => {
    return (
    <Box className="container-fluid bg-gray-100 py-12">
    <Box className="container mx-auto text-center"
    sx={{ 
        padding: '50px 0',  // Padding around the section
        backgroundColor: 'light grey',  // Background color
        textAlign: 'center',  // Center the content
    }}>
        <Typography variant="h4" className="mb-8" sx={{ color: '#14183e', fontWeight:'bold' }}>
            Explore Our Blogs
        </Typography>
        <Grid container spacing={4}>
            <ProjectItem1
            imgSrc={Pic1}
             title="Robotic Automation"
             description="Management of software robots that emulate human actions interacting with digital systems and software."
             />
          
            <ProjectItem1
                 imgSrc={pic2} //alt:"Virtual Reality"
                title="Machine learning"
                description="Subfield of artificila intelligence enabling a machine to imitate intelligent human behavior."
            />
            <ProjectItem1
                imgSrc={pic3}
                title="Predictive analysis"
                description="Use of data analysis, machine learning and artificial intelligence to forecast future outcomes."
            />
        </Grid>
    </Box>
</Box>
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
export default Blog;
