import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import './Packages.css';

const Packages = ({ onBook }) => {
    return (
        <div className="packages-container">
            <h2>Explore London with Our Exclusive Packages</h2>

            <div className="packages-grid">
                <Card title="Silver Package: £25" className="package-card silver">
                    <p>
                        Our Silver Package is your virtual support system. Simply provide us with your arrival details and accommodation information, and we'll plan the best routes for you. We'll share all relevant information to ensure a smooth and hassle-free travel experience through a 30-minute call.
                    </p>
                    <Button label="Book Now" className="p-button-outlined" onClick={() => onBook('silver')} />
                </Card>

                <Card title="Gold Package: £85" className="package-card gold">
                    <p>Experience a warm welcome with our Gold Package, which includes:</p>
                    <ul>
                        <li>Airport meet and greet with signage at the arrivals gate.</li>
                        <li>Pickup via public transport and drop-off at your doorstep, allowing you to experience London's renowned public transport system.</li>
                        <li>A mobile SIM card package loaded with unlimited calls, texts, and 5G internet for one month.*</li>
                        <li>A transportation Oyster card preloaded with money for your convenience.</li>
                        <li>Support and guidance on opening a UK bank account.</li>
                    </ul>
                    <Button label="Book Now" className="p-button-outlined" onClick={() => onBook('gold')} />
                </Card>

                <Card title="Platinum Package: Starting from £165" className="package-card platinum">
                    <p>Indulge in luxury with our Platinum Package, offering:</p>
                    <ul>
                        <li>Pickup with a private chauffeured car, providing you with a comfortable tour of London's boroughs.</li>
                        <li>A mobile SIM card package loaded with unlimited calls, texts, and 5G internet for one month.*</li>
                        <li>A transportation Oyster card preloaded with money for your convenience.</li>
                        <li>Support and guidance on opening a UK bank account.</li>
                    </ul>
                    <Button label="Book Now" className="p-button-outlined" onClick={() => onBook('platinum')} />
                </Card>
            </div>

            <Divider />

            <div className="additional-benefits">
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
