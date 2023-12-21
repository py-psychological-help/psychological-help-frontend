import React from "react";
import PropTypes from "prop-types";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import NotAuthNavigation from "../NotAuthNavigation/NotAuthNavigation";

function Navigation({ isLoggedIn }) {
    return isLoggedIn ? <AuthNavigation /> : <NotAuthNavigation />;
}

Navigation.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
