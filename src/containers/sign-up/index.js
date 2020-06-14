import React, { Component } from "react"
import { 
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap"
// import { AvForm, AvField } from "availity-reactstrap-validation"
// import mergePaint from "../../assests/mergePaint.jpg"
import Logo from "../../common/Logo"
import Footer from "../../common/Footer"
import { FaGoogle, FaGithub } from "react-icons/fa"

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Container fluid>
                <Logo/>
                <Row style={{ marginBottom: "30px"}}>
                    <Col md="4"></Col>
                    <Col md="4" className="sign-up-form">
                    {/* <img className="background-img" src={mergePaint}/> */}
                    <fieldset style={{border: "1px black solid", padding: "15px"}}>
                        <legend style={{ border: "3px black solid; margin-left: 1em; padding: 0.2em 0.8em "}}><h2>SignUp!</h2></legend>
                        <Form action={"/"}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input required type="email" name="email" id="exampleEmail" placeholder="Enter your valid Email address" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input required minLength={6} type="password" name="password" id="examplePassword" placeholder="Enter your username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Username (Optional) </Label>
                                <Input type="text" name="username" id="username" placeholder="Enter your username" />
                            </FormGroup>
                            <FormGroup style={{textAlign: "center"}}>
                                <Button color="primary" size="lg" type="submit">Sign Me Up!</Button>
                            </FormGroup>
                            <div style={{ textAlign: "center" }}>
                                <p> <b>OR</b> </p>
                            </div>
                            <FormGroup style={{textAlign: "center"}}>
                                <Button size="lg" href="#">Sign Up with Google! 
                                    <em style={{ paddingLeft: "15px", paddingBottom: "5px" }}><FaGoogle size="1em"/></em>
                                </Button>
                            </FormGroup>
                            <FormGroup style={{textAlign: "center"}}>
                                <Button size="lg" href="#">Sign Up with GithHub! 
                                    <em style={{ paddingLeft: "15px", paddingBottom: "5px" }}><FaGithub size="1em"/></em>
                                </Button>
                            </FormGroup>
                        </Form>                    
                    </fieldset>
                    </Col>
                    <Col md="4"></Col>
                </Row>
                <Footer/>
            </Container>
        )
    }
}
export default SignUp