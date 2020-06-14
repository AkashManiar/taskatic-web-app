import React, { Component } from "react"
import { Container } from "reactstrap";
import SideBar from "react-sidebar"
import SBar from "../sidebar"
import Content from "../content/"
import Footer from "../../common/Footer"
import TopBar from "../content/topbar";

class Home extends Component {
    constructor(props) {
    super(props);
        this.state = {
            sidebarDocked: false,
            sidebarOpen: false
        }
    }
    toggleSideBar() {
        this.setState({
            sidebarDocked: !this.state.sidebarDocked,
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render() {
        return (
            <SideBar
                sidebar={<SBar />}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.toggleSideBar}
            >
            <Container>
                <TopBar toggleBar={() => this.toggleSideBar()}/>
                <Content />
                <Footer />
            </Container>
            </SideBar>
        )
    }
}

export default Home