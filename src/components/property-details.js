import React from 'react';
import Footer from './global-components/Footer';
import Navbar from './global-components/Navbar';
import PageHeader from './global-components/PageHeader';
import PropertyDetailsPage from './section-components/property-details';

const PropertyDetails = () => {

    return <>
        <Navbar />
        <PageHeader headertitle="TU NUEVO HOGAR"  />
        <PropertyDetailsPage />
        <Footer />
    </>;
}

export default PropertyDetails

