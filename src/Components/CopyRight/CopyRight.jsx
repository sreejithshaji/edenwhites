import { Typography } from '@mui/material'
import React from 'react'

const CopyRight = (props) => {
    return (
        <a href='https://tinqbit.com' target='_blank' rel='noreferrer' >

            <Typography 
                variant="body1"
                // fontWeight="bold" 
                // color="text.secondary" 
                align="center" 
                {...props} 
                style={{ color: '#ffff' , transperant:0.2, fontSize:12 }}>
                {' '}
                {new Date().getFullYear()}
                {/* {'.'} */}
                {' © '}
                Powered by Tinqbit
            </Typography>
        </a>
    )
}

export default CopyRight