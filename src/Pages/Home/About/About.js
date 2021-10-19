import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div id="about" className="about">

                <div className="container">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-6 col-sm-6">
                            <div className="about_img">
                                <img className="w-100" src="https://templates.hibootstrap.com/opnix/default/assets/images/about/main1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="about_content">
                                <div className="section_title text-start">
                                    <h4 className="text-success">About Us</h4>
                                    <h2 className="text-start">We Are Caring For Your Eye Health Hospital</h2>
                                    <p className="text-start">Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <ul className="text-start py-3">
                                            <li className="py-3">Conducts eye health checkups</li>
                                            <li className="py-3">Best lasik treatment</li>
                                            <li className="py-3">Treats minor illnesses</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <ul className="text-start py-3">
                                            <li className="py-3"> Special eye exam</li>
                                            <li className="py-3"> Contact lens service</li>
                                            <li className="py-3">Special Retina exam</li>
                                        </ul>
                                    </div>


                                </div>
                                <button className="btn btn-primary mb-3">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;