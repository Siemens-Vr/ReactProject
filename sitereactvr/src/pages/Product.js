import React, { useState, useEffect } from 'react';
import { 
    Button, Typography, Grid, Box, Dialog, DialogTitle, 
    DialogContent, DialogActions, Divider, TextField, Rating, 
    IconButton,Snackbar, Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
    CloudDownload, AccountCircle, AccessTime, Lock, 
    Support, Update, Edit, Delete 
} from "@mui/icons-material";
import visa from '../assets/img/logos/visa.jpeg';
import mastercard from '../assets/img/logos/mastercard.png';
import paypal from '../assets/img/logos/paypal.png';
import axios from 'axios';
import useDownload from '../services/DataVr/DownloadVr';
import UnityComponent from '../components/Unity/unityComponent';
import Pic1 from '../assets/img/vr/VRMultiLab - MainScene - Android - Unity 2022.3.9f1 _DX11_ 11_30_2023 6_21_58 PM.png';

const Products = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [editedProduct, setEditedProduct] = useState({});
    const { handleUseDownload } = useDownload();
    const navigate = useNavigate();
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    useEffect(() => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            setIsLoggedIn(true);
            const userRole = sessionStorage.getItem('userRole');
            if (userRole === 'admin') {
                setIsAdmin(true);
            }
        }

        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-database-sz4l.onrender.com/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct({});
        setComment('');
        setRating(0);
    };

    const handleAddComment = () => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        const newComment = {
            user: userEmail,
            text: comment,
            timestamp: new Date().toISOString()
        };

        setSelectedProduct((prevProduct) => ({
            ...prevProduct,
            comments: [...(prevProduct.comments || []), newComment]
        }));

        setComment('');
    };

    const handleAddRating = (newRating) => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        setSelectedProduct((prevProduct) => ({
            ...prevProduct,
            reviews: [...(prevProduct.reviews || []), { user: 'CurrentUser', rating: newRating }]
        }));
    };

    const handleDownload = (event, productName, id) => {
        event.preventDefault();
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            handleUseDownload(event, productName, id);
        }
    };

    const getAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    };

    const handleAddProduct = () => {
        navigate('/AddProduct');
    };

    const handleEditClick = (event) => {
        event.stopPropagation();
        setEditedProduct({ ...selectedProduct });
        setOpenEditDialog(true);
    };

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        setOpenDeleteDialog(true);
    };

    const handleEditSave = async () => {
        try {
            await axios.put(`https://api-database-sz4l.onrender.com/product/${editedProduct.id}`, editedProduct);
            setProducts(products.map(p => p.id === editedProduct.id ? editedProduct : p));
            setSelectedProduct(editedProduct);
            setOpenEditDialog(false);
            setSnackbar({
                open: true,
                message: 'Product updated successfully!',
                severity: 'success'
            });
        } catch (error) {
            console.error('Error updating product:', error);
            setSnackbar({
                open: true,
                message: 'Error updating product. Please try again.',
                severity: 'error'
            });
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://api-database-sz4l.onrender.com/product/${selectedProduct.id}`);
            setProducts(products.filter(p => p.id !== selectedProduct.id));
            setOpen(false);
            setOpenDeleteDialog(false);
            setSnackbar({
                open: true,
                message: 'Product deleted successfully!',
                severity: 'success'
            });
        } catch (error) {
            console.error('Error deleting product:', error);
            setSnackbar({
                open: true,
                message: 'Error deleting product. Please try again.',
                severity: 'error'
            });
        }
    };
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box className="container-fluid bg-gray-100 py-12" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'20px'}}>
            <Box
                className="container mx-auto text-center"
                sx={{
                    padding: '50px 0',
                    backgroundColor: 'light grey',
                    textAlign: 'center',
                    width: '80%', 
                    maxWidth: '1200px', 
                }}
            >
                <Typography variant="h4" className="mb-8" sx={{ color: '#14183e', fontWeight: 'bold' }}>
                    Explore Our Products
                </Typography>

                {isAdmin && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddProduct}
                        sx={{ marginBottom: 2 }}
                    >
                        Add Product
                    </Button>
                )}

                <Grid container spacing={1}>
                    {products.map((product, index) => (
                         <ProductItem1
                         key={index}
                         imgSrc={Pic1} 
                         title={product.productName}
                         description={product.longDescription}
                         onClick={() => handleClickOpen(product)}
                     />
                    ))}
                </Grid>
            </Box>
            <Snackbar 
                open={snackbar.open} 
                autoHideDuration={6000} 
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
            {/* Dialog for showing more product details */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{fontWeight:'bold'}}>{selectedProduct.productName}</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
                        <Box flexBasis="50%">
                        <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {selectedProduct.productName}
            </Typography>
            {/* Replace the image with the Unity component */}
            <Box sx={{ width: '300px', height: '200px', position: 'relative' }}>
                <UnityComponent
                    loaderUrl="/webgl.loader.js" 
                    dataUrl="/webgl.data"
                    frameworkUrl="/webgl.framework.js"
                    codeUrl="/webgl.wasm"
                    width="100%"
                    height="100%"
                    isActive={true} // Make sure the Unity component is active
                    onClick={() => console.log('Unity component clicked!')}
                />
            </Box>
                            <Box display="flex" alignItems="center" gap={1} mt={1}>
                                <AccountCircle />
                                <Typography variant="body2" sx={{ fontWeight:'bold'}}>{selectedProduct.owner}</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1} mt={1}>
                                <AccessTime />
                                <Typography variant="body2" sx={{ fontWeight:'bold'}}>Published date</Typography>
                            </Box>
                            <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2, textAlign:'justify'}}>{selectedProduct.longDescription}</Typography>
                            <a href={selectedProduct.path} download target="_blank" rel="noopener noreferrer">
                                <Button onClick = {(e) => handleDownload(e, selectedProduct.productName, selectedProduct.id)}
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
                                    {isLoggedIn ? 'Download' : 'Login to Download'}
                                </Button>
                            </a>
                        </Box>
                        <Box flexBasis="50%" sx={{backgroundColor:'rgba(244,247,260,262)'}}>
                            <Box borderRadius='9999px'>
                            <Typography variant="h5" component="span" sx={{ color: 'black', fontWeight: 'bold', mr: 1 }}>
                                Price:
                            </Typography>
                            <Typography variant="h5" component="span" sx={{ color: 'red', fontWeight: 'bold' }}>
                                {selectedProduct.price}
                            </Typography>

                            {/* Additional info */}
                            <Box>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Lock fontSize="small" />
                                    <Typography variant="body2">Secure Payment</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Support fontSize="small" />
                                    <Typography variant="body2">Support from Sellers</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Update fontSize="small" />
                                    <Typography variant="body2">Access to Future Versions</Typography>
                                </Box>
                            </Box>
                            <Button onClick = {(e) => handleDownload(e, selectedProduct.productName, selectedProduct.id)}
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            borderRadius:'9999px',
                                            backgroundColor: '#1976d2',
                                            '&:hover': {
                                                backgroundColor: '#1565c0',
                                            },
                                        }}
                                    >
                                        {isLoggedIn ? 'Add to Cart' : 'Login to purchase'}
                                    </Button>
                                     {/* Payment methods */}
                            <Box  display="flex" justifyContent="center" alignItems="center" gap={2} mb={2}
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '8px',
                                    padding: '10px',
                                }}>
                                <img src={visa} alt="Visa" style={{width: '40px', height: '32px', objectFit: 'contain', mr:'0'}}/>
                                <img src={mastercard} alt="Mastercard" style={{width: '40px', height: '32px', objectFit: 'contain',mr:'0'}} />
                                <img src={paypal} alt="PayPal" style={{width: '40px', height: '32px', objectFit: 'contain', mr:'0'}} />
                            </Box>
                                    </Box>    

                            <Divider sx={{ my: 2 }} /> 
                            
                            <Typography variant="h7" sx={{ marginBottom: 1}}>Model: {selectedProduct.model}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h7" sx={{ marginBottom: 1}}>Licence: {selectedProduct.licence}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h7" sx={{ marginBottom: 1}}>Texture: {selectedProduct.textures}</Typography>
                             <Divider sx={{ my: 2 }} />
                            <Typography variant="h7" sx={{ marginBottom: 1 }}>Average Rating: {getAverageRating(selectedProduct.reviews)}</Typography>
                            <Rating
                                name="product-rating"
                                value={getAverageRating(selectedProduct.reviews)}
                                precision={0.1}
                                readOnly
                            />
                            <Typography variant="h6" sx={{ marginTop: 2 }}>Comments</Typography>
                            {selectedProduct.comments && selectedProduct.comments.length > 0 ? (
                                <Box>
                                    {selectedProduct.comments.map((comment, index) => (
                                        <Box key={index} mt={1}>
                                            <Typography variant="body1" fontWeight="bold">{comment.user}</Typography>
                                            <Typography variant="body2" color="textSecondary">{new Date(comment.timestamp).toLocaleString()}</Typography>
                                            <Typography variant="body2" mt={1} mb={2}>{comment.text}</Typography>
                                            <Divider />
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                <Typography variant="body2" color="textSecondary">No comments yet.</Typography>
                            )}
                            <TextField
                                label="Add a comment"
                                fullWidth
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                multiline
                                rows={3}
                                sx={{ marginTop: 2 }}
                            />
                            <Button variant="contained" color="primary" onClick={handleAddComment} sx={{ marginTop: 1 }}>
                                Add Comment
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    {isAdmin && (
                        <>
                            <IconButton onClick={handleEditClick} color="primary">
                                <Edit />
                            </IconButton>
                            <IconButton onClick={handleDeleteClick} color="error">
                                <Delete />
                            </IconButton>
                        </>
                    )}
                </DialogActions>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Product Name"
                        value={editedProduct.productName || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, productName: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={editedProduct.longDescription || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, longDescription: e.target.value })}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <TextField
                        fullWidth
                        label="Price"
                        value={editedProduct.price || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Owner"
                        value={editedProduct.owner || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, owner: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="License"
                        value={editedProduct.license || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, license: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Model"
                        value={editedProduct.model || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, model: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Texture"
                        value={editedProduct.texture || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, textures: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Path"
                        value={editedProduct.path || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, path: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Download Size"
                        value={editedProduct.price || ''}
                        onChange={(e) => setEditedProduct({ ...editedProduct, downloadSize: e.target.value })}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
                    <Button onClick={handleEditSave} color="primary">Save</Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this product?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                    <Button onClick={handleDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

// Product Item Component
const ProductItem1 = ({ imgSrc, title, description, onClick }) => (
    <Grid item xs={12} md={4}>
        <Box
            className="relative overflow-hidden rounded-lg shadow-lg mb-4"
            sx={{
                position: 'relative',
                margin: '24px',
                marginLeft: '24px',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                },
                cursor: 'pointer' 
            }}
            onClick={onClick}
        >
            <img
                className="w-full h-56 object-cover"
                src={imgSrc}
                alt={title}
            />
            <Box
                sx={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '8px 0',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    color: 'white',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '0',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    </Grid>
);

export default Products;
