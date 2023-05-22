import React, { useContext } from 'react';
//import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import {GoogleAuthProvider,  getAuth,  signInWithPopup,} from "firebase/auth";
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();


const SocialLogin = () => {
    const navigate=useNavigate();
    const location=useLocation();
    console.log("login page location",location);
    const from=location.state?.from?.pathname || '/'
    //const {googleSignIn}=useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        // googleSignIn()
        // .then(result=>{
        //     console.log(result.user)
        //     navigate(from,{replace:true})
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
        signInWithPopup(auth,googleProvider)
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
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;