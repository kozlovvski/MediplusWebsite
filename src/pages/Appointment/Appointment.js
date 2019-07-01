import React from "react";
import Hero from "components/Hero/Hero";
import { Container, Row, Col } from "react-bootstrap";

export default function Appointment() {
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
						
					</Row>
				</Container>
			</section>
		</React.Fragment>
	);
}
