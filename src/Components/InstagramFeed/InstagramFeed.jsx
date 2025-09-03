
import React from 'react';
import './InstagramFeed.css';

const InstagramFeed = () => (
    <div className="insta-embed-container">
        <div className="insta-embed-wrapper">
            <iframe
                className="insta-embed-iframe"
                src="https://www.instagram.com/edenwhitesllp/embed"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                title="Instagram Profile"
            ></iframe>
        </div>
    </div>
);

export default InstagramFeed;