import React from 'react'
import AliceCarousel from 'react-alice-carousel';
// import BannerData from '../../Helpers/HomePageBanner'
import 'react-alice-carousel/lib/alice-carousel.css';
import mockData from '../../Constants/products';
 
const Carousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
    };
    const items = mockData.map((item) => ( 
            <div className="item" style={{ marginTop: 10, width: '100%', height: 300 }} >
                <img src={item.items[0].img[0]} loading='lazy' alt={item.name} 
                     style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
                />
            </div> 
    ))

    return (
        <AliceCarousel
            animationType="fadeout"
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            touchTracking
            mouseTracking
            disableDotsControls
            autoPlay
            autoPlayInterval={2500}
            responsive={responsive}
        />
    )
}

export default Carousel