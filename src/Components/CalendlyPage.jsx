// CalendlyPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import CalendlyWidget from './CalendlyWidget';

const CalendlyPage = () => {
    const { packageType } = useParams();

    const calendlyUrls = {
        silver: "https://calendly.com/housam-kak/housam-test",
        gold: "https://calendly.com/housam-kak/housam-test", // Replace with your actual URLs
        platinum: "https://calendly.com/housam-kak/housam-test"
    };

    const url = calendlyUrls[packageType];

    return (
        <div>
            <h1>Book Your {packageType.charAt(0).toUpperCase() + packageType.slice(1)} Package</h1>
            <CalendlyWidget url={url} active={true} />
        </div>
    );
};

export default CalendlyPage;
