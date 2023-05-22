import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id,image, price, rating, toyname } = toy || {};
    return (
        <div className="card bg-white text-blue-700 ms-4 me-4 rounded-lg shadow-lg">
        <figure className='mt-3'>
          <img style={{ width: "90%", height: "200px" }} src={image} alt="car!" />
        </figure>
        <div className="card-body ">
          <h2 className=" text-3xl align-middle font-bold text-blue-700">{toyname}</h2>
          <p className="text-lg   text-blue-700 font-semibold">Price: ${price}</p>
          <p className="text-lg  text-blue-700 font-semibold">Ratings:{rating}</p>
          <div className="card-actions flex justify-center">
            <Link to={`singleToy/${_id}`}>
            <button  class="bg-blue-700 text-white hover:bg-blue-500 hover:text-white py-2 px-24 rounded-md ">View Details</button>

            </Link>
          </div>
        </div>
      </div>
      
    );
};

export default Toy;