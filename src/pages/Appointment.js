import React from "react";

import Hero from "components/Hero";

export default function Appointment() {
	window.scrollTo(0, 0);
	document.title = "Appointment || Mediplus";

	return (
			<Hero
				subheading="Make an appointment"
				title="How can we help you?"
				description="Minima dolorum vero quas ullam exercitationem
										animi. Soluta dicta excepturi temporibus assumenda."
				backgroundImage={require("images/bg_1.jpg")}
				hideAppointmentButton
			/>
	);
}