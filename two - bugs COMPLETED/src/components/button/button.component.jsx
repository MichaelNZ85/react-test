import React from "react";

import "./button.styles.scss";

const CustomButton = () => {
    return (
        <button onClick={() => alert("The Button has been clicked!")}>
            Click me!
        </button>
    );
};

export default CustomButton;
