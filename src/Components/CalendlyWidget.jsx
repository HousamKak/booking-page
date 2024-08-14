import React, { useEffect } from 'react';

const CalendlyWidget = ({ url, active }) => {

    useEffect(() => {
        if (active && window.Calendly && !document.getElementById('calendly-widget').hasChildNodes()) {
            console.log('Calendly script loaded, initializing widget');
            window.Calendly.initInlineWidget({
                url: url,
                parentElement: document.getElementById('calendly-widget'),
            });
        } else if (!window.Calendly) {
            console.error('Calendly script not loaded');
        }
    }, [active, url]);

    return (
        <div
            id="calendly-widget"
            style={{ minWidth: '320px', height: '630px', opacity: active ? 1 : 0.5 }}
        ></div>
    );
};

export default CalendlyWidget;
