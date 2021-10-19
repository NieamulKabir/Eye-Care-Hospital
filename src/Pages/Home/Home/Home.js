import React from 'react';

import About from '../About/About';
import Appointment from '../Appoinment/Appointment';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Doctors from '../Doctors/Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Appointment></Appointment>
            <Doctors></Doctors>
            <ChooseUs></ChooseUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;