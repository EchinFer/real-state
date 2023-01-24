import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import ContactPage from '../components/Contact'
import Home from '../components/Home'
import PropertyDetails from '../components/property-details'
import PropertyGrid from '../components/section-components/PropertyGrid'
import PropertyPage from '../components/section-components/PropertyPage'
// import { RealStateApp } from '../RealStateApp'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/properties" element={<PropertyPage />} />
                <Route path="/property-details" element={<PropertyDetails />} />
                <Route path="/contact" element={<ContactPage />} />
                
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
