import React from 'react';
import { ScLogin } from './loginStyle';

const Login = () => {
  return (
    <ScLogin>
        <div className="loginWrapper">
            <h2 className='loginTitle'>Hi!</h2>
            <h3 className='loginTitle__small'>Enter your name to play!</h3>
            <input className='loginInput' type="text" placeholder='Your Name...' />
            <button className="loginButton">Enter</button>
        </div>
    </ScLogin>
    )};

export default Login;
