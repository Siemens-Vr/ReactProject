import React, { useState, useEffect } from 'react';
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
import { Link, NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { BiBorderRadius } from 'react-icons/bi';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in

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

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
    setAnchorElUser(null); // Close user menu
    // Logic to handle logout (e.g., clear auth tokens)
    alert('Logged out successfully');
  };

  useEffect(() => {
    const user = localStorage.getItem('user'); // Check if user is logged in (placeholder logic)
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

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
                <NavLink
                  to={page.path}
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none', // Underline if the route is active
                    color: 'inherit', // Keep the text color
                  })}
                >
                  {page.name}
                </NavLink>
              </Button>
            ))}
          </Box>
        )}

        {/* Account and logout when user is logged in */}
        <Box>
          {!isLoggedIn ? (
            <>
              <Button color="inherit">
                <NavLink
                  to="/login"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    color: 'inherit',
                                    })}
                >
                  Login
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink
                  to="/signup"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    color: 'inherit',
                  })}
                >
                  Signup
                </NavLink>
              </Button>
            </>
          ) : (
            <IconButton onClick={handleOpenUserMenu} color="inherit">
              <AccountCircle />
            </IconButton>
          )}

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <NavLink
                to="/profile"
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                  color: 'inherit',
                })}
              >
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Logout option */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
