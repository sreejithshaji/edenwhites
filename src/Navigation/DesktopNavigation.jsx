import './Desktop.css'
import React, { useContext, useEffect, useState } from 'react' 

import {AiFillInfoCircle, AiOutlineHeart, AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'

import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { Link, NavLink, useNavigate,useLocation } from 'react-router-dom';
import { Badge, Button, Dialog, DialogActions, DialogContent, Menu, MenuItem, Slide, Tooltip, Typography } from '@mui/material';

import { ContextFunction } from '../Context/Context';
import { toast } from 'react-toastify';
import { getCart, getWishList, handleLogOut, handleClickOpen, handleClose, Transition } from '../Constants/Constant'

const DesktopNavigation = () => {

  const location = useLocation(); // Get the current location
  const currentRoute = location.pathname; // Access the current route
  console.log('Current Route:', currentRoute); // Log the current route for debugging


  const { cart, setCart, wishlistData, setWishlistData } = useContext(ContextFunction)
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate()
  let authToken = localStorage.getItem('Authorization');
  let setProceed = authToken !== null ? true : false
  useEffect(() => {
    getCart(setProceed, setCart, authToken)
    getWishList(setProceed, setWishlistData, authToken)
  }, [])

  const navbarColor='#181918';

  return (
    <>
      <nav className='nav'  style={{background:navbarColor }}>
        <div className="logo" > 
          <Link to='/' style={{background:navbarColor }}>
            <img src={require('../Assets/eiden-logo-2.png')} alt="Eiden Whites Logo" style={{ height: '60px' }} />
          </Link>
        </div>
        <div className="nav-items" style={{background:navbarColor }}>
          <ul className="nav-items" style={{background:navbarColor }}>
            <li className="nav-links" style={{background: navbarColor }}>
              <NavLink to='/'  >
                <span  className='nav-icon-span' style={{background: currentRoute=="/" ? navbarColor : "black" }} >  
                  Home
                </span>
              </NavLink>
            </li>


            <li className="nav-links"   style={{background:navbarColor }}>
              <Tooltip title='cart' >
                <NavLink to="/cart" >
                  <span 
                    className='nav-icon-span'  
                    style={{background: currentRoute=="/cart" ? navbarColor : "black" }}
                   > Cart     
                    <Badge badgeContent={setProceed ? cart.length : 0}> 
                      {/* <AiOutlineShoppingCart 
                        style={{background: currentRoute=="/products" ? navbarColor : "black" }} 
                        className='nav-icon' 
                      /> */}
                    </Badge>
                  </span>
                </NavLink>
              </Tooltip>
            </li>

            {/* <li className="nav-links"   style={{background:navbarColor }}>
              <Tooltip title='Products' >
                <NavLink to="/products" >
                  <span 
                    className='nav-icon-span'  
                    style={{background: currentRoute=="/products" ? navbarColor : "black" }}
                   > Products     
                    <Badge badgeContent={setProceed ? cart.length : 0}> 
                      
                    </Badge>
                  </span>
                </NavLink>
              </Tooltip>
            </li> */}

            <li className="nav-links"   style={{background:navbarColor }}>
              <Tooltip title='about' >
                <NavLink to="/about" >
                  <span 
                    className='nav-icon-span'  
                    style={{background: currentRoute=="/about" ? navbarColor : "black" }}
                   >About     
                    <Badge badgeContent={setProceed ? cart.length : 0}> 
                      {/* <AiFillInfoCircle 
                        style={{background: currentRoute=="/about" ? navbarColor : "black" }}
                        className='nav-icon' 
                      /> */}
                    </Badge>
                  </span>
                </NavLink>
              </Tooltip>
            </li>

            
            {/* <li className="nav-links"   style={{background:navbarColor }}>
              <Tooltip title='Wishlist'>
                <NavLink to="/wishlist">
                  <span className='nav-icon-span' style={{background:"transperant" }}>Wishlist  
                    <Badge badgeContent={setProceed ? wishlistData.length : 0}> 
                      <AiOutlineHeart className='nav-icon' />
                    </Badge>
                  </span>
                </NavLink>
              </Tooltip>
            </li> */}

            {/* {
              setProceed ?
                <>
                  <li className="nav-links"   style={{background:navbarColor }}>
                    <Tooltip title='Profile' >
                      <NavLink to='/update' >
                        <span className='nav-icon-span' style={{background:"transperant" }}>  
                          <CgProfile  style={{ fontSize: 29,  marginRight: 10, backgroundColor:"transparent" }} />
                        </span>
                      </NavLink>
                    </Tooltip>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }} onClick={() => handleClickOpen(setOpenAlert)}>
                    <Button variant='contained' className='nav-icon-span' sx={{ marginBottom: 1 }} endIcon={<FiLogOut />}>
                      <Typography variant='button'> 
                        Logout
                      </Typography>
                    </Button>
                  </li>
                </>
                :
                <li className="nav-links"   style={{background:navbarColor }}>
                  <Tooltip title='Login' >
                    <NavLink to='/login'>
                      <span className='nav-icon-span'>   
                        <CgProfile style={{ fontSize: 25 , backgroundColor:"transparent" }} />
                      </span>
                    </NavLink>
                  </Tooltip>
                </li>
            } */}
          </ul>
        </div>
      </nav >
      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ width: { xs: 280, md: 350, xl: 400 }, display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h6'>  Do You Want To Logout?</Typography>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to="/">
            <Button variant='contained' endIcon={<FiLogOut />} color='primary' onClick={() => handleLogOut(setProceed, toast, navigate, setOpenAlert)}>Logout</Button></Link>
          <Button variant='contained' color='error' endIcon={<AiFillCloseCircle />} onClick={() => handleClose(setOpenAlert)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DesktopNavigation