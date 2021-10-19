import React from 'react';
import Banner from '../../Home/Banner/Banner';

const GetAppoinment = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container-fluid">

                <h1 className="text-primary mt-5">Appoinment</h1>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 d-flex mt-5">
                        <div className="mt-5">
                            <div className="">
                                <img className="w-75" src="https://templates.hibootstrap.com/opnix/default/assets/images/appointment-main2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-75" src="https://templates.hibootstrap.com/opnix/default/assets/images/appointment-main3.jpg" alt="" />
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-6 col-sm-12 ">
                        <div className="appointment_content my-5">
                            <h3>Book An Appointment</h3>
                            <form className="mt-5" action="">
                                Name : <input type="text" placeholder="Your Name" />    ||
                                Email : <input type="text" placeholder="Your Email" /> <br /><br />
                                Phone : <input type="number" placeholder="Your Number" />   ||
                                Problem : <input type="text" placeholder="Your problems" /> <br /><br />
                                <button className="btn btn-primary">Get Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
        </div >
    );
};

export default GetAppoinment;