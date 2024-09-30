import React, { useState } from 'react';
import { 
  Button, Typography, Box, TextField, 
  Grid, Paper, Select, MenuItem, InputLabel,
  FormControl
} from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    longDescription: '',
    price: '',
    owner: '',
    model: '',
    licence: '',
    downloadSize: '',
    textures: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        // Handle successful product creation
        console.log('Product created successfully');
      } else {
        // Handle errors
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
    console.log('Product submitted:', product);
    // Reset form after submission
    setProduct({
      title: '',
      description: '',
      longDescription: '',
      price: '',
      owner: '',
      model: '',
      licence: '',
      downloadSize: '',
      textures: ''
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4, width: '80%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Long Description"
                name="longDescription"
                value={product.longDescription}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Owner"
                name="owner"
                value={product.owner}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Model"
                name="model"
                value={product.model}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="licence-label">Licence</InputLabel>
                <Select
                  labelId="licence-label"
                  name="licence"
                  value={product.licence}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Editorial">Editorial</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Download Size (MB)"
                name="downloadSize"
                value={product.downloadSize}
                onChange={handleChange}
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Textures"
                name="textures"
                value={product.textures}
                onChange={handleChange}
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth
                sx={{
                  mt: 2,
                  borderRadius: '9999px',
                  backgroundColor: '#1976d2',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                }}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddProduct;