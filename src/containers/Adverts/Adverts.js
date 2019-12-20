import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import { connect } from 'react-redux'

import Advert from './Advert/Advert'
import { getAdvert } from '../../store/action/advert'

class Adverts extends Component {

    componentDidMount() {
        this.props.getAdvert();
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.adverts.map(advert => <Advert key={advert.id} advert={advert} />)}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    adverts: state.advert.adverts
});

export default connect(mapStateToProps, { getAdvert })(Adverts);
