import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hero from "components/Hero/Hero";

export default function Appointment() {
	window.scrollTo(0, 0);
	document.title = "Appointment || Mediplus";

	return (
		<React.Fragment>
			<Hero
				subheading="Make an appointment"
				title="How can we help you?"
				description="Minima dolorum vero quas ullam exercitationem
										animi. Soluta dicta excepturi temporibus assumenda."
				backgroundImage={require("images/bg_1.jpg")}
				hideAppointmentButton
			/>
			<section id="Appointment">
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
						<h2>Add something here...</h2>
					</Row>
				</Container>
			</section>
		</React.Fragment>
	);
}