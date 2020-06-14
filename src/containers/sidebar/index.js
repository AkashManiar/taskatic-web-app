import React from "react";
import {
    FaGoogle,
    FaBook,
    FaUser,
    FaListOl,
    FaHistory,
    FaCalendar,
    FaChartBar
} from "react-icons/fa"
import { 
    NavItem, 
    NavLink, 
    Nav, 
    Container
} from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import Style from "./sidebar.css"


const SideBar = () =>  (
    <Container fluid>
        <Logo/>
        <Nav vertical>
                <NavItem>
                    <NavLink tag={Link} to={"#"}>
                        <div className="nv">
                            <FaGoogle size="1em" style={{marginRight: "7px"}}/>
                            Organization
                        </div>
                    </NavLink>
                </NavItem>
            
            <NavItem>
                <NavLink tag={Link} to={"#"}>
                    <div className="nv">
                        <FaBook size="1em" style={{marginRight: "7px"}}/>
                        Projects
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={"#"}>
                    <div className="nv">
                        <FaUser size="1em" style={{marginRight: "7px"}}/>
                            Teams
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={"#"}>
                    <div className="nv">
                        <FaListOl size="1em" style={{marginRight: "7px"}}/>
                        Backlog
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={"#"}>
                    <div className="nv">
                        <FaHistory size="1em" style={{marginRight: "7px"}}/>
                        Stories
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={"#"}>
                    <div className="nv">
                        <FaCalendar size="1em" style={{marginRight: "7px"}}/>
                        Calendar
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={"#"}>
                    <div className="nv">
                        <FaChartBar size="1em" style={{marginRight: "7px"}}/>
                        Report
                    </div>
                </NavLink>
            </NavItem>
        </Nav>
    </Container>
        
)

export default SideBar