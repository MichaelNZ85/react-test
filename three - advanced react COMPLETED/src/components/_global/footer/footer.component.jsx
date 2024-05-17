import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./footer.styles.scss";
import { actionTypes } from "../../../redux/global.actions";

const PageFooter = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const handleLogOut = () => {
        dispatch({ type: actionTypes.LOGOUT });
    };

    return (
        <div className={"footer"}>
            {isLoggedIn && <button onClick={handleLogOut}>Log Out</button>}
        </div>
    );
};

export default PageFooter;
