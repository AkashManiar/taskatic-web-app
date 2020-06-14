import React, { Component } from "react"
import { Card, CardBody } from "reactstrap"
import { FaTumblr, FaCopyright, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

class Footer extends Component {
    render() {
        return (
            <Card>
				<Link to="/contact-us">
					<div style={{ padding: "10px" }}>
						<span style={{ display: "inline-block", paddingRight: "5px" }}><FaUser size="2em" style={{ "color": "#0275d8"}}/></span>
						<h4 style={{ color: "#0275d8" , display: "inline-block" }}>Contact Us</h4>
					</div>
				</Link>
				<span style={{ textAlign: "center", paddingTop: "20px" }}><FaTumblr size="2em" style={{ "color": "#0275d8"}} /></span>
				<CardBody style={{ textAlign: "center" }}>
						<span style={{ display: "inline-block", paddingRight: "5px" }}><FaCopyright size="1em" /></span>
						<p style={{ display: "inline-block" }}>
							Copyright 2020. All rights reserved.
						</p>
				</CardBody>
			</Card>
        )
    }
}
export default Footer