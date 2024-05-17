import React from "react";

import "./button.styles.scss";

const CustomButton = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default CustomButton;
