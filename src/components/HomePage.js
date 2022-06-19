import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";
import "../styling/home.css"

const HomePage = () => {
  return ( 
    <div>
      Welcome to Homepage
    </div>
    );
}

export default HomePage;