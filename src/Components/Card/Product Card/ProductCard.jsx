import React, { useState, useContext } from 'react';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './newStyle.module.css';
import { ContextFunction } from '../../../Context/Context';

export default function ProductCard({ prod }) {
    const { cart, setCart } = useContext(ContextFunction);
    const [count, setCount] = useState(1);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAddToCart = () => {
        const existingProductIndex = cart.findIndex(item => item._id === prod._id);

        if (existingProductIndex !== -1) {
            const updatedCart = cart.map((item, index) =>
                index === existingProductIndex
                    ? { ...item, quantity: item.quantity + count }
                    : item
            );
            setCart(updatedCart);
            toast.success(`${prod.name} quantity updated in the cart!`, { autoClose: 500 });
        } else {
            const updatedCart = [...cart, { ...prod, quantity: count }];
            setCart(updatedCart);
            toast.success(`${prod.name} added to the cart!`, { autoClose: 500 });
        }
    };

    // Slider settings with dots enabled
    const sliderSettings = {
        dots: true, // Enable dots for indicators
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,  
        autoplaySpeed: 1000,
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.productBadge}>{prod._id}</div>
            <div className={styles.productTiltEffect}>
                <div className={styles.productImage}>
                    <Slider {...sliderSettings}>
                        {prod.img.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    className={styles.sliderImage}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productCategory}>{prod.category}</div>
                <h2 className={styles.productTitle}> {prod.name} </h2>
                <div className={styles.productDescription}>
                    <p style={{ textAlign: 'justify' }}>
                        {prod.description.split(' ').slice(0, 35).join(' ')}...
                    </p>
                </div>
                <div className={styles.productActionsWrapper}>
                    <div className={styles.productActions}>
                        <button
                            className={styles.decrementButton}
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className={styles.productCount}>{count}</span>
                        <button
                            className={styles.incrementButton}
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.productBottom}>
                    <button
                        className={styles.productButton}
                        onClick={handleAddToCart}
                    >
                        <span className={styles.buttonText}>Add to Cart</span>
                        <svg
                            className={styles.buttonIcon}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
