import React, { useState } from "react";

import "./details.styles.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../redux/global.actions";

const ProfileDetails = () => {
    const dispatch = useDispatch();
    const userDataFromStore = useSelector((state) => state.loggedInUser);
    const [userData, setUserData] = useState(userDataFromStore);

    const handleSaveData = () => {
        dispatch({ type: actionTypes.UPDATE_USER, payload: userData });
    };

    return (
        <div className={"details-container"}>
            <div>
                <label>First Name</label>
                <input
                    value={userData.firstName}
                    onChange={(e) =>
                        setUserData({ ...userData, firstName: e.target.value })
                    }
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    value={userData.lastName}
                    onChange={(e) =>
                        setUserData({ ...userData, lastName: e.target.value })
                    }
                />
            </div>

            <div>
                <label>Favourite Colour</label>
                <input
                    value={userData.favouriteColor}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            favouriteColour: e.target.value
                        })
                    }
                />
            </div>

            <div>
                <label>Favourite Movie</label>
                <input
                    value={userData.favouriteMovie}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            favouriteMovie: e.target.value
                        })
                    }
                />
            </div>

            <div>
                <label>Fun Fact</label>
                <textarea
                    rows={5}
                    value={userData.funFact}
                    onChange={(e) =>
                        setUserData({ ...userData, funFact: e.target.value })
                    }
                />
            </div>

            <div>
                <button onClick={handleSaveData}>Save</button>
            </div>
        </div>
    );
};

export default ProfileDetails;
