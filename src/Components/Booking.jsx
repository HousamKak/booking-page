import React, { useState } from 'react';
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

    return (
        <div className="booking-container">
            <Packages onBook={handleBook} />

            {calendlyActive && (
                <div className="calendly-section">
                    <CalendlyWidget 
                        url="https://calendly.com/housam-kak/housam-test"
                        active={calendlyActive}
                    />
                </div>
            )}
        </div>
    );
};

export default Booking;
