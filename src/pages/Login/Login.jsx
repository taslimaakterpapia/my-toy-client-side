import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
//import SocialLogin from '../SocialLogin/SocialLogin';
import {  GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import {  FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const auth=getAuth(app);
    const provider=new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || '/'
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate(from,{replace:true})
        })
        .catch(error=>{
          console.log(error.message);
        })
      }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">
                    <img src="https://environmentclearance.nic.in/Images/LoginRed.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input style={{backgroundColor:"#A2D9CE "}} className=" h-10" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New To Paradise <Link className='[#78281F] font-bold' to='/signup'>Sign Up</Link></p>
                       
                        <button onClick={handleGoogleSignIn} className="btn mx-auto">
                            
                            <FaGoogle  className='text-center'></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;