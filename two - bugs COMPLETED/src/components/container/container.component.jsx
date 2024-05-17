import React from "react";

import Header from "../header/header.component";
import FormContainer from "../form/form.component";
import CustomButton from "../button/button.component";

import './container.styles.scss';

const Container = () => {
    return (
        <div className="container">
            <Header />

            <FormContainer />

            <CustomButton />
        </div>
    );
}

export default Container;
