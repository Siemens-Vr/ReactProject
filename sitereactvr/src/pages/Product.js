import React from 'react';
import { Button, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Pic1 from '../assets/img/vr/VRMultiLab - MainScene - Android - Unity 2022.3.9f1 _DX11_ 11_30_2023 6_21_58 PM.png';

const Products = () => {
    const navigate = useNavigate(); 

    // Handler function for navigating to a page
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Box className="container-fluid bg-gray-100 py-12">
            <Box
                className="container mx-auto text-center"
                sx={{
                    padding: '50px 0',
                    backgroundColor: 'light grey',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" className="mb-8" sx={{ color: '#14183e', fontWeight: 'bold' }}>
                    Explore Our Products
                </Typography>
                <Grid container spacing={1}>
                    <ProductItem1
                        imgSrc={Pic1}
                        title="xArm7 VR Digital Twin Control System"
                        description="The app creates a fully synchronized digital twin of the physical robot, allowing users to interact with it directly from a virtual control panel"
                        handleNavigation={() => handleNavigation('/product/DigitalTwins')}
                    />
                    <ProductItem1
                        imgSrc={Pic1}
                        title="Robotic Automation"
                        description="Management of software robots that emulate human actions interacting with digital systems and software."
                        handleNavigation={() => handleNavigation('/robotic-automation')}
                    />
                </Grid>
            </Box>
        </Box>
    );
};

// Updated ProductItem1 component to use a click handler instead of a Link
const ProductItem1 = ({ imgSrc, title, description, handleNavigation }) => (
    <Grid item xs={12} md={4}>
        <Box
            className="relative overflow-hidden rounded-lg shadow-lg mb-4"
            sx={{
                position: 'relative',
                margin: '24px',
                marginLeft: '24px',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                },
            }}
        >
            <img
                className="w-full h-56 object-cover"
                src={imgSrc}
                alt={title}
                style={{ opacity: 0.7, height: '60vh', objectFit: 'cover' }}
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
                    textAlign: 'justify',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '2px 4px',
                        borderRadius: '4px',
                        display: 'inline-block',
                        marginBottom: '8px',
                        marginLeft: '0px',
                        textAlign: 'justify',
                    }}
                >
                    {title}
                </Typography>
                <br />
                <Typography
                    variant="body2"
                    sx={{
                        color: '#ffffff',
                        fontSize: '20px',
                        marginBottom: '18px',
                        fontWeight: '700',
                        textAlign: 'justify',
                        marginLeft: '20px',
                        marginRight: '20px',
                    }}
                >
                    {description}
                </Typography>
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: '50%',
                        minWidth: '50px',
                        height: '50px',
                        marginLeft: '20px',
                        marginRight: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'justify',
                    }}
                    onClick={handleNavigation} // Call the navigation handler on click
                >
                    <i className="fa fa-arrow-right"></i>
                </Button>
            </Box>
        </Box>
    </Grid>
);

export default Products;
