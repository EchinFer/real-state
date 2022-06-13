import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import PropertyDetails from '../components/property-details'
// import { RealStateApp } from '../RealStateApp'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Home />} />
                <Route path="/property-details" element={<PropertyDetails />} />
            </Routes>
        </BrowserRouter>
    )
}
