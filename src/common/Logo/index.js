import React, { Component } from "react"
import { Col } from "reactstrap"
import { FaTumblr } from "react-icons/fa"
import { Link } from "react-router-dom"

class Logo extends Component {
    render() {
        return (
            <Col sm="2" style={{ paddingLeft: "45px", paddingTop: "17px", paddingBottom: "15px" }}>
                <Link to="/">
                    <span style={{ display: "inline-block", textAlign: "center"}}><FaTumblr size="3em" style={{ "color": "#0275d8" }} /></span>
                    <p style={{ display: "inline-block" }}>
                        <b>Taskatic</b>
                    </p>
                </Link>
            </Col>
        )
    }
}
export default Logo