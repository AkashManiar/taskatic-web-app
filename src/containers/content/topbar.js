import React, { Component } from "react";
import {
    Navbar,
    Button,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { FaBars, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom";

class TopBar extends Component {
    render () {
        return (
            <Navbar
                color="light"
                light
                className="navbar shadow-sm p-3 mb-5 bg-white rounded"
                expand="md"
            >
                <Button color="primary" onClick={this.props.toggleBar}>
                    <FaBars/>
                </Button>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink tag={Link} to={"#"}>
                        Home
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to={"#"}>
                        Stories
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to={"#"}>
                        Teams
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to={"#"}>
                        Bugs
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to={"#"}>
                    <span style={{ display: "inline-block" }}>
                        My Profile
                        <FaUser size = "1em" style={{ display: "inline-block" , marginLeft: "10px", marginBottom: "8px"}}/>
                    </span>
                        
                    </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default TopBar
