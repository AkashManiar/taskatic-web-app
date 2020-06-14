import React, { useRef } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import {
	FaUsers,
	FaChartLine,
	FaTasks,
	FaArrowCircleRight
} from "react-icons/fa"
import { Link } from "react-router-dom"
import Logo from "./common/Logo"
import Footer from "./common/Footer"


const scrollTo = (ref) => {
	if (ref) {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth"
		})
	}
}

function App() {
	const formTeams = useRef(null)
	const trackProgress = useRef(null)
	const taskMng = useRef(null)

return (
	<Container fluid>
			<Row>
				<Logo/>
				<Col sm="10" md={{ size: 6, offset: 2, textAlign: "center" }}>
					<h1><b>Try Taskatic Today!</b> </h1>
					<Col md="6">
						<p className="text-wrap">Taskatic is a task management App similar to JIRA, where users can keep track of their tasks and see its progress. It aims to provides git integration in later part of project</p>
					</Col>
				</Col>
			</Row>
			<Row>
				{/* <Col xl="8"> */}
				<Col sm={{ size: 2, textAlign: "right", offset: 4 }}>
					<div>
						<h6>Dive In!</h6>
						<Link to="/sign-up">
							<Button color="success">Sign up</Button>
						</Link>
					</div>
				</Col>
				<Col sm={{ size: 3, textAlign: "left" }}>
					<div>
						<h6>Already a user?</h6>
						<Link to="/login">
							<Button color="warning">Log In</Button>
						</Link>
					</div>
				</Col>
				{/* </Col> */}
			</Row>
			<hr className="border" />
			<Row>
				<Col md="4">
					<div className="info">
						<Col md="8">
							<FaUsers size="5em" style={{ "color": "#0275d8" }} />
							<h4>Form Teams</h4>
							<p>Form teams for your organization and to see how much your team is progressing</p>
							<Button
								color="primary"
								onClick={() => scrollTo(formTeams)}
							>See More
						<FaArrowCircleRight size="2em" style={{ "paddingLeft": "10px" }} />
							</Button>
						</Col>
					</div>
				</Col>
				<Col md="4">
					<div className="info">
						<Col md="8">
							<FaChartLine size="5em" style={{ "color": "#0275d8" }} />
							<h4>Track progress</h4>
							<p>Track your team's progress graphically, with different reports, charts and graphs</p>
							<Button color="primary" onClick={() => scrollTo(trackProgress)}>See More
								<FaArrowCircleRight size="2em" style={{ "paddingLeft": "10px" }} />
							</Button>
						</Col>
					</div>
				</Col>
				<Col md="4">
					<div className="info">
						<Col md="8">
							<FaTasks size="5em" style={{ "color": "#0275d8" }} />
							<h4>Task Management</h4>
							<p>Manage Tasks with various task categories, along with Backlog Management</p>
							<Button color="primary" onClick={() => scrollTo(taskMng)}>See More
								<FaArrowCircleRight size="2em" style={{ "paddingLeft": "10px" }} />
							</Button>
						</Col>
					</div>
				</Col>
			</Row>
			{/* <hr className="border"/> */}
			<Container style={{ paddingTop: "100px" }}>
			<div ref={formTeams}>
				<Row className="item-description">
					<Col sm={{ size: 4, offset: 1 }}>
						<h2> Form Teams </h2>
					</Col>
				</Row>
				<Row>
					<Col sm={{ size: 6, offset: 1 }}>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</Col>
					<Col sm={{ size: 4, offset: 1 }}>
						<FaUsers size="10em" style={{ "color": "#0275d8" }} />
					</Col>
				</Row>
			</div>
			<div ref={trackProgress}>
				<Row className="item-description">
					<Col sm={{ size: 4, offset: 1 }}>
						<h2>Track Progress</h2>
					</Col>
				</Row>
				<Row>
					<Col sm={{ size: 6, offset: 1 }}>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</Col>
					<Col sm={{ size: 4, offset: 1 }}>
						<FaChartLine size="10em" style={{ "color": "#0275d8" }} />
					</Col>
				</Row>
			</div>
			<div ref={taskMng}>
				<Row className="item-description">
					<Col sm={{ size: 4, offset: 1 }}>
						<h2>Task Management</h2>
					</Col>
				</Row>
				<Row>
					<Col sm={{ size: 6, offset: 1 }}>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</Col>
					<Col sm={{ size: 4, offset: 1 }}>
						<FaTasks size="10em" style={{ "color": "#0275d8" }} />
					</Col>
				</Row>
			</div>
		</Container>
		<Footer/>
	</Container>
);
}

export default App;
