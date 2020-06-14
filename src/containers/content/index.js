import React, { Component } from "react";
import { FaTumblr } from "react-icons/fa"
import { Card, CardBody } from "reactstrap";


class Content extends Component {
    render() {
        return (
            <div style={{ textAlign: "center", padding: "5px 0px 30px 0px" }}>
                <Card>
                    <CardBody>
                        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                            <div style={{ paddingBottom: "100px" }}>
                                <span style={{ display: "inline-block", textAlign: "center"}}><FaTumblr size="3em" style={{ "color": "#0275d8" }} /></span>
                                <p style={{ display: "inline-block", color: "#0275d8" }}>
                                    <b>Taskatic</b>
                                </p>
                            </div>
                            
                        <h2>Welcome to Taskatic Home Page!!</h2>
                        <h5>Homepage is still in progres..</h5>
                        </div>
                    </CardBody>
                </Card>
            </div>
            
        )
    }   
}

export default Content;
