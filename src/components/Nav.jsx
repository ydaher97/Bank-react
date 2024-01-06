import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('user');
  };

  const handleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">My Bank App</Typography>
          <Box display={{ xs: 'none', md: 'block' }}>
            <Button variant="contained" color="error" onClick={handleLogout} style={{ marginRight: '10px' }}>
              Logout
            </Button>
            <Button component={Link} to={`/user/${user?._id}`} variant="contained" color="secondary" style={{ marginRight: '10px' }}>
              User Profile
            </Button>
            <Button component={Link} to="/home" variant="contained" color="secondary" style={{ marginRight: '10px' }}>
              Home
            </Button>
            <Button component={Link} to="/transactions" variant="contained" color="secondary">
              Transactions
            </Button>
          </Box>
          <Box display={{ xs: 'block', md: 'none' }}>
            <Button onClick={handleDrawer(true)} color="inherit">Menu</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawer(false)}>
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemText sx={{color:'red'}} primary="Logout" />
          </ListItem>
          <ListItem button component={Link} to={`/user/${user?._id}`}>
            <ListItemText primary="User Profile" />
          </ListItem>
          <ListItem button component={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/transactions">
            <ListItemText primary="Transactions" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Nav;
