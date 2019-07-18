import React from "react";

import WebsiteData from "data.json";
import MediplusInNumbers from "components/MediplusInNumbers";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Departments(props) {
	const id = props.match.params.id;
	const departmentData = WebsiteData.departments.find(
		department => department.id.toString() === id
	);

	window.scrollTo(0, 0);
	document.title = departmentData.name + " || Mediplus";

	return (
		<>
			<section>
				<Container className="py-3 py-md-5">
					<Row>
						<Col md={7} className="pr-md-3">
							<p className="subheading">Departments</p>
							<h2 className="mb-2">{departmentData.name}</h2>
							{departmentData.descriptionLong.map(paragraph => (
								<p className="mb-2" key={paragraph}>
									{paragraph}
								</p>
							))}
						</Col>
						<Col md={5} className="d-none d-md-block">
							<Image src={require("images/image_5.jpg")} fluid />
						</Col>
					</Row>
				</Container>
			</section>
			<MediplusInNumbers />
		</>
	);
}
