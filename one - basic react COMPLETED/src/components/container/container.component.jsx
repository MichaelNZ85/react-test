import React, { useState } from "react";

import { ReactComponent as Dog } from "../../assets/dog.svg";
import { ReactComponent as Cat } from "../../assets/cat.svg";

import CustomButton from "../button/button.component";
import CustomHeader from "../header/header.component";

import "./container.styles.scss";

const Container = () => {
    const [header, setHeader] = useState("Hello!");
    const [colour, setColour] = useState("#fb474d");
    const [isDog, setIsDog] = useState(true);

    return (
        <div className={"container"}>
            {isDog ? (
                <Dog fill={colour} className={"dog-image"} />
            ) : (
                <Cat fill={colour} className={"dog-image"} />
            )}
            <CustomHeader text={header} />

            <div className={"header-buttons"}>
                <CustomButton
                    onClick={() => setHeader("Dogs Rule!")}
                    label={'Change header to "Dogs Rule!"'}
                />
                <CustomButton
                    onClick={() => setHeader("Cats Drool!")}
                    label={'Change header to "Cats Drool!"'}
                />
            </div>

            <hr />

            <div className={"color-buttons"}>
                <CustomButton
                    onClick={() => setColour("#0000FF")}
                    label={`Change ${isDog ? "dog" : "cat"} to blue.`}
                />
                <CustomButton
                    onClick={() => setColour("#00FF00")}
                    label={`Change ${isDog ? "dog" : "cat"}  to green.`}
                />
            </div>

            <hr />

            <CustomButton
                onClick={() => setIsDog(!isDog)}
                label={`Change ${isDog ? "dog" : "cat"} to ${
                    isDog ? "cat" : "dog"
                }.`}
            />
        </div>
    );
};

export default Container;
