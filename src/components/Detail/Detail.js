import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios';

import './detail.scss';
import '../../assets/font/flaticon/flaticon.css';
import propertyImage from '../../assets/images/property-image.jpg';


class Detail extends Component {

    state = {
        location: '',
        price: '',
        room: '',
        floor: '',
        square: ''
    }

    componentDidMount() {

        let id = this.props.match.params.advert_id;

        axios.get(`http://localhost:3004/adverts/${id}`)
            .then(res => this.setState({
                location: res.data.location,
                price: res.data.price,
                room: res.data.room,
                floor: res.data.floor,
                square: res.data.square
            }));
    }

    render() {
        const { location, price, room, floor, square } = this.state;
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <div className="heading-wrapper">
                            <div className="heading">
                                <h3>{location}</h3>
                                <h2><span>price - </span>${price}</h2>
                                <ul className="facility">
                                    <li><i className="flaticon-set-square"></i>SQR: {square} m<sup>2</sup></li>
                                    <li><i className="flaticon-sofa"></i>Room: {room}</li>
                                    <li><i className="flaticon-stairs"></i>Floor: {floor}</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md="12">
                        <div className="detail-wrapper">
                            <Row>
                                <Col md="6">
                                    <div className="property-image">
                                        <img src={propertyImage} alt="" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="property-post">
                                        <div className="property__post-detail">
                                            <h5>Property Details</h5>
                                            <p>A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of spring which I enjoy with my whole
                                                heart. I am alone, and feel the charm of existence in this spot,
                                                which was created for the bliss of souls like mine. I am so happy,
                                                my dear friend, so absorbed in the exquisite sense of mere tranquil
                                                existence, that I neglect my talents.</p>
                                            <div className="ameneties_wrapper">
                                                <h5>ameneties</h5>
                                                <ul className="ameneties">
                                                    <li>Garden</li>
                                                    <li>Swimming Pool</li>
                                                    <li>Garrage</li>
                                                </ul>
                                                <ul className="ameneties">
                                                    <li>24X7 Security</li>
                                                    <li>Tennis Court</li>
                                                    <li>Close to Hospital</li>
                                                </ul>
                                                <ul className="ameneties">
                                                    <li>Laundry Service</li>
                                                    <li>Pet Friendly</li>
                                                    <li>Club House</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Detail
