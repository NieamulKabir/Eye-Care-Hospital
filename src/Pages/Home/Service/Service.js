import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, discription, imgurl } = service;


    return (
        <div className="container">
            <div className="service pb-3">
                <div>
                    <img src={imgurl} alt="" />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p className="px-3">{discription.slice(0, 80)}</p>

                    <Link to={`/serviceDetails/${id}`}>
                        <button className="btn btn-warning">More Details ...</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Service;