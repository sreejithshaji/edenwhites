import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What We Offer</h2>
      <div className={styles.servicesSectionWrapper}>
        <div className={styles.servicesBox}>
          <i className="fa-solid fa-code"></i>
          <h3 className={ styles.serviceTitle}>Kerala-Themed Gifts</h3>
          <p className={styles.serviceDescription}>
            Immerse in the beauty of Kerala with culturally rich gift items that celebrate our heritage.
          </p>
        </div>
        <div className={styles.servicesBox}>
          <i className="fa-solid fa-mobile-alt"></i>
          <h3 className={ styles.serviceTitle}>Corporate Gifting</h3>
          <p className={styles.serviceDescription}>
            Impress your clients and employees with elegant and memorable gift packages.
          </p>
        </div>
        <div className={styles.servicesBox}>
          <i className="fa-solid fa-palette"></i>
          <h3 className={ styles.serviceTitle}>Birthday & Occasion Gifts</h3>
          <p className={styles.serviceDescription}>
            Personalized options to make every special day extra special.
          </p>
        </div>
        <div className={styles.servicesBox}>
          <i className="fa-solid fa-chart-line"></i>
          <h3 className={ styles.serviceTitle}>Eco-Friendly Collections</h3>
          <p className={styles.serviceDescription}>
            Thoughtfully chosen items that reflect our love for nature and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;