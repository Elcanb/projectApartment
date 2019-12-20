import React from 'react'
import { Container, Row } from 'reactstrap'

import './header.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navigation/Navbar'

const Header = () => {
    return (
        <>
            <div className="upperHeader">
                <Container>
                    <Row>
                        <div className="location">
                            <p>Azerbaijan, Baku</p>
                        </div>
                        <div className="contactInfo">
                            <p>mobile: 055 555 55 55</p>
                            <p>mail: info@apartment.az</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <div className="mainHeader">
                        <Logo />
                        <Navbar />
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Header
