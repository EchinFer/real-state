import React from 'react';
import Footer from './global-components/Footer';
import Navbar from './global-components/Navbar';
import PageHeader from './global-components/PageHeader';
import ContactForm from './section-components/ContactForm';


const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact"  />
        <ContactForm />
        <Footer />
    </div>
}

export default ContactPage

