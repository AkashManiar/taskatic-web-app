import React, { Component } from "react"
import { 
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron
} from "reactstrap"
import * as EmailValidator from 'email-validator';
import classNames from "classnames"
// import { AvForm, AvField } from "availity-reactstrap-validation"
// import mergePaint from "../../assests/mergePaint.jpg"
import Logo from "../../common/Logo"
import Footer from "../../common/Footer"
import { FaGoogle, FaGithub } from "react-icons/fa"

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formDetail: {
                email: {
                    error: false,
                    message: ""
                },
                password: {
                    error: false,
                    message: ""
                }
            }
            
        }
        onchange = (e) => {
            e.preventDefault()
            console.log('On Change')
            const formDetail = { ...this.state.formDetail }
            formDetail.email.error = false
            formDetail.password.error = false
            this.setState({ formDetail })
        }
        onsubmit = (e) => {
            e.preventDefault()
            const formDetail = { ...this.state.formDetail }
            const letters = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
            const isEmailValid = EmailValidator.validate(e.target.elements.email.value)
            const isPasswordValid = e.target.elements.password.value.match(letters) && e.target.elements.password.value.length > 5
            if (!isEmailValid) {
                formDetail.email.error = true
                formDetail.email.message = "Invalid email please enter a valid email eg.(myemail@gmail.com)."
            }
            if (!isPasswordValid) {
                formDetail.password.error = true
                formDetail.password.message = "Invalid password! Password should be at least 6 characters long and it should be alphanumeric."
            }
            this.setState({ formDetail })
        }
    }
    render() {
        const isEmailErr = this.state.formDetail.email.error
        const isPassErr = this.state.formDetail.password.error

        return (
            <Container fluid>
                <Logo/>
                <Row style={{ marginBottom: "30px"}} className="sign-up-form">
                    <Col md="4"></Col>
                    <Col md="4" className="login-form">
                    <Jumbotron>
                    <fieldset style={{border: "1px black solid", padding: "15px"}}>
                        <legend style={{ border: "3px black solid; margin-left: 1em; padding: 0.2em 0.8em "}}><h2>Log In!</h2></legend>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input onChange={this.onChange} className={classNames({ "error": isEmailErr })} type="email" name="email" id="exampleEmail" placeholder="Enter your valid Email address" />
                                    {
                                        isEmailErr && 
                                        <p style={{ color: "red", fontSize: "13px" }}>{this.state.formDetail.email.message}</p>
                                    }
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input className={classNames({ "error": isPassErr })} type="password" name="password" id="examplePassword" placeholder="Enter your 6 characters password" />
                                    {
                                        isPassErr && 
                                        <p style={{ color: "red", fontSize: "13px" }}>{this.state.formDetail.password.message}</p>
                                    }
                            </FormGroup>
                            <div style={{ textAlign: "center" }}>
                                <p> <b>Ready to Dive In Again?</b> </p>
                            </div>
                            <FormGroup style={{textAlign: "center"}}>
                                <Button color="primary" size="lg" type="submit">Log In!</Button>
                            </FormGroup>
                            
                            <FormGroup style={{textAlign: "center"}}>
                                <Button size="lg" href="#">Sign In with Google! 
                                    <em style={{ paddingLeft: "15px", paddingBottom: "5px" }}><FaGoogle size="1em"/></em>
                                </Button>
                            </FormGroup>
                            <FormGroup style={{textAlign: "center"}}>
                                <Button size="lg" href="#">Sign In with GithHub! 
                                    <em style={{ paddingLeft: "15px", paddingBottom: "5px" }}><FaGithub size="1em"/></em>
                                </Button>
                            </FormGroup>
                        </Form>                    
                    </fieldset>
                    </Jumbotron>
                    </Col>
                    
                    <Col md="4"></Col>
                </Row>
                <Footer/>
            </Container>
        )
    }
}
export default SignUp