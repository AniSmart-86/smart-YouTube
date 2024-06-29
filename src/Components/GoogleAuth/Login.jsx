import React from 'react'
import './Login.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { CLIENT_ID } from '../../Id';

const Login = ({setUser}) => {

    const handleLoginSuccess = (response) => {
        const user = jwtDecode(response.credential);
        setUser(user);
    }
// const google = ()=>{
//     window.open("http://localhost:5/auth/google", "_self");
// }

  return (
    <div>
        
        <div className="wrapper">
        <h1>Choose a Login Method</h1>
            <div className="login">
            <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin onSuccess={handleLoginSuccess} />
        </GoogleOAuthProvider>

                {/* <button className='google-btn'onClick={google}>
                    <img src="" alt="" />
                    Google
                </button>
                <button className='facebook-btn'>
                    <img src="" alt="" />
                    Facebook
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default Login