import React, { useState } from 'react';
import axios from 'axios';
import { 
  Button, Typography, Box, TextField, 
  Grid, Paper, Select, MenuItem, InputLabel,
  FormControl
} from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: '',
    longDescription: '',
    price: '',
    owner: '',
    model: '',
    licence: '',
    downloadSize: '',
    textures: '',
    publishDate:''
  });
  const [apkFile, setApkFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setApkFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append all product data to formData
    Object.keys(product).forEach(key => {
      formData.append(key, product[key]);
    });
    
    // Append the file
    if (apkFile) {
      formData.append('apkFile', apkFile);
    }

    try {
      const response = await axios.post('https://api-database-sz4l.onrender.com/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        console.log('Product created successfully');
        setProduct({
          productName: '',
          longDescription: '',
          price: '',
          owner: '',
          model: '',
          licence: '',
          downloadSize: '',
          textures: '',
          publishDate:''
        });
        setApkFile(null);
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
                name="productName"
                value={product.productName}
                onChange={handleChange}
                required
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
                label="Publication Date"
                name="publishDate"
                type="date"
                value={product.publishDate || ''}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  max: new Date().toISOString().split('T')[0] 
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept=".apk"
                style={{ display: 'none' }}
                id="apk-file-input"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="apk-file-input">
                <Button variant="contained" component="span">
                  Upload APK File
                </Button>
              </label>
              {apkFile && <Typography variant="body2" sx={{ mt: 1 }}>{apkFile.name}</Typography>}
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
