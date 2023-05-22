import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
//import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,photo,email,password);
        createUser(email,password)
        .then(result=>{
            const createdUser=result.user
            console.log(createdUser)
            //updateUser(result.user,name,photo)
            e.target.reset();
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">
                    <img src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/876679/settings_images/yZ9mMyGBRfi7b7E2naMQ_Sign_Up_Now.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input style={{backgroundColor:"#A2D9CE "}} className="h-10" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link className='font-bold' to='/login'>Login</Link></p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;