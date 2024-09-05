import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
import logo from '../../assets/Virtual Mechatronics Lab Logo V2-01.png'


const pages = [
  { name: 'Home', path: '/Home' },
  // { name: 'Product', path: '/product' },
  // { name: 'About', path: '/about' },
  { name: 'Worldskills', path: '../Worldskill' },
  // { name: 'Sifa', path: '/sifa' },
  // { name: 'Blog', path: '/blog' },
  // { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Trigger burger menu for small screens

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"   PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}>
      <Toolbar>
      <Tooltip title="Logo" >
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px'}}
          />
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Virtual Mechatronics Lab
        </Typography>

        {isMobile ? (
          // Display burger menu on mobile
          <>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                
                  <Button key={page.name} color="inherit">
                    {page.name}
                  </Button>
                </MenuItem>
                
              ))}
            </Menu>
          </>
        ) : (
          // Display buttons on larger screens
          <Box sx={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button key={page} color="inherit">
                {page}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}