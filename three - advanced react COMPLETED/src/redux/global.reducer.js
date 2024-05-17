import { generateFunFact } from "../utils/utils";
import { actionTypes } from "./global.actions";
import { faker } from "@faker-js/faker";

const INITIAL_STATE = {
    isLoggedIn: false,
    loggedInUser: {
        firstName: "",
        lastName: "",
        favouriteColour: "",
        favouriteMovie: "",
        funFact: ""
    }
};

const globalReducer = (currentState = INITIAL_STATE, action) => {
    let { type, payload } = action;

    switch (type) {
        case actionTypes.LOGIN:
            return {
                isLoggedIn: true,
                loggedInUser: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    favouriteColor: faker.color.human(),
                    favouriteMovie: faker.music.songName(),
                    funFact: generateFunFact()
                }
            };
        case actionTypes.LOGOUT:
            return {
                isLoggedIn: false,
                loggedInUser: {
                    firstName: "",
                    lastName: "",
                    favouriteColour: "",
                    favouriteMovie: "",
                    funFact: ""
                }
            };
        case actionTypes.UPDATE_USER:
            return {
                isLoggedIn: currentState.isLoggedIn,
                loggedInUser: action.payload
            };
        default:
            return currentState;
    }
};

export default globalReducer;
