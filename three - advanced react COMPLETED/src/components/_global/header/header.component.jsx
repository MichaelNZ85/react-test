import React from "react";

import "./header.styles.scss";
import { useSelector } from "react-redux";

const PageHeader = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const currentUserName = useSelector(
        (state) => state.loggedInUser.firstName
    );
    return (
        <div className={"header"}>
            <span className={"lg"}>Welcome!</span>
            {isLoggedIn ? (
                <span>Hi, {currentUserName}!</span>
            ) : (
                <span>Please enter your details to log in.</span>
            )}
        </div>
    );
};

export default PageHeader;
