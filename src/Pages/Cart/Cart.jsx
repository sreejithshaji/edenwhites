import React, { useState, useContext, useRef, useEffect } from 'react';
import styles from './CartNew.module.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { ContextFunction } from '../../Context/Context'; 

const Cart = () => {
    const { cart, setCart } = useContext(ContextFunction); // Access context values
    const [total, setTotal] = useState(0);
    const [customerName, setCustomerName] = useState(''); // State for customer name
    const inputRef = useRef(null); // Create a ref for the input element

    useEffect(() => {
        const newTotal = Object.values(cart).reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotal(newTotal);
    }, [cart]);

    useEffect(() => {
        // Focus the input box when the component is mounted
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const deleteArticle = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const setQuantity = (id, quantity) => {
        if (quantity > 0) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                )
            );
        } else {
            deleteArticle(id);
        }
    };

    const incrementQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const reduceQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter((item) => item.quantity > 0) // Remove items with quantity 0
        );
    };

    const submitOrder = () => {
        if (!customerName.trim()) {
            alert('Please enter your name before submitting the order.');
            return;
        }

        // Convert cart items to a meaningful text
        const orderDetails = Object.values(cart)
            .map(item => `${item.id} ${item.name} (x${item.quantity})`)
            .join('\n');
        const message = `Hello ${customerName} here,\n\nOrder Details:\n${orderDetails}\n\nPlease confirm the availability and let me know the next steps for payment and delivery. Thank you!`;

        // WhatsApp API URL (replace with your API endpoint)
        const whatsappNumber = 'whatsapp:+916238210945'; // Replace with the recipient's WhatsApp number
        const apiUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(apiUrl, '_blank');
    };

    return (
        <div className={styles.cartContent}>
            <div className={styles['cart-wrapper']}>
                {Object.keys(cart).length === 0 ? (
                    <div style={{ backgroundColor: "rgb(37, 40, 37)" }} className={styles['cart-total']}>
                        <p style={{ backgroundColor: "rgb(37, 40, 37)", color: "white" }}>Your cart is empty.</p>
                    </div>
                ) : (
                    Object.values(cart).map((item) => (
                        <div key={item.id} className={styles['cart-item']}>
                            {/* First Column: Image and Name */}
                            <div className={`${styles['cart-item-cell']} ${styles.image}`}>
                                <img src={item.img[0]} alt={item.name} />
                            </div>

                            <div style={{ background: "rgb(37, 40, 37)", width: "15%" }}>
                                <p className={`${styles['cart-item-cell']} ${styles.price}`}>
                                    {item.name}
                                </p>
                            </div>

                            {/* Second Column: Quantity Section */}
                            <div className={`${styles['cart-item-cell']} ${styles.body}`}>
                                <button
                                    className={styles['cart-controls']}
                                    onClick={() => reduceQuantity(item.id)}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        setQuantity(item.id, parseInt(e.target.value, 10))
                                    }
                                />
                                <button
                                    className={styles['cart-controls']}
                                    onClick={() => incrementQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            {/* Third Column: Total Price and Remove Icon */}
                            <div className={`${styles['cart-item-cell']} ${styles.side}`}>
                                <div style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    padding: 5,
                                    backgroundColor: "#d16666",
                                    color: "white", display: "flex", flexDirection: "column", alignItems: "center"
                                }}>
                                    <AiOutlineDelete
                                        style={{ fontSize: 25, color: "white", backgroundColor: "#d16666" }}
                                        onClick={() => deleteArticle(item.id)}
                                    />
                                    <div style={{ backgroundColor: "#d16666", color: "white" }}>Remove</div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {Object.keys(cart).length > 0 && (
                <>
                    {/* Total Price and Message */}
                    <div style={{ backgroundColor: "black" }} className={styles['cart-total']}>
                        <p className={styles['total-center']}>
                            The price can be changed based on the final order. We will connect with you through WhatsApp.
                        </p>
                    </div>

                    {/* Input Message */}
                    <p className={styles['total-center']}>
                        Please enter your name below to proceed with the order.
                    </p>

                    {/* Customer Name Input */}
                    <div style={{ backgroundColor: "black", padding: "5px" }} className={styles['cart-total']}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            ref={inputRef} // Attach the ref to the input element
                            className={styles['name-input']}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                color: "white",
                                border: "2px solid #4CAF50", // Bright green border
                                boxShadow: "0 0 10px #4CAF50", // Subtle glow effect
                                backgroundColor: "black",
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <div style={{ backgroundColor: "black" }} className={styles['cart-total']}>
                        <button
                            className={styles['submit-button']}
                            onClick={submitOrder}
                        >
                            Submit Order
                        </button>
                    </div>

                    {/* WhatsApp Message */}
                    <div style={{ backgroundColor: "black" }} className={styles['cart-whatsapp']}>
                        <p className={styles['total-center']}>
                            By submitting, we will take you to our WhatsApp chat.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;