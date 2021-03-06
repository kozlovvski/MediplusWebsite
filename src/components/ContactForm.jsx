import React from 'react'
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {
	return (
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
	);
}
