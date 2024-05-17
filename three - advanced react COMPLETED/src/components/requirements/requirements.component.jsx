import React from "react";

const Requirements = () => {
    return (
        <div className={"requirements"}>
            <ol>
                <li>
                    Set up routing using React Router for a two-page
                    application. Create routes for a login page and a details
                    page (these page components have already been created).
                </li>
                <li>
                    Implement a basic Redux store to manage global state - use
                    this to mock a "login" and "logout" process. The state of
                    certain components on the page should respond based on if a
                    user is logged in or logged out as well as utilising the
                    React Router to switch pages appropriately.
                </li>
                <li>
                    Use redux to populate the details page. These values should
                    be editable and should reset between login/logout if they
                    have not been saved. Add in some indication that saving of
                    details has been completed/successful (use a timeout for
                    this indicator).
                </li>
                <li>
                    Fetch data from the following API endpoint:
                    https://dog.ceo/dog-api/. Display the image inside the
                    photo.component.jsx file once "logged in".
                </li>
                <li>
                    There is an empty "extra" component which you can use to
                    show off any additional skills.
                </li>
            </ol>
        </div>
    );
};

export default Requirements;
