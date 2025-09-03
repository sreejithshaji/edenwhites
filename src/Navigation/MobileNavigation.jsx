import './Mobile.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { AiFillInfoCircle, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';

import { Badge, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { ContextFunction } from '../Context/Context';
import { toast } from 'react-toastify';
import { Transition, getCart, getWishList, handleClickOpen, handleClose, handleLogOut } from '../Constants/Constant';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate,useLocation } from 'react-router-dom';

const MobileNavigation = () => {
    const { cart, setCart, wishlistData, setWishlistData } = useContext(ContextFunction);
    const [openAlert, setOpenAlert] = useState(false);
    const navigate = useNavigate();

    const location = useLocation(); // Get the current location
    const currentRoute = location.pathname; // Access the current route
    console.log('Current Route:', currentRoute); // Log the current route for debugging

    let authToken = localStorage.getItem('Authorization');
    let setProceed = authToken !== null ? true : false;

    useEffect(() => {
        getCart(setProceed, setCart, authToken);
        getWishList(setProceed, setWishlistData, authToken);
    }, []);

    // const navbarBackground = "#d93866";
    const navbarBackground = "rgb(24, 25, 24)";

    return (
        <Box className='showMobile'>
            <BottomNavigation
                sx={{
                    display: 'flex', justifyContent: 'space-between',
                    width: '100%', position: 'fixed', bottom: 0,
                    overflowX: 'hidden', height: 60, background: navbarBackground,
                    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)'
                }}
            >
                 
                <NavLink 
                    to='/' 
                    style={({ isActive }) => ({
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        background:  currentRoute=="/"?"black" :navbarBackground,
                        border: isActive ? '2px solid #1D3232' : 'none',
                        borderRadius: isActive ? '2px' : '0',
                        padding: isActive ? '5px' : '0'
                    })}
                >
                    <div className='links' style={{ background:currentRoute=="/"?"black" :navbarBackground }}>
                        <AiOutlineHome style={{ color:"white",fontSize: 23, background: navbarBackground }} />
                    </div>
                    <Typography variant="caption" style={{ color: 'white', background: navbarBackground }}>Home</Typography>
                </NavLink>

                {/* Cart Nav Item */}
                <NavLink 
                    to='/cart' 
                    style={({ isActive }) => ({
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        background:isActive ? "black" : navbarBackground,
                        border: isActive ? '2px solid #1D3232' : 'none',
                        borderRadius: isActive ? '2px' : '0',
                        padding: isActive ? '5px' : '0'
                    })}
                >
                    <div className='links' style={{ background:currentRoute=="/cart"?"black" :navbarBackground }}>
                        <Badge badgeContent={setProceed ? cart.length : 0} color="error">
                            <AiOutlineShoppingCart style={{ color:"white",fontSize: 23, background: navbarBackground }} />
                        </Badge>
                    </div>
                    <Typography variant="caption" style={{ color: 'white', background: navbarBackground }}>Cart</Typography>
                </NavLink>

                {/* About Nav Item */}
                <NavLink 
                    to='/about' 
                    style={({ isActive }) => ({
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        background:  currentRoute=="/about"?"black" :navbarBackground,
                        border: isActive ? '2px solid #1D3232' : 'none',
                        borderRadius: isActive ? '2px' : '0',
                        padding: isActive ? '5px' : '0'
                    })}
                >
                    <div className='links' style={{ background:currentRoute=="/about"?"black" :navbarBackground }}>
                        <Badge badgeContent={setProceed ? wishlistData.length : 0} color="error">
                            <AiFillInfoCircle style={{color:"white", fontSize: 23, background: navbarBackground }} />
                        </Badge>
                    </div>
                    <Typography variant="caption" style={{ color: 'white', background: navbarBackground }}>About</Typography>
                </NavLink>
            </BottomNavigation>

            {/* Logout Dialog */}
            {/* <Dialog
                open={openAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleClose(setOpenAlert)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent sx={{ width: { xs: 280, md: 350, xl: 400 }, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h6'>Do You Want To Logout?</Typography>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button variant='contained' color='primary' onClick={() => handleLogOut(setProceed, toast, navigate, setOpenAlert)}>Logout</Button>
                    <Button variant='contained' color='error' onClick={() => handleClose(setOpenAlert)}>Close</Button>
                </DialogActions>
            </Dialog> */}
        </Box>
    );
};

export default MobileNavigation;