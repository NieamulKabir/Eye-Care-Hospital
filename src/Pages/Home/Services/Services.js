
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/NieamulKabir/c62cc4c6065f8cd716c7b046dfa89429/raw/976cf3e84fe2eef98eb8a68c79ad9af521f983fb/eye%2520care%2520fake%2520data')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="container" >
            <h1 className="text-primary mt-5">Our Services</h1>
            <div className="services_container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;