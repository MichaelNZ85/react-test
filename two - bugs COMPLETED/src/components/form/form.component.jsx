import React, { useState } from "react";

import "./form.styles.scss";

const FormContainer = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="form-container">
            <div>
                <span>First Name:</span>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div>
                <span>Last Name:</span>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
        </div>
    );
};

export default FormContainer;
