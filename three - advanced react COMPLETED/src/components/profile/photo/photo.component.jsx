import React from "react";

import "./photo.styles.scss";

class ProfilePhoto extends React.Component {
    constructor() {
        super();
        this.state = { dogImage: "" };
    }
    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.text())
            .then((response) => {
                const json = JSON.parse(response);
                const dogImage = json.message;
                this.setState({ dogImage: dogImage });
            });
    }

    render() {
        return (
            <div className={"photo-container"}>
                <img
                    src={this.state.dogImage}
                    alt="Cute dog!"
                    height={250}
                    width={250}
                />
            </div>
        );
    }
}

export default ProfilePhoto;
