import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import smoothscroll from 'smoothscroll-polyfill';
 
// Element.scrollIntoView polyfill for Safari
smoothscroll.polyfill();

ReactDOM.render(
	<App />,
	document.getElementById("root")
);