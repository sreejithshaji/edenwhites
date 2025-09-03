import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { ContextFunction } from '../../Context/Context'
import CategoryCard from '../../Components/Category_Card/CategoryCard';
// import BannerData from '../../Helpers/HomePageBanner';
import Carousel from '../../Components/Carousel/Carousel'
import SearchBar from '../../Components/SearchBar/SearchBar'
import CopyRight from '../../Components/CopyRight/CopyRight'
import CategoryHeading from './/CategoryHeading/CategoryHeading'
import mockData from '../../Constants/products'
import InstagramFeed from '../../Components/InstagramFeed/InstagramFeed'
const HomePage = () => {
    const { setCart } = useContext(ContextFunction)
    let authToken = localStorage.getItem('Authorization')
    useEffect(() => {
        getCart()
        window.scroll(0, 0)
        // Inject Elfsight script
        const script = document.createElement('script');
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [])
    const getCart = async () => {
        if (authToken !== null) {
            const { data } = await axios.get(`${process.env.REACT_APP_GET_CART}`,
                {
                    headers: {
                        'Authorization': authToken
                    }
                })
            setCart(data);
        }

    }



    return (
        <>
            <Container maxWidth='xl' style={{
                display: 'flex', justifyContent: "center", padding: 0, flexDirection: "column", marginBottom: 70
            }}>
                <Box padding={1}>
                    <Carousel />
                </Box>
                <CategoryHeading />
                <Container
                    maxWidth='xl'
                    style={{
                        marginTop: 10, display: "flex",
                        justifyContent: 'center',
                        flexGrow: 1, flexWrap: 'wrap', gap: 20
                    }}
                >

                    {
                        mockData.map(data => (
                            <CategoryCard data={data} key={data.items[0].img} />
                        ))
                    }
                </Container>
            </Container >
            <InstagramFeed />
            <CopyRight sx={{ mt: 8, mb: 10 }} />
        </ >
    )
}

export default HomePage