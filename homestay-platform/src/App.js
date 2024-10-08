import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/auth/SignUp';
import Login from './components/auth/Login';
import HomestayList from './components/homestay/HomestayList';
import HomestayDetails from './components/homestay/HomestayDetails';
import HomePage from './pages/HomePage';



const App = () => {
    

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/Register" element={<Signup />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/homestays/:location" element={<HomestayList />} />
                    <Route path="/homestay/:id" element={<HomestayDetails />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
