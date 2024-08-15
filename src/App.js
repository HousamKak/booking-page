import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking';
import CalendlyPage from './Components/CalendlyPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/booking-page" element={<Booking />} />
                <Route path="/calendly/:packageType" element={<CalendlyPage />} />
            </Routes>
        </Router>
    );
}

export default App;
