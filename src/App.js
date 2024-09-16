import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/booking-page" element={<Booking />} />
            </Routes>
        </Router>
    );
}

export default App;
