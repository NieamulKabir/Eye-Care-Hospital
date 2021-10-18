import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';

const ServiceDetails = ({ serci }) => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        let value = ''
        fetch('https://gist.githubusercontent.com/NieamulKabir/c62cc4c6065f8cd716c7b046dfa89429/raw/976cf3e84fe2eef98eb8a68c79ad9af521f983fb/eye%2520care%2520fake%2520data')
            .then(res => res.json())
            .then(data => {
                value = data.find(result => (result.id === parseInt(serviceId)))
                setServiceDetails(value);
            });
    }, [serviceId])


    return (
        <div>
            <Banner></Banner>
            <div className="mt-4 container">
                <div className="mt-4 pb-4">
                    <img src={serviceDetails?.imgurl} alt="" />
                </div>
                <div>
                    <h2>{serviceDetails?.title}</h2>
                    <p>
                        <strong>Discription : </strong>  {serviceDetails?.discription}
                    </p>
                    <p>
                        <strong>Treatment : </strong>  {serviceDetails?.treatment}
                    </p>

                    <Link to="/home">
                        <button className="btn btn-primary"> Go Back</button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default ServiceDetails;