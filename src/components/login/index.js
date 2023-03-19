import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Zomato_logo from './zomato-logo.png'
const Login=()=>{
    return(<>
        <div className='body-container'>   </div>
        <div className='flex-box login-container'>
            <div className='login-box flex-box'>
        <div className='flex-box'>
            <img className='zomato-logo' src={Zomato_logo}></img>
        </div>
        <div className='flex-box'>
            <div className='input-box'>
                <p>Username/Email</p>
            <input type='text' className='email' value='Zomato@123'/>
            </div>
            <div className='input-box'>
                <p>Password</p>
            <input type='password' className='password' value='Zomatopassword'/>
            </div>
            <Link className='button' to='/zomato'>
            Login / SignUp
            </Link>
        </div>
        </div>
    </div>
    </>
    )
}
export default Login;