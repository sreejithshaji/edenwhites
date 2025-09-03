import styles from  './singlecategory.module.css'
// import styles from  '../Components/Card/Product Card/newStyle.module.css'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { color, Container } from '@mui/system'
import { Box, Button, MenuItem, FormControl, Select } from '@mui/material'
import Loading from '../Components/loading/Loading'
import { BiFilterAlt } from 'react-icons/bi';
import ProductCard from '../Components/Card/Product Card/ProductCard'
import CopyRight from '../Components/CopyRight/CopyRight'
import mockData from '../Constants/products'

 

const SingleCategory = () => {
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [filterOption, setFilterOption] = useState('All')
    const [title, setTitle] = useState('All')
    const { cat } = useParams()

    

    useEffect(() => {
        loadCategoryData()
        window.scroll(0, 0)
    }, [])

    const loadCategoryData = () => {
        setIsLoading(true)
        console.log("category", cat);
        const filtered = mockData.filter(item => item.id === cat)
        console.log("filtered : ", filtered[0]);
        console.log("items : ", filtered[0].items);
        setProductData(filtered[0].items) 
        setIsLoading(false) 
    }

    // const productFilter = ['All', 'Price Low To High', 'Price High To Low', 'High Rated', 'Low Rated']

    // const handleChange = (e) => {
    //     setFilterOption(e.target.value.split(" ").join("").toLowerCase())
    //     setTitle(e.target.value)
    // }

    const loading = isLoading ? (
        <Container maxWidth='xl' style={{ marginTop: 10, display: "flex", justifyContent: "center", flexWrap: "wrap", paddingLeft: 10, paddingBottom: 20 }}>
            <Loading /><Loading /><Loading /><Loading />
            <Loading /><Loading /><Loading /><Loading />
        </Container >
    ) : ""

    return (
        <>
                
            <Container maxWidth='xl' style={{ marginTop: 90, display: 'flex', justifyContent: "center", flexDirection: "column"   }} > 
                <div 
                    className={ styles.categoryTitle}
                 >
                    {cat.toUpperCase()}
                </div>
                {loading}
                <Container
                 maxWidth='xl' 
                 style={{ marginTop: 10, display: "flex", 
                    justifyContent: 'center',
                  flexWrap: "wrap", paddingBottom: 20, marginBottom: 30,
                   width: '100%' }}>
                    {productData.map(prod => (
                        <ProductCard prod={prod} /> 
                    ))}
                </Container>
            </Container >
            <CopyRight sx={{ mt: 8, mb: 10 }} />
        </>
    )
}

export default SingleCategory