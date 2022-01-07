import React from 'react';
import Contact from '../../../Contract/Contract';
import Footer from '../../../Footer/Footer';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Faq from './Faq/Faq';

const Home = () => {
    return (
        <div id="home" className='bg-dark'>
            <Banner></Banner>
            <Reviews></Reviews>
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;