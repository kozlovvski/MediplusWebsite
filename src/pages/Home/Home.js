import React, { Component } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import WebsiteData from "data.json";

//
// components
//

import Service from "components/Service/Service";
import ContactForm from "components/ContactForm/ContactForm";
import Department from "components/Department/Department";
import Doctor from "components/Doctor/Doctor";
import MediplusInNumbers from "components/MediplusInNumbers/MediplusInNumbers";
import Hero from "components/Hero/Hero";

//
// images
//

import aboutDoctorImage from "images/about.jpg";

//
// main
//

export default class Home extends Component {
	componentDidMount() {
		document.title = "Home || Mediplus";
	}
	
	render() {
		return (
			<React.Fragment>
				<Hero
					id="Home"
					subheading="Welcome to Mediplus"
					title="We are here for your care"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
									asperiores adipisci dolorem voluptatum saepe at velit qui
									veritatis, minima dolorum vero quas ullam exercitationem
									animi. Soluta dicta excepturi temporibus assumenda."
				/>
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
									We Are <span className="text-primary">Mediplus </span>
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
						<Row className="px-sm-2">
							<Col
								lg={{ span: 5, order: 12 }}
								className="services-description mt-3 mt-lg-0 py-3 py-lg-5 px-sm-3"
							>
								<p className="subheading">Our Services</p>
								<h2 className="mb-2">What we take pride in</h2>
								<p className="mb-2">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
									voluptatem iure quis, quaerat minus nesciunt, culpa voluptatum
									nobis consectetur.
								</p>
								<ContactForm className="d-none d-sm-block" />
							</Col>
							<Col lg={7} className="mt-sm-3 py-0 mt-lg-0 py-lg-5 pr-lg-3">
								<Row>
									{WebsiteData.services.map(service => {
										return <Service service={service} key={service.id} />;
									})}
								</Row>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="YourHealth">
					<Container>
						<Row className="py-5 justify-content-center">
							<Col md={8} lg={6} className="text-center text-light">
								<h2 className="mb-2">Your Health is Our Priority</h2>
								<p className="mb-2">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
									asperiores adipisci dolorem voluptatum.
								</p>
								<Button variant="light">Search Places</Button>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="Departments">
					<Container>
						<Row className="px-sm-2 py-3 py-lg-0">
							<Col
								lg={5}
								className="departments-description py-3 py-lg-5 px-sm-3"
							>
								<p className="subheading">Departments</p>
								<h2 className="mb-2">What we specialize in</h2>
								<p className="mb-2">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
									voluptatem iure quis, quaerat minus nesciunt, culpa voluptatum
									nobis consectetur.
								</p>
								<Button variant="outline-primary">Learn more</Button>
							</Col>
							<Col lg={7}>
								<Row>
									{WebsiteData.departments.map(department => {
										return (
											<Department department={department} key={department.id} />
										);
									})}
								</Row>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="Doctors">
					<Container className="py-3 py-md-5">
						<Row className="justify-content-center mb-2">
							<Col md={8} lg={6} className="text-center">
								<h2 className="mb-2">Our Doctors</h2>
								<p className="mb-2">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
									asperiores adipisci dolorem voluptatum.
								</p>
							</Col>
						</Row>
						<Row>
							{WebsiteData.doctors.map(doctor => {
								return <Doctor doctor={doctor} key={doctor.id} />;
							})}
						</Row>
					</Container>
				</section>
				<MediplusInNumbers />
			</React.Fragment>
		);
	}
}
