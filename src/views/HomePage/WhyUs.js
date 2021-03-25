import React from 'react'
import {whyUsData} from '../../utils/data/data'
import LeftTitle from '../../components/LeftTitle'
import {Row,Col} from 'react-bootstrap'

const WhyUs = () => {
    return (
        <Row className="p-5 mt-5 mb-5">
            <Col sm={12} md={6}>
                <LeftTitle header={whyUsData.header} description={whyUsData.description} buttonText="contact us"/>
            </Col>
            <Col className="p-5 youtube">
                    <iframe class="responsive-iframe" src="https://www.youtube.com/embed/QbghS3OrSC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
    )
}

export default WhyUs
