import React, { Component } from "react"
import Jerry from "../../assests/jerry.jpg"
import Lisa from "../../assests/lisa.jpg"
import Steve from "../../assests/steve.jpeg"
import { 
    Container, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Button,
    Card,
    Row,
    Col,
    CardImg 
} from "reactstrap"
import Footer from "../../common/Footer"
import Logo from "../../common/Logo"


class ContactUs extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Logo/>
                <Col md="8" style={{ textAlign: "center", paddingTop: "20px", color: "#0275d8" }}><h1>Our Team!</h1></Col>
            </Row>
            <Row style={{ paddingTop: "30px" }}>
                <Col md="4"></Col>
                <Col md="4">
                    <Card style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center", padding: "10px"}}>
                        <CardImg 
                                className="rounded-circle" 
                                src={Jerry} 
                                alt="Jerry"
                                style={{ height: "140px", width: "170px"}} 
                        />
                    </span>
                        <CardBody>
                        <CardTitle><h2>Jerry Wilson</h2></CardTitle>
                        <CardSubtitle style={{ color: "grey" }}><b >CEO & Co-founder, Taskatic Inc.</b></CardSubtitle>
                        <CardText style={{ paddingTop: "20px", fontSize: "14px" }}>Jerry is the guy who would be always on his feet for any problems, his quick and precise decision making capabilities from top-level is what makes Taskatic running.</CardText>
                        <p style={{ color: "grey" }}>jerry.wilson@taskatic.inc</p>
                        <Button color="primary"><b>Contact Jerry</b></Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4"></Col>
            </Row>
            <Row style={{ paddingTop: "100px" }}>
                <Col md="4"></Col>
                <Col md="4">
                    <Card style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center", padding: "10px"}}>
                        <CardImg 
                                className="rounded-circle" 
                                src={Lisa} 
                                alt="Lisa"
                                style={{ height: "140px", width: "170px"}} 
                        />
                    </span>
                        <CardBody>
                        <CardTitle><h2>Lisa Sampson</h2></CardTitle>
                        <CardSubtitle style={{ color: "grey" }}><b >CTO & Co-founder, Taskatic Inc.</b></CardSubtitle>
                        <CardText style={{ paddingTop: "20px", fontSize: "14px" }}>Lisa has been working tirelessly to make sure client remains happy for Taskatic, and to make sure clients requirements are satisfied precisely. If you ask who makes top level technological decisions..Lisa is one to contact.</CardText>
                        <p style={{ color: "grey" }}>lisa.sampson@taskatic.inc</p>
                        <Button color="primary"><b>Contact Lisa</b></Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4"></Col>
            </Row>
            <Row style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <Col md="4"></Col>
                <Col md="4">
                    <Card style={{ textAlign: "center" }}>
                    <span style={{ textAlign: "center", padding: "10px"}}>
                        <CardImg 
                                className="rounded-circle" 
                                src={Steve} 
                                alt="Steve"
                                style={{ height: "140px", width: "170px"}} 
                        />
                    </span>
                        <CardBody>
                        <CardTitle><h2>Steve Balmer</h2></CardTitle>
                        <CardSubtitle style={{ color: "grey" }}><b >UI & UX Chief Lead, Taskatic Inc.</b></CardSubtitle>
                        <CardText style={{ paddingTop: "20px", fontSize: "14px" }}>Whatever beautiful designs you see on Taskatic, Steve is one to thank for. Every design goes through Steve's eyes, so that quality is never compromised to our clients. Steve's years of experience with UI & UX, makes him best man at work.</CardText>
                        <p style={{ color: "grey" }}>steve.balmer@taskatic.inc</p>
                        <Button color="primary"><b>Contact Steve</b></Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4"></Col>
            </Row>
            <Footer />
                
            </Container>
        )
    }
}
export default ContactUs