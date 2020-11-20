import React from 'react';
import authService from "../services/authService";
const Logout = (props) => {
    authService.logout();
    window.location="/feed";


    return ( null
    );
}
 
export default Logout;