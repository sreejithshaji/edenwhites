import React, { useEffect } from 'react' 
import { Container, Typography } from '@mui/material' 
import "./CategoryHeading.module.css"
const CategoryHeading = () => { 


    return (  
        
                <Typography variant='h3' 
                style={{color:"#670D2F"}}   
                sx={{ textAlign: 'center', marginTop: 5, color: '#1976d2', fontWeight: 'bold' }}>Categories</Typography> 
        
    )
}

export default CategoryHeading