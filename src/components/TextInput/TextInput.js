import React from "react";
import "./input.css";
const TextInput = ({ label, type, placeholder, value, onChange }) => {
	return (
		<div className="input">
			<label>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default TextInput;
