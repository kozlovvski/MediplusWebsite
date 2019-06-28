import React, { Component } from "react";
import {
	Container,
	Col,
	Row,
	Button,
	Image,
	Media,
	Form
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//
// images
//

import aboutDoctorImage from "images/about.jpg";

export default class Home extends Component {
	state = {
		services: [
			{
				id: 1,
				name: "Emergency Services",
				icon: "flaticon-ambulance",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, commodi."
			},
			{
				id: 2,
				name: "Qualified Doctors",
				icon: "flaticon-doctor",
				description:
					"Mujer uno dolor más de poder mismo si. Consecuencia, chicharra?"
			},
			{
				id: 3,
				name: "Outdoor Checkups",
				icon: "flaticon-stethoscope",
				description:
					"Debitis ipsa tempora illum molestias, non repudiandae! Neque, exercitationem culpa!"
			},
			{
				id: 4,
				name: "24 Hours Service",
				icon: "flaticon-24-hours",
				description:
					"Aut numquam illum eligendi animi consequatur labore at minima, a illo"
			},
			{
				id: 5,
				name: "Something else",
				icon: "flaticon-experiment-results",
				description:
					"Dorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, commodi."
			},
			{
				id: 46,
				name: "And even more",
				icon: "flaticon-heart-rate",
				description:
					"Eligendi animi aut numquam illum consequatur labore at minima, a illo"
			}
		]
	};

	componentDidMount() {
		this.setState({isLoading: false});
	}
	render() {
		return (
			<main>
				<section id="Home">
					<Container>
						<Row className="py-3 py-md-5">
							<Col md={6}>
								<p className="subheading">Welcome to Mediplus</p>
								<h1 className="mb-2">We are here for your care</h1>
								<p className="mb-2">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
									asperiores adipisci dolorem voluptatum saepe at velit qui
									veritatis, minima dolorum vero quas ullam exercitationem
									animi. Soluta dicta excepturi temporibus assumenda.
								</p>
								<LinkContainer to="/appointment">
									<Button variant="primary">Make an appointment</Button>
								</LinkContainer>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="About">
					<Container>
						<Row className="py-3 py-md-0">
							<Col md={4} lg={5}>
								<Image src={aboutDoctorImage} className="about-doctor-image" />
							</Col>
							<Col
								md={8}
								lg={7}
								className="align-self-center pl-md-3 mt-3 mt-md-0 py-0 py-md-5 "
							>
								<p className="subheading">About Us</p>
								<h2 className="mb-2">
									We Are <span className="text-primary">Mediplus</span>{" "}
									Medical&nbsp;Clinic
								</h2>
								<p className="mb-2">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
									voluptatem iure quis, quaerat minus nesciunt, culpa voluptatum
									nobis consectetur facere autem sequi porro cumque quia aperiam
									exercitationem? Blanditiis, aliquid accusamus.
								</p>
								<LinkContainer to="/appointment">
									<Button variant="primary" className="mr-2 mb-2">
										Make an appointment
									</Button>
								</LinkContainer>
								<LinkContainer to="/#Contact">
									<Button variant="secondary" className="mb-2">
										Contact Us
									</Button>
								</LinkContainer>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="Services" className="bg-light">
					<Container>
						<Row className="px-2">
							<Col
								lg={{ span: 5, order: 12 }}
								className="bg-white mt-3 mt-lg-0 py-3 py-lg-5 px-3"
							>
								<p className="subheading">Our Services</p>
								<h2 className="mb-2">What we take pride in</h2>
								<p className="mb-2">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
									voluptatem iure quis, quaerat minus nesciunt, culpa voluptatum
									nobis consectetur.
								</p>
								<Form onSubmit={e => e.preventDefault()}>
									<Form.Group controlId="FirstName">
										<Form.Label srOnly>First Name</Form.Label>
										<Form.Control type="text" placeholder="First Name" />
									</Form.Group>

									<Form.Group controlId="Email">
										<Form.Label srOnly>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId="Message">
										<Form.Label srOnly>Your messsage</Form.Label>
										<Form.Control
											as="textarea"
											placeholder="How can we help you?"
											rows="3"
										/>
									</Form.Group>

									<Button variant="secondary" type="submit">
										Get in touch
									</Button>
								</Form>
							</Col>
							<Col lg={7} className="mt-3 py-0 mt-lg-0 py-lg-5 pr-lg-3">
								<Row>
									{this.state.services.map(service => {
										const { name, icon, description, id } = service;
										return (
											<Media className="col-md-6 col-lg-12 col-xl-6 mb-1 col-auto" key={id}>
												<i className={"service-icon mr-3 " + icon} />
												<Media.Body>
													<h3>{name}</h3>
													<p>{description}</p>
												</Media.Body>
											</Media>
										);
									})}
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
			</main>
		);
	}
}
