import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import Footer from './global-components/Footer';
import Navbar from './global-components/Navbar';
import PageHeader from './global-components/PageHeader';
import { NotFound } from './section-components/NotFound';
import PropertyDetailsPage from './section-components/property-details';

const PropertyDetails = () => {

    const { id } = useParams();
    const property = properties.find((property) => property.id == id);
    console.log(property);
    return <>
        <Navbar />

        <PageHeader headertitle="TU NUEVO HOGAR" />
        {property === undefined ?
            <NotFound />
            : <PropertyDetailsPage property={property} />}

        <Footer />
    </>;
}

export default PropertyDetails

