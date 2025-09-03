// AboutUs.jsx
import React from 'react';
import './About.module.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>About Eden Whites</h1>
        <p>Crafting Meaningful Connections Through Thoughtful Gifting</p>
        <p>
          At Eden Whites, we believe that every gift tells a story — a story of love, appreciation, celebration, and connection. 
          Born from a passion to make gifting more personal and purposeful, Eden Whites is your go-to digital platform for curated, 
          category-based gifts that are as unique as your relationships.
        </p>
        <p>
          Whether you're celebrating a birthday, expressing corporate gratitude, or looking for something deeply rooted in Kerala's 
          rich culture, Eden Whites brings to you a handpicked collection of products that blend artistry, authenticity, and emotion.
        </p>
        <p>
          With an intuitive WhatsApp-powered checkout flow, you can browse, personalize, and send gifts with just a few taps — 
          making the experience not just easy, but unforgettable.
        </p>
      </section>

      <section className="content-section">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Kerala-Themed Gifts</strong> – Immerse in the beauty of Kerala with culturally rich gift items that celebrate our heritage.</li>
          <li><strong>Corporate Gifting Solutions</strong> – Impress your clients and employees with elegant and memorable gift packages.</li>
          <li><strong>Birthday & Occasion Gifts</strong> – Personalized options to make every special day extra special.</li>
          <li><strong>Eco-Friendly Collections</strong> – Thoughtfully chosen items that reflect our love for nature and sustainability.</li>
        </ul>
      </section>

      <section className="smart-gifting-section">
        <h2>Powering Smart Gifting</h2>
        <p>
          We go beyond just selling products. Our custom dashboard helps our team manage your orders, WhatsApp messages, templates, 
          and auto-replies, ensuring timely responses, personalized interactions, and a smooth gifting journey.
        </p>
      </section>

      <section className="images-section">
        <h2>Suggested Images</h2>
        <ul>
          <li><strong>Hero Image:</strong> A flat-lay of elegant gift boxes featuring local Kerala products, with greenery and soft lighting.</li>
          <li><strong>Behind the Scenes:</strong> Candid shots of artisans crafting products or our team packaging a custom order.</li>
          <li><strong>WhatsApp Checkout Flow Mockup:</strong> A phone UI displaying how users place an order seamlessly via WhatsApp.</li>
          <li><strong>Customer Moments:</strong> Smiling customers receiving or unboxing Eden Whites gifts (authentic user-generated content or staged shoots).</li>
          <li><strong>Sustainability Showcase:</strong> Images highlighting eco-friendly packaging or handmade crafts.</li>
        </ul>
      </section>

      <section className="promise-section">
        <h2>Our Promise</h2>
        <p>
          At Eden Whites, we’re not just curating products — we're curating emotions. Every gift is thoughtfully selected, beautifully 
          packaged, and delivered with a promise: to make someone’s day brighter.
        </p>
        <p>Join us in making gifting personal again.</p>
      </section>
    </div>
  );
};

export default AboutUs;
