import React from 'react';
import PricingCard from './PricingCard';
import './Packages.css';
import Typography from '@mui/joy/Typography';

const Packages = ({ onBook }) => {
    return (
        <div className="packages-container">
            <div className="packages-title">
                <Typography level="h2" component="h2">
                    Explore London with Our Exclusive Packages
                </Typography>
            </div>

            <div className="packages-cards">
                <div className="packages-grid">
                    <PricingCard
                        title="Silver Package"
                        chipLabel="silver"
                        content="Our Silver Package is your virtual support system. Simply provide us with your arrival details and accommodation information, and we'll plan the best routes for you. We'll share all relevant information to ensure a smooth and hassle-free travel experience through a 30-minute call."
                        price="£25"
                        buttonLabel="Book Now"
                        buttonAction={() => onBook('silver')}
                        cardColor="#d9d9d9"
                    />

                    <PricingCard
                        title="Gold Package"
                        chipLabel="gold"
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
                        chipLabel="platinum"
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

            <div className="packages-additional-benefits">
                <Typography level="h4" component="h4">
                    Additional Benefits for All Packages:
                </Typography>
                <ul className="benefits-list">
                    <li>
                        <i className="pi pi-map-marker"></i>
                        A curated list of London’s top parks and must-visit attractions.
                    </li>
                    <li>
                        <i className="pi pi-whatsapp"></i>
                        A hotline WhatsApp service available for support up to one month after purchase.
                    </li>
                    <li>
                        <i className="pi pi-money-bill"></i>
                        Currency exchange service from any currency to GBP (must order 48 hours before arrival).
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Packages;
