import React from 'react';
import video from '../../assets/background2.mp4';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function VideoCard() {
  return (
    <Card sx={{ width: '100%', position: 'relative' }}>
      <CardMedia
        component="video"
        autoPlay
        loop
        muted
        sx={{
          height: 400,
          objectFit: 'cover',
          width: '100%', // Make the video span the full width
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </CardMedia>
      <CardContent
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          p: 2, // Padding for better spacing
        }}
      >
        <Typography variant="h6" component="div" textAlign="center">
          Virtual Mechatronics Lab
        </Typography>
      </CardContent>
    </Card>
  );
}