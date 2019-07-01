import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function MediplusInNumbers() {
	return (
		<section id="MediplusInNumbers">
			<Container>
				<Row className="py-3 py-md-5 text-light align-items-center">
					<Col md={6}>
						<p className="subheading">Mediplus in numbers</p>
						<h2 className="mb-2">Over 5,000 patients trust us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit, possimus veritatis corporis iure quod omnis
							officiis non praesentium eos at.
						</p>
						<LinkContainer to="/appointment">
							<Button variant="secondary">Make an appointment</Button>
						</LinkContainer>
					</Col>
					<Col md={6} className="d-none d-sm-block">
						<Row>
							<Col sm={3} md={6} className="py-3 text-center">
								<strong>30</strong>
								<span>Years of Experience</span>
							</Col>
							<Col sm={3} md={6} className="py-3 text-center">
								<strong>4,300</strong>
								<span>Happy Patients</span>
							</Col>
							<Col sm={3} md={6} className="py-3 text-center">
								<strong>187</strong>
								<span>Members of Staff</span>
							</Col>
							<Col sm={3} md={6} className="py-3 text-center">
								<strong>18</strong>
								<span>Mediplus Clinics</span>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
