import React from 'react'
import { Container } from 'react-bootstrap';

export default function Footer() {
	return (
		<section className="footer bg-dark text-light py-2">
			<Container className="text-center">
				<p>Coded with ❤ by <a href="http://github.com/kozlovvski">@kozlovvski</a>. Design by <a href="https://colorlib.com">ColorLib</a>.</p>	
			</Container>
		</section>
	)
}
