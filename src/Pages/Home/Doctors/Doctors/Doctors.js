import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/NieamulKabir/4f879078802329b13ac21bab20dce340/raw/1991b2b6e414ff236d20f5afb0f3e1911814874f/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="container" id="doctors">
            <h2 className="text-primary mt-5">Our Doctors</h2>
            <div className="doctors_container">
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                >

                </Doctor>)
            }
            </div>
           
        </div>
    );
};

export default Doctors;