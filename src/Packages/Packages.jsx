import React from 'react';
import PricingCard from './PricingCard';
import { Divider } from 'primereact/divider';  // Adjust this import if you're using another Divider
import './Packages.css';  // You can still use this if you have additional custom styles

const Packages = ({ onBook }) => {
    return (
        <div className="packages-container">
            <div className="packages-title">
                <h2>Explore London with Our Exclusive Packages</h2>
            </div>

            <div className="packages-cards">
                <div className="packages-grid">
                    <PricingCard
                        title="Silver Package"
                        chipLabel="SILVER"
                        content="Our Silver Package is your virtual support system. Simply provide us with your arrival details and accommodation information, and we'll plan the best routes for you. We'll share all relevant information to ensure a smooth and hassle-free travel experience through a 30-minute call."
                        price="£25"
                        buttonLabel="Book Now"
                        buttonAction={() => onBook('silver')}
                        cardColor="#d9d9d9"
                    />

                    <PricingCard
                        title="Gold Package"
                        chipLabel="MOST POPULAR"
                        content={[
                            "Airport meet and greet with signage at the arrivals gate.",
                            "Pickup via public transport and drop-off at your doorstep.",
                            "A mobile SIM card package loaded with unlimited calls, texts, and 5G internet for one month.",
                            "A transportation Oyster card preloaded with money for your convenience.",
                            "Support and guidance on opening a UK bank account."
                        ]}
                        price="£85"
                        buttonLabel="Book Now"
                        buttonAction={() => onBook('gold')}
                        cardColor="#ffe680"
                    />

                    <PricingCard
                        title="Platinum Package"
                        chipLabel="PLATINUM"
                        content={[
                            "Pickup with a private chauffeured car, providing you with a comfortable tour of London's boroughs.",
                            "A mobile SIM card package loaded with unlimited calls, texts, and 5G internet for one month.",
                            "A transportation Oyster card preloaded with money for your convenience.",
                            "Support and guidance on opening a UK bank account."
                        ]}
                        price="From £165"
                        buttonLabel="Book Now"
                        buttonAction={() => onBook('platinum')}
                        cardColor="#e5e4e2"
                    />
                </div>
            </div>

            <Divider />

            <div className="packages-additional-benefits">
                <h4>Additional Benefits for All Packages:</h4>
                <ul>
                    <li>A curated list of London’s top parks and must-visit attractions.</li>
                    <li>A hotline WhatsApp service available for support up to one month after purchase.</li>
                    <li>Currency exchange service from any currency to GBP (must order 48 hours before arrival).</li>
                </ul>
            </div>

            <p>Discover London effortlessly with our tailored packages designed to enhance your travel experience. Book now and let us take care of the details!</p>
        </div>
    );
};

export default Packages;
