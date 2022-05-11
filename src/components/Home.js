import React from 'react';
import Navbar from './global-components/Navbar';
import Footer from './global-components/Footer';
import Banner from './section-components/Banner';
import Service from './section-components/Service';
import Product from './section-components/Product';
import Product2 from './section-components/Product2';
import Product3 from './section-components/Product3';
import Product4 from './section-components/Product4';
import About from './section-components/About';




const Home = () => {
    return <div>
        <Navbar />
        <Banner />
        {/* <Service /> */}
        <Product />
        <About />
        {/* <Video />
        <ProductV2 />
        <Testimonial />
        <Property />
        <Cta />
        <Agent />
        <Client />
        <LatestNews /> */}
        <Footer />
    </div>
}

export default Home

