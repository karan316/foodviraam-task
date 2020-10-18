import React from 'react';
import {useHistory} from "react-router-dom";
import Button from "./common/Button";
import auth from "../services/authService";
const Profile = ({user}) => {
    const history = useHistory();
    return (
        <div className="container w-full h-full my-64 mx-auto" >
            <div className="text-6xl bold w-full text-center">
               Hello {user.name}!
            </div>
            <div className="text-2xl w-full text-center">
               You are {user.age} years old.
            </div> 
            <div style={{width: "200px"}} className="mx-auto my-16">
            <Button buttonText="LOGOUT" type="submit" onClick={() => {auth.logout(); window.location = "/login"}} />
            </div>

            <div style={{width: "200px"}} className="mx-auto">
            <Button buttonText="CHANGE PASSWORD" type="submit" onClick={() => {history.push("/change-password")}} />
            </div>
        </div>
    )
}

export default Profile
