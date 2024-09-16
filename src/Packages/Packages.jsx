import React from 'react';
import PricingCard from './PricingCard';
import './Packages.css';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

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
                        title="Gold Package"
                        chipLabel="gold"
                        content={[
                            "Airport meet and greet with signage at the arrivals gate",
                            "Pickup via public transport and drop-off at your doorstep",
                            "A mobile sim card package loaded with data and unlimited calls for one month",
                            "A transportation Oyster card preloaded with money for your convenience.",
                            "Support and guidance on opening a UK bank account.",
                            "A list of essential information and applications to navigate London"
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
                            "Airport meet and greet with signage at the arrivals gate",
                            "Pickup with a private chauffeured car, providing you with a comfortable tour of London's boroughs",
                            "A mobile sim card package loaded with data and unlimited calls for one month",
                            "A transportation Oyster Card preloaded with money for your convenience",
                            "Support with opening a UK bank account",
                            "A list of essential information and applications to navigate London"
                        ]}
                        price="Starting £150"
                        buttonLabel="Book Now"
                        buttonAction={() => onBook('platinum')}
                        cardColor="#e5e4e2"
                    />

                </div>
            </div>


            <div className='layer'>
                <div className='layer_2'>
                <Card>
                    <div className="packages-title">
                        <Typography level="h2" component="h2">
                            Additional Benefits for All Packages:
                        </Typography>
                    </div>

                    <div className="benefits-list">
                        <Typography level="body-md" component="p">
                         Join a WhatsApp group with the team and other incoming students, to receive support for all questions and meet new like-minded students
                        </Typography>
                        <Typography level="body-md" component="p">
                            Currency exchange service from any currency to GBP (must order 48 hours before arrival)
                        </Typography>
                    </div>
                </Card>
                </div>
            </div>


        </div>

    );
};

export default Packages;
