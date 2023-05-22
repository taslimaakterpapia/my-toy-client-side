import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to="/">Home</Link> </li>

        
        {/* <li> <Link to="/login">Login</Link> </li> */}
        {user?.email ? <>         

            <li><Link to="/allToy">All Toys</Link></li>
            <li><Link to="/myToy">My Toys</Link></li>
            <li><Link to="/addToy">Add a Toys</Link></li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li><button className='bg-white text-blue-700' onClick={handleLogOut}>Log out</button></li>
        </>
            : <>
                <li><Link to="/allToy">All Toys</Link></li>
                <li> <Link to="/login">Login</Link> </li></>
             

        }

    </>
    return (
        <div className="navbar  h-20 bg-blue-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 daisy__hidden daisy__lg:block">
                        {navItems}
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost normal-case text-xl ">
                    <img style={{ width: '200px', height: '50px', borderRadius: '8px' }} src="image/tiy.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                    {navItems}
                </ul>
            </div>
            
            <div className="navbar-end me-5">
               
                {
                    user?.photoURL ? <img style={{ width: '50px', marginRight: "15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <></>
                }
            </div>
        </div>
    );
};

export default NavigationBar;