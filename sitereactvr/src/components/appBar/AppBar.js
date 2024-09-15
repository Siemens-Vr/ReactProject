import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, Link} from 'react-router-dom';
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


// List of constant pages
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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate user login state

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
  const navigate =useNavigate();
  useEffect(()=>{
    const user= localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setAnchorElUser(null);
    alert('Logged out successfully!');
    navigate('/login');
    
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
                <NavLink
                to={page.path}
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none', // Underline if the route is active
                  fontWeight: isActive ? 'bold' : 'normal', // Bolder text for active pages
                  color: 'inherit', // Keep the text color
                  opacity: isActive ? 1 : 0.5, // Dim inactive pages
                  transform: isActive ? 'translateY(0px)' : 'translateY(10)', // Move active page forward
                  transition: 'all 0.3s ease', // Smooth transition between styles
                })}
              >
                {page.name}
              </NavLink>
            </Button>
          ))}
        </Box>
        )}

        {/* User Account Section */}
        <Box>
          {!isLoggedIn ? (
            // Show Login and Signup buttons when not logged in
            <>
              <Button variant="outlined"
                className="rounded-full border px-3 mb-3"
                size="small"
                sx={{ 
                  borderColor: 'grey.400',
                  borderRadius: '9999px', 
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                  mr: 1,
                  '&:hover': {
                    backgroundColor: '#ffffff',
                    color: 'blue', 
                    borderColor: 'blue',
                  }
                }}>
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Login
                </Link>
              </Button>

              <Button variant="outlined"
                className="rounded-full border px-3 mb-3"
                size="small"
                sx={{ 
                  borderColor: 'grey.400',
                  borderRadius: '9999px', 
                  color: '#ffffff',
                  backgroundColor: 'transparent', 
                  alignItems: 'center',
                  mr: 1,
                  '&:hover': {
                    backgroundColor: '#ffffff', 
                    color: 'blue', 
                    borderColor: 'blue', 
                  }
                }}>
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Sign up
                </Link>
              </Button>

            </>
          ) : (
            // Show account icon and user menu when logged in
            <>
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
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                    View Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/edit-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Edit Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
