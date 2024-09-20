import React from "react";
import {Box, Typography,Grid,Toolbar,Tooltip,Button} from "@mui/material";
import Picture1 from '../Products/VRMultiLab - MainScene - Android - Unity 2022.3.9f1 _DX11_ 11_30_2023 6_21_58 PM.png';
import { CloudDownload } from "@mui/icons-material";


const DigitalTwin =() => {

    const fileId = 'FILE_ID';
    const downloadUrl = `https://drive.google.com/file/d/19TrMC2r_qBeYUtUYNIIZhFWW1rJXyCEP/view?usp=drive_link=${fileId}`;
    return(
    <div className="content">
            <Box className="container-fluid mt-8">
                <Box  className="DIGITAL TWINS"
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
                                <Tooltip title="Product1" >
                                    <img className='img-fluid rounded-lg shadow-lg' autoPlay loop muted playsInline 
                                    src={Picture1}
                                    alt="digitaltwin"
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
                            <Typography variant="h4" className="mb-4"
                             sx={{ 
                                marginTop: '10px',
                                textAlign:'justify',
                                fontFamily:'Open Sans,sans-serif',
                                color:'#14183e',
                                fontWeight:'bold'}}>
                                 xArm7 VR Digital Twin Control System
                            </Typography>
                            <Typography
                             sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                                 This VR application is designed for Meta Quest headsets and offers an immersive experience in controlling a UFactory xArm7 robot.
                                 <br></br>
                                 The app creates a fully synchronized digital twin of the physical robot, allowing users to interact with it directly from a virtual control panel.
                            </Typography>
                            <Typography className="mt-4 mb-4"
                             sx={{
                                marginTop: '10px', textAlign: 'justify', fontSize: '18px', color: 'rgb(85,85,85)',
                                fontWeight: 'normal', padding: '0 20px', lineHeight: '1.5', fontFamily: 'sans-serif',
                              }}>
                           Users can either control the robot by manipulating individual joints in VR or by setting target positions, with the physical robot's inverse
                            kinematics handled by a ROS system running on a computer. Whether controlling the robot from the VR environment or through the physical setup,
                             movements are seamlessly mirrored in both realms, providing real-time feedback and a comprehensive, intuitive control experience.
                            </Typography>
                            {/* Download Button */}
                            <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
                                <a href={downloadUrl} download target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<CloudDownload />} 
                                        sx={{
                                            borderRadius:'9999px',
                                            backgroundColor: '#1976d2',
                                            '&:hover': {
                                                backgroundColor: '#1565c0',
                                            },
                                        }}
                                    >
                                        Download Digital Twin
                                    </Button>
                                </a>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </div>
    );



}
export default DigitalTwin;
