import React, { useState, useEffect } from 'react';
import { Box,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, Select,
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem,
  IconButton
} from '@mui/material';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    gender: '',
    company: '',
    age: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://api-database-sz4l.onrender.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleOpen = (user) => {
    setEditUser(user);
    setFormData({ ...user });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditUser(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data being sent:", formData); // Log data before sending
      await axios.put(`https://api-database-sz4l.onrender.com/updateUser/${editUser.id}`, formData);
      fetchUsers();
      handleClose();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`https://api-database-sz4l.onrender.com/deleteUser/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="User management table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#14183e' }}>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Last Name</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Gender</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Company</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Age</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold '}}>Role</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.UserRole}</TableCell>
                <TableCell>
                  <IconButton 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleOpen(user)}
                    sx={{ marginRight: 1, marginBottom: 1 }}
                  >
                    Edit
                  </IconButton>
                  <IconButton 
                    variant="contained" 
                    style={{backgroundColor:'error'}}
                    
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog 
        open={open} 
        onClose={handleClose}
        aria-labelledby="edit-user-dialog-title"
        inert={!open} // Use inert when dialog is closed
      >
        <DialogTitle id="edit-user-dialog-title">Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            name="lastname"
            label="Last Name"
            type="text"
            fullWidth
            value={formData.lastname}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            name="gender"
            label="Gender"
            type="text"
            fullWidth
            value={formData.gender}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            name="company"
            label="Company"
            type="text"
            fullWidth
            value={formData.company}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            name="age"
            label="Age"
            type="number"
            fullWidth
            value={formData.age}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="edit-role-label">Role</InputLabel>
              <Select
                labelId="edit-role-label"
                value={formData.userRole}
                onChange={handleInputChange}
                label="Role"
              >
              <MenuItem value="userRole">User</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;
