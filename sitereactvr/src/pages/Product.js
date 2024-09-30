import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions, Divider, TextField, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CloudDownload, AccountCircle, AccessTime, CreditCard, Lock, Support, Update } from "@mui/icons-material";
import visa from '../assets/img/logos/visa.jpeg';
import mastercard from '../assets/img/logos/mastercard.png';
import paypal from '../assets/img/logos/paypal.png';
import useDownload from '../services/DataVr/DownloadVr';
import Pic1 from '../assets/img/vr/VRMultiLab - MainScene - Android - Unity 2022.3.9f1 _DX11_ 11_30_2023 6_21_58 PM.png';
import axios from 'axios'; 

const Products = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]); // State to store the fetched products
    const [selectedProduct, setSelectedProduct] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const { handleUseDownload } = useDownload();

    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('accessToken')) {
            setIsLoggedIn(true);
        }
        setUserEmail(''); 
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5002/product'); // Use GET to fetch products
                setProducts(response.data); 
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts(); // Call the fetch function
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

        setComment(''); // Clear the comment input
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

    const handleDownload = (event,productName,id) => {
        event.preventDefault();
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            handleUseDownload(event,productName,id);
        }
    };

    const getAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
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

            {/* Dialog for showing more product details */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{fontWeight:'bold'}}>{selectedProduct.productName}</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
                        <Box flexBasis="50%">
                            <img src={Pic1} alt={selectedProduct.productName} style={{ width: '100%', borderRadius: '8px' }} />
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
                                <Button onClick = {(e) => handleDownload(e, selectedProduct.productName,selectedProduct.id)}
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
                                    {isLoggedIn ? 'Download Digital Twin' : 'Login to Download'}
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
                            <Button onClick = {(e) => handleDownload(e, selectedProduct.productName,selectedProduct.id)}
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
                cursor: 'pointer' // Add pointer cursor
            }}
            onClick={onClick} // Open the dialog on image click
        >
            <img
                className="w-full h-56 object-cover"
                src={imgSrc}
                alt={title}
                // style={{height: '50vh', width:'50vh'}}
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

