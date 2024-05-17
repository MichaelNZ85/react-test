import React from "react";

import ProfilePhoto from "./photo/photo.component";
import ProfileDetails from "./details/details.component";
import ExtraProfile from "./extra/extra.component";

import "./profile-page.styles.scss";

class ProfileContainer extends React.Component {
    render() {
        return (
            <div className={"profile-container"}>
                <div className={"profile-main"}>
                    <ProfilePhoto />
                    <ProfileDetails />
                </div>
                <ExtraProfile />
            </div>
        );
    }
}

export default ProfileContainer;
