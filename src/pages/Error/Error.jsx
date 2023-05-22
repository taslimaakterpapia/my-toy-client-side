import React from 'react';

import { Link, useRouteError } from 'react-router-dom';
import { HiExclamation } from 'react-icons/hi';

const Error = () => {
    const { error, status } = useRouteError();
    return (
        <div>
            <div
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          padding: "50px",
        }}
        className="d-flex align-items-center "
      >
        <div className="container d-flex flex-column align-items-center justify-content-center mx-auto  bg-white p-10">
       
          <img className='pl-72' style={{ height: "400px", width: "800px", color: "#f90606"}} src="https://merahputih.com/media/c0/0e/d2/c00ed25b79766b3cafca6962d62714ad.png" alt="" />
          
          
          <div className="max-w-md text-center  pl-96">
            <Link
              to="/"
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="btn btn-blue mt-4 px-28 ml-10"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Error;



