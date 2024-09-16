import React, { useState, useEffect } from 'react';
import Packages from '../Packages/Packages';
import CalendlyWidget from './CalendlyWidget';
import './Booking.css';
import batoulImage from '../media/batoul.jpg'; // Importing the image
import azeemImage from '../media/azeem.jpg';  // Importing the image

const Booking = () => {
    const [packageSelected, setPackageSelected] = useState(null);
    const [calendlyActive, setCalendlyActive] = useState(false);

    const handleBook = (selectedPackage) => {
        setPackageSelected(selectedPackage);
        setCalendlyActive(true);
    };

    return (
        <div className="booking-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>LONDON ONBOARDING</h1>
                    <p>To be the go-to support network for students in London, making every aspect of their journey—from landing to living—simple, stress-free, and welcoming.</p>
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

            {/* Our Team Section */}
            <section className="team-section">
                <h2>Our Team</h2>
                <div className="team-container">
                    <div className="team-member-card">
                        <img src={batoulImage} alt="Batoul Noureddine" className="team-image" />
                        <div className="team-member-info">
                            <h3>Batoul Noureddine</h3>
                            <p>🌍 Lebanese</p>
                            <p>🏫 Studying at Imperial College London</p>
                            <p>⚡ MSc in Sustainable Energy Futures</p>
                            <p>🏆 Recipient of two scholarships to study in the UK</p>
                            <p>🏡 1 year living experience in 4 different locations in the UK</p>
                            <p>🚊 Travelled to 12 different cities and towns in the UK</p>
                            <p>🔐 Knows all tricks and tips to navigate London smoothly, smartly, and cost-effectively</p>
                            <p>🌍 "With experience traveling to 14+ countries and meeting 60+ nationalities, I effortlessly blend with any culture."</p>
                        </div>
                    </div>
                    <div className="team-member-card">
                        <img src={azeemImage} alt="Azeem Armaghan" className="team-image" />
                        <div className="team-member-info">
                            <h3>Azeem Armaghan</h3>
                            <p>🎓 Completed LLB (Final Year) from the University of London in 2017.</p>
                            <p>📚 Successfully pursued Bar at Law from BPP London (2020-2021) and was called to the Bar of England and Wales by the Honourable Society of Lincoln’s Inn.</p>
                            <p>🎓 Recently earned an LLM from Queen Mary University of London.</p>
                            <p>🏙️ London has been my second home for the past five years, giving me deep insights into the city's student life.</p>
                            <p>⚖️ Interned in the legal field, gaining valuable experience in the heart of London’s legal community.</p>
                            <p>🌍 Originally from Pakistan, I bring a diverse cultural perspective and understand the unique challenges international students face.</p>
                            <p>💈 Your go-to guide for navigating life in London—whether it's finding the best-value barbers, reliable dry cleaners, or the most cost-effective gym memberships.</p>
                            <p>🗣️ Passionate about helping fellow students make the most of their London experience with practical tips and personalized advice.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
