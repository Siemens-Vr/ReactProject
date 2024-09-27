import React, { useState,useEffect } from 'react';
import { Button, Typography, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions, Divider, TextField, Rating,Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Pic1 from '../assets/img/vr/VRMultiLab - MainScene - Android - Unity 2022.3.9f1 _DX11_ 11_30_2023 6_21_58 PM.png';
import { CloudDownload, AccountCircle, AccessTime, CreditCard, Lock, Support, Update } from "@mui/icons-material";
import visa from '../assets/img/logos/visa.jpeg';
import mastercard from '../assets/img/logos/mastercard.png';
import paypal from '../assets/img/logos/paypal.png';



const Products = () => {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [download, setDownload]= useState('');//state for downloading
    const [Product, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [authToken, setAuthToken] = useState('');
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 12; 

    useEffect(() => {
        // Simulating login status check and token retrieval
        const checkLoginStatus = async () => {
            // This should be replaced with your actual authentication logic
            const token = localStorage.getItem('authToken');
            if (token) {
                setIsLoggedIn(true);
                setAuthToken(token);
                setUserEmail(localStorage.getItem('userEmail') || '');
            } else {
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetchProducts(page);
        }
    }, [isLoggedIn, page]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/products?page=${page}&limit=${ITEMS_PER_PAGE}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };


    // Handler function for opening the dialog
    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    // Handler function for closing the dialog
    const handleClose = () => {
        setOpen(false);
        setSelectedProduct({});
        setComment('');
        setRating(0);
        setDownload('');
    };

    const handleAddComment = async () => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

       
        const newComment = {
            user: userEmail,
            text: comment,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch(`/api/products/${selectedProduct.id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                setSelectedProduct((prevProduct) => ({
                    ...prevProduct,
                    comments: [...(prevProduct.comments || []), newComment]
                }));
                setComment('');
            } else {
                console.error('Failed to add comment');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    // Handler function for adding a rating
    const handleAddRating = async (newRating) => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        try {
            const response = await fetch(`/api/products/${selectedProduct.id}/ratings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ user: userEmail, rating: newRating }),
            });

            if (response.ok) {
                setSelectedProduct((prevProduct) => ({
                    ...prevProduct,
                    reviews: [...prevProduct.reviews, { user: userEmail, rating: newRating }]
                }));
            } else {
                console.error('Failed to add rating');
            }
        } catch (error) {
            console.error('Error adding rating:', error);
        }
    };
    //Handler function for downloadinf Product
    const handleDownload = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        if (!isLoggedIn) {
            // Redirect to login page if user is not logged in
            navigate('/login');
        }
         else {
            // Proceed with download if user is logged in
            window.open(event.currentTarget.href, '_blank');
        }
    };

    // Calculate the average rating for the product
    const getAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    const products = [
        {
            imgSrc: Pic1,
            title: "Digital Twin Control System",
            description: "The app creates a fully synchronized digital twin of the physical robot, allowing users to interact with it directly from a virtual control panel.",
            longDescription: "This VR application is designed for Meta Quest headsets and offers an immersive experience in controlling a UFactory xArm7 robot. The app creates a fully synchronized digital twin of the physical robot, allowing users to interact with it directly from a virtual control panel.Users can either control the robot by manipulating individual joints in VR or by setting target positions, with the physical robot's inverse kinematics handled by a ROS system running on a computer. Whether controlling the robot from the VR environment or through the physical set movements are seamlessly mirrored in both realms, providing real-time feedback and a comprehensive, intuitive control experience.",
            price: "Free",
            owner: "Virtual Mechatronic Lab",
            published:"2 weeks ago",
            reviews: [],
            model: "xArm7-2023",
            comments: [],
            licence: "Editorial  Learn more",
            downloadSize:"256MB",
            textures:"0",

        },
        {
            imgSrc: Pic1,
            title: "Robotic Automation",
            description: "Management of software robots that emulate human actions interacting with digital systems and software.",
            longDescription: "In-depth details about Robotic Automation include various applications in industry, features, and benefits such as cost reduction, increased efficiency...",
            price: "$1500",
            owner: "RoboTech Inc.",
            reviews: [],
            model: "RoboAuto-2022",
            comments: [],
        }
        
    ];
    const fileId = 'FILE_ID';
    const downloadUrl = `https://drive.google.com/file/d/19TrMC2r_qBeYUtUYNIIZhFWW1rJXyCEP/view?usp=drive_link=${fileId}`;

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
                            imgSrc={product.imgSrc}
                            title={product.title}
                            description={product.description}
                            onClick={() => handleClickOpen(product)}
                        />
                    ))}
                </Grid>
            </Box>

            <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange}
                color="primary"
                sx={{ marginTop: 4, marginBottom: 4 }}
            />

            {/* Dialog for showing more product details */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{fontWeight:'bold'}}>{selectedProduct.title}</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
                        <Box flexBasis="50%">
                            <img src={selectedProduct.imgSrc} alt={selectedProduct.title} style={{ width: '100%', borderRadius: '8px' }} />
                            <Box display="flex" alignItems="center" gap={1} mt={1}>
                                <AccountCircle />
                                <Typography variant="body2" sx={{ fontWeight:'bold'}}>{selectedProduct.owner}</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1} mt={1}>
                                <AccessTime />
                                <Typography variant="body2" sx={{ fontWeight:'bold'}}>{selectedProduct.published}</Typography>
                            </Box>
                            <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2, textAlign:'justify'}}>{selectedProduct.longDescription}</Typography>
                            <a href={downloadUrl} download target="_blank" rel="noopener noreferrer">
                                <Button onClick={handleDownload}
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
                            <Button onClick={handleDownload}
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
                                        {isLoggedIn ? 'addCart' : 'Login to purchase'}
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
                            <Typography variant="h7" sx={{ marginTop: 2 }}>Average Rating: {getAverageRating(selectedProduct.reviews)}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h7" sx={{ marginTop: 2 }}>Reviews:</Typography>
                            {selectedProduct.reviews && selectedProduct.reviews.map((review, index) => (
                                <Box key={index} sx={{ marginBottom: 1 }}>
                                    <Typography variant="h7" sx={{ fontWeight: 'bold' }}>{review.user}</Typography>
                                    <Typography variant="h7">Rating: {review.rating} / 5</Typography>
                                    <Typography variant="h7">{review.comment}</Typography>
                                    <Divider sx={{ marginY: 1 }} />
                                </Box>
                            ))}
                             <Divider sx={{ my: 2 }} />
                            {/* Add Star Rating Section */}
                            <Box>
                            <Typography variant="h7" sx={{ marginTop: 2 }}>Rate Product:</Typography>
                            <Rating
                                name="user-rating"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                    handleAddRating(newValue);
                                }}
                            />
                            <Divider sx={{ marginY: 1 }} />
                            </Box>
                            {/* Comments Section */}
                            <Typography variant="h7" sx={{ marginTop: 2 }}>Comments:</Typography>
                            {selectedProduct.comments && selectedProduct.comments.map((comment, index) => (
                                <Box key={index} sx={{ marginBottom: 1 }}>
                                    <Typography variant="h7" sx={{ fontWeight: 'bold' }}>{comment.user}</Typography>
                                    <Typography variant="h7">{comment.text}</Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                        {new Date(comment.timestamp).toLocaleString()}
                                    </Typography>
                                    <Divider sx={{ marginY: 1 }} />
                                </Box>
                            ))}
                              <Divider sx={{ my: 2 }} />
                            {/* Add Comment Section */}
                            <Typography variant="h7" sx={{ marginTop: 2 }}>Add a Comment:</Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Your Comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                sx={{ marginBottom: 2 }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAddComment}
                                disabled={!isLoggedIn}
                            >
                                Submit Comment
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
