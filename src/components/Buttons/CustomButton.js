import React from "react";
import "./buttons.css";
const CustomButton = ({ title, onClick }) => {
	return (
		<div className="btn">
			<button onClick={onClick}>{title}</button>
		</div>
	);
};

export default CustomButton;
