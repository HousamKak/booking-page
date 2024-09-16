import React, { useState } from 'react';
import Packages from '../Packages/Packages';
import CalendlyWidget from './CalendlyWidget';
import Modal from './Modal'; // Importing Modal component
import './Booking.css';
import batoulIm from '../media/batoul_2.jpg'; // Importing the image
import batoulImage from '../media/batoul.jpg'; // Importing the image
import azeemImage from '../media/azeem.jpg';  // Importing the image
import '@fortawesome/fontawesome-free/css/all.min.css';


const Booking = () => {
    const [calendlyActive, setCalendlyActive] = useState(false);
    const [calendlyUrl, setCalendlyUrl] = useState('');

    // Handle package selection and set the correct Calendly URL
    const handleBook = (selectedPackage) => {
        const calendlyUrls = {
            gold: "https://calendly.com/d/ckxc-frh-tmm/airport-pickup-gold-package",
            platinum: "https://calendly.com/d/cpjk-68v-tsf/airport-pickup-platinum-package"
        };

        setCalendlyUrl(calendlyUrls[selectedPackage]); // Set the selected Calendly URL
        setCalendlyActive(true); // Open the modal
    };

    const closeModal = () => {
        setCalendlyActive(false);
    };

    const scrollToPackages = () => {
        document.getElementById('packages-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="booking-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>LONDON ONBOARDING</h1>
                    <p>Your go-to-support network for new students in London, making every aspect of your journey -from landing to living- simple, stress-free, and welcoming</p>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages-section">
                <Packages onBook={handleBook} /> {/* Passing handleBook to open the modal from the packages */}
            </section>

            {calendlyActive && (
                <Modal onClose={closeModal}>
                    <CalendlyWidget url={calendlyUrl} active={calendlyActive} />
                </Modal>
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

            {/* Quote Section */}
            <section className="quote-section">
                <div className="quote-container">
                    <img src={batoulIm} alt="Batoul Noureddine" className="quote-image" />
                    <div className="quote-text">
                        <p>“Our mission is to empower students in London by creating a supportive community that eases their transition into city life. We are committed to providing personalized guidance and fostering connections that help students thrive academically, socially, and personally. By simplifying the everyday challenges of living in a new city, we enable students to focus on their growth and success, making their London experience as fulfilling and enriching as possible.”</p>
                    </div>
                </div>
            </section>

            {/* Catchy Phrase and Book Now Button Section */}
            <section className="book-now-section">
                <div className="catchy-phrase">
                    <h2>Make Your London a Swift Transition</h2>
                </div>
                <div className="button-container">
                    <button className="book-now-btn" onClick={scrollToPackages}>Book Us Now</button>
                    <a href="https://wa.me/message/G4RMGCJXZK2ZH1" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                        <button className="whatsapp-btn">
                           Contact Us
                        </button>
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <p className="footer-rights">© 2024 All Rights Reserved</p>
                    <p className="footer-phone"><i className="fab fa-whatsapp"></i> +447704636626 </p>
                    <p className="footer-team">The London Onboarding Team</p>
                </div>
            </footer>
        </div>
    );
};

export default Booking;
