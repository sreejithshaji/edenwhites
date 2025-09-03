// AboutUs.jsx
import React from 'react';
import styles from './About.module.css';

import { Box } from '@mui/system';
import Carousel from '../../Components/Carousel/Carousel';
import Services from '../../Components/Services/Services';

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>About Eden Whites</h1>
        <p className={styles.heroText}>Crafting Meaningful Connections Through Thoughtful Gifting</p>
        <Box padding={1}>
          <Carousel />
        </Box>
        {/* <p className={styles.heroText}>Crafting Meaningful Connections Through Thoughtful Gifting</p> */}
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <p style={{textAlign:"justify"}} >
          At Eden Whites, we believe that every gift tells a story — a story of love, appreciation, celebration, and connection. Born from a passion to make gifting more personal and purposeful, Eden Whites is your go-to digital platform for curated, category-based gifts that are as unique as your relationships.
        {/* </p>
        <p> */}
          Whether you're celebrating a birthday, expressing corporate gratitude, or looking for something deeply rooted in Kerala's rich culture, Eden Whites brings to you a handpicked collection of products that blend artistry, authenticity, and emotion.
        {/* </p>
        <p> */}
          With an intuitive WhatsApp-powered checkout flow, you can browse, personalize, and send gifts with just a few taps — making the experience not just easy, but unforgettable.
        </p>
      </section>

      {/* Offerings Section */}
      <section className={styles.offeringsSection}>
        <Services />
      </section>

      {/* Smart Gifting Section */}
      <section className={styles.smartGiftingSection}>
        <h2 className={styles.sectionHeading}>Powering Smart Gifting</h2>
        <p style={{textAlign:"center"}}>
          We go beyond just selling products. Our custom dashboard helps our team manage your orders, WhatsApp messages, templates, and auto-replies, ensuring timely responses, personalized interactions, and a smooth gifting journey.
        </p>
      </section>

      {/* Promise Section */}
      <section className={styles.promiseSection}>
        <h2 className={styles.sectionHeading}>Our Promise</h2>
        <p style={{textAlign:"center"}} >
          At Eden Whites, we’re not just curating products — we're curating emotions. Every gift is thoughtfully selected, beautifully packaged, and delivered with a promise: to make someone’s day brighter.
        {/* </p>
        <p> */}
          Join us in making gifting personal again.</p>
      </section>

      <section className={styles.promiseSection}>
        <h2 className={styles.sectionHeading}>Contact Us</h2>
        <p style={{textAlign:"center"}} >
        edenwhitestradersllp@gmail.com
        </p>
        <p style={{textAlign:"center"}} > 
        +91 6238210945
        </p>

          {/* At Eden Whites, we’re not just curating products — we're curating emotions. Every gift is thoughtfully selected, beautifully packaged, and delivered with a promise: to make someone’s day brighter. */}
        {/* </p>
        <p> */}
          {/* Join us in making gifting personal again.</p> */}
      </section>
    </div>
  );
};

export default AboutUs;


