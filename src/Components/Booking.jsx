import React, { useState,useEffect } from 'react';
import Packages from '../Packages/Packages';
import CalendlyWidget from './CalendlyWidget';
import './Booking.css';

const Booking = () => {
    const [packageSelected, setPackageSelected] = useState(null);
    const [calendlyActive, setCalendlyActive] = useState(false);

    const handleBook = (selectedPackage) => {
        setPackageSelected(selectedPackage);
        setCalendlyActive(true);
    };
    // Effect to handle scroll
    return (
        <div className="booking-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>Welcome to London</h1>
                    <p>Experience the vibrant heart of the UK with our exclusive packages.</p>
                </div>
            </section>


            {/* Packages Section */}
            <Packages onBook={handleBook} />

            {calendlyActive && (
                <div className="calendly-section">
                    <CalendlyWidget
                        url="https://calendly.com/housam-kak/housam-test"
                        active={calendlyActive}
                    />
                </div>
            )}
            {/* Introduction Section */}
            <section className="introduction-section">
                <h2>Welcome to London!</h2>
                <p>Discover the vibrant city of London, a melting pot of culture, history, and modernity. Whether you're here for business, study, or leisure, London's diverse neighborhoods and rich history offer something for everyone.</p>
            </section>

            {/* Landing and Transportation Section */}
            <section className="transportation-section">
                <h3>Arriving in London</h3>
                <p>From Heathrow to Gatwick, arriving in London is just the beginning of your adventure. Here’s how to navigate the city’s airports and get into the city smoothly.</p>
                <ul>
                    <li><strong>Heathrow Express: </strong> The fastest way to reach Central London from Heathrow.</li>
                    <li><strong>London Underground: </strong> Affordable and convenient, with connections to all major parts of the city.</li>
                    <li><strong>Taxi & Ride Shares: </strong> Available 24/7 from all major airports.</li>
                </ul>
            </section>

            {/* Accommodation Guide Section */}
            <section className="accommodation-section">
                <h3>Where to Stay</h3>
                <p>London offers a wide range of accommodation options. Here are some of the most popular areas to stay:</p>
                <ul>
                    <li><strong>Central London: </strong>Ideal for sightseeing with close proximity to landmarks.</li>
                    <li><strong>Shoreditch: </strong> Perfect for those who enjoy vibrant nightlife and trendy spots.</li>
                    <li><strong>Kensington: </strong> A luxurious area known for its museums and parks.</li>
                </ul>
            </section>

            {/* Must-Visit Attractions Section */}
            <section className="attractions-section">
                <h3>Top Attractions</h3>
                <p>Make the most of your time in London by visiting these must-see attractions:</p>
                <ul>
                    <li><strong>The British Museum:</strong> Explore centuries of history and culture.</li>
                    <li><strong>The London Eye:</strong> Get a bird's eye view of the city from this iconic Ferris wheel.</li>
                    <li><strong>Hyde Park:</strong> Enjoy a relaxing stroll in one of London's largest parks.</li>
                </ul>
            </section>

            {/* Practical Information Section */}
            <section className="practical-info-section">
                <h3>Practical Information</h3>
                <p>Here are some tips to help you get settled in London:</p>
                <ul>
                    <li><strong>SIM Cards:</strong> Purchase a local SIM card for data and calls.</li>
                    <li><strong>Currency Exchange:</strong> Exchange your currency at competitive rates.</li>
                    <li><strong>Emergency Numbers:</strong> Dial 999 for emergencies.</li>
                </ul>
            </section>
        </div>
    );
};

export default Booking;
