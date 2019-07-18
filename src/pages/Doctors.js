import React from "react";

import WebsiteData from "data.json";
import MediplusInNumbers from "components/MediplusInNumbers";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Doctors(props) {
	const id = props.match.params.id;
	const doctorData = WebsiteData.doctors.find(doctor => doctor.id.toString() === id);

	window.scrollTo(0, 0);
	document.title = doctorData.name + " || Mediplus";

	return (
		<>
			<section>
				<Container className="py-3 py-md-5">
					<Row>
						<Col md={7} className="pr-md-3">
							<p className="subheading">{doctorData.spec}</p>
							<h2 className="mb-2">{doctorData.name}</h2>
							{doctorData.descriptionLong.map(paragraph => (
								<p className="mb-2" key={paragraph}>
									{paragraph}
								</p>
							))}
						</Col>
						<Col md={5} className="d-none d-md-block">
							<Image src={require(`images/doc-${id}.jpg`)} fluid />
						</Col>
					</Row>
				</Container>
			</section>
			<MediplusInNumbers />
		</>
	);
}
