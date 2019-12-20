import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import './detail.scss';
import propertyImage from '../../assets/images/property-image.jpg';


class Detail extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <div className="col-md-12">
                        <div className="heading-wrapper">
                            <div className="heading">
                                <h3>Property title wiil be here</h3>
                                <h2><span>price - </span>$24000</h2>
                                <ul className="facility">
                                    <li><i className="flaticon-drawing18"></i>750 SQFT</li>
                                    <li><i className="flaticon-bathtub3"></i>2 bath</li>
                                    <li><i className="flaticon-bed40"></i>2 beds</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="detail-wrapper">
                            <div className="property-image">
                                <img src={propertyImage} alt="" />
                            </div>
                            <div className="property-post">
                                <div className="property__post-detail">
                                    <h5>Property Details</h5>
                                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
                                    <div className="ameneties_wrapper">
                                        <h5>ameneties</h5>
                                        <ul className="ameneties">
                                            <li><i className="flaticon-check33"></i>Garden</li>
                                            <li><i className="flaticon-check33"></i>Swimming Pool</li>
                                            <li><i className="flaticon-check33"></i>Garrage</li>
                                        </ul>
                                        <ul className="ameneties">
                                            <li><i className="flaticon-check33"></i>24X7 Security</li>
                                            <li><i className="flaticon-check33"></i>Tennis Court</li>
                                            <li><i className="flaticon-check33"></i>Close to Hospital</li>
                                        </ul>
                                        <ul className="ameneties">
                                            <li><i className="flaticon-check33"></i>Laundry Service</li>
                                            <li><i className="flaticon-check33"></i>Pet Friendly</li>
                                            <li><i className="flaticon-check33"></i>Club House</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}


export default Detail
