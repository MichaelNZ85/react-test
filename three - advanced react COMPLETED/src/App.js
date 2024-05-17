import PageHeader from "./components/_global/header/header.component";
import PageFooter from "./components/_global/footer/footer.component";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContainer from "./components/login/login-page.component";
import ProfileContainer from "./components/profile/profile-page.component";
import { actionTypes } from "./redux/global.actions";

function App() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <div className="App">
            <PageHeader />
            <Routes>
                <Route path="/login" element={<LoginContainer />} />

                <Route path="/details" element={<ProfileContainer />} />
                <Route
                    path="/"
                    element={
                        isLoggedIn ? <ProfileContainer /> : <LoginContainer />
                    }
                />
            </Routes>
            <PageFooter />
        </div>
    );
}

export default App;
