import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    console.log(toy)
    const {image,toyname,sellername,postedBy,category,price,rating,quantity,description}=toy;
    return (
        <div className="card   bg-white">
        <figure><img style={{width:"700px",height:"500px"}} src={image} alt="car!"/></figure>
        <div className="card-body " style={{ backgroundColor: "#FFFFFF", textAlign: "center" }}>
  <h2 style={{ color: "#333333", fontSize: "24px", marginBottom: "16px" }}>Name: {toyname}</h2>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Description: {description}</p>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Seller Name: {sellername}</p>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Price: ${price}</p>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Category: {category}</p>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Rating: {rating}</p>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Posted By: {postedBy}</p>
  <p style={{ color: "#666666", fontSize: "16px", marginBottom: "8px" }}>Quantity: {quantity}</p>
</div>

      </div>
    );
};

export default SingleToy;