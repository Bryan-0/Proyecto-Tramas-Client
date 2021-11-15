import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Tramas from '../components/Main/Tramas';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/tramas" />} />
                <Route path="/tramas" element={<Tramas />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;