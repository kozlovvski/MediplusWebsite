import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "components/ContactForm";

export default function Contact() {
	return (
		<section id="Contact" className="bg-light">
			<Container>
				<Row className="py-3 py-md-0">
					<Col md={6} lg={7} className="py-0 py-md-5 pr-md-3">
						<p className="subheading">Contact</p>
						<h2 className="mb-2">Let's get in touch</h2>
						<p className="mb-2">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							voluptatem iure quis, quaerat minus nesciunt, culpa voluptatum
							nobis consectetur.
						</p>
					</Col>
					<Col md={6} lg={5} className="bg-white mt-3 mt-md-0 py-3 py-md-5 px-sm-3">
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
