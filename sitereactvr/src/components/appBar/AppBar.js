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
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import logo from '../../assets/Virtual Mechatronics Lab Logo V2-01.png';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'About', path: '/about' },
  { name: 'Worldskills', path: '/worldskills' },
  { name: 'Sifa', path: '/sifa' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null); 

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tooltip title="Logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Virtual Mechatronics Lab
        </Typography>

        {isMobile ? (
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button key={page.name} color="inherit">
                <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
        )}

        {/* User Account Section */}
        <Box>
          <IconButton
            size="large"
            edge="end"
            aria-label="account"
            aria-controls="user-menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="user-menu-appbar"
            anchorEl={anchorElUser} // Use the correct state for the anchor element
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)} // Check if the user menu is open
            onClose={handleCloseUserMenu} // Handle closing the user menu
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                Login
              </Link>
            </MenuItem>
            {/* <MenuItem onClick={handleCloseUserMenu}>
              <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                Signup
              </Link>
            </MenuItem> */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
