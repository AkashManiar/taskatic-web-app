    import React, { Component } from "react"
import { Col, Row, Container } from "reactstrap"
import pageNotFound from "../../assests/pageNotFound.png"

class Error extends Component {
    render() {
        return (
            <Container style={{textAlign: "center"}}>
                <Row>
                    <Col>
                        <img src={pageNotFound} alt={"404 page not found"}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Error