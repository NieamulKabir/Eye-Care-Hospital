import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, discription, imgurl } = service;


    return (
        <div className="container">
            <CardGroup className="service_card">
                <Card>
                    <Card.Img className="img" variant="top" src={imgurl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {discription.slice(0, 75)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/serviceDetails/${id}`}>
                            <button className="btn btn-success service_btn">More Details ...</button>
                        </Link>
                    </Card.Footer>
                </Card>

            </CardGroup>




            {/* <div className="service pb-3">
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
            </div> */}
        </div>
    );
};

export default Service;