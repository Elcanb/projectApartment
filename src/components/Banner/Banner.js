import React from 'react';
import { Col } from 'reactstrap';

import './banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            <div className="search">
                <div className="search__title">Find Your Dream Home</div>
                <div className="search__content">
                    <form>
                        <div className="row">
                            <Col md="4">
                                <input type="text" placeholder="location" />
                            </Col>
                            <Col md="4">
                                <input type="text" placeholder="property type" />
                            </Col>
                            <Col md="4">
                                <input type="text" placeholder="room" />
                            </Col>
                            <Col md="4">
                                <input type="text" placeholder="room" />
                            </Col>
                            <Col md="4">
                                <input type="text" placeholder="room" />
                            </Col>
                            <Col md="4">
                                <input type="text" placeholder="room" />
                            </Col>
                            <Col md="12">
                                <div className="button">
                                    <button>Search</button>
                                </div>
                            </Col>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner
