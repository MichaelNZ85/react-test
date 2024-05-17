import React from "react";

import "./login-page.styles.scss";
import { connect } from "react-redux";
import { actionTypes } from "../../redux/global.actions";

class LoginContainer extends React.Component {
    handleLogin() {
        this.props.login();
    }

    render() {
        return (
            <div className={"login-container"}>
                <div>
                    <label>Username</label>
                    <input type={"text"} />
                </div>

                <div>
                    <label>Password</label>
                    <input type={"text"} />
                </div>

                <div>
                    <button onClick={this.handleLogin.bind(this)}>
                        Log In
                    </button>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({ type: actionTypes.LOGIN }),
        logout: () => dispatch({ type: actionTypes.LOGOUT })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
