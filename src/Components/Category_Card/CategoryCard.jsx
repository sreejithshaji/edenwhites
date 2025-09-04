import React from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({ id, name, img }) => {

    return (
        <Link to={`products/${id}`}>
            <div className={styles.mainCard}>
                <img src={img} alt="" className={styles.mainImg} loading='lazy' />
                <span className={styles.imgTitle}>{name}</span>
            </div>
        </Link>
    )
}

export default CategoryCard