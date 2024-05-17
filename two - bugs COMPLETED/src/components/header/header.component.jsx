import React from "react";

import "./header.styles.scss";

const Header = ({ label }) => {
    return <div className={"header"}>{label}</div>;
};

export default Header;
