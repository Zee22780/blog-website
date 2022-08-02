import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";
import "../styling/home.css"
import { gapi } from 'gapi-script'

const clientId="426449746429-k2il2jgi84m4ossmka4h8lsqbo9tbm1v.apps.googleusercontent.com"

const HomePage = () => {
  const isSignedIn = useSelector(selectSignedIn)

  const dispatch = useDispatch()
  const login = (response) => {
    console.log(response)
    dispatch(setSignedIn(true))
    dispatch(setUserData(response.profileObj))
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/cloud-platform.read-only"
      })
    }
    gapi.load("client:auth2", start)
  })

  return ( 
    <div className="home__page" style={{ display: isSignedIn ? "none" : ""}}> 
      {!isSignedIn ? (
        <div className="login_message">
          <h2>📚</h2>
          <h1>A Reader's Favorite Place!</h1>
          <p>
            We provide high quality online resources for reading. Just sign up and start reading.
          </p>
          <GoogleLogin
          clientId
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="login_button"
            >
              Login with Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
    );
}

export default HomePage;